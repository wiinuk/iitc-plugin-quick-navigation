// spell-checker: ignore moveend onenote
import { addStyle, waitElementLoaded } from "./document-extensions";
import {
    AsyncOptions,
    createAsyncCancelScope,
    sleep,
} from "./standard-extensions";
import * as UndoList from "./undo-list";

const L = window.L;

function handleAsyncError(promise: Promise<void>) {
    promise.catch((error) => console.error(error));
}

const namespace = "iitc-plugin-quick-navigation";
const Names = Object.freeze({
    hidden: `${namespace}-hidden`,
    searchBar: `${namespace}-search-bar`,
    toastList: `${namespace}-toast-list`,
    toastItem: `${namespace}-toast-item`,
    dragOver: `${namespace}-drag-over`,
    mainPinPopup: `${namespace}-main-pin-popup`,
    oneNoteLoginButton: `${namespace}-one-note-login-button`,
    navigation: `${namespace}-navigation`,
    navigationIcons: `${namespace}-navigation-icons`,
    historyLineHead: `${namespace}-history-line-head`,
});

const materialSymbols = Object.freeze({
    arrow_back: "\ue5c4",
    arrow_forward: "\ue5c8",
});
const css = `
    @import url(https://fonts.googleapis.com/icon?family=Material+Icons);

    .${Names.navigation} {
        width: 100%;
    }

    ul.${Names.navigationIcons} {
        display: table;
        padding: 0;
    }
    ul.${Names.navigationIcons} > li {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }
    ul.${Names.navigationIcons} > li > button {
        font-family: "Material Icons";
        width: 1.5rem;
        height: 1.5rem;
        margin: 0.3rem;
        padding: 0;
        background: #fff;
        border-radius: 50%;
        box-shadow: 0 0 0 1px #ccc;
        border: none;
    }

    .${Names.searchBar} {
        background: rgba(8, 48, 78, 0.9);
        border: 1px solid #20A8B1;
    }
    .${Names.searchBar} input {
        width: 100%;
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
    .${Names.dragOver} {
        background: #ddd;
    }
    .${Names.mainPinPopup} {
        text-align: center;
    }
    .${Names.oneNoteLoginButton} {
        background: #20A8B1;
        color: white;
        padding: 0.5rem;
        border-radius: 0.3rem;
        box-shadow: 0 0 0.5rem black;
    }
`;

let nextId = 0;
function uniqueId(name: string) {
    return `${name}-${++nextId}`;
}

function parseCoordinate(searchText: string) {
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
    /** m */
    readonly minAutoSaveHistoryDistance: number;
}

type Suggestion = Readonly<{
    type: "coordinate";
    coordinate: L.LatLngLiteral;
}>;
function suggestionListItem(suggestion: Suggestion) {
    switch (suggestion.type) {
        case "coordinate": {
            const { lat, lng } = suggestion.coordinate;
            return (
                <li class={Names.toastItem}>
                    <input value={`${lat},${lng}`} />
                </li>
            );
        }
    }
}
function moveTo(
    navigation: Navigation,
    coordinate: Readonly<{ lat: number; lng: number }>
) {
    navigation.mainPinPopup.setContent(
        <div class={Names.mainPinPopup}>
            {coordinate.lat}, {coordinate.lng}
        </div>
    );
    navigation.mainPin
        .setOpacity(1)
        .setLatLng(coordinate)
        .setPopupContent(`${coordinate.lat}, ${coordinate.lng}`);
    navigation.parentMap.setView(coordinate);
}

interface WaitOptions extends AsyncOptions {
    inputWaitInterval?: number;
}
async function waitAndSuggestLocations(
    navigation: Navigation,
    options?: Readonly<WaitOptions>
) {
    const { searchInput } = navigation;

    // しばらく待ってから
    await sleep(
        options?.inputWaitInterval ?? navigation.inputWaitInterval,
        options
    );

    // 最後のテキストボックスの値を元に座標を検索
    const { value } = searchInput;
    return suggestLocations(navigation, value, options);
}
async function suggestLocations(
    navigation: Navigation,
    command: string,
    options?: Readonly<AsyncOptions>
) {
    const coordinate = parseCoordinate(command);
    if (coordinate) {
        setSuggestions(navigation, [{ type: "coordinate", coordinate }]);
    }
}
async function waitAndStartNavigation(
    navigation: Navigation,
    options?: Readonly<AsyncOptions>
) {
    const { searchInput } = navigation;

    // しばらく待ってから
    await sleep(100, options);

    // 最後のテキストボックスの値を元に座標を検索して移動
    const { value } = searchInput;
    return startNavigation(navigation, value, options);
}
async function startNavigation(
    navigation: Navigation,
    command: string,
    options?: Readonly<AsyncOptions>
) {
    const coordinate = parseCoordinate(command);
    if (coordinate) {
        addCoordinateToHistory(navigation, coordinate);
        moveTo(navigation, coordinate);
    }
}
function setSuggestions(
    { outputList }: Navigation,
    suggestions: ReadonlyArray<Suggestion>
) {
    outputList.innerHTML = "";
    for (const suggestion of suggestions) {
        outputList.append(suggestionListItem(suggestion));
    }
}
function updateHistoryLine({
    history,
    historyPolyline,
    parentMap,
}: Navigation) {
    console.log(JSON.stringify([...UndoList.allItems(history)]));
    const coordinates = [...UndoList.allItems(history)];
    insertMidCoordinates(parentMap, coordinates, 60);
    historyPolyline.setLatLngs(coordinates);
    console.log(historyPolyline);
}
function addCoordinateToHistory(
    navigation: Navigation,
    coordinate: L.LatLngLiteral
) {
    navigation.history = UndoList.add(navigation.history, coordinate);
    updateHistoryLine(navigation);
}

function getPrivateMapRootElement(map: L.Map) {
    return map.getContainer().querySelector("svg");
}
function getPrivatePathElement(path: L.Path) {
    const e = (path as { _path?: unknown })._path;
    return e != null && e instanceof SVGPathElement ? e : null;
}
function distanceMeter(a: L.LatLngLiteral, b: L.LatLngLiteral) {
    return L.latLng(a).distanceTo(L.latLng(b));
}

function insertMidCoordinates(
    map: L.Map,
    coordinates: L.LatLngLiteral[],
    spacingPixel: number
) {
    console.log(JSON.stringify(coordinates));
    for (let i = 1; i < coordinates.length; ++i) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const c0 = coordinates[i - 1]!;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const c1 = coordinates[i]!;

        const p0 = map.project(c0);
        const p1 = map.project(c1);

        console.log(`${i}: ${JSON.stringify({ p0, p1 })}`);

        let dx = p1.x - p0.x,
            dy = p1.y - p0.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        const count = Math.floor(d / spacingPixel);
        dx /= count;
        dy /= count;

        console.log(`${i}: ${JSON.stringify({ d, count })}`);

        for (let j = count - 1; j > 0; --j) {
            const px = p0.x + dx * j + Math.random() * spacingPixel * 0.1;
            const py = p0.y + dy * j + Math.random() * spacingPixel * 0.1;
            const c = map.unproject([px, py]);
            coordinates.splice(i, 0, c);
        }
        if (count > 0) {
            i += count - 1;
        }
    }
    console.log(JSON.stringify(coordinates));
}
class Navigation extends L.Control {
    parentMap!: L.Map;
    searchInput!: HTMLInputElement;
    outputList!: HTMLElement;
    mainPin!: L.Marker;
    mainPinPopup!: L.Popup;
    inputWaitInterval!: number;
    locationUpdateWaitInterval!: number;
    history: UndoList.UndoList<L.LatLngLiteral> = UndoList.create();
    historyPolyline!: L.Polyline;

    constructor(
        options: L.ControlOptions,
        public settings: Readonly<Settings>
    ) {
        super(options);
    }
    override onAdd(parentMap: L.Map) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const navigation = this;
        const settings = this.settings;
        this.inputWaitInterval = settings.inputWaitInterval;
        this.locationUpdateWaitInterval = settings.locationUpdateWaitInterval;

        const searchInput = (<input></input>) as HTMLInputElement;
        const outputList = <ul class={Names.toastList}></ul>;
        const searchBar = <div class={Names.searchBar}>{searchInput}</div>;
        const leftArrowButton = <button>{materialSymbols.arrow_back}</button>;
        const rightArrowButton = (
            <button>{materialSymbols.arrow_forward}</button>
        );
        const navigationElement = (
            <div class={Names.navigation}>
                <ul class={Names.navigationIcons}>
                    <li>{leftArrowButton}</li>
                    <li>{rightArrowButton}</li>
                    <li>
                        <div>
                            {searchBar}
                            {outputList}
                        </div>
                    </li>
                </ul>
            </div>
        );

        const headId = uniqueId(Names.historyLineHead);
        getPrivateMapRootElement(parentMap)?.insertAdjacentElement(
            "beforeend",
            <defs>
                <marker
                    id={headId}
                    markerWidth="4"
                    markerHeight="4"
                    orient="auto"
                    refY="2"
                >
                    <path
                        d="M0,0 L4,2 0,4"
                        stroke="burlywood"
                        stroke-width="0.5"
                        fill="none"
                    />
                </marker>
            </defs>
        );

        this.parentMap = parentMap;
        this.searchInput = searchInput;
        this.outputList = outputList;
        this.historyPolyline = L.polyline([], {
            weight: 5,
            fill: false,
            stroke: false,
            color: "black",
            className: "history-polyline",
        }).addTo(parentMap);
        {
            const e = getPrivatePathElement(this.historyPolyline);
            e?.setAttribute("stroke-width", "5");
            e?.setAttribute("marker-start", `url(#${headId})`);
            e?.setAttribute("marker-mid", `url(#${headId})`);
            e?.setAttribute("marker-end", `url(#${headId})`);
        }

        this.mainPinPopup = L.popup();
        this.mainPin = L.marker([0, 0], {
            opacity: 0,
        })
            .addTo(parentMap)
            .on("click", () => {
                this.mainPinPopup
                    .setLatLng(this.mainPin.getLatLng())
                    .openOn(this.parentMap);
            });

        const searchBarHandler = createAsyncCancelScope(handleAsyncError);
        function updateSuggestions(inputWaitInterval: number) {
            searchBarHandler((signal) =>
                waitAndSuggestLocations(navigation, {
                    inputWaitInterval,
                    signal,
                })
            );
        }
        function startNavigation() {
            searchBarHandler((signal) =>
                waitAndStartNavigation(navigation, { signal })
            );
        }

        // ドキュメントで Ctrl + Q キーが押されたとき、表示しフォーカスを当てる
        document.addEventListener("keyup", (e) => {
            if (e.key === "q" && e.ctrlKey) {
                navigationElement.classList.remove(Names.hidden);
                searchInput.focus();
                searchInput.select();
            }
        });
        searchBar.addEventListener("keyup", (e) => {
            switch (e.key) {
                // 検索バーで Esc が押されたとき、隠す
                case "Escape": {
                    navigationElement.classList.add(Names.hidden);
                    break;
                }
                // 検索バーで Enter が押されたとき、検索を開始する
                case "Enter": {
                    startNavigation();
                    break;
                }
            }
        });
        // 戻るボタンが押されたとき
        leftArrowButton.addEventListener("click", () => {
            navigation.history = UndoList.undo(navigation.history);
            const coordinate = UndoList.currentItem(navigation.history);
            if (coordinate) {
                moveTo(navigation, coordinate);
            }
        });
        // 進むボタンが押されたとき
        rightArrowButton.addEventListener("click", () => {
            navigation.history = UndoList.redo(navigation.history);
            const coordinate = UndoList.currentItem(navigation.history);
            if (coordinate) {
                moveTo(navigation, coordinate);
            }
        });
        // 検索バーの入力が更新されたとき、補完後補表示を開始する
        searchInput.addEventListener("input", () => {
            updateSuggestions(this.inputWaitInterval);
        });

        // 主地図が移動し終わったとき、現在地を更新する
        const locationAsyncScope = createAsyncCancelScope(handleAsyncError);
        parentMap.addEventListener("moveend", () => {
            locationAsyncScope(async (signal) => {
                await sleep(this.locationUpdateWaitInterval, { signal });

                const coordinate = parentMap.getCenter();
                if (
                    !UndoList.find(
                        navigation.history,
                        (item) =>
                            distanceMeter(item, coordinate) <
                            this.settings.minAutoSaveHistoryDistance
                    )
                ) {
                    addCoordinateToHistory(navigation, coordinate);
                }
            });
        });

        addCoordinateToHistory(navigation, parentMap.getCenter());
        return navigationElement;
    }
}
async function asyncMain() {
    await waitElementLoaded();

    if (window.map == null) {
        console.error("map が見つかりませんでした。");
        return;
    }
    L.version;
    L.Icon.Default.imagePath = `https://unpkg.com/leaflet@${L.version}/dist/images/`;
    addStyle(css);

    new Navigation(
        { position: "topleft" },
        {
            inputWaitInterval: 3000,
            locationUpdateWaitInterval: 3000,
            minAutoSaveHistoryDistance: 1,
        }
    ).addTo(window.map);
}
export function main() {
    handleAsyncError(asyncMain());
}
