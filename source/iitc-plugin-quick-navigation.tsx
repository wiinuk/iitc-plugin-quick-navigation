// spell-checker: ignore
import { waitElementLoaded } from "./document-extensions";
import { error } from "./standard-extensions";

function handleAsyncError(promise: Promise<void>) {
    promise.catch((error) => console.error(error));
}

interface ContentGlobal {
    L: typeof window.L;
    map: NonNullable<WindowForContentScope["map"]>;
}
async function asyncMain({ L }: ContentGlobal) {
    function parseCoordinate(searchText: string) {
        const match = searchText.match(
            /^\s*(?<latitude>\d+(\.\d*)?)(\s+|\s*,\s*)(?<longitude>\d+(\.\d*)?)\s*$/
        );
        const latitude = match?.groups?.["latitude"];
        const longitude = match?.groups?.["longitude"];
        if (!latitude || !longitude) {
            return null;
        }

        return { lat: parseFloat(latitude), lng: parseFloat(longitude) };
    }

    await waitElementLoaded();

    L.Icon.Default.imagePath = `https://unpkg.com/leaflet@${L.version}/dist/images/`;

    const searchInput = (document.body.querySelector("input#search") ??
        error`input#search 要素が読み込まれていません`) as HTMLInputElement;

    let oldValue: string | null = null;
    "keyup keypress change paste".split(" ").forEach((t) => {
        searchInput.addEventListener(
            t,
            () => {
                const { value } = searchInput;
                if (oldValue === value) {
                    return;
                }
                oldValue = value;

                const coordinate = parseCoordinate(value);
                if (coordinate == null) {
                    return;
                }
                searchInput.value = `${coordinate.lat},${coordinate.lng}`;
            },
            false
        );
    });
}
export function main(contentGlobal: ContentGlobal) {
    handleAsyncError(asyncMain(contentGlobal));
}
