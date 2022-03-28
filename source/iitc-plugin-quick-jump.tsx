// spell-checker: ignore chatinput
import { addStyle, waitElementLoaded } from "./document-extensions";
import { cancelToReject, error, sleep } from "./standard-extensions";

function handleAsyncError(promise: Promise<void>) {
    promise.catch((error) => console.error(error));
}

enum ExternalNames {
    chatinput = "chatinput",
}
const namespace = "iitc-plugin-quick-jump";
const Names = Object.freeze({
    hidden: `${namespace}-hidden`,
    searchBar: `${namespace}-search-bar`,
    crossHair: `${namespace}-cross-hair`,
    toastList: `${namespace}-toast-list`,
    toastItem: `${namespace}-toast-item`,
});

const css = `
    .${Names.searchBar} {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0 2px;
        background: rgba(8, 48, 78, 0.9);
        width: 708px;
        height: 23px;
        border: 1px solid #20A8B1;
        z-index: 3001;
        box-sizing: border-box;
    }
    .${Names.searchBar} input {
        width: 100%;
    }
    .${Names.crossHair} {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 3000;

        font-size: 24px;
        font-family: sans-serif;
        color: #FFF;
        text-shadow: 0 0 0.3em #000, 0 0 0.5em #000;
        filter: drop-shadow(0 0 0.5em #000);
    }
    .${Names.hidden} {
        display: none;
    }
    .${Names.toastList} {
        position: fixed;
        right: 0;
        bottom: 0;
        z-index: 9999;
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .${Names.toastItem}:first-of-type {
        border-top: 1px solid #ddd;
    }
    .${Names.toastItem} {
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px dashed #ccc;
        margin: 0 0.5em;
        padding: 1em;
        box-shadow: 0 2px 2px rgb(0 0 0 / 50%);
    }
`;

let toastListElement: HTMLElement | null = null;
async function toastWait(message: string, { timeout = 3000 } = {}) {
    if (toastListElement == null) {
        toastListElement = <ul class={Names.toastList} />;
        document.body.appendChild(toastListElement);
    }
    const item = <li class={Names.toastItem}>{message}</li>;
    toastListElement.insertBefore(item, toastListElement.firstElementChild);
    await sleep(timeout);
    item.parentElement?.removeChild(item);
}
function toast(message: string, options?: Parameters<typeof toastWait>[1]) {
    handleAsyncError(toastWait(message, options));
}

async function searchCoordinate(
    searchText: string,
    _option: { signal: AbortSignal }
) {
    const match = searchText.match(
        /(?<latitude>\d+(\.\d*)?)(\s+|\s*,\s*)(?<longitude>\d+(\.\d*)?)/
    );
    const latitude = match?.groups?.["latitude"];
    const longitude = match?.groups?.["longitude"];
    if (!latitude || !longitude) {
        return null;
    }

    return { lat: parseFloat(latitude), lng: parseFloat(longitude) };
}
interface QuickJump {
    mainMap: L.Map;
}
interface InputUpdateArguments {
    mainMap: L.Map;
    /** ミリ秒 */
    inputWaitInterval: number;
    searchInput: HTMLInputElement;
    crossHair: HTMLElement;
}
async function searchAndMoveToCoordinate(
    {
        inputWaitInterval,
        searchInput,
        crossHair,
        mainMap,
    }: InputUpdateArguments,
    { signal }: { signal: AbortSignal }
) {
    // しばらく待ってから
    await sleep(inputWaitInterval, { signal });

    // 最後のテキストボックスの値を元に座標を検索
    const { value } = searchInput;
    const coordinate = await searchCoordinate(value, {
        signal,
    });

    if (!coordinate) {
        return toast("座標が見つかりませんでした。");
    }

    // mainMap を指定した座標に移動
    mainMap.setView(coordinate);
    crossHair.classList.remove(Names.hidden);
}

async function setupSearchBar(
    { mainMap }: QuickJump,
    { inputWaitInterval } = { inputWaitInterval: 3000 }
) {
    const crossHair = <div class={Names.crossHair}>┼</div>;
    crossHair.classList.add(Names.hidden);
    document.body.append(crossHair);

    const searchInput = (<input></input>) as HTMLInputElement;
    const searchBar = <div class={Names.searchBar}>{searchInput}</div>;
    searchBar.classList.add(Names.hidden);

    // 前の検索をキャンセルしてから検索を開始する
    let lastSearchCancel = new AbortController();
    function startSearch(inputWaitInterval: number) {
        lastSearchCancel.abort();
        lastSearchCancel = new AbortController();
        handleAsyncError(
            cancelToReject(
                searchAndMoveToCoordinate(
                    {
                        inputWaitInterval,
                        searchInput,
                        mainMap,
                        crossHair,
                    },
                    { signal: lastSearchCancel.signal }
                )
            )
        );
    }

    // ドキュメントで Ctrl + Q キーが押されたとき、検索バーを表示しフォーカスを当てる
    document.addEventListener("keyup", (e) => {
        if (e.key === "q" && e.ctrlKey) {
            searchBar.classList.remove(Names.hidden);
            searchBar.querySelector("input")?.focus();
        }
    });
    searchBar.addEventListener("keyup", (e) => {
        switch (e.key) {
            // 検索バーで Esc が押されたとき、検索バーを隠す
            case "Escape": {
                searchBar.classList.add(Names.hidden);
                break;
            }
            // 検索バーで Enter が押されたとき、検索を開始する
            case "Enter": {
                startSearch(100);
                break;
            }
        }
    });

    // 検索バーの入力が更新されたとき、遅延検索を開始する
    searchInput.addEventListener("input", () => {
        startSearch(inputWaitInterval);
    });

    const target =
        document.body.querySelector(`#${ExternalNames.chatinput}`) ??
        error`対象要素が見つかりませんでした。`;

    target.parentElement?.insertBefore(searchBar, target.nextSibling);
}
async function asyncMain() {
    await waitElementLoaded();

    if (window.map == null) {
        console.error("map が見つかりませんでした。");
        return;
    }
    addStyle(css);
    await setupSearchBar({ mainMap: window.map });
}
export function main() {
    handleAsyncError(asyncMain());
}
