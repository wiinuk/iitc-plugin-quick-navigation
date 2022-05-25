// spell-checker: ignore exif
import * as ExifReader from "exifreader";

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
interface Progress<T> {
    (value: T): void;
}
interface AsyncOptions {
    signal?: AbortSignal;
    progress?: Progress<ProgressEvent>;
}
function readFileAsArrayBuffer(
    file: File,
    options?: Readonly<AsyncOptions>
): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
        const progress = options?.progress ?? null;
        const reader = new FileReader();
        reader.onloadstart = progress;
        reader.onprogress = progress;
        reader.onload = (e) => {
            progress?.(e);
            resolve(reader.result as ArrayBuffer);
        };
        reader.onerror = (e) => {
            progress?.(e);
            reject(e);
        };
        options?.signal?.addEventListener("abort", (e) => {
            reader.abort();
            reject(e);
        });
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
