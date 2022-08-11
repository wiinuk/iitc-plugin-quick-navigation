/** IITC の拡張 */
declare interface Window {
    plugin?: () => void;
    bootPlugins?: SetupHook[];
    iitcLoaded?: boolean;
    L?: typeof L;
    map?: L.Map;
}
/** このプラグインの拡張 */
declare interface Window {
    "_iitc-plugin-quick-navigation-eda40d4e-89a9-41da-93c3-fbceb60f6a2a"?: typeof import("./iitc-plugin-quick-navigation");
}
