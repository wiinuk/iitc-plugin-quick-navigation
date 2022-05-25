// spell-checker: ignore chatinput
import { coordinateOfImage } from "./coordinate-of-image";
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
    dropZone: `${namespace}-drop-zone`,
    dragOver: `${namespace}-drag-over`,
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
    .${Names.dropZone} {
        background: white;
        padding: 0.5rem;
        border-radius: 0.3rem;
        box-shadow: 0 0 0.5rem black;
    }
    .${Names.dragOver} {
        background: #ddd;
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
function createAsyncCancelScope() {
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
class Terminal extends window.L.Control {
    private _view?: View;
    constructor(private _settings: Settings, options: L.ControlOptions) {
        super(options);
    }
    override onAdd(parentMap: L.Map) {
        const settings = this._settings;
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

        const view = (this._view = {
            ...settings,
            parentMap,
            inputWaitInterval,
            searchInput,
            crossHair,
            outputList,
        });

        const searchBarHandler = createAsyncCancelScope();
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
                searchInput.select();
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
        const locationAsyncScope = createAsyncCancelScope();
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
    put(message: string, options?: Parameters<typeof put>[2]) {
        if (this._view) {
            put(this._view, message, options);
        } else {
            console.log(message);
        }
    }
}
async function processDroppedFiles(
    e: DragEvent,
    parentMap: L.Map,
    terminal: Terminal,
    { signal }: Readonly<{ signal: AbortSignal }>
) {
    // ドロップされた画像ファイルの位置に移動する

    const file0 = e.dataTransfer?.files?.[0];
    if (file0 === undefined) {
        return terminal.put("ファイルがドロップされていません。");
    }

    terminal.put(`ファイルを読み込んでいます… ( ${file0.name} )`);
    const coordinate = await coordinateOfImage(file0, { signal });
    if (!coordinate) {
        return terminal.put(`座標が見つかりませんでした。( ${file0.name} )`);
    }
    parentMap.setView(coordinate);
    terminal.put(
        `${coordinate.lat}, ${coordinate.lng} に移動しました。( ${file0.name} )`
    );
}
function createDropZone(parentMap: L.Map, terminal: Terminal) {
    const fileInput = <input type="file" name="file" />;
    const dropZone = <div class={Names.dropZone}>{fileInput}</div>;
    dropZone.addEventListener(
        "dragover",
        function (e) {
            e.preventDefault();
            e.stopPropagation();
            this.classList.add(Names.dragOver);
        },
        false
    );
    dropZone.addEventListener("dragleave", function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.classList.remove(Names.dragOver);
    });

    const fileDropScope = createAsyncCancelScope();
    dropZone.addEventListener("drop", function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.classList.remove(Names.dragOver);

        fileDropScope((signal) =>
            processDroppedFiles(e, parentMap, terminal, { signal })
        );
    });
    return dropZone;
}
class DropZone extends window.L.Control {
    constructor(private _terminal: Terminal, options: L.ControlOptions) {
        super(options);
    }
    override onAdd(parentMap: L.Map) {
        return createDropZone(parentMap, this._terminal);
    }
}
async function asyncMain() {
    await waitElementLoaded();

    if (window.map == null) {
        console.error("map が見つかりませんでした。");
        return;
    }
    addStyle(css);

    const terminal = new Terminal(
        {
            inputWaitInterval: 3000,
            locationUpdateWaitInterval: 3000,
        },
        { position: "bottomleft" }
    ).addTo(window.map);

    new DropZone(terminal, { position: "bottomleft" }).addTo(window.map);
}
export function main() {
    handleAsyncError(asyncMain());
}
