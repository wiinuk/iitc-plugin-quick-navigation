
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

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// NAMESPACE OBJECT: ./source/iitc-plugin-quick-navigation.tsx
var iitc_plugin_quick_navigation_namespaceObject = {};
__webpack_require__.r(iitc_plugin_quick_navigation_namespaceObject);
__webpack_require__.d(iitc_plugin_quick_navigation_namespaceObject, {
  "main": () => (main)
});

;// CONCATENATED MODULE: ./source/document-extensions.ts
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function waitElementLoaded() {
    if (document.readyState !== "loading") {
        return Promise.resolve();
    }
    return new Promise(function (resolve) {
        return document.addEventListener("DOMContentLoaded", function () { return resolve(); });
    });
}
var styleElement = null;
function addStyle(cssOrTemplate) {
    var substitutions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        substitutions[_i - 1] = arguments[_i];
    }
    var css = typeof cssOrTemplate === "string"
        ? cssOrTemplate
        : String.raw.apply(String, __spreadArray([cssOrTemplate], __read(substitutions), false));
    if (styleElement == null) {
        styleElement = document.createElement("style");
        document.head.appendChild(styleElement);
    }
    styleElement.textContent += css + "\n";
    document.head.appendChild(styleElement);
}

;// CONCATENATED MODULE: ./source/standard-extensions.ts
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var standard_extensions_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var standard_extensions_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function error(template) {
    var substitutions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        substitutions[_i - 1] = arguments[_i];
    }
    var message = String.raw.apply(String, standard_extensions_spreadArray([template], standard_extensions_read(substitutions.map(function (x) {
        return typeof x === "string" ? x : JSON.stringify(x);
    })), false));
    throw new Error(message);
}
function exhaustive(value) {
    return error(templateObject_1 || (templateObject_1 = __makeTemplateObject(["unexpected value: ", ""], ["unexpected value: ", ""])), value);
}
function id(x) {
    return x;
}
function ignore() {
    var _args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        _args[_i] = arguments[_i];
    }
    /* 引数を無視する関数 */
}
var ignoreReporterCache;
function createProgressReporter(progress, total) {
    var MessagedProgressEvent = /** @class */ (function (_super) {
        __extends(MessagedProgressEvent, _super);
        function MessagedProgressEvent(message, options) {
            var _this = _super.call(this, "message", options) || this;
            _this.message = message;
            return _this;
        }
        return MessagedProgressEvent;
    }(ProgressEvent));
    if (progress === undefined) {
        return (ignoreReporterCache !== null && ignoreReporterCache !== void 0 ? ignoreReporterCache : (ignoreReporterCache = {
            next: ignore,
            done: ignore,
        }));
    }
    var loaded = 0;
    return {
        next: function (message) {
            loaded = Math.max(loaded + 1, total);
            progress(new MessagedProgressEvent(message, {
                lengthComputable: true,
                loaded: loaded,
                total: total,
            }));
        },
        done: function (message) {
            progress(new MessagedProgressEvent(message, {
                lengthComputable: true,
                loaded: total,
                total: total,
            }));
        },
    };
}
var AbortError = /** @class */ (function (_super) {
    __extends(AbortError, _super);
    function AbortError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "AbortError";
        return _this;
    }
    return AbortError;
}(Error));
function newAbortError(message) {
    if (message === void 0) { message = "The operation was aborted."; }
    if (typeof DOMException === "function") {
        return new DOMException(message, "AbortError");
    }
    else {
        return new AbortError(message);
    }
}
function throwIfAborted(signal) {
    if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
        throw newAbortError();
    }
}
function sleep(milliseconds, option) {
    return new Promise(function (resolve, reject) {
        var signal = option === null || option === void 0 ? void 0 : option.signal;
        if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
            reject(newAbortError());
            return;
        }
        var onAbort = signal
            ? function () {
                clearTimeout(id);
                reject(newAbortError());
            }
            : ignore;
        var id = setTimeout(function () {
            signal === null || signal === void 0 ? void 0 : signal.removeEventListener("abort", onAbort);
            resolve();
        }, milliseconds);
        signal === null || signal === void 0 ? void 0 : signal.addEventListener("abort", onAbort);
    });
}
function cancelToReject(promise, onCancel) {
    if (onCancel === void 0) { onCancel = ignore; }
    return promise.catch(function (e) {
        if (e instanceof Error && e.name === "AbortError") {
            return onCancel();
        }
        throw e;
    });
}
function createAsyncCancelScope(handleAsyncError) {
    var lastCancel = new AbortController();
    return function (process) {
        // 前の操作をキャンセル
        lastCancel.abort();
        lastCancel = new AbortController();
        handleAsyncError(
        // キャンセル例外を無視する
        cancelToReject(process(lastCancel.signal)));
    };
}
function assertTrue() {
    // 型レベルアサーション関数
}
var templateObject_1;

;// CONCATENATED MODULE: ./source/iitc-plugin-quick-navigation.tsx
var iitc_plugin_quick_navigation_makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// spell-checker: ignore


function handleAsyncError(promise) {
    promise.catch(function (error) { return console.error(error); });
}
function asyncMain(_a) {
    var _b;
    var L = _a.L;
    return __awaiter(this, void 0, void 0, function () {
        function parseCoordinate(searchText) {
            var _a, _b;
            var match = searchText.match(/^\s*(?<latitude>\d+(\.\d*)?)(\s+|\s*,\s*)(?<longitude>\d+(\.\d*)?)\s*$/);
            var latitude = (_a = match === null || match === void 0 ? void 0 : match.groups) === null || _a === void 0 ? void 0 : _a["latitude"];
            var longitude = (_b = match === null || match === void 0 ? void 0 : match.groups) === null || _b === void 0 ? void 0 : _b["longitude"];
            if (!latitude || !longitude) {
                return null;
            }
            return { lat: parseFloat(latitude), lng: parseFloat(longitude) };
        }
        var searchInput, oldValue;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, waitElementLoaded()];
                case 1:
                    _c.sent();
                    L.Icon.Default.imagePath = "https://unpkg.com/leaflet@".concat(L.version, "/dist/images/");
                    searchInput = ((_b = document.body.querySelector("input#search")) !== null && _b !== void 0 ? _b : error(iitc_plugin_quick_navigation_templateObject_1 || (iitc_plugin_quick_navigation_templateObject_1 = iitc_plugin_quick_navigation_makeTemplateObject(["input#search \u8981\u7D20\u304C\u8AAD\u307F\u8FBC\u307E\u308C\u3066\u3044\u307E\u305B\u3093"], ["input#search \u8981\u7D20\u304C\u8AAD\u307F\u8FBC\u307E\u308C\u3066\u3044\u307E\u305B\u3093"]))));
                    oldValue = null;
                    "keyup keypress change paste".split(" ").forEach(function (t) {
                        searchInput.addEventListener(t, function () {
                            var value = searchInput.value;
                            if (oldValue === value) {
                                return;
                            }
                            oldValue = value;
                            var coordinate = parseCoordinate(value);
                            if (coordinate == null) {
                                return;
                            }
                            searchInput.value = "".concat(coordinate.lat, ",").concat(coordinate.lng);
                        }, false);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function main(contentGlobal) {
    handleAsyncError(asyncMain(contentGlobal));
}
var iitc_plugin_quick_navigation_templateObject_1;

;// CONCATENATED MODULE: ./source/iitc-plugin-quick-navigation.user.ts
unsafeWindow["_iitc-plugin-quick-navigation-eda40d4e-89a9-41da-93c3-fbceb60f6a2a"] = iitc_plugin_quick_navigation_namespaceObject;
// 文字列化され、ドキュメントに注入されるラッパー関数
// このため、通常のクロージャーのルールはここでは適用されない
function wrapper(plugin_info) {
    var _a;
    var window = globalThis.window;
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
    var setup = function setup() {
        var pluginModule = window["_iitc-plugin-quick-navigation-eda40d4e-89a9-41da-93c3-fbceb60f6a2a"];
        if (pluginModule == null) {
            console.error("".concat(plugin_info.pluginId, ": \u30E1\u30A4\u30F3\u30E2\u30B8\u30E5\u30FC\u30EB\u304C\u8AAD\u307F\u8FBC\u307E\u308C\u3066\u3044\u307E\u305B\u3093\u3002"));
            return;
        }
        if (window.L == null) {
            console.error("".concat(plugin_info.pluginId, ": Leaflet \u304C\u8AAD\u307F\u8FBC\u307E\u308C\u3066\u3044\u307E\u305B\u3093\u3002"));
            return;
        }
        if (window.map == null) {
            console.error("".concat(plugin_info.pluginId, ": Leaflet map \u304C\u8AAD\u307F\u8FBC\u307E\u308C\u3066\u3044\u307E\u305B\u3093\u3002"));
            return;
        }
        pluginModule.main({ L: window.L, map: window.map });
    };
    setup.info = plugin_info;
    // 起動用フックを追加
    ((_a = window.bootPlugins) !== null && _a !== void 0 ? _a : (window.bootPlugins = [])).push(setup);
    // IITC がすでに起動している場合 `setup` 関数を実行する
    if (window.iitcLoaded && typeof setup === "function")
        setup();
}
// UserScript のヘッダからプラグイン情報を取得する
var info = {};
if (typeof GM_info !== "undefined" && GM_info && GM_info.script) {
    info.script = {
        version: GM_info.script.version,
        name: GM_info.script.name,
        description: GM_info.script.description,
    };
}
// wrapper 関数を文字列化して DOM 内で実行する
var script = document.createElement("script");
script.append("(".concat(wrapper, ")(").concat(JSON.stringify(info), ")"));
(document.body || document.head || document.documentElement).appendChild(script);

/******/ })()
;