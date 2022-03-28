export function error(
    template: TemplateStringsArray,
    ...substitutions: unknown[]
): never {
    const message = String.raw(
        template,
        ...substitutions.map((x) =>
            typeof x === "string" ? x : JSON.stringify(x)
        )
    );
    throw new Error(message);
}
export function id<T>(x: T) {
    return x;
}
export function ignore<Ts extends unknown[]>(..._args: Ts[]): void {
    /* 引数を無視する関数 */
}

class AbortError extends Error {
    override name = "AbortError";
    constructor(message: string) {
        super(message);
    }
}
function newAbortError(message = "The operation was aborted.") {
    if (typeof DOMException === "function") {
        return new DOMException(message, "AbortError");
    } else {
        return new AbortError(message);
    }
}
export function sleep(milliseconds: number, option?: { signal?: AbortSignal }) {
    return new Promise<void>((resolve, reject) => {
        const signal = option?.signal;
        if (signal?.aborted) {
            reject(newAbortError());
            return;
        }
        const onAbort: () => void = signal
            ? () => {
                  clearTimeout(id);
                  reject(newAbortError());
              }
            : ignore;
        const id = setTimeout(() => {
            signal?.removeEventListener("abort", onAbort);
            resolve();
        }, milliseconds);
        signal?.addEventListener("abort", onAbort);
    });
}

export function cancelToReject<T>(
    promise: Promise<T>,
    onCancel: () => T
): Promise<T>;
export function cancelToReject(promise: Promise<void>): Promise<void>;
export function cancelToReject<T>(
    promise: Promise<T>,
    onCancel: () => void = ignore
) {
    return promise.catch((e) => {
        if (e instanceof Error && e.name === "AbortError") {
            return onCancel();
        }
        throw e;
    });
}
