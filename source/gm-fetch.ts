import { error, ignore, newAbortError } from "./standard-extensions";

const gmFetch: typeof globalThis.fetch = (input, init = {}) => {
    function toUrl(input: RequestInfo | URL) {
        return input instanceof URL || typeof input === "string"
            ? input.toString()
            : input instanceof Request
            ? error`未実装: Request`
            : input;
    }
    function toNoCache(requestCache: RequestCache | undefined) {
        switch (requestCache) {
            case "no-cache":
            case "only-if-cached":
            case "reload":
            case "no-store":
                return true;
            case "force-cache":
                return false;
        }
    }
    function toResponse<T>({
        response,
        status,
        statusText,
    }: Tampermonkey.Response<T>) {
        // TODO: readyState が DONE でない場合はエラー
        const body = response;
        const responseInit: ResponseInit = {
            // TODO: headers を取得する
            // headers: responseHeaders,
            status,
            statusText,
        };
        return new Response(body, responseInit);
    }
    return new Promise<Response>((resolve, reject) => {
        const { cache, signal } = init;
        if (signal?.aborted) {
            reject(newAbortError());
        }
        const onProgress = signal
            ? () => {
                  if (signal.aborted) {
                      reject(newAbortError());
                  }
              }
            : undefined;

        const onAbort = signal
            ? () => {
                  reject(newAbortError());
              }
            : ignore;

        const request: Tampermonkey.Request = {
            url: toUrl(input),
            nocache: toNoCache(cache),

            // TODO: 他のオプションを変換する
        };
        const gmXmlHttpRequest =
            GM.xmlHttpRequest ||
            (typeof GM_xmlhttpRequest !== "undefined" && GM_xmlhttpRequest);

        void gmXmlHttpRequest({
            ...request,

            onabort: onAbort,
            onerror: reject,
            onload(response) {
                signal?.removeEventListener("abort", onAbort);
                resolve(toResponse(response));
            },
            ontimeout() {
                reject(
                    new Error(`${input} へのリクエストがタイムアウトしました`)
                );
            },
            onreadystatechange: onProgress,
            onprogress: onProgress,
        });
        signal?.addEventListener("abort", () => {
            reject(newAbortError());
        });
    });
};
export default gmFetch;
