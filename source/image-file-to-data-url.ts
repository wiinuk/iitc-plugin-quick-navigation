// spell-checker: ignore heic heif
import heic2any from "heic2any";
import jimp from "jimp/browser/lib/jimp";
import {
    AsyncOptions,
    createProgressReporter,
    throwIfAborted,
} from "./standard-extensions";

interface FileToDataUrlOptions extends AsyncOptions {
    maxWidth?: number;
    maxHeight?: number;
}
function getExtension(path: string) {
    const index = path.lastIndexOf(".");
    if (0 <= index) {
        return path.slice(index);
    }
    return "";
}
export async function imageFileToDataUrl(
    file: File,
    options?: Readonly<FileToDataUrlOptions>
) {
    const reporter = createProgressReporter(options?.progress, 3);
    try {
        throwIfAborted(options?.signal);

        // heic なら png に変換する
        const ext = getExtension(file.name).toLocaleLowerCase();
        if (ext === ".heif" || ext === ".heic") {
            console.log(`変換しています...`);
            const blob = await heic2any({ blob: file, toType: "image/png" });
            console.log(`変換完了`);
            throwIfAborted(options?.signal);
            file = new File([blob], file.name + ".png");
        }
        reporter.next();

        const fileBuffer = await file.arrayBuffer();
        throwIfAborted(options?.signal);
        reporter.next();

        const image = await jimp.read(Buffer.from(fileBuffer));
        throwIfAborted(options?.signal);
        reporter.next();

        const maxWidth = options?.maxWidth;
        const maxHeight = options?.maxHeight;
        if (maxWidth != null || maxHeight != null) {
            image.scaleToFit(
                maxWidth ?? image.getWidth(),
                maxHeight ?? image.getHeight()
            );
        }
        return image.getBase64Async("image/png");
    } finally {
        reporter.done();
    }
}
