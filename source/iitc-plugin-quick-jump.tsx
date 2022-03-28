// spell-checker: ignore chatinput
import { addStyle, waitElementLoaded } from "./document-extensions";
import { lonLatToAddress } from "./gsi-reverse-geocoder";
import { cancelToReject, sleep } from "./standard-extensions";

function handleAsyncError(promise: Promise<void>) {
    promise.catch((error) => console.error(error));
}

const namespace = "iitc-plugin-quick-jump";
const Names = Object.freeze({
    hidden: `${namespace}-hidden`,
    searchBar: `${namespace}-search-bar`,
    terminal: `${namespace}-terminal`,
    outputList: `${namespace}-output-list`,
    crossHair: `${namespace}-cross-hair`,
    toastList: `${namespace}-toast-list`,
    toastItem: `${namespace}-toast-item`,
});

const css = `
    .${Names.terminal} {
        width: 100%;
    }
    .${Names.searchBar} {
        background: rgba(8, 48, 78, 0.9);
        border: 1px solid #20A8B1;
    }
    .${Names.searchBar} input {
        width: 100%;
    }
    .${Names.crossHair} {
        position: fixed;
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
        list-style: none;
        padding: 0;
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
        padding: 0.1em;
        box-shadow: 0 2px 2px rgb(0 0 0 / 50%);
    }
    .${Names.toastItem} > input {
        width: 100%;
        color: #444;
        background: rgba(0 0 0 / 0%);
    }
`;

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
interface Settings {
    /** ミリ秒 */
    readonly inputWaitInterval: number;
    /** ミリ秒 */
    readonly locationUpdateWaitInterval: number;
}
interface View extends Settings {
    parentMap: L.Map;
    searchInput: HTMLInputElement;
    crossHair: HTMLElement;
    outputList: HTMLElement;
}

let itemCount = 0;
function put(
    { outputList }: View,
    message: string,
    { removeDeray = 5000, maxCount = 5 } = {}
) {
    const item = (
        <li class={Names.toastItem}>
            <input value={message} />
        </li>
    );
    outputList.append(item);
    itemCount++;
    handleAsyncError(
        (async () => {
            await sleep(removeDeray);
            if (maxCount < itemCount) {
                outputList.firstElementChild?.remove();
                itemCount--;
            }
        })()
    );
}
async function searchAndMoveToCoordinate(
    view: View,
    { signal }: { signal: AbortSignal }
) {
    const { inputWaitInterval, searchInput, parentMap } = view;

    // しばらく待ってから
    await sleep(inputWaitInterval, { signal });

    // 最後のテキストボックスの値を元に座標を検索
    const { value } = searchInput;
    const coordinate = await searchCoordinate(value, {
        signal,
    });

    if (!coordinate) {
        return put(view, `${value} の座標が見つかりませんでした。`);
    }

    // 親地図を指定した座標に移動
    parentMap.setView(coordinate);
}
function createAsyncHandler() {
    let lastCancel = new AbortController();
    return (process: (signal: AbortSignal) => Promise<void>) => {
        // 前の操作をキャンセル
        lastCancel.abort();
        lastCancel = new AbortController();
        handleAsyncError(
            // キャンセル例外を無視する
            cancelToReject(process(lastCancel.signal))
        );
    };
}
function createTerminal(settings: Settings, parentMap: L.Map) {
    const { inputWaitInterval, locationUpdateWaitInterval } = settings;

    const searchInput = (<input></input>) as HTMLInputElement;
    const outputList = <ul class={Names.toastList}></ul>;
    const searchBar = <div class={Names.searchBar}>{searchInput}</div>;
    const crossHair = <div class={Names.crossHair}>┼</div>;
    const terminal = (
        <div class={Names.terminal}>
            {outputList}
            {searchBar}
            {crossHair}
        </div>
    );
    terminal.classList.add(Names.hidden);

    const view = {
        ...settings,
        parentMap,
        inputWaitInterval,
        searchInput,
        crossHair,
        outputList,
    };

    const searchBarHandler = createAsyncHandler();
    function startSearch(inputWaitInterval: number) {
        searchBarHandler((signal) =>
            searchAndMoveToCoordinate(
                { ...view, inputWaitInterval },
                { signal }
            )
        );
    }

    // ドキュメントで Ctrl + Q キーが押されたとき、表示しフォーカスを当てる
    document.addEventListener("keyup", (e) => {
        if (e.key === "q" && e.ctrlKey) {
            terminal.classList.remove(Names.hidden);
            searchInput.focus();
        }
    });
    searchBar.addEventListener("keyup", (e) => {
        switch (e.key) {
            // 検索バーで Esc が押されたとき、隠す
            case "Escape": {
                terminal.classList.add(Names.hidden);
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

    // 主地図が移動し終わったとき、現在地を更新する
    const locationAsyncScope = createAsyncHandler();
    parentMap.addEventListener("moveend", () => {
        locationAsyncScope(async (signal) => {
            // 少し待って
            await sleep(locationUpdateWaitInterval, { signal });

            // 主地図の中心座標から住所を取得 ( 日本国内のみ )
            const { lng, lat } = parentMap.getCenter();
            const address = await lonLatToAddress(lng, lat, { signal });

            // 表示
            if (!address) {
                return put(
                    view,
                    `${lng}, ${lat}: の住所が見つかりませんでした。`
                );
            }
            const { lv01Nm, detail } = address;
            const [, kenName, , shiName] = detail;
            put(view, `${lat}, ${lng}`);
            put(view, `${kenName}, ${shiName}, ${lv01Nm}`);
        });
    });
    return terminal;
}
class Terminal extends window.L.Control {
    constructor(private _settings: Settings, options: L.ControlOptions) {
        super(options);
    }
    override onAdd(parentMap: L.Map) {
        return createTerminal(this._settings, parentMap);
    }
}
async function asyncMain() {
    await waitElementLoaded();

    if (window.map == null) {
        console.error("map が見つかりませんでした。");
        return;
    }
    addStyle(css);

    new Terminal(
        {
            inputWaitInterval: 3000,
            locationUpdateWaitInterval: 3000,
        },
        { position: "bottomleft" }
    ).addTo(window.map);
}
export function main() {
    handleAsyncError(asyncMain());
}
