// spell-checker: ignore exif
import * as ExifReader from "exifreader";
import { readFile } from "./file-reader-promises";
import { AsyncOptions, error } from "./standard-extensions";

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
export async function coordinateOfImage(
    file: File,
    options?: Readonly<AsyncOptions>
) {
    const buffer = await readFile(file, {
        ...options,
        resultType: "arrayBuffer",
    });
    const tags = ExifReader.load(buffer);

    const lat = parseDMS(tags.GPSLatitude);
    const latRef = tags.GPSLatitudeRef?.description;
    const lng = parseDMS(tags.GPSLongitude);
    const lngRef = tags.GPSLongitudeRef?.value?.[0];
    if (lng == null || lngRef == null || lat == null || latRef == null) {
        return error`No GPS data found in ${file.name}`;
    }
    return {
        lat: normalizeDMS(lat, latRef === "S"),
        lng: normalizeDMS(lng, lngRef === "W"),
    };
}
