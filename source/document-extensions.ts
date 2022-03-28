export function waitElementLoaded() {
    if (document.readyState !== "loading") {
        return Promise.resolve();
    }
    return new Promise<void>((resolve) =>
        document.addEventListener("DOMContentLoaded", () => resolve())
    );
}

type CssSourceParts = string | number;
let styleElement: HTMLStyleElement | null = null;
export function addStyle(css: string): void;
export function addStyle(
    template: TemplateStringsArray,
    ...substitutions: CssSourceParts[]
): void;
export function addStyle(
    cssOrTemplate: TemplateStringsArray | string,
    ...substitutions: CssSourceParts[]
) {
    const css =
        typeof cssOrTemplate === "string"
            ? cssOrTemplate
            : String.raw(cssOrTemplate, ...substitutions);

    if (styleElement == null) {
        styleElement = document.createElement("style");
        document.head.appendChild(styleElement);
    }
    styleElement.textContent += css + "\n";
    document.head.appendChild(styleElement);
}
