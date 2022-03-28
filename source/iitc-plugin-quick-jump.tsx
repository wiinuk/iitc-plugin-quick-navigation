import { addStyle, waitElementLoaded } from "./document-extensions";
import { error } from "./standard-extensions";

function handleAsyncError(promise: Promise<void>) {
    promise.catch((error) => console.error(error));
}

enum ExternalNames {
    chatinput = "chatinput",
}
enum Names {
    SearchBar = "iitc-plugin-quick-jump-search-bar",
    Hidden = "iitc-plugin-quick-jump-hidden",
}
const css = `
    .${Names.SearchBar} {
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
    .${Names.Hidden} {
        display: none;
    }
`;
async function setupSearchBar() {
    const searchBar = (
        <div class={Names.SearchBar}>
            <span>🔍</span>
            <input></input>
        </div>
    );
    // 初期状態では隠す
    searchBar.classList.add(Names.Hidden);

    // ドキュメントで Ctrl + Q キーが押されたとき、検索バーを表示しフォーカスを当てる
    document.addEventListener("keyup", (e) => {
        if (e.key === "q" && e.ctrlKey) {
            searchBar.classList.remove(Names.Hidden);
            searchBar.querySelector("input")?.focus();
        }
    });
    // 検索バーで Esc が押されたとき、検索バーを隠す
    searchBar.addEventListener("keyup", (e) => {
        if (e.key === "Escape") {
            searchBar.classList.add(Names.Hidden);
        }
    });

    const target =
        document.body.querySelector(`#${ExternalNames.chatinput}`) ??
        error`対象要素が見つかりませんでした。`;

    target.parentElement?.insertBefore(searchBar, target.nextSibling);
}
async function asyncMain() {
    await waitElementLoaded();

    addStyle(css);
    await setupSearchBar();
}
export function main() {
    handleAsyncError(asyncMain());
}
