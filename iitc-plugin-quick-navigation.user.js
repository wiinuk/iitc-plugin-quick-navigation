
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

;// CONCATENATED MODULE: ./source/json-spec.ts
var json_spec_extends = (undefined && undefined.__extends) || (function () {
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
var json_spec_values = (undefined && undefined.__values) || function(o) {
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
var json_spec_read = (undefined && undefined.__read) || function (o, n) {
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
var json_spec_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var internalPathCache = [];
var Spec = /** @class */ (function () {
    function Spec() {
    }
    Spec.prototype.validate = function (value) {
        try {
            this._internal_validateCore(value, internalPathCache);
        }
        finally {
            internalPathCache.length = 0;
        }
    };
    return Spec;
}());

function showObject(value) {
    var _a;
    return (_a = JSON.stringify(value)) !== null && _a !== void 0 ? _a : String(value);
}
function showFullObjectPath(path) {
    var e_1, _a;
    var result = "$";
    try {
        for (var path_1 = json_spec_values(path), path_1_1 = path_1.next(); !path_1_1.done; path_1_1 = path_1.next()) {
            var x = path_1_1.value;
            result += "." + String(x);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (path_1_1 && !path_1_1.done && (_a = path_1.return)) _a.call(path_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
function exprOrWrapRaw(expr, exprPrecedence, minPrecedence) {
    return exprPrecedence < minPrecedence ? "(".concat(expr, ")") : expr;
}
function exprOrWrap(s, minPrecedence) {
    return exprOrWrapRaw(s._internal_typeExpression, s._internal_typeExpressionPrecedence, minPrecedence);
}
function showTypeMismatchMessage(expectedType, typePrecedence, actualValue, path) {
    return "Expected ".concat(exprOrWrapRaw(expectedType, typePrecedence, 2 /* Array */), ". actual: ").concat(showObject(actualValue), ". at: ").concat(showFullObjectPath(path));
}
function showPropertyNotFoundMessage(expectedKey, path) {
    return "Expected property \"".concat(expectedKey, "\". at: ").concat(showFullObjectPath(path));
}
var ValidationError = /** @class */ (function (_super) {
    json_spec_extends(ValidationError, _super);
    function ValidationError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = ValidationError.name;
        return _this;
    }
    return ValidationError;
}(Error));
var string = new (/** @class */ (function (_super) {
    json_spec_extends(StringSpec, _super);
    function StringSpec() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._internal_typeExpression = "string";
        _this._internal_typeExpressionPrecedence = 3 /* Primary */;
        _this.imitation = "";
        return _this;
    }
    StringSpec.prototype._internal_validateCore = function (value, path) {
        if (typeof value !== "string") {
            throw new ValidationError(showTypeMismatchMessage(this._internal_typeExpression, this._internal_typeExpressionPrecedence, value, path));
        }
    };
    return StringSpec;
}(Spec)))();
var number = new (/** @class */ (function (_super) {
    json_spec_extends(NumberSpec, _super);
    function NumberSpec() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._internal_typeExpression = "number";
        _this._internal_typeExpressionPrecedence = 3 /* Primary */;
        _this.imitation = 0;
        return _this;
    }
    NumberSpec.prototype._internal_validateCore = function (value, path) {
        if (typeof value !== "number") {
            throw new ValidationError(showTypeMismatchMessage(this._internal_typeExpression, this._internal_typeExpressionPrecedence, value, path));
        }
    };
    return NumberSpec;
}(Spec)))();
var json_spec_hasOwnProperty = Object.prototype.hasOwnProperty;
var RecordSpec = /** @class */ (function (_super) {
    json_spec_extends(RecordSpec, _super);
    function RecordSpec(specs) {
        var _this = _super.call(this) || this;
        _this._internal_typeExpressionPrecedence = 3 /* Primary */;
        _this._specs = __assign({}, specs);
        return _this;
    }
    Object.defineProperty(RecordSpec.prototype, "imitation", {
        get: function () {
            var result = Object.create(null);
            var specs = this._specs;
            for (var key in specs) {
                if (json_spec_hasOwnProperty.call(specs, key)) {
                    result[key] = specs[key].imitation;
                }
            }
            return result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RecordSpec.prototype, "_internal_typeExpression", {
        get: function () {
            var specs = this._specs;
            var properties = [];
            for (var key in specs) {
                if (json_spec_hasOwnProperty.call(specs, key)) {
                    properties.push("".concat(key, ": ").concat(specs[key]._internal_typeExpression));
                }
            }
            return "{ ".concat(properties.join(", "), " }");
        },
        enumerable: false,
        configurable: true
    });
    RecordSpec.prototype._internal_validateCore = function (value, path) {
        if (typeof value !== "object" || value === null) {
            throw new ValidationError(showTypeMismatchMessage(this._internal_typeExpression, this._internal_typeExpressionPrecedence, value, path));
        }
        var specs = this._specs;
        for (var key in specs) {
            if (!(key in value)) {
                throw new ValidationError(showPropertyNotFoundMessage(key, path));
            }
            var x = specs[key];
            path.push(key);
            x._internal_validateCore(value[key], path);
            path.pop();
        }
    };
    return RecordSpec;
}(Spec));
function record(propertySpecs) {
    return new RecordSpec(propertySpecs);
}
var object = new (/** @class */ (function (_super) {
    json_spec_extends(ObjectSpec, _super);
    function ObjectSpec() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.imitation = Object.freeze({});
        _this._internal_typeExpression = "object";
        _this._internal_typeExpressionPrecedence = 3 /* Primary */;
        return _this;
    }
    ObjectSpec.prototype._internal_validateCore = function (value, path) {
        if (typeof value !== "object" || value === null) {
            throw new ValidationError(showTypeMismatchMessage(this._internal_typeExpression, this._internal_typeExpressionPrecedence, value, path));
        }
    };
    return ObjectSpec;
}(Spec)))();
var emptyRecord = new (/** @class */ (function (_super) {
    json_spec_extends(EmptyRecordSpec, _super);
    function EmptyRecordSpec() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.imitation = Object.freeze({});
        _this._internal_typeExpression = "Record<string, undefined>";
        _this._internal_typeExpressionPrecedence = 3 /* Primary */;
        return _this;
    }
    EmptyRecordSpec.prototype._internal_validateCore = function (value, path) {
        if (typeof value !== "object" || value === null) {
            throw new ValidationError(showTypeMismatchMessage(this._internal_typeExpression, this._internal_typeExpressionPrecedence, value, path));
        }
        for (var _ in value) {
            throw new ValidationError(showTypeMismatchMessage(this._internal_typeExpression, this._internal_typeExpressionPrecedence, value, path));
        }
    };
    return EmptyRecordSpec;
}(Spec)))();
var ArraySpec = /** @class */ (function (_super) {
    json_spec_extends(ArraySpec, _super);
    function ArraySpec(_elementSpec) {
        var _this = _super.call(this) || this;
        _this._elementSpec = _elementSpec;
        _this._internal_typeExpressionPrecedence = 2 /* Array */;
        return _this;
    }
    Object.defineProperty(ArraySpec.prototype, "imitation", {
        get: function () {
            return [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArraySpec.prototype, "_internal_typeExpression", {
        get: function () {
            return "".concat(exprOrWrap(this._elementSpec, 2 /* Array */), "[]");
        },
        enumerable: false,
        configurable: true
    });
    ArraySpec.prototype._internal_validateCore = function (value, path) {
        if (!Array.isArray(value)) {
            throw new ValidationError(showTypeMismatchMessage(this._internal_typeExpression, this._internal_typeExpressionPrecedence, value, path));
        }
        var elementSpec = this._elementSpec;
        for (var i = 0; i < value.length; i++) {
            path.push(i);
            elementSpec._internal_validateCore(value[i], path);
            path.pop();
        }
    };
    return ArraySpec;
}(Spec));
function array(spec) {
    return new ArraySpec(spec);
}
var OrSpec = /** @class */ (function (_super) {
    json_spec_extends(OrSpec, _super);
    function OrSpec(_specs) {
        var _this = _super.call(this) || this;
        _this._specs = _specs;
        _this._internal_typeExpressionPrecedence = 0 /* Or */;
        _this.imitation = _this._specs[0]
            .imitation;
        return _this;
    }
    Object.defineProperty(OrSpec.prototype, "_internal_typeExpression", {
        get: function () {
            return this._specs.map(function (s) { return exprOrWrap(s, 0 /* Or */); }).join(" | ");
        },
        enumerable: false,
        configurable: true
    });
    OrSpec.prototype._internal_validateCore = function (value, path) {
        var e_2, _a;
        try {
            for (var _b = json_spec_values(this._specs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var spec = _c.value;
                try {
                    spec._internal_validateCore(value, path);
                    return;
                }
                catch (e) {
                    if (e instanceof Error && e.name === ValidationError.name) {
                        continue;
                    }
                    throw e;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        throw new ValidationError(showTypeMismatchMessage(this._internal_typeExpression, this._internal_typeExpressionPrecedence, value, path));
    };
    return OrSpec;
}(Spec));
function isTupleGe2(tuple) {
    return 2 <= tuple.length;
}
function isTuple1(tuple) {
    return 1 === tuple.length;
}
var never = new (/** @class */ (function (_super) {
    json_spec_extends(NeverSpec, _super);
    function NeverSpec() {
        var _this = _super.call(this) || this;
        _this._internal_typeExpression = "never";
        _this._internal_typeExpressionPrecedence = 3 /* Primary */;
        return _this;
    }
    Object.defineProperty(NeverSpec.prototype, "imitation", {
        get: function () {
            throw new Error("never");
        },
        enumerable: false,
        configurable: true
    });
    NeverSpec.prototype._internal_validateCore = function (value, path) {
        throw new ValidationError(showTypeMismatchMessage(this._internal_typeExpression, this._internal_typeExpressionPrecedence, value, path));
    };
    return NeverSpec;
}(Spec)))();
var unknown = new (/** @class */ (function (_super) {
    json_spec_extends(UnknownSpec, _super);
    function UnknownSpec() {
        var _this = _super.call(this) || this;
        _this.imitation = "unknown";
        _this._internal_typeExpression = "unknown";
        _this._internal_typeExpressionPrecedence = 3 /* Primary */;
        return _this;
    }
    UnknownSpec.prototype._internal_validateCore = function () {
        /* unknown すべての値を許可する */
    };
    return UnknownSpec;
}(Spec)))();
function or() {
    var specs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        specs[_i] = arguments[_i];
    }
    if (isTupleGe2(specs)) {
        return new OrSpec(specs);
    }
    if (isTuple1(specs)) {
        return specs[0];
    }
    return never;
}
var AndSpec = /** @class */ (function (_super) {
    json_spec_extends(AndSpec, _super);
    function AndSpec(_specs) {
        var _this = _super.call(this) || this;
        _this._specs = _specs;
        _this._internal_typeExpressionPrecedence = 1 /* And */;
        return _this;
    }
    Object.defineProperty(AndSpec.prototype, "_internal_typeExpression", {
        get: function () {
            return this._specs
                .map(function (s) { return exprOrWrap(s, 1 /* And */); })
                .join(" & ");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AndSpec.prototype, "imitation", {
        get: function () {
            return this._specs.reduce(function (result, _a) {
                var imitation = _a.imitation;
                if (imitation !== null && typeof imitation === "object") {
                    return __assign(__assign({}, result), imitation);
                }
                throw new Error("never");
            }, Object.create(null));
        },
        enumerable: false,
        configurable: true
    });
    AndSpec.prototype._internal_validateCore = function (value, path) {
        var e_3, _a;
        try {
            for (var _b = json_spec_values(this._specs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var spec = _c.value;
                spec._internal_validateCore(value, path);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    return AndSpec;
}(Spec));
function and() {
    var specs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        specs[_i] = arguments[_i];
    }
    if (isTupleGe2(specs)) {
        return new AndSpec(specs);
    }
    if (isTuple1(specs)) {
        return specs[0];
    }
    return unknown;
}
var LiteralSpec = /** @class */ (function (_super) {
    json_spec_extends(LiteralSpec, _super);
    function LiteralSpec(imitation) {
        var _this = _super.call(this) || this;
        _this.imitation = imitation;
        _this._internal_typeExpressionPrecedence = 3 /* Primary */;
        return _this;
    }
    Object.defineProperty(LiteralSpec.prototype, "_internal_typeExpression", {
        get: function () {
            return JSON.stringify(this.imitation);
        },
        enumerable: false,
        configurable: true
    });
    LiteralSpec.prototype._internal_validateCore = function (value, path) {
        if (value !== this.imitation) {
            throw new ValidationError(showTypeMismatchMessage(this._internal_typeExpression, this._internal_typeExpressionPrecedence, value, path));
        }
    };
    return LiteralSpec;
}(Spec));
function literal(value) {
    return new LiteralSpec(value);
}
function isNonEmpty(array) {
    return 0 < array.length;
}
function enumNumbers(parent) {
    var e_4, _a;
    var literalSpecs = [];
    try {
        for (var _b = json_spec_values(Object.keys(parent)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var k = _c.value;
            var value = parent[k];
            if (typeof value === "number") {
                literalSpecs.push(literal(value));
            }
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_4) throw e_4.error; }
    }
    if (!isNonEmpty(literalSpecs)) {
        throw new Error("no enum values");
    }
    return or.apply(void 0, json_spec_spreadArray([], json_spec_read(literalSpecs), false));
}

;// CONCATENATED MODULE: ./source/geocoding-jp-client.ts
var geocoding_jp_client_extends = (undefined && undefined.__extends) || (function () {
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


var ResultS = record({
    coordinate: record({
        lat: number,
        lng: number,
    }),
});
var Result = ResultS;
var XMLParseError = /** @class */ (function (_super) {
    geocoding_jp_client_extends(XMLParseError, _super);
    function XMLParseError(message, parseerror) {
        var _this = _super.call(this, message) || this;
        _this.parseerror = parseerror;
        _this.name = "XMLParseError";
        return _this;
    }
    return XMLParseError;
}(Error));
function createGeocodingJpClient() {
    return new GeocodingJpClient();
}
var GeocodingJpClient = /** @class */ (function () {
    function GeocodingJpClient() {
        var _a, _b;
        this._lastAccessMs = Date.now();
        this._accessSpanMs = 10 * 1000;
        this._parser = new DOMParser();
        this._parseerrorNamespace = (_b = (_a = this._parser
            .parseFromString("<", "text/xml")
            .getElementsByTagName("parsererror")[0]) === null || _a === void 0 ? void 0 : _a.namespaceURI) !== null && _b !== void 0 ? _b : "http://www.w3.org/1999/xhtml";
    }
    GeocodingJpClient.prototype.search = function (_a, _b) {
        var q = _a.q;
        var _c = _b === void 0 ? {} : _b, signal = _c.signal, _d = _c.cache, cache = _d === void 0 ? "force-cache" : _d, _e = _c.fetch, fetch = _e === void 0 ? globalThis.fetch : _e;
        return __awaiter(this, void 0, void 0, function () {
            var nowMs, waitSpanMs, query, url, response, responseText, document, result;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        nowMs = Date.now();
                        waitSpanMs = this._lastAccessMs + this._accessSpanMs - nowMs;
                        this._lastAccessMs = nowMs + waitSpanMs;
                        return [4 /*yield*/, sleep(waitSpanMs, { signal: signal })];
                    case 1:
                        _f.sent();
                        query = new URLSearchParams({ q: q });
                        url = "https://www.geocoding.jp/api/?".concat(query.toString());
                        return [4 /*yield*/, fetch(url, { signal: signal, cache: cache })];
                    case 2:
                        response = _f.sent();
                        if (!response.ok) {
                            throw new Error("".concat(response.status, " ").concat(response.statusText));
                        }
                        return [4 /*yield*/, response.text()];
                    case 3:
                        responseText = _f.sent();
                        document = this._parseOrThrowError(this._parser, responseText, "text/xml");
                        result = elementToJson(document.documentElement);
                        Result.validate(result);
                        return [2 /*return*/, result];
                }
            });
        });
    };
    GeocodingJpClient.prototype._parseOrThrowError = function (parser, text, type) {
        var document = parser.parseFromString(text, type);
        var parseerrorElement = this._parseerrorNamespace === "http://www.w3.org/1999/xhtml"
            ? document.getElementsByTagName("parsererror")[0]
            : document.getElementsByTagNameNS(this._parseerrorNamespace, "parsererror")[0];
        if (parseerrorElement !== undefined) {
            throw new XMLParseError(parseerrorElement.outerHTML, parseerrorElement);
        }
        return document;
    };
    return GeocodingJpClient;
}());
function elementToJson(node) {
    var children = node.children, childNodes = node.childNodes;
    if (children.length === 0 && childNodes.length === 1) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        var value = childNodes[0].nodeValue;
        if (value === null) {
            return null;
        }
        var number_1 = Number.parseFloat(value);
        if (!Number.isNaN(number_1)) {
            return number_1;
        }
        return value;
    }
    var elements = Object.create(null);
    for (var i = 0; i < children.length; i++) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        var child = children[i];
        elements[child.tagName] = elementToJson(child);
    }
    return elements;
}

;// CONCATENATED MODULE: ./source/gm-fetch.ts
var gm_fetch_makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var gm_fetch_assign = (undefined && undefined.__assign) || function () {
    gm_fetch_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return gm_fetch_assign.apply(this, arguments);
};

var gmFetch = function (input, init) {
    if (init === void 0) { init = {}; }
    function toUrl(input) {
        return input instanceof URL || typeof input === "string"
            ? input.toString()
            : input instanceof Request
                ? error(gm_fetch_templateObject_1 || (gm_fetch_templateObject_1 = gm_fetch_makeTemplateObject(["\u672A\u5B9F\u88C5: Request"], ["\u672A\u5B9F\u88C5: Request"]))) : input;
    }
    function toNoCache(requestCache) {
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
    function toResponse(_a) {
        var response = _a.response, status = _a.status, statusText = _a.statusText;
        // TODO: readyState が DONE でない場合はエラー
        var body = response;
        var responseInit = {
            // TODO: headers を取得する
            // headers: responseHeaders,
            status: status,
            statusText: statusText,
        };
        return new Response(body, responseInit);
    }
    return new Promise(function (resolve, reject) {
        var cache = init.cache, signal = init.signal;
        if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
            reject(newAbortError());
        }
        var onProgress = signal
            ? function () {
                if (signal.aborted) {
                    reject(newAbortError());
                }
            }
            : undefined;
        var onAbort = signal
            ? function () {
                reject(newAbortError());
            }
            : ignore;
        var request = {
            url: toUrl(input),
            nocache: toNoCache(cache),
            // TODO: 他のオプションを変換する
        };
        var gmXmlHttpRequest = GM.xmlHttpRequest ||
            (typeof GM_xmlhttpRequest !== "undefined" && GM_xmlhttpRequest);
        void gmXmlHttpRequest(gm_fetch_assign(gm_fetch_assign({}, request), { onabort: onAbort, onerror: reject, onload: function (response) {
                signal === null || signal === void 0 ? void 0 : signal.removeEventListener("abort", onAbort);
                resolve(toResponse(response));
            }, ontimeout: function () {
                reject(new Error("".concat(input, " \u3078\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3057\u307E\u3057\u305F")));
            }, onreadystatechange: onProgress, onprogress: onProgress }));
        signal === null || signal === void 0 ? void 0 : signal.addEventListener("abort", function () {
            reject(newAbortError());
        });
    });
};
/* harmony default export */ const gm_fetch = (gmFetch);
var gm_fetch_templateObject_1;

;// CONCATENATED MODULE: ./source/undo-list.ts
var undo_list_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
    return undo_list_generator(this, function (_b) {
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
    return undo_list_generator(this, function (_b) {
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
var iitc_plugin_quick_navigation_assign = (undefined && undefined.__assign) || function () {
    iitc_plugin_quick_navigation_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return iitc_plugin_quick_navigation_assign.apply(this, arguments);
};
var iitc_plugin_quick_navigation_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
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





function handleAsyncError(promise) {
    promise.catch(function (error) { return console.error(error); });
}
function asyncMain(_a) {
    var L = _a.L, map = _a.map;
    return iitc_plugin_quick_navigation_awaiter(this, void 0, void 0, function () {
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
                    return (jsx("li", iitc_plugin_quick_navigation_assign({ class: Names.toastItem }, { children: jsx("input", { value: "".concat(lat, ",").concat(lng) }) })));
                }
            }
        }
        function moveTo(navigation, coordinate) {
            navigation.mainPinPopup.setContent(jsxs("div", iitc_plugin_quick_navigation_assign({ class: Names.mainPinPopup }, { children: [coordinate.lat, ", ", coordinate.lng] })));
            navigation.mainPin
                .setOpacity(1)
                .setLatLng(coordinate)
                .setPopupContent("".concat(coordinate.lat, ", ").concat(coordinate.lng));
            navigation.parentMap.setView(coordinate);
        }
        function waitAndSuggestLocations(navigation, options) {
            var _a;
            return iitc_plugin_quick_navigation_awaiter(this, void 0, void 0, function () {
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
            return iitc_plugin_quick_navigation_awaiter(this, void 0, void 0, function () {
                var suggestions, coordinate, result, e_1, _a, lat, lng;
                return iitc_plugin_quick_navigation_generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            suggestions = [];
                            coordinate = parseCoordinate(command);
                            if (coordinate) {
                                suggestions.push({ type: "coordinate", coordinate: coordinate });
                            }
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, geocoding.search({ q: command }, iitc_plugin_quick_navigation_assign(iitc_plugin_quick_navigation_assign({}, options), { fetch: gm_fetch }))];
                        case 2:
                            result = _b.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _b.sent();
                            console.error(e_1);
                            return [2 /*return*/];
                        case 4:
                            _a = result.coordinate, lat = _a.lat, lng = _a.lng;
                            suggestions.push({ type: "coordinate", coordinate: { lat: lat, lng: lng } });
                            setSuggestions(navigation, suggestions);
                            return [2 /*return*/];
                    }
                });
            });
        }
        function waitAndStartNavigation(navigation, options) {
            return iitc_plugin_quick_navigation_awaiter(this, void 0, void 0, function () {
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
            return iitc_plugin_quick_navigation_awaiter(this, void 0, void 0, function () {
                var coordinate, result, coordinate_1, e_2;
                return iitc_plugin_quick_navigation_generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            coordinate = parseCoordinate(command);
                            if (coordinate) {
                                addCoordinateToHistory(navigation, coordinate);
                                moveTo(navigation, coordinate);
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, geocoding.search({ q: command }, iitc_plugin_quick_navigation_assign(iitc_plugin_quick_navigation_assign({}, options), { fetch: gm_fetch }))];
                        case 2:
                            result = _a.sent();
                            coordinate_1 = result.coordinate;
                            addCoordinateToHistory(navigation, coordinate_1);
                            moveTo(navigation, coordinate_1);
                            return [3 /*break*/, 4];
                        case 3:
                            e_2 = _a.sent();
                            console.error(e_2);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        function setSuggestions(_a, suggestions) {
            var e_3, _b;
            var outputList = _a.outputList;
            outputList.innerHTML = "";
            try {
                for (var suggestions_1 = iitc_plugin_quick_navigation_values(suggestions), suggestions_1_1 = suggestions_1.next(); !suggestions_1_1.done; suggestions_1_1 = suggestions_1.next()) {
                    var suggestion = suggestions_1_1.value;
                    outputList.append(suggestionListItem(suggestion));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (suggestions_1_1 && !suggestions_1_1.done && (_b = suggestions_1.return)) _b.call(suggestions_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        function updateHistoryLine(_a) {
            var history = _a.history, historyPolyline = _a.historyPolyline, parentMap = _a.parentMap;
            var coordinates = iitc_plugin_quick_navigation_spreadArray([], iitc_plugin_quick_navigation_read(allItems(history)), false);
            insertMidCoordinates(parentMap, coordinates, 60);
            historyPolyline.setLatLngs(coordinates);
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
            for (var i = 1; i < coordinates.length; ++i) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                var c0 = coordinates[i - 1];
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                var c1 = coordinates[i];
                var p0 = map.project(c0);
                var p1 = map.project(c1);
                var dx = p1.x - p0.x, dy = p1.y - p0.y;
                var d = Math.sqrt(dx * dx + dy * dy);
                var count = Math.floor(d / spacingPixel);
                dx /= count;
                dy /= count;
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
        }
        var namespace, Names, materialSymbols, css, nextId, geocoding, Navigation;
        return iitc_plugin_quick_navigation_generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    namespace = "iitc-plugin-quick-navigation";
                    Names = Object.freeze({
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
                    materialSymbols = Object.freeze({
                        arrow_back: "\ue5c4",
                        arrow_forward: "\ue5c8",
                    });
                    css = "\n    @import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n\n    .".concat(Names.navigation, " {\n        width: 100%;\n    }\n\n    ul.").concat(Names.navigationIcons, " {\n        display: table;\n        padding: 0;\n    }\n    ul.").concat(Names.navigationIcons, " > li {\n        display: table-cell;\n        text-align: center;\n        vertical-align: middle;\n    }\n    ul.").concat(Names.navigationIcons, " > li > button {\n        font-family: \"Material Icons\";\n        width: 1.5rem;\n        height: 1.5rem;\n        margin: 0.3rem;\n        padding: 0;\n        background: #fff;\n        border-radius: 50%;\n        box-shadow: 0 0 0 1px #ccc;\n        border: none;\n    }\n\n    .").concat(Names.searchBar, " {\n        background: rgba(8, 48, 78, 0.9);\n        border: 1px solid #20A8B1;\n    }\n    .").concat(Names.searchBar, " input {\n        width: 100%;\n    }\n    .").concat(Names.hidden, " {\n        display: none;\n    }\n    .").concat(Names.toastList, " {\n        list-style: none;\n        padding: 0;\n    }\n    .").concat(Names.toastItem, ":first-of-type {\n        border-top: 1px solid #ddd;\n    }\n    .").concat(Names.toastItem, " {\n        background-color: white;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-top: 1px dashed #ccc;\n        margin: 0 0.5em;\n        padding: 0.1em;\n        box-shadow: 0 2px 2px rgb(0 0 0 / 50%);\n    }\n    .").concat(Names.toastItem, " > input {\n        width: 100%;\n        color: #444;\n        background: rgba(0 0 0 / 0%);\n    }\n    .").concat(Names.dragOver, " {\n        background: #ddd;\n    }\n    .").concat(Names.mainPinPopup, " {\n        text-align: center;\n    }\n    .").concat(Names.oneNoteLoginButton, " {\n        background: #20A8B1;\n        color: white;\n        padding: 0.5rem;\n        border-radius: 0.3rem;\n        box-shadow: 0 0 0.5rem black;\n    }\n");
                    nextId = 0;
                    geocoding = createGeocodingJpClient();
                    Navigation = /** @class */ (function (_super) {
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
                            this.locationUpdateWaitInterval =
                                settings.locationUpdateWaitInterval;
                            var searchInput = (jsx("input", {}));
                            var outputList = jsx("ul", { class: Names.toastList });
                            var searchBar = jsx("div", iitc_plugin_quick_navigation_assign({ class: Names.searchBar }, { children: searchInput }));
                            var leftArrowButton = (jsx("button", { children: materialSymbols.arrow_back }));
                            var rightArrowButton = (jsx("button", { children: materialSymbols.arrow_forward }));
                            var navigationElement = (jsx("div", iitc_plugin_quick_navigation_assign({ class: Names.navigation }, { children: jsxs("ul", iitc_plugin_quick_navigation_assign({ class: Names.navigationIcons }, { children: [jsx("li", { children: leftArrowButton }), jsx("li", { children: rightArrowButton }), jsx("li", { children: jsxs("div", { children: [searchBar, outputList] }) })] })) })));
                            var headId = uniqueId(Names.historyLineHead);
                            (_a = getPrivateMapRootElement(parentMap)) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement("beforeend", jsx("defs", { children: jsx("marker", iitc_plugin_quick_navigation_assign({ id: headId, markerWidth: "4", markerHeight: "4", orient: "auto", refY: "2" }, { children: jsx("path", { d: "M0,0 L4,2 0,4", stroke: "burlywood", "stroke-width": "0.5", fill: "none" }) })) }));
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
                                locationAsyncScope(function (signal) { return iitc_plugin_quick_navigation_awaiter(_this, void 0, void 0, function () {
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
                    return [4 /*yield*/, waitElementLoaded()];
                case 1:
                    _b.sent();
                    L.Icon.Default.imagePath = "https://unpkg.com/leaflet@".concat(L.version, "/dist/images/");
                    addStyle(css);
                    new Navigation({ position: "topleft" }, {
                        inputWaitInterval: 3000,
                        locationUpdateWaitInterval: 3000,
                        minAutoSaveHistoryDistance: 1,
                    }).addTo(map);
                    return [2 /*return*/];
            }
        });
    });
}
function main(contentGlobal) {
    handleAsyncError(asyncMain(contentGlobal));
}

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