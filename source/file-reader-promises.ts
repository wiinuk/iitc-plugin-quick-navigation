import { AsyncOptions, ignore, newAbortError } from "./standard-extensions";

export interface ReadFileResultTypeMap {
    arrayBuffer: ArrayBuffer;
    text: string;
    dataUrl: string;
    binaryString: string;
}
export interface ReadFileOptions<
    TResultType extends keyof ReadFileResultTypeMap
> extends AsyncOptions {
    resultType?: TResultType;
}
export function readFile<
    TResultType extends keyof ReadFileResultTypeMap = "text"
>(
    blob: Blob,
    options?: Readonly<ReadFileOptions<TResultType>>
): Promise<ReadFileResultTypeMap[TResultType]> {
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
            resolve(reader.result as ReadFileResultTypeMap[TResultType]);
        };
        reader.onerror = (e) => {
            progress?.(e);
            signal?.removeEventListener("abort", onAbort);
            reject(e);
        };
        reader.onabort = progress;
        switch (options?.resultType) {
            case "arrayBuffer":
                return reader.readAsArrayBuffer(blob);
            case "text":
                return reader.readAsText(blob);
            case "dataUrl":
                return reader.readAsDataURL(blob);
            case "binaryString":
                return reader.readAsBinaryString(blob);
            default:
                return reader.readAsText(blob);
        }
    });
}
