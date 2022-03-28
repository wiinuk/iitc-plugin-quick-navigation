import { string, or, record, emptyRecord } from "./json-spec";
import * as table from "./gsi-muni-table.json";

type MuniCdTable = ReadonlyMap<
    number,
    readonly [
        /** @example 1 */
        kenCode: number,
        /** @example "北海道" */
        kenName: string,
        /** @example 1101 */
        shiCode: number,
        // eslint-disable-next-line no-irregular-whitespace
        /** @example "札幌市　中央区" */
        shiName: string
    ]
>;

async function readTable(): Promise<MuniCdTable> {
    const result = new Map();
    for (const [key, value] of table) {
        result.set(key, value);
    }
    return result;
}

const ErrorResultS = emptyRecord;
const ResultSpec = or(
    record({
        results: record({
            /** @example "08220" */
            muniCd: string,
            /** @example "北郷" */
            lv01Nm: string,
        }),
    }),
    ErrorResultS
);
const resultSpec: typeof ResultSpec = ResultSpec;

export async function lonLatToAddress(
    lon: number,
    lat: number,
    option?: { cache?: RequestCache; signal?: AbortSignal }
) {
    const params = new URLSearchParams({ lon: String(lon), lat: String(lat) });
    const response = await fetch(
        `https://mreversegeocoder.gsi.go.jp/reverse-geocoder/LonLatToAddress?${params.toString()}`,
        { cache: option?.cache ?? "force-cache", signal: option?.signal }
    );
    const result = await response.json();
    resultSpec.validate(result);

    if (!result.results) {
        return;
    }
    const results = result.results;
    const table = await readTable();
    const detail = table.get(Number(results.muniCd));
    if (!detail) {
        return;
    }
    return {
        ...results,
        detail,
    };
}
