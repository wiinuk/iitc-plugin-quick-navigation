// spell-checker: ignore heic
module "heic2any" {
    type ImageTypes = "image/jpeg" | "image/png" | "image/gif";
    interface ImageOptions {
        blob: Blob;
        /** @default "image/png" */
        toType?: ImageTypes;
        multiple?: boolean;

        /**
         * between 0 and 1
         * @default 0.92
         */
        quality?: number;
        /**
         * seconds
         * @default 0.4
         */
        gifInterval?: number;
    }
    interface GifOptions extends ImageOptions {
        toType: "image/gif";
        quality?: undefined;
    }
    interface JpegOptions extends ImageOptions {
        toType: "image/jpeg";
        gifInterval?: undefined;
    }
    interface PngOptions extends ImageOptions {
        toType?: "image/png";
        quality?: undefined;
        gifInterval?: undefined;
    }
    type Options = GifOptions | JpegOptions | PngOptions;
    function heic2any<TOptions extends Options>(
        options: TOptions
    ): Promise<
        "multiple" extends keyof TOptions
            ? TOptions["multiple"] extends true
                ? Blob[]
                : TOptions["multiple"] extends undefined | false
                ? Blob
                : Blob | Blob[]
            : Blob
    >;

    export default heic2any;
}
