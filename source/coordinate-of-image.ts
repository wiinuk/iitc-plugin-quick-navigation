// spell-checker: ignore exif
import * as ExifReader from "exifreader";
import { AsyncOptions, ignore, newAbortError } from "./standard-extensions";

function normalizeDMS(value: number, isNegative: boolean) {
    return value * (isNegative ? -1 : 1);
}
function parseDMS(numbers: ExifReader.NumberArrayTag | undefined) {
    const description = numbers?.description;
    if (description == null) {
        return null;
    }
    return parseFloat(description);
}
function readFileAsArrayBuffer(
    file: File,
    options?: Readonly<AsyncOptions>
): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
        const signal = options?.signal;
        if (signal?.aborted) {
            return reject(newAbortError());
        }
        const onAbort: () => void = signal
            ? () => {
                  reader.abort();
                  reject(newAbortError());
              }
            : ignore;

        signal?.addEventListener("abort", onAbort);

        const progress = options?.progress ?? null;
        const reader = new FileReader();
        reader.onloadstart = progress;
        reader.onprogress = progress;
        reader.onload = (e) => {
            progress?.(e);
            signal?.removeEventListener("abort", onAbort);
            resolve(reader.result as ArrayBuffer);
        };
        reader.onerror = (e) => {
            progress?.(e);
            signal?.removeEventListener("abort", onAbort);
            reject(e);
        };
        reader.onabort = progress;
        reader.readAsArrayBuffer(file);
    });
}
export async function coordinateOfImage(
    file: File,
    options?: Readonly<AsyncOptions>
) {
    const buffer = await readFileAsArrayBuffer(file, options);
    const tags = ExifReader.load(buffer);

    const lat = parseDMS(tags.GPSLatitude);
    const latRef = tags.GPSLatitudeRef?.description;
    const lng = parseDMS(tags.GPSLongitude);
    const lngRef = tags.GPSLongitudeRef?.value?.[0];
    if (lng == null || lngRef == null || lat == null || latRef == null) {
        return null;
    }
    return {
        lat: normalizeDMS(lat, latRef === "S"),
        lng: normalizeDMS(lng, lngRef === "W"),
    };
}
