// ==UserScript==
// @id           iitc-plugin-quick-navigation@wiinuk
// @name         IITC plugin: Quick navigation
// @category     Controls
// @namespace    https://github.com/wiinuk/iitc-plugin-quick-navigation
// @downloadURL  https://github.com/wiinuk/iitc-plugin-quick-navigation/raw/master/iitc-plugin-quick-navigation.user.js
// @updateURL    https://github.com/wiinuk/iitc-plugin-quick-navigation/raw/master/iitc-plugin-quick-navigation.user.js
// @homepageURL  https://github.com/wiinuk/iitc-plugin-quick-navigation
// @version      0.3.0
// @description  Add the ability to move to specified coordinates.
// @author       Wiinuk
// @include      https://*.ingress.com/intel*
// @include      http://*.ingress.com/intel*
// @match        https://*.ingress.com/intel*
// @match        http://*.ingress.com/intel*
// @include      https://*.ingress.com/mission/*
// @include      http://*.ingress.com/mission/*
// @match        https://*.ingress.com/mission/*
// @match        http://*.ingress.com/mission/*
// @icon         https://www.google.com/s2/favicons?domain=iitc.me
// @grant        GM_info
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @connect      geocoding.jp
// ==/UserScript==

import * as MainModule from "./iitc-plugin-quick-navigation";

(unsafeWindow as WindowForContentScope)[
    "_iitc-plugin-quick-navigation-eda40d4e-89a9-41da-93c3-fbceb60f6a2a"
] = MainModule;

interface PluginInfo {
    buildName?: string;
    dateTimeVersion?: string;
    pluginId?: string;
    script?: ScriptInfo;
}
interface ScriptInfo {
    version?: string;
    name?: string;
    description?: string | null;
}
interface SetupHook {
    (): unknown;
    info: PluginInfo;
}

// 文字列化され、ドキュメントに注入されるラッパー関数
// このため、通常のクロージャーのルールはここでは適用されない
function wrapper(plugin_info: PluginInfo) {
    const window = globalThis.window as WindowForContentScope;

    // window.plugin が存在することを確認する
    if (typeof window.plugin !== "function") {
        window.plugin = function () {
            // マーカー関数
        };
    }

    // メタデータを追加する
    plugin_info.dateTimeVersion = "20220328000000";
    plugin_info.pluginId = "quick-navigation";

    // setup 内で IITC はロード済みと仮定できる
    const setup: SetupHook = function setup() {
        const pluginModule =
            window[
                "_iitc-plugin-quick-navigation-eda40d4e-89a9-41da-93c3-fbceb60f6a2a"
            ];
        if (pluginModule == null) {
            console.error(
                `${plugin_info.pluginId}: メインモジュールが読み込まれていません。`
            );
            return;
        }
        if (window.L == null) {
            console.error(
                `${plugin_info.pluginId}: Leaflet が読み込まれていません。`
            );
            return;
        }
        if (window.map == null) {
            console.error(
                `${plugin_info.pluginId}: Leaflet map が読み込まれていません。`
            );
            return;
        }
        pluginModule.main({ L: window.L, map: window.map });
    };
    setup.info = plugin_info;

    // 起動用フックを追加
    (window.bootPlugins ??= []).push(setup);

    // IITC がすでに起動している場合 `setup` 関数を実行する
    if (window.iitcLoaded && typeof setup === "function") setup();
}

// UserScript のヘッダからプラグイン情報を取得する
const info: PluginInfo = {};
if (typeof GM_info !== "undefined" && GM_info && GM_info.script) {
    info.script = {
        version: GM_info.script.version,
        name: GM_info.script.name,
        description: GM_info.script.description,
    };
}

// wrapper 関数を文字列化して DOM 内で実行する
const script = document.createElement("script");
script.append(`(${wrapper})(${JSON.stringify(info)})`);
(document.body || document.head || document.documentElement).appendChild(
    script
);
