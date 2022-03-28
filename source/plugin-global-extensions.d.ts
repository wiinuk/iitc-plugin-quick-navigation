declare interface Window {
    // IITC plugin の拡張
    plugin?: () => void;
    bootPlugins?: SetupHook[];
    iitcLoaded?: boolean;

    // このプラグインの拡張
    "_iitc-plugin-quick-jump-eda40d4e-89a9-41da-93c3-fbceb60f6a2a"?: typeof import("./iitc-plugin-quick-jump");
}
