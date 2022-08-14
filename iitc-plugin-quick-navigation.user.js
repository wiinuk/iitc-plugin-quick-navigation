
// ==UserScript==
// @id           iitc-plugin-quick-navigation@wiinuk
// @name         IITC plugin: Quick navigation
// @category     Controls
// @namespace    https://github.com/wiinuk/iitc-plugin-quick-navigation
// @downloadURL  https://github.com/wiinuk/iitc-plugin-quick-navigation/raw/master/iitc-plugin-quick-navigation.user.js
// @updateURL    https://github.com/wiinuk/iitc-plugin-quick-navigation/raw/master/iitc-plugin-quick-navigation.user.js
// @homepageURL  https://github.com/wiinuk/iitc-plugin-quick-navigation
// @version      0.2.0
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

// NAMESPACE OBJECT: ./source/iitc-plugin-quick-navigation.tsx
var iitc_plugin_quick_navigation_namespaceObject = {};
__webpack_require__.r(iitc_plugin_quick_navigation_namespaceObject);
__webpack_require__.d(iitc_plugin_quick_navigation_namespaceObject, {
  "main": () => (main)
});

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
function error(template) {
    var substitutions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        substitutions[_i - 1] = arguments[_i];
    }
    var message = String.raw.apply(String, __spreadArray([template], __read(substitutions.map(function (x) {
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
var jsx_runtime_read = (undefined && undefined.__read) || function (o, n) {
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

var knownSvgTagNames = [
    "a",
    "animate",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "metadata",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "script",
    "set",
    "stop",
    "style",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "title",
    "tspan",
    "use",
    "view",
];
var knownSvgTagNamesSet = new Set(knownSvgTagNames);
assertTrue();
function jsxs(name, properties, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
_option) {
    var e_1, _a, e_2, _b;
    var element = knownSvgTagNamesSet.has(name)
        ? document.createElementNS("http://www.w3.org/2000/svg", name)
        : document.createElement(name);
    try {
        for (var _c = __values(Object.entries(properties !== null && properties !== void 0 ? properties : {})), _d = _c.next(); !_d.done; _d = _c.next()) {
            var _e = jsx_runtime_read(_d.value, 2), key = _e[0], value = _e[1];
            if (key === "children")
                continue;
            if (key === "style" && typeof value === "function") {
                value(element.style);
                continue;
            }
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
var document_extensions_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
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
        : String.raw.apply(String, document_extensions_spreadArray([cssOrTemplate], document_extensions_read(substitutions), false));
    if (styleElement == null) {
        styleElement = document.createElement("style");
        document.head.appendChild(styleElement);
    }
    styleElement.textContent += css + "\n";
    document.head.appendChild(styleElement);
}

;// CONCATENATED MODULE: ./source/undo-list.ts
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
var undo_list_read = (undefined && undefined.__read) || function (o, n) {
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
var undo_list_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var undo_list_values = (undefined && undefined.__values) || function(o) {
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
function create(_a) {
    var _b;
    var _c = _a === void 0 ? {} : _a, undoList = _c.undoList, redoList = _c.redoList;
    return {
        items: undo_list_spreadArray(undo_list_spreadArray([], undo_list_read((undoList !== null && undoList !== void 0 ? undoList : [])), false), undo_list_read((redoList !== null && redoList !== void 0 ? redoList : [])), false),
        index: (_b = undoList === null || undoList === void 0 ? void 0 : undoList.length) !== null && _b !== void 0 ? _b : 0,
    };
}
function add(_a, item) {
    var items = _a.items, index = _a.index;
    return {
        items: undo_list_spreadArray(undo_list_spreadArray([], undo_list_read(items.slice(0, index + 1)), false), [item], false),
        index: Math.min(index + 1, items.length),
    };
}
function undo(_a) {
    var items = _a.items, index = _a.index;
    return {
        items: items,
        index: Math.max(index - 1, 0),
    };
}
function redo(_a) {
    var items = _a.items, index = _a.index;
    return {
        items: items,
        index: Math.min(index + 1, items.length - 1),
    };
}
function currentItem(_a) {
    var items = _a.items, index = _a.index;
    return items[index];
}
function find(_a, predicate) {
    var e_1, _b;
    var items = _a.items;
    try {
        for (var items_1 = undo_list_values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
            var x = items_1_1.value;
            if (predicate(x)) {
                return true;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (items_1_1 && !items_1_1.done && (_b = items_1.return)) _b.call(items_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return false;
}
function allItems(_a) {
    var items = _a.items;
    return items;
}
function previousItems(_a) {
    var i;
    var items = _a.items, index = _a.index;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                i = 0;
                _b.label = 1;
            case 1:
                if (!(i < index)) return [3 /*break*/, 4];
                return [4 /*yield*/, items[i]];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
function nextItems(_a) {
    var i;
    var items = _a.items, index = _a.index;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                i = index + 1;
                _b.label = 1;
            case 1:
                if (!(i < items.length)) return [3 /*break*/, 4];
                return [4 /*yield*/, items[i]];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}

;// CONCATENATED MODULE: ./source/iitc-plugin-quick-navigation.tsx
var iitc_plugin_quick_navigation_extends = (undefined && undefined.__extends) || (function () {
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
var iitc_plugin_quick_navigation_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
var iitc_plugin_quick_navigation_values = (undefined && undefined.__values) || function(o) {
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
var iitc_plugin_quick_navigation_read = (undefined && undefined.__read) || function (o, n) {
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
var iitc_plugin_quick_navigation_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

// spell-checker: ignore moveend onenote



var L = window.L;
function handleAsyncError(promise) {
    promise.catch(function (error) { return console.error(error); });
}
var namespace = "iitc-plugin-quick-navigation";
var Names = Object.freeze({
    hidden: "".concat(namespace, "-hidden"),
    searchBar: "".concat(namespace, "-search-bar"),
    toastList: "".concat(namespace, "-toast-list"),
    toastItem: "".concat(namespace, "-toast-item"),
    dragOver: "".concat(namespace, "-drag-over"),
    mainPinPopup: "".concat(namespace, "-main-pin-popup"),
    oneNoteLoginButton: "".concat(namespace, "-one-note-login-button"),
    navigation: "".concat(namespace, "-navigation"),
    navigationIcons: "".concat(namespace, "-navigation-icons"),
    historyLineHead: "".concat(namespace, "-history-line-head"),
});
var materialSymbols = Object.freeze({
    arrow_back: "\ue5c4",
    arrow_forward: "\ue5c8",
});
var css = "\n    @import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n\n    .".concat(Names.navigation, " {\n        width: 100%;\n    }\n\n    ul.").concat(Names.navigationIcons, " {\n        display: table;\n        padding: 0;\n    }\n    ul.").concat(Names.navigationIcons, " > li {\n        display: table-cell;\n        text-align: center;\n        vertical-align: middle;\n    }\n    ul.").concat(Names.navigationIcons, " > li > button {\n        font-family: \"Material Icons\";\n        width: 1.5rem;\n        height: 1.5rem;\n        margin: 0.3rem;\n        padding: 0;\n        background: #fff;\n        border-radius: 50%;\n        box-shadow: 0 0 0 1px #ccc;\n        border: none;\n    }\n\n    .").concat(Names.searchBar, " {\n        background: rgba(8, 48, 78, 0.9);\n        border: 1px solid #20A8B1;\n    }\n    .").concat(Names.searchBar, " input {\n        width: 100%;\n    }\n    .").concat(Names.hidden, " {\n        display: none;\n    }\n    .").concat(Names.toastList, " {\n        list-style: none;\n        padding: 0;\n    }\n    .").concat(Names.toastItem, ":first-of-type {\n        border-top: 1px solid #ddd;\n    }\n    .").concat(Names.toastItem, " {\n        background-color: white;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-top: 1px dashed #ccc;\n        margin: 0 0.5em;\n        padding: 0.1em;\n        box-shadow: 0 2px 2px rgb(0 0 0 / 50%);\n    }\n    .").concat(Names.toastItem, " > input {\n        width: 100%;\n        color: #444;\n        background: rgba(0 0 0 / 0%);\n    }\n    .").concat(Names.dragOver, " {\n        background: #ddd;\n    }\n    .").concat(Names.mainPinPopup, " {\n        text-align: center;\n    }\n    .").concat(Names.oneNoteLoginButton, " {\n        background: #20A8B1;\n        color: white;\n        padding: 0.5rem;\n        border-radius: 0.3rem;\n        box-shadow: 0 0 0.5rem black;\n    }\n");
var nextId = 0;
function uniqueId(name) {
    return "".concat(name, "-").concat(++nextId);
}
function parseCoordinate(searchText) {
    var _a, _b;
    var match = searchText.match(/(?<latitude>\d+(\.\d*)?)(\s+|\s*,\s*)(?<longitude>\d+(\.\d*)?)/);
    var latitude = (_a = match === null || match === void 0 ? void 0 : match.groups) === null || _a === void 0 ? void 0 : _a["latitude"];
    var longitude = (_b = match === null || match === void 0 ? void 0 : match.groups) === null || _b === void 0 ? void 0 : _b["longitude"];
    if (!latitude || !longitude) {
        return null;
    }
    return { lat: parseFloat(latitude), lng: parseFloat(longitude) };
}
function suggestionListItem(suggestion) {
    switch (suggestion.type) {
        case "coordinate": {
            var _a = suggestion.coordinate, lat = _a.lat, lng = _a.lng;
            return (jsx("li", __assign({ class: Names.toastItem }, { children: jsx("input", { value: "".concat(lat, ",").concat(lng) }) })));
        }
    }
}
function moveTo(navigation, coordinate) {
    navigation.mainPinPopup.setContent(jsxs("div", __assign({ class: Names.mainPinPopup }, { children: [coordinate.lat, ", ", coordinate.lng] })));
    navigation.mainPin
        .setOpacity(1)
        .setLatLng(coordinate)
        .setPopupContent("".concat(coordinate.lat, ", ").concat(coordinate.lng));
    navigation.parentMap.setView(coordinate);
}
function waitAndSuggestLocations(navigation, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var searchInput, value;
        return iitc_plugin_quick_navigation_generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    searchInput = navigation.searchInput;
                    // しばらく待ってから
                    return [4 /*yield*/, sleep((_a = options === null || options === void 0 ? void 0 : options.inputWaitInterval) !== null && _a !== void 0 ? _a : navigation.inputWaitInterval, options)];
                case 1:
                    // しばらく待ってから
                    _b.sent();
                    value = searchInput.value;
                    return [2 /*return*/, suggestLocations(navigation, value, options)];
            }
        });
    });
}
function suggestLocations(navigation, command, options) {
    return __awaiter(this, void 0, void 0, function () {
        var coordinate;
        return iitc_plugin_quick_navigation_generator(this, function (_a) {
            coordinate = parseCoordinate(command);
            if (coordinate) {
                setSuggestions(navigation, [{ type: "coordinate", coordinate: coordinate }]);
            }
            return [2 /*return*/];
        });
    });
}
function waitAndStartNavigation(navigation, options) {
    return __awaiter(this, void 0, void 0, function () {
        var searchInput, value;
        return iitc_plugin_quick_navigation_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    searchInput = navigation.searchInput;
                    // しばらく待ってから
                    return [4 /*yield*/, sleep(100, options)];
                case 1:
                    // しばらく待ってから
                    _a.sent();
                    value = searchInput.value;
                    return [2 /*return*/, startNavigation(navigation, value, options)];
            }
        });
    });
}
function startNavigation(navigation, command, options) {
    return __awaiter(this, void 0, void 0, function () {
        var coordinate;
        return iitc_plugin_quick_navigation_generator(this, function (_a) {
            coordinate = parseCoordinate(command);
            if (coordinate) {
                addCoordinateToHistory(navigation, coordinate);
                moveTo(navigation, coordinate);
            }
            return [2 /*return*/];
        });
    });
}
function setSuggestions(_a, suggestions) {
    var e_1, _b;
    var outputList = _a.outputList;
    outputList.innerHTML = "";
    try {
        for (var suggestions_1 = iitc_plugin_quick_navigation_values(suggestions), suggestions_1_1 = suggestions_1.next(); !suggestions_1_1.done; suggestions_1_1 = suggestions_1.next()) {
            var suggestion = suggestions_1_1.value;
            outputList.append(suggestionListItem(suggestion));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (suggestions_1_1 && !suggestions_1_1.done && (_b = suggestions_1.return)) _b.call(suggestions_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function updateHistoryLine(_a) {
    var history = _a.history, historyPolyline = _a.historyPolyline, parentMap = _a.parentMap;
    console.log(JSON.stringify(iitc_plugin_quick_navigation_spreadArray([], iitc_plugin_quick_navigation_read(allItems(history)), false)));
    var coordinates = iitc_plugin_quick_navigation_spreadArray([], iitc_plugin_quick_navigation_read(allItems(history)), false);
    insertMidCoordinates(parentMap, coordinates, 60);
    historyPolyline.setLatLngs(coordinates);
    console.log(historyPolyline);
}
function addCoordinateToHistory(navigation, coordinate) {
    navigation.history = add(navigation.history, coordinate);
    updateHistoryLine(navigation);
}
function getPrivateMapRootElement(map) {
    return map.getContainer().querySelector("svg");
}
function getPrivatePathElement(path) {
    var e = path._path;
    return e != null && e instanceof SVGPathElement ? e : null;
}
function distanceMeter(a, b) {
    return L.latLng(a).distanceTo(L.latLng(b));
}
function insertMidCoordinates(map, coordinates, spacingPixel) {
    console.log(JSON.stringify(coordinates));
    for (var i = 1; i < coordinates.length; ++i) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        var c0 = coordinates[i - 1];
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        var c1 = coordinates[i];
        var p0 = map.project(c0);
        var p1 = map.project(c1);
        console.log("".concat(i, ": ").concat(JSON.stringify({ p0: p0, p1: p1 })));
        var dx = p1.x - p0.x, dy = p1.y - p0.y;
        var d = Math.sqrt(dx * dx + dy * dy);
        var count = Math.floor(d / spacingPixel);
        dx /= count;
        dy /= count;
        console.log("".concat(i, ": ").concat(JSON.stringify({ d: d, count: count })));
        for (var j = count - 1; j > 0; --j) {
            var px = p0.x + dx * j + Math.random() * spacingPixel * 0.1;
            var py = p0.y + dy * j + Math.random() * spacingPixel * 0.1;
            var c = map.unproject([px, py]);
            coordinates.splice(i, 0, c);
        }
        if (count > 0) {
            i += count - 1;
        }
    }
    console.log(JSON.stringify(coordinates));
}
var Navigation = /** @class */ (function (_super) {
    iitc_plugin_quick_navigation_extends(Navigation, _super);
    function Navigation(options, settings) {
        var _this = _super.call(this, options) || this;
        _this.settings = settings;
        _this.history = create();
        return _this;
    }
    Navigation.prototype.onAdd = function (parentMap) {
        var _this = this;
        var _a;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var navigation = this;
        var settings = this.settings;
        this.inputWaitInterval = settings.inputWaitInterval;
        this.locationUpdateWaitInterval = settings.locationUpdateWaitInterval;
        var searchInput = (jsx("input", {}));
        var outputList = jsx("ul", { class: Names.toastList });
        var searchBar = jsx("div", __assign({ class: Names.searchBar }, { children: searchInput }));
        var leftArrowButton = jsx("button", { children: materialSymbols.arrow_back });
        var rightArrowButton = (jsx("button", { children: materialSymbols.arrow_forward }));
        var navigationElement = (jsx("div", __assign({ class: Names.navigation }, { children: jsxs("ul", __assign({ class: Names.navigationIcons }, { children: [jsx("li", { children: leftArrowButton }), jsx("li", { children: rightArrowButton }), jsx("li", { children: jsxs("div", { children: [searchBar, outputList] }) })] })) })));
        var headId = uniqueId(Names.historyLineHead);
        (_a = getPrivateMapRootElement(parentMap)) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement("beforeend", jsx("defs", { children: jsx("marker", __assign({ id: headId, markerWidth: "4", markerHeight: "4", orient: "auto", refY: "2" }, { children: jsx("path", { d: "M0,0 L4,2 0,4", stroke: "burlywood", "stroke-width": "0.5", fill: "none" }) })) }));
        this.parentMap = parentMap;
        this.searchInput = searchInput;
        this.outputList = outputList;
        this.historyPolyline = L.polyline([], {
            weight: 5,
            fill: false,
            stroke: false,
            color: "black",
            className: "history-polyline",
        }).addTo(parentMap);
        {
            var e = getPrivatePathElement(this.historyPolyline);
            e === null || e === void 0 ? void 0 : e.setAttribute("stroke-width", "5");
            e === null || e === void 0 ? void 0 : e.setAttribute("marker-start", "url(#".concat(headId, ")"));
            e === null || e === void 0 ? void 0 : e.setAttribute("marker-mid", "url(#".concat(headId, ")"));
            e === null || e === void 0 ? void 0 : e.setAttribute("marker-end", "url(#".concat(headId, ")"));
        }
        this.mainPinPopup = L.popup();
        this.mainPin = L.marker([0, 0], {
            opacity: 0,
        })
            .addTo(parentMap)
            .on("click", function () {
            _this.mainPinPopup
                .setLatLng(_this.mainPin.getLatLng())
                .openOn(_this.parentMap);
        });
        var searchBarHandler = createAsyncCancelScope(handleAsyncError);
        function updateSuggestions(inputWaitInterval) {
            searchBarHandler(function (signal) {
                return waitAndSuggestLocations(navigation, {
                    inputWaitInterval: inputWaitInterval,
                    signal: signal,
                });
            });
        }
        function startNavigation() {
            searchBarHandler(function (signal) {
                return waitAndStartNavigation(navigation, { signal: signal });
            });
        }
        // ドキュメントで Ctrl + Q キーが押されたとき、表示しフォーカスを当てる
        document.addEventListener("keyup", function (e) {
            if (e.key === "q" && e.ctrlKey) {
                navigationElement.classList.remove(Names.hidden);
                searchInput.focus();
                searchInput.select();
            }
        });
        searchBar.addEventListener("keyup", function (e) {
            switch (e.key) {
                // 検索バーで Esc が押されたとき、隠す
                case "Escape": {
                    navigationElement.classList.add(Names.hidden);
                    break;
                }
                // 検索バーで Enter が押されたとき、検索を開始する
                case "Enter": {
                    startNavigation();
                    break;
                }
            }
        });
        // 戻るボタンが押されたとき
        leftArrowButton.addEventListener("click", function () {
            navigation.history = undo(navigation.history);
            var coordinate = currentItem(navigation.history);
            if (coordinate) {
                moveTo(navigation, coordinate);
            }
        });
        // 進むボタンが押されたとき
        rightArrowButton.addEventListener("click", function () {
            navigation.history = redo(navigation.history);
            var coordinate = currentItem(navigation.history);
            if (coordinate) {
                moveTo(navigation, coordinate);
            }
        });
        // 検索バーの入力が更新されたとき、補完後補表示を開始する
        searchInput.addEventListener("input", function () {
            updateSuggestions(_this.inputWaitInterval);
        });
        // 主地図が移動し終わったとき、現在地を更新する
        var locationAsyncScope = createAsyncCancelScope(handleAsyncError);
        parentMap.addEventListener("moveend", function () {
            locationAsyncScope(function (signal) { return __awaiter(_this, void 0, void 0, function () {
                var coordinate;
                var _this = this;
                return iitc_plugin_quick_navigation_generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, sleep(this.locationUpdateWaitInterval, { signal: signal })];
                        case 1:
                            _a.sent();
                            coordinate = parentMap.getCenter();
                            if (!find(navigation.history, function (item) {
                                return distanceMeter(item, coordinate) <
                                    _this.settings.minAutoSaveHistoryDistance;
                            })) {
                                addCoordinateToHistory(navigation, coordinate);
                            }
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        addCoordinateToHistory(navigation, parentMap.getCenter());
        return navigationElement;
    };
    return Navigation;
}(L.Control));
function asyncMain() {
    return __awaiter(this, void 0, void 0, function () {
        return iitc_plugin_quick_navigation_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, waitElementLoaded()];
                case 1:
                    _a.sent();
                    if (window.map == null) {
                        console.error("map が見つかりませんでした。");
                        return [2 /*return*/];
                    }
                    L.version;
                    L.Icon.Default.imagePath = "https://unpkg.com/leaflet@".concat(L.version, "/dist/images/");
                    addStyle(css);
                    new Navigation({ position: "topleft" }, {
                        inputWaitInterval: 3000,
                        locationUpdateWaitInterval: 3000,
                        minAutoSaveHistoryDistance: 1,
                    }).addTo(window.map);
                    return [2 /*return*/];
            }
        });
    });
}
function main() {
    handleAsyncError(asyncMain());
}

;// CONCATENATED MODULE: ./source/iitc-plugin-quick-navigation.user.ts
window["_iitc-plugin-quick-navigation-eda40d4e-89a9-41da-93c3-fbceb60f6a2a"] =
    iitc_plugin_quick_navigation_namespaceObject;
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
    plugin_info.pluginId = "quick-navigation";
    // setup 内で IITC はロード済みと仮定できる
    var setup = function setup() {
        var pluginModule = window["_iitc-plugin-quick-navigation-eda40d4e-89a9-41da-93c3-fbceb60f6a2a"];
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