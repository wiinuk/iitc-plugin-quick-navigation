import { number, record } from "./json-spec";
import { sleep } from "./standard-extensions";

interface RequestOptions {
    signal?: AbortSignal;
    cache?: RequestCache;
    fetch?: typeof globalThis.fetch;
}
interface SearchParameters {
    q: string;
}

const ResultS = record({
    coordinate: record({
        lat: number,
        lng: number,
    }),
});
const Result: typeof ResultS = ResultS;

class XMLParseError extends Error {
    constructor(message: string, public parseerror: Element) {
        super(message);
        this.name = "XMLParseError";
    }
}
export function createGeocodingJpClient() {
    return new GeocodingJpClient();
}
class GeocodingJpClient {
    private _lastAccessMs = Date.now();
    private _accessSpanMs = 10 * 1000;
    private _parser = new DOMParser();
    async search(
        { q }: Readonly<SearchParameters>,
        {
            signal,
            cache = "force-cache",
            fetch = globalThis.fetch,
        }: Readonly<RequestOptions> = {}
    ) {
        const nowMs = Date.now();
        const waitSpanMs = this._lastAccessMs + this._accessSpanMs - nowMs;
        this._lastAccessMs = nowMs + waitSpanMs;
        await sleep(waitSpanMs, { signal });

        const query = new URLSearchParams({ q });
        const url = `https://www.geocoding.jp/api/?${query.toString()}`;
        const response = await fetch(url, { signal, cache });
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const responseText = await response.text();
        const document = this._parseOrThrowError(
            this._parser,
            responseText,
            "text/xml"
        );
        const result = elementToJson(document.documentElement);
        Result.validate(result);
        return result;
    }
    private readonly _parseerrorNamespace =
        this._parser
            .parseFromString("<", "text/xml")
            .getElementsByTagName("parsererror")[0]?.namespaceURI ??
        "http://www.w3.org/1999/xhtml";

    private _parseOrThrowError(
        parser: DOMParser,
        text: string,
        type: DOMParserSupportedType
    ) {
        const document = parser.parseFromString(text, type);

        const parseerrorElement =
            this._parseerrorNamespace === "http://www.w3.org/1999/xhtml"
                ? document.getElementsByTagName("parsererror")[0]
                : document.getElementsByTagNameNS(
                      this._parseerrorNamespace,
                      "parsererror"
                  )[0];

        if (parseerrorElement !== undefined) {
            throw new XMLParseError(
                parseerrorElement.outerHTML,
                parseerrorElement
            );
        }

        return document;
    }
}
function elementToJson(node: Element): unknown {
    const { children, childNodes } = node;

    if (children.length === 0 && childNodes.length === 1) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const value = childNodes[0]!.nodeValue;
        if (value === null) {
            return null;
        }

        const number = Number.parseFloat(value);
        if (!Number.isNaN(number)) {
            return number;
        }
        return value;
    }
    const elements: { [name: string]: unknown } = Object.create(null);
    for (let i = 0; i < children.length; i++) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const child = children[i]!;
        elements[child.tagName] = elementToJson(child);
    }
    return elements;
}
