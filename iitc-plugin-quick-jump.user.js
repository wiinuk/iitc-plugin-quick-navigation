
// ==UserScript==
// @id           iitc-plugin-quick-jump@wiinuk
// @name         IITC plugin: Quick jump
// @category     Controls
// @namespace    https://github.com/wiinuk/iitc-plugin-quick-jump
// @downloadURL  https://github.com/wiinuk/iitc-plugin-quick-jump/raw/master/iitc-plugin-quick-jump.user.js
// @updateURL    https://github.com/wiinuk/iitc-plugin-quick-jump/raw/master/iitc-plugin-quick-jump.user.js
// @homepageURL  https://github.com/wiinuk/iitc-plugin-quick-jump
// @version      0.1.1
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

// NAMESPACE OBJECT: ./source/iitc-plugin-quick-jump.tsx
var iitc_plugin_quick_jump_namespaceObject = {};
__webpack_require__.r(iitc_plugin_quick_jump_namespaceObject);
__webpack_require__.d(iitc_plugin_quick_jump_namespaceObject, {
  "main": () => (main)
});

;// CONCATENATED MODULE: ./source/document-jsx/jsx-runtime.ts
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
function jsxs(name, properties, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
_option) {
    var e_1, _a, e_2, _b;
    var element = document.createElement(name);
    try {
        for (var _c = __values(Object.entries(properties !== null && properties !== void 0 ? properties : {})), _d = _c.next(); !_d.done; _d = _c.next()) {
            var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
            if (key === "children")
                continue;
            element.setAttribute(key, String(value));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var children = properties === null || properties === void 0 ? void 0 : properties.children;
    if (children) {
        if (Array.isArray(children)) {
            try {
                for (var _f = __values(children), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var child = _g.value;
                    if (!child)
                        continue;
                    element.append(child);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        else {
            element.append(children);
        }
    }
    return element;
}
var jsx = jsxs;

;// CONCATENATED MODULE: ./source/document-extensions.ts
var document_extensions_read = (undefined && undefined.__read) || function (o, n) {
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
        : String.raw.apply(String, __spreadArray([cssOrTemplate], document_extensions_read(substitutions), false));
    if (styleElement == null) {
        styleElement = document.createElement("style");
        document.head.appendChild(styleElement);
    }
    styleElement.textContent += css + "\n";
    document.head.appendChild(styleElement);
}

;// CONCATENATED MODULE: ./source/standard-extensions.ts
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

;// CONCATENATED MODULE: ./source/iitc-plugin-quick-jump.tsx
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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

// spell-checker: ignore chatinput


function handleAsyncError(promise) {
    promise.catch(function (error) { return console.error(error); });
}
var ExternalNames;
(function (ExternalNames) {
    ExternalNames["chatinput"] = "chatinput";
})(ExternalNames || (ExternalNames = {}));
var namespace = "iitc-plugin-quick-jump";
var Names = Object.freeze({
    hidden: "".concat(namespace, "-hidden"),
    searchBar: "".concat(namespace, "-search-bar"),
    crossHair: "".concat(namespace, "-cross-hair"),
    toastList: "".concat(namespace, "-toast-list"),
    toastItem: "".concat(namespace, "-toast-item"),
});
var css = "\n    .".concat(Names.searchBar, " {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        padding: 0 2px;\n        background: rgba(8, 48, 78, 0.9);\n        width: 708px;\n        height: 23px;\n        border: 1px solid #20A8B1;\n        z-index: 3001;\n        box-sizing: border-box;\n    }\n    .").concat(Names.searchBar, " input {\n        width: 100%;\n    }\n    .").concat(Names.crossHair, " {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        z-index: 3000;\n\n        font-size: 24px;\n        font-family: sans-serif;\n        color: #FFF;\n        text-shadow: 0 0 0.3em #000, 0 0 0.5em #000;\n        filter: drop-shadow(0 0 0.5em #000);\n    }\n    .").concat(Names.hidden, " {\n        display: none;\n    }\n    .").concat(Names.toastList, " {\n        position: fixed;\n        right: 0;\n        bottom: 0;\n        z-index: 9999;\n        list-style: none;\n        padding: 0;\n        margin: 0;\n    }\n    .").concat(Names.toastItem, ":first-of-type {\n        border-top: 1px solid #ddd;\n    }\n    .").concat(Names.toastItem, " {\n        background-color: white;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-top: 1px dashed #ccc;\n        margin: 0 0.5em;\n        padding: 1em;\n        box-shadow: 0 2px 2px rgb(0 0 0 / 50%);\n    }\n");
var toastListElement = null;
function toastWait(message, _a) {
    var _b;
    var _c = _a === void 0 ? {} : _a, _d = _c.timeout, timeout = _d === void 0 ? 3000 : _d;
    return __awaiter(this, void 0, void 0, function () {
        var item;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (toastListElement == null) {
                        toastListElement = jsx("ul", { class: Names.toastList });
                        document.body.appendChild(toastListElement);
                    }
                    item = jsx("li", __assign({ class: Names.toastItem }, { children: message }));
                    toastListElement.insertBefore(item, toastListElement.firstElementChild);
                    return [4 /*yield*/, sleep(timeout)];
                case 1:
                    _e.sent();
                    (_b = item.parentElement) === null || _b === void 0 ? void 0 : _b.removeChild(item);
                    return [2 /*return*/];
            }
        });
    });
}
function toast(message, options) {
    handleAsyncError(toastWait(message, options));
}
function searchCoordinate(searchText, _option) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var match, latitude, longitude;
        return __generator(this, function (_c) {
            match = searchText.match(/(?<latitude>\d+(\.\d*)?)(\s+|\s*,\s*)(?<longitude>\d+(\.\d*)?)/);
            latitude = (_a = match === null || match === void 0 ? void 0 : match.groups) === null || _a === void 0 ? void 0 : _a["latitude"];
            longitude = (_b = match === null || match === void 0 ? void 0 : match.groups) === null || _b === void 0 ? void 0 : _b["longitude"];
            if (!latitude || !longitude) {
                return [2 /*return*/, null];
            }
            return [2 /*return*/, { lat: parseFloat(latitude), lng: parseFloat(longitude) }];
        });
    });
}
function searchAndMoveToCoordinate(_a, _b) {
    var inputWaitInterval = _a.inputWaitInterval, searchInput = _a.searchInput, crossHair = _a.crossHair, mainMap = _a.mainMap;
    var signal = _b.signal;
    return __awaiter(this, void 0, void 0, function () {
        var value, coordinate;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: 
                // しばらく待ってから
                return [4 /*yield*/, sleep(inputWaitInterval, { signal: signal })];
                case 1:
                    // しばらく待ってから
                    _c.sent();
                    value = searchInput.value;
                    return [4 /*yield*/, searchCoordinate(value, {
                            signal: signal,
                        })];
                case 2:
                    coordinate = _c.sent();
                    if (!coordinate) {
                        return [2 /*return*/, toast("座標が見つかりませんでした。")];
                    }
                    // mainMap を指定した座標に移動
                    mainMap.setView(coordinate);
                    crossHair.classList.remove(Names.hidden);
                    return [2 /*return*/];
            }
        });
    });
}
function setupSearchBar(_a, _b) {
    var _c, _d;
    var mainMap = _a.mainMap;
    var _e = _b === void 0 ? { inputWaitInterval: 3000 } : _b, inputWaitInterval = _e.inputWaitInterval;
    return __awaiter(this, void 0, void 0, function () {
        function startSearch(inputWaitInterval) {
            lastSearchCancel.abort();
            lastSearchCancel = new AbortController();
            handleAsyncError(cancelToReject(searchAndMoveToCoordinate({
                inputWaitInterval: inputWaitInterval,
                searchInput: searchInput,
                mainMap: mainMap,
                crossHair: crossHair,
            }, { signal: lastSearchCancel.signal })));
        }
        var crossHair, searchInput, searchBar, lastSearchCancel, target;
        return __generator(this, function (_f) {
            crossHair = jsx("div", __assign({ class: Names.crossHair }, { children: "\u253C" }));
            crossHair.classList.add(Names.hidden);
            document.body.append(crossHair);
            searchInput = (jsx("input", {}));
            searchBar = jsx("div", __assign({ class: Names.searchBar }, { children: searchInput }));
            searchBar.classList.add(Names.hidden);
            lastSearchCancel = new AbortController();
            // ドキュメントで Ctrl + Q キーが押されたとき、検索バーを表示しフォーカスを当てる
            document.addEventListener("keyup", function (e) {
                var _a;
                if (e.key === "q" && e.ctrlKey) {
                    searchBar.classList.remove(Names.hidden);
                    (_a = searchBar.querySelector("input")) === null || _a === void 0 ? void 0 : _a.focus();
                }
            });
            searchBar.addEventListener("keyup", function (e) {
                switch (e.key) {
                    // 検索バーで Esc が押されたとき、検索バーを隠す
                    case "Escape": {
                        searchBar.classList.add(Names.hidden);
                        break;
                    }
                    // 検索バーで Enter が押されたとき、検索を開始する
                    case "Enter": {
                        startSearch(100);
                        break;
                    }
                }
            });
            // 検索バーの入力が更新されたとき、遅延検索を開始する
            searchInput.addEventListener("input", function () {
                startSearch(inputWaitInterval);
            });
            target = (_c = document.body.querySelector("#".concat(ExternalNames.chatinput))) !== null && _c !== void 0 ? _c : error(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\u5BFE\u8C61\u8981\u7D20\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002"], ["\u5BFE\u8C61\u8981\u7D20\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002"])));
            (_d = target.parentElement) === null || _d === void 0 ? void 0 : _d.insertBefore(searchBar, target.nextSibling);
            return [2 /*return*/];
        });
    });
}
function asyncMain() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, waitElementLoaded()];
                case 1:
                    _a.sent();
                    if (window.map == null) {
                        console.error("map が見つかりませんでした。");
                        return [2 /*return*/];
                    }
                    addStyle(css);
                    return [4 /*yield*/, setupSearchBar({ mainMap: window.map })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function main() {
    handleAsyncError(asyncMain());
}
var templateObject_1;

;// CONCATENATED MODULE: ./source/iitc-plugin-quick-jump.user.ts
window["_iitc-plugin-quick-jump-eda40d4e-89a9-41da-93c3-fbceb60f6a2a"] =
    iitc_plugin_quick_jump_namespaceObject;
// 文字列化され、ドキュメントに注入されるラッパー関数
// このため、通常のクロージャーのルールはここでは適用されない
function wrapper(plugin_info) {
    var _a;
    // window.plugin が存在することを確認する
    if (typeof window.plugin !== "function") {
        window.plugin = function () {
            // マーカー関数
        };
    }
    // メタデータを追加する
    plugin_info.dateTimeVersion = "20220328000000";
    plugin_info.pluginId = "quick-jump";
    // setup 内で IITC はロード済みと仮定できる
    var setup = function setup() {
        var pluginModule = window["_iitc-plugin-quick-jump-eda40d4e-89a9-41da-93c3-fbceb60f6a2a"];
        if (pluginModule == null) {
            console.error("".concat(plugin_info.pluginId, ": \u30E1\u30A4\u30F3\u30E2\u30B8\u30E5\u30FC\u30EB\u304C\u8AAD\u307F\u8FBC\u307E\u308C\u3066\u3044\u307E\u305B\u3093\u3002"));
            return;
        }
        pluginModule.main();
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