
// ==UserScript==
// @id           iitc-plugin-quick-jump@wiinuk
// @name         IITC plugin: Quick jump
// @category     Controls
// @namespace    https://github.com/wiinuk/iitc-plugin-quick-jump
// @downloadURL  https://github.com/wiinuk/iitc-plugin-quick-jump/raw/master/iitc-plugin-quick-jump.user.js
// @updateURL    https://github.com/wiinuk/iitc-plugin-quick-jump/raw/master/iitc-plugin-quick-jump.user.js
// @homepageURL  https://github.com/wiinuk/iitc-plugin-quick-jump
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
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
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

;// CONCATENATED MODULE: ./node_modules/exifreader/src/utils.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function getStringFromDataView(dataView, offset, length) {
    const chars = [];
    for (let i = 0; i < length && offset + i < dataView.byteLength; i++) {
        chars.push(dataView.getUint8(offset + i));
    }
    return getStringValueFromArray(chars);
}

function getUnicodeStringFromDataView(dataView, offset, length) {
    const chars = [];
    for (let i = 0; i < length && offset + i < dataView.byteLength; i += 2) {
        chars.push(dataView.getUint16(offset + i));
    }
    return getStringValueFromArray(chars);
}

function getStringValueFromArray(charArray) {
    return charArray.map((charCode) => String.fromCharCode(charCode)).join('');
}

function getCharacterArray(string) {
    return string.split('').map((character) => character.charCodeAt(0));
}

function objectAssign() {
    for (let i = 1; i < arguments.length; i++) {
        for (const property in arguments[i]) {
            arguments[0][property] = arguments[i][property];
        }
    }

    return arguments[0];
}

function deferInit(object, key, initializer) {
    let initialized = false;
    Object.defineProperty(object, key, {
        get() {
            if (!initialized) {
                initialized = true;
                Object.defineProperty(object, key, {
                    configurable: true,
                    enumerable: true,
                    value: initializer.apply(object),
                    writable: true
                });
            }
            return object[key];
        },
        configurable: true,
        enumerable: true
    });
}

function getBase64Image(image) {
    if (typeof btoa !== 'undefined') {
        // IE11- does not implement reduce on the Uint8Array prototype.
        return btoa(Array.prototype.reduce.call(new Uint8Array(image), (data, byte) => data + String.fromCharCode(byte), ''));
    }
    if (typeof Buffer === 'undefined') {
        return undefined;
    }
    if (typeof Buffer.from !== undefined) { // eslint-disable-line no-undef
        return Buffer.from(image).toString('base64'); // eslint-disable-line no-undef
    }
    return (new Buffer(image)).toString('base64'); // eslint-disable-line no-undef
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/dataview.js
class dataview_DataView {
    constructor(buffer) {
        if (bufferTypeIsUnsupported(buffer)) {
            throw new Error('DataView: Passed buffer type is unsupported.');
        }

        this.buffer = buffer;
        this.byteLength = this.buffer.length;
    }

    getUint8(offset) {
        return this.buffer.readUInt8(offset);
    }

    getUint16(offset, littleEndian) {
        if (littleEndian) {
            return this.buffer.readUInt16LE(offset);
        }
        return this.buffer.readUInt16BE(offset);
    }

    getUint32(offset, littleEndian) {
        if (littleEndian) {
            return this.buffer.readUInt32LE(offset);
        }
        return this.buffer.readUInt32BE(offset);
    }

    getInt32(offset, littleEndian) {
        if (littleEndian) {
            return this.buffer.readInt32LE(offset);
        }
        return this.buffer.readInt32BE(offset);
    }
}

function bufferTypeIsUnsupported(buffer) {
    return typeof buffer !== 'object'
        || buffer.length === undefined
        || buffer.readUInt8 === undefined
        || buffer.readUInt16LE === undefined
        || buffer.readUInt16BE === undefined
        || buffer.readUInt32LE === undefined
        || buffer.readUInt32BE === undefined
        || buffer.readInt32LE === undefined
        || buffer.readInt32BE === undefined;
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/constants.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* harmony default export */ const constants = ({
    USE_FILE: true,
    USE_JFIF: true,
    USE_PNG_FILE: true,
    USE_EXIF: true,
    USE_IPTC: true,
    USE_XMP: true,
    USE_ICC: true,
    USE_MPF: true,
    USE_THUMBNAIL: true,
    USE_TIFF: true,
    USE_JPEG: true,
    USE_PNG: true,
    USE_HEIC: true,
    USE_WEBP: true
});

;// CONCATENATED MODULE: ./node_modules/exifreader/src/tag-names-utils.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function getStringValue(value) {
    return value.map((charCode) => String.fromCharCode(charCode)).join('');
}

function getEncodedString(value) {
    if (value.length >= 8) {
        const encoding = getStringValue(value.slice(0, 8));

        if (encoding === 'ASCII\x00\x00\x00') {
            return getStringValue(value.slice(8));
        } else if (encoding === 'JIS\x00\x00\x00\x00\x00') {
            return '[JIS encoded text]';
        } else if (encoding === 'UNICODE\x00') {
            return '[Unicode encoded text]';
        } else if (encoding === '\x00\x00\x00\x00\x00\x00\x00\x00') {
            return '[Undefined encoding]';
        }
    }

    return 'Undefined';
}

function getCalculatedGpsValue(value) {
    return (value[0][0] / value[0][1]) + (value[1][0] / value[1][1]) / 60 + (value[2][0] / value[2][1]) / 3600;
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/byte-order.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const LITTLE_ENDIAN = 0x4949;
const BIG_ENDIAN = 0x4d4d;

/* harmony default export */ const byte_order = ({
    BIG_ENDIAN,
    LITTLE_ENDIAN,
    getByteOrder
});

function getByteOrder(dataView, tiffHeaderOffset) {
    if (dataView.getUint16(tiffHeaderOffset) === LITTLE_ENDIAN) {
        return LITTLE_ENDIAN;
    } else if (dataView.getUint16(tiffHeaderOffset) === BIG_ENDIAN) {
        return BIG_ENDIAN;
    }
    throw new Error('Illegal byte order value. Faulty image.');
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/image-header-tiff.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/* harmony default export */ const image_header_tiff = ({
    isTiffFile,
    findTiffOffsets
});

function isTiffFile(dataView) {
    const MIN_TIFF_DATA_BUFFER_LENGTH = 4;

    return !!dataView && (dataView.byteLength >= MIN_TIFF_DATA_BUFFER_LENGTH) && hasTiffMarker(dataView);
}

function hasTiffMarker(dataView) {
    const TIFF_ID = 0x2a;
    const TIFF_ID_OFFSET = 2;

    const littleEndian = dataView.getUint16(0) === byte_order.LITTLE_ENDIAN;
    return dataView.getUint16(TIFF_ID_OFFSET, littleEndian) === TIFF_ID;
}

function findTiffOffsets() {
    const TIFF_FILE_HEADER_OFFSET = 0;

    if (constants.USE_EXIF) {
        return {
            hasAppMarkers: true,
            tiffHeaderOffset: TIFF_FILE_HEADER_OFFSET
        };
    }
    return {};
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/image-header-jpeg.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/* harmony default export */ const image_header_jpeg = ({
    isJpegFile,
    findJpegOffsets
});

const MIN_JPEG_DATA_BUFFER_LENGTH = 2;
const JPEG_ID = 0xffd8;
const JPEG_ID_SIZE = 2;
const APP_ID_OFFSET = 4;
const APP_MARKER_SIZE = 2;
const JFIF_DATA_OFFSET = 2; // From start of APP0 marker.
const TIFF_HEADER_OFFSET = 10; // From start of APP1 marker.
const IPTC_DATA_OFFSET = 18; // From start of APP13 marker.
const XMP_DATA_OFFSET = 33; // From start of APP1 marker.
const XMP_EXTENDED_DATA_OFFSET = 79; // From start of APP1 marker including GUID, total length, and offset.
const APP2_ICC_DATA_OFFSET = 18; // From start of APP2 marker including marker and chunk/chunk total numbers.
const MPF_DATA_OFFSET = 8;

const APP2_ICC_IDENTIFIER = 'ICC_PROFILE\0';
const ICC_CHUNK_NUMBER_OFFSET = APP_ID_OFFSET + APP2_ICC_IDENTIFIER.length;
const ICC_TOTAL_CHUNKS_OFFSET = ICC_CHUNK_NUMBER_OFFSET + 1;

const APP2_MPF_IDENTIFIER = 'MPF\0';

const SOF0_MARKER = 0xffc0;
const SOF2_MARKER = 0xffc2;
const DHT_MARKER = 0xffc4;
const DQT_MARKER = 0xffdb;
const DRI_MARKER = 0xffdd;
const SOS_MARKER = 0xffda;

const APP0_MARKER = 0xffe0;
const APP1_MARKER = 0xffe1;
const APP2_MARKER = 0xffe2;
const APP13_MARKER = 0xffed;
const APP15_MARKER = 0xffef;
const COMMENT_MARKER = 0xfffe;

const APP0_JFIF_IDENTIFIER = 'JFIF';
const APP1_EXIF_IDENTIFIER = 'Exif';
const APP1_XMP_IDENTIFIER = 'http://ns.adobe.com/xap/1.0/\x00';
const APP1_XMP_EXTENDED_IDENTIFIER = 'http://ns.adobe.com/xmp/extension/\x00';
const APP13_IPTC_IDENTIFIER = 'Photoshop 3.0';

function isJpegFile(dataView) {
    return !!dataView && (dataView.byteLength >= MIN_JPEG_DATA_BUFFER_LENGTH) && (dataView.getUint16(0) === JPEG_ID);
}

function findJpegOffsets(dataView) {
    let appMarkerPosition = JPEG_ID_SIZE;
    let fieldLength;
    let sof0DataOffset;
    let sof2DataOffset;
    let jfifDataOffset;
    let tiffHeaderOffset;
    let iptcDataOffset;
    let xmpChunks;
    let iccChunks;
    let mpfDataOffset;

    while (appMarkerPosition + APP_ID_OFFSET + 5 <= dataView.byteLength) {
        if (constants.USE_FILE && isSOF0Marker(dataView, appMarkerPosition)) {
            sof0DataOffset = appMarkerPosition + APP_MARKER_SIZE;
        } else if (constants.USE_FILE && isSOF2Marker(dataView, appMarkerPosition)) {
            sof2DataOffset = appMarkerPosition + APP_MARKER_SIZE;
        } else if (constants.USE_JFIF && isApp0JfifMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            jfifDataOffset = appMarkerPosition + JFIF_DATA_OFFSET;
        } else if (constants.USE_EXIF && isApp1ExifMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            tiffHeaderOffset = appMarkerPosition + TIFF_HEADER_OFFSET;
        } else if (constants.USE_XMP && isApp1XmpMarker(dataView, appMarkerPosition)) {
            if (!xmpChunks) {
                xmpChunks = [];
            }
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            xmpChunks.push(getXmpChunkDetails(appMarkerPosition, fieldLength));
        } else if (constants.USE_XMP && isApp1ExtendedXmpMarker(dataView, appMarkerPosition)) {
            if (!xmpChunks) {
                xmpChunks = [];
            }
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            xmpChunks.push(getExtendedXmpChunkDetails(appMarkerPosition, fieldLength));
        } else if (constants.USE_IPTC && isApp13PhotoshopMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            iptcDataOffset = appMarkerPosition + IPTC_DATA_OFFSET;
        } else if (constants.USE_ICC && isApp2ICCMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            const iccDataOffset = appMarkerPosition + APP2_ICC_DATA_OFFSET;
            const iccDataLength = fieldLength - (APP2_ICC_DATA_OFFSET - APP_MARKER_SIZE);

            const iccChunkNumber = dataView.getUint8(appMarkerPosition + ICC_CHUNK_NUMBER_OFFSET);
            const iccChunksTotal = dataView.getUint8(appMarkerPosition + ICC_TOTAL_CHUNKS_OFFSET);
            if (!iccChunks) {
                iccChunks = [];
            }
            iccChunks.push({offset: iccDataOffset, length: iccDataLength, chunkNumber: iccChunkNumber, chunksTotal: iccChunksTotal});
        } else if (constants.USE_MPF && isApp2MPFMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            mpfDataOffset = appMarkerPosition + MPF_DATA_OFFSET;
        } else if (isAppMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
        } else {
            break;
        }
        appMarkerPosition += APP_MARKER_SIZE + fieldLength;
    }

    return {
        hasAppMarkers: appMarkerPosition > JPEG_ID_SIZE,
        fileDataOffset: sof0DataOffset || sof2DataOffset,
        jfifDataOffset,
        tiffHeaderOffset,
        iptcDataOffset,
        xmpChunks,
        iccChunks,
        mpfDataOffset
    };
}

function isSOF0Marker(dataView, appMarkerPosition) {
    return (dataView.getUint16(appMarkerPosition) === SOF0_MARKER);
}

function isSOF2Marker(dataView, appMarkerPosition) {
    return (dataView.getUint16(appMarkerPosition) === SOF2_MARKER);
}

function isApp2ICCMarker(dataView, appMarkerPosition) {
    const markerIdLength = APP2_ICC_IDENTIFIER.length;

    return (dataView.getUint16(appMarkerPosition) === APP2_MARKER)
        && (getStringFromDataView(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP2_ICC_IDENTIFIER);
}

function isApp2MPFMarker(dataView, appMarkerPosition) {
    const markerIdLength = APP2_MPF_IDENTIFIER.length;

    return (dataView.getUint16(appMarkerPosition) === APP2_MARKER)
        && (getStringFromDataView(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP2_MPF_IDENTIFIER);
}

function isApp0JfifMarker(dataView, appMarkerPosition) {
    const markerIdLength = APP1_EXIF_IDENTIFIER.length;

    return (dataView.getUint16(appMarkerPosition) === APP0_MARKER)
        && (getStringFromDataView(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP0_JFIF_IDENTIFIER)
        && (dataView.getUint8(appMarkerPosition + APP_ID_OFFSET + markerIdLength) === 0x00);
}

function isApp1ExifMarker(dataView, appMarkerPosition) {
    const markerIdLength = APP1_EXIF_IDENTIFIER.length;

    return (dataView.getUint16(appMarkerPosition) === APP1_MARKER)
        && (getStringFromDataView(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP1_EXIF_IDENTIFIER)
        && (dataView.getUint8(appMarkerPosition + APP_ID_OFFSET + markerIdLength) === 0x00);
}

function isApp1XmpMarker(dataView, appMarkerPosition) {
    return (dataView.getUint16(appMarkerPosition) === APP1_MARKER)
        && isXmpIdentifier(dataView, appMarkerPosition);
}

function isXmpIdentifier(dataView, appMarkerPosition) {
    const markerIdLength = APP1_XMP_IDENTIFIER.length;
    return getStringFromDataView(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP1_XMP_IDENTIFIER;
}

function isApp1ExtendedXmpMarker(dataView, appMarkerPosition) {
    return (dataView.getUint16(appMarkerPosition) === APP1_MARKER)
        && isExtendedXmpIdentifier(dataView, appMarkerPosition);
}

function isExtendedXmpIdentifier(dataView, appMarkerPosition) {
    const markerIdLength = APP1_XMP_EXTENDED_IDENTIFIER.length;
    return getStringFromDataView(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP1_XMP_EXTENDED_IDENTIFIER;
}

function getXmpChunkDetails(appMarkerPosition, fieldLength) {
    return {
        dataOffset: appMarkerPosition + XMP_DATA_OFFSET,
        length: fieldLength - (XMP_DATA_OFFSET - APP_MARKER_SIZE)
    };
}

function getExtendedXmpChunkDetails(appMarkerPosition, fieldLength) {
    return {
        dataOffset: appMarkerPosition + XMP_EXTENDED_DATA_OFFSET,
        length: fieldLength - (XMP_EXTENDED_DATA_OFFSET - APP_MARKER_SIZE)
    };
}

function isApp13PhotoshopMarker(dataView, appMarkerPosition) {
    const markerIdLength = APP13_IPTC_IDENTIFIER.length;

    return (dataView.getUint16(appMarkerPosition) === APP13_MARKER)
        && (getStringFromDataView(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP13_IPTC_IDENTIFIER)
        && (dataView.getUint8(appMarkerPosition + APP_ID_OFFSET + markerIdLength) === 0x00);
}

function isAppMarker(dataView, appMarkerPosition) {
    const appMarker = dataView.getUint16(appMarkerPosition);
    return ((appMarker >= APP0_MARKER) && (appMarker <= APP15_MARKER))
        || (appMarker === COMMENT_MARKER)
        || (appMarker === SOF0_MARKER)
        || (appMarker === SOF2_MARKER)
        || (appMarker === DHT_MARKER)
        || (appMarker === DQT_MARKER)
        || (appMarker === DRI_MARKER)
        || (appMarker === SOS_MARKER);
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/image-header-png.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/* harmony default export */ const image_header_png = ({
    isPngFile,
    findPngOffsets
});

const PNG_ID = '\x89\x50\x4e\x47\x0d\x0a\x1a\x0a';
const PNG_CHUNK_LENGTH_SIZE = 4;
const PNG_CHUNK_TYPE_SIZE = 4;
const PNG_CHUNK_LENGTH_OFFSET = 0;
const PNG_CHUNK_TYPE_OFFSET = PNG_CHUNK_LENGTH_SIZE;
const PNG_CHUNK_DATA_OFFSET = PNG_CHUNK_LENGTH_SIZE + PNG_CHUNK_TYPE_SIZE;
const PNG_XMP_PREFIX = 'XML:com.adobe.xmp\x00';

function isPngFile(dataView) {
    return !!dataView && getStringFromDataView(dataView, 0, PNG_ID.length) === PNG_ID;
}

function findPngOffsets(dataView) {
    const PNG_CRC_SIZE = 4;

    const offsets = {
        hasAppMarkers: false
    };

    let offset = PNG_ID.length;

    while (offset + PNG_CHUNK_LENGTH_SIZE + PNG_CHUNK_TYPE_SIZE <= dataView.byteLength) {
        if (constants.USE_PNG_FILE && isPngImageHeaderChunk(dataView, offset)) {
            offsets.hasAppMarkers = true;
            offsets.pngHeaderOffset = offset + PNG_CHUNK_DATA_OFFSET;
        } else if (constants.USE_XMP && isPngXmpChunk(dataView, offset)) {
            const dataOffset = getPngXmpDataOffset(dataView, offset);
            if (dataOffset !== undefined) {
                offsets.hasAppMarkers = true;
                offsets.xmpChunks = [{
                    dataOffset,
                    length: dataView.getUint32(offset + PNG_CHUNK_LENGTH_OFFSET) - (dataOffset - (offset + PNG_CHUNK_DATA_OFFSET))
                }];
            }
        }

        offset += dataView.getUint32(offset + PNG_CHUNK_LENGTH_OFFSET)
            + PNG_CHUNK_LENGTH_SIZE
            + PNG_CHUNK_TYPE_SIZE
            + PNG_CRC_SIZE;
    }

    return offsets;
}

function isPngImageHeaderChunk(dataView, offset) {
    const PNG_CHUNK_TYPE_IMAGE_HEADER = 'IHDR';
    return getStringFromDataView(dataView, offset + PNG_CHUNK_TYPE_OFFSET, PNG_CHUNK_TYPE_SIZE) === PNG_CHUNK_TYPE_IMAGE_HEADER;
}

function isPngXmpChunk(dataView, offset) {
    const PNG_CHUNK_TYPE_INTERNATIONAL_TEXT = 'iTXt';
    return (getStringFromDataView(dataView, offset + PNG_CHUNK_TYPE_OFFSET, PNG_CHUNK_TYPE_SIZE) === PNG_CHUNK_TYPE_INTERNATIONAL_TEXT)
        && (getStringFromDataView(dataView, offset + PNG_CHUNK_DATA_OFFSET, PNG_XMP_PREFIX.length) === PNG_XMP_PREFIX);
}

function getPngXmpDataOffset(dataView, offset) {
    const COMPRESSION_FLAG_SIZE = 1;
    const COMPRESSION_METHOD_SIZE = 1;

    offset += PNG_CHUNK_DATA_OFFSET + PNG_XMP_PREFIX.length + COMPRESSION_FLAG_SIZE + COMPRESSION_METHOD_SIZE;

    let numberOfNullSeparators = 0;
    while (numberOfNullSeparators < 2 && offset < dataView.byteLength) {
        if (dataView.getUint8(offset) === 0x00) {
            numberOfNullSeparators++;
        }
        offset++;
    }
    if (numberOfNullSeparators < 2) {
        return undefined;
    }
    return offset;
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/image-header-heic.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/* harmony default export */ const image_header_heic = ({
    isHeicFile,
    findHeicOffsets
});

function isHeicFile(dataView) {
    if (!dataView) {
        return false;
    }

    const HEIC_ID = 'ftyp';
    const HEIC_ID_OFFSET = 4;
    const HEIC_MAJOR_BRANDS = ['heic', 'heix', 'hevc', 'hevx', 'heim', 'heis', 'hevm', 'hevs', 'mif1'];
    const HEIC_MAJOR_BRAND_LENGTH = 4;

    const heicMajorBrand = getStringFromDataView(dataView, HEIC_ID_OFFSET + HEIC_ID.length, HEIC_MAJOR_BRAND_LENGTH);

    return (getStringFromDataView(dataView, HEIC_ID_OFFSET, HEIC_ID.length) === HEIC_ID)
        && (HEIC_MAJOR_BRANDS.indexOf(heicMajorBrand) !== -1);
}

function findHeicOffsets(dataView) {
    if (constants.USE_EXIF || constants.USE_ICC) {
        const {offset: metaOffset, length: metaLength} = findMetaAtom(dataView);
        if (metaOffset === undefined) {
            return {hasAppMarkers: false};
        }

        const metaEndOffset = Math.min(metaOffset + metaLength, dataView.byteLength);
        const {exifItemOffset, ilocOffset, colrOffset} = findMetaItems(dataView, metaOffset, metaEndOffset);

        const exifOffset = findExifOffset(dataView, exifItemOffset, ilocOffset, metaEndOffset);
        const iccChunks = findIccChunks(dataView, colrOffset, metaEndOffset);
        return {
            hasAppMarkers: (exifOffset !== undefined) || (iccChunks !== undefined),
            tiffHeaderOffset: exifOffset,
            iccChunks
        };
    }

    return {hasAppMarkers: false};
}

function findMetaAtom(dataView) {
    const ATOM_LENGTH_SIZE = 4;
    const ATOM_TYPE_SIZE = 4;
    const ATOM_MIN_LENGTH = 8;
    const ATOM_TYPE_OFFSET = 4;

    let offset = 0;

    while (offset + ATOM_LENGTH_SIZE + ATOM_TYPE_SIZE <= dataView.byteLength) {
        const atomLength = getAtomLength(dataView, offset);
        if (atomLength >= ATOM_MIN_LENGTH) {
            const atomType = getStringFromDataView(dataView, offset + ATOM_TYPE_OFFSET, ATOM_TYPE_SIZE);
            if (atomType === 'meta') {
                return {
                    offset,
                    length: atomLength
                };
            }
        }

        offset += atomLength;
    }

    return {
        offset: undefined,
        length: 0
    };
}

function getAtomLength(dataView, offset) {
    const ATOM_EXTENDED_SIZE_LOW_OFFSET = 12;

    const atomLength = dataView.getUint32(offset);
    if (extendsToEndOfFile(atomLength)) {
        return dataView.byteLength - offset;
    }
    if (hasExtendedSize(atomLength)) {
        if (hasEmptyHighBits(dataView, offset)) {
            // It's a bit tricky to handle 64 bit numbers in JavaScript. Let's
            // wait until there are real-world examples where it is necessary.
            return dataView.getUint32(offset + ATOM_EXTENDED_SIZE_LOW_OFFSET);
        }
    }

    return atomLength;
}

function extendsToEndOfFile(atomLength) {
    return atomLength === 0;
}

function hasExtendedSize(atomLength) {
    return atomLength === 1;
}

function hasEmptyHighBits(dataView, offset) {
    const ATOM_EXTENDED_SIZE_OFFSET = 8;
    return dataView.getUint32(offset + ATOM_EXTENDED_SIZE_OFFSET) === 0;
}

function findMetaItems(dataView, offset, metaEndOffset) {
    const STRING_SIZE = 4;
    const ITEM_INDEX_REL_OFFSET = -4;
    const offsets = {
        ilocOffset: undefined,
        exifItemOffset: undefined,
        colrOffset: undefined
    };

    while ((offset + STRING_SIZE <= metaEndOffset)
        && (!offsets.ilocOffset || !offsets.exifItemOffset || !offsets.colrOffset)) {
        const itemName = getStringFromDataView(dataView, offset, STRING_SIZE);
        if (constants.USE_EXIF && (itemName === 'iloc')) {
            offsets.ilocOffset = offset;
        } else if (constants.USE_EXIF && (itemName === 'Exif')) {
            offsets.exifItemOffset = offset + ITEM_INDEX_REL_OFFSET;
        } else if (constants.USE_ICC && (itemName === 'colr')) {
            offsets.colrOffset = offset + ITEM_INDEX_REL_OFFSET;
        }

        offset++;
    }

    return offsets;
}

function findExifOffset(dataView, exifItemOffset, offset, metaEndOffset) {
    const EXIF_ITEM_OFFSET_SIZE = 2;
    const ILOC_DATA_OFFSET = 12;
    const EXIF_POINTER_OFFSET = 8;
    const EXIF_POINTER_SIZE = 4;
    const EXIF_PREFIX_LENGTH_OFFSET = 4;
    const ILOC_ITEM_SIZE = 16;

    if (!offset || !exifItemOffset || (exifItemOffset + EXIF_ITEM_OFFSET_SIZE > metaEndOffset)) {
        return undefined;
    }

    const exifItemIndex = dataView.getUint16(exifItemOffset);
    offset += ILOC_DATA_OFFSET;

    while (offset + ILOC_ITEM_SIZE <= metaEndOffset) {
        const itemIndex = dataView.getUint16(offset);
        if (itemIndex === exifItemIndex) {
            const exifPointer = dataView.getUint32(offset + EXIF_POINTER_OFFSET);
            if (exifPointer + EXIF_POINTER_SIZE <= dataView.byteLength) {
                const exifOffset = dataView.getUint32(exifPointer);
                const prefixLength = exifOffset + EXIF_PREFIX_LENGTH_OFFSET;
                return exifPointer + prefixLength;
            }
        }
        offset += ILOC_ITEM_SIZE;
    }

    return undefined;
}

function findIccChunks(dataView, offset, metaEndOffset) {
    const ITEM_TYPE_OFFSET = 8;
    const ITEM_TYPE_SIZE = 4;
    const ITEM_CONTENT_OFFSET = 12;

    if (!offset || (offset + ITEM_CONTENT_OFFSET > metaEndOffset)) {
        return undefined;
    }

    const colorType = getStringFromDataView(dataView, offset + ITEM_TYPE_OFFSET, ITEM_TYPE_SIZE);
    if ((colorType !== 'prof') && (colorType !== 'rICC')) {
        return undefined;
    }

    return [{
        offset: offset + ITEM_CONTENT_OFFSET,
        length: getAtomLength(dataView, offset) - ITEM_CONTENT_OFFSET,
        chunkNumber: 1,
        chunksTotal: 1
    }];
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/image-header-webp.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/* harmony default export */ const image_header_webp = ({
    isWebpFile,
    findOffsets
});

function isWebpFile(dataView) {
    const RIFF_ID_OFFSET = 0;
    const RIFF_ID = 'RIFF';
    const WEBP_MARKER_OFFSET = 8;
    const WEBP_MARKER = 'WEBP';

    return !!dataView && getStringFromDataView(dataView, RIFF_ID_OFFSET, RIFF_ID.length) === RIFF_ID
        && getStringFromDataView(dataView, WEBP_MARKER_OFFSET, WEBP_MARKER.length) === WEBP_MARKER;
}

function findOffsets(dataView) {
    const SUB_CHUNK_START_OFFSET = 12;
    const CHUNK_SIZE_OFFSET = 4;
    const EXIF_IDENTIFIER = 'Exif\x00\x00';
    const CHUNK_HEADER_SIZE = 8;

    let offset = SUB_CHUNK_START_OFFSET;
    let hasAppMarkers = false;
    let tiffHeaderOffset;
    let xmpChunks;
    let iccChunks;

    while (offset + CHUNK_HEADER_SIZE < dataView.byteLength) {
        const chunkId = getStringFromDataView(dataView, offset, 4);
        const chunkSize = dataView.getUint32(offset + CHUNK_SIZE_OFFSET, true);

        if (constants.USE_EXIF && (chunkId === 'EXIF')) {
            hasAppMarkers = true;
            if (getStringFromDataView(dataView, offset + CHUNK_HEADER_SIZE, EXIF_IDENTIFIER.length) === EXIF_IDENTIFIER) {
                tiffHeaderOffset = offset + CHUNK_HEADER_SIZE + EXIF_IDENTIFIER.length;
            } else {
                tiffHeaderOffset = offset + CHUNK_HEADER_SIZE;
            }
        } else if (constants.USE_XMP && (chunkId === 'XMP ')) {
            hasAppMarkers = true;
            xmpChunks = [{
                dataOffset: offset + CHUNK_HEADER_SIZE,
                length: chunkSize
            }];
        } else if (constants.USE_ICC && (chunkId === 'ICCP')) {
            hasAppMarkers = true;
            iccChunks = [{
                offset: offset + CHUNK_HEADER_SIZE,
                length: chunkSize,
                chunkNumber: 1,
                chunksTotal: 1
            }];
        }

        offset += CHUNK_HEADER_SIZE + (chunkSize % 2 === 0 ? chunkSize : chunkSize + 1);
    }

    return {
        hasAppMarkers,
        tiffHeaderOffset,
        xmpChunks,
        iccChunks
    };
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/image-header.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */








/* harmony default export */ const image_header = ({
    parseAppMarkers
});

function parseAppMarkers(dataView) {
    if (constants.USE_TIFF && image_header_tiff.isTiffFile(dataView)) {
        return image_header_tiff.findTiffOffsets();
    }

    if (constants.USE_JPEG && image_header_jpeg.isJpegFile(dataView)) {
        return image_header_jpeg.findJpegOffsets(dataView);
    }

    if (constants.USE_PNG && image_header_png.isPngFile(dataView)) {
        return image_header_png.findPngOffsets(dataView);
    }

    if (constants.USE_HEIC && image_header_heic.isHeicFile(dataView)) {
        return image_header_heic.findHeicOffsets(dataView);
    }

    if (constants.USE_WEBP && image_header_webp.isWebpFile(dataView)) {
        return image_header_webp.findOffsets(dataView);
    }

    throw new Error('Invalid image format');
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/types.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



const typeSizes = {
    1: 1, // BYTE
    2: 1, // ASCII
    3: 2, // SHORT
    4: 4, // LONG
    5: 8, // RATIONAL
    7: 1, // UNDEFINED
    9: 4, // SLONG
    10: 8, // SRATIONAL
    13: 4 // IFD
};

const tagTypes = {
    'BYTE': 1,
    'ASCII': 2,
    'SHORT': 3,
    'LONG': 4,
    'RATIONAL': 5,
    'UNDEFINED': 7,
    'SLONG': 9,
    'SRATIONAL': 10,
    'IFD': 13
};

/* harmony default export */ const types = ({
    getAsciiValue,
    getByteAt,
    getAsciiAt,
    getShortAt,
    getLongAt,
    getRationalAt,
    getUndefinedAt,
    getSlongAt,
    getSrationalAt,
    getIfdPointerAt,
    typeSizes,
    tagTypes,
    getTypeSize
});

function getAsciiValue(charArray) {
    return charArray.map((charCode) => String.fromCharCode(charCode));
}

function getByteAt(dataView, offset) {
    return dataView.getUint8(offset);
}

function getAsciiAt(dataView, offset) {
    return dataView.getUint8(offset);
}

function getShortAt(dataView, offset, byteOrder) {
    return dataView.getUint16(offset, byteOrder === byte_order.LITTLE_ENDIAN);
}

function getLongAt(dataView, offset, byteOrder) {
    return dataView.getUint32(offset, byteOrder === byte_order.LITTLE_ENDIAN);
}

function getRationalAt(dataView, offset, byteOrder) {
    return [getLongAt(dataView, offset, byteOrder), getLongAt(dataView, offset + 4, byteOrder)];
}

function getUndefinedAt(dataView, offset) {
    return getByteAt(dataView, offset);
}

function getSlongAt(dataView, offset, byteOrder) {
    return dataView.getInt32(offset, byteOrder === byte_order.LITTLE_ENDIAN);
}

function getSrationalAt(dataView, offset, byteOrder) {
    return [getSlongAt(dataView, offset, byteOrder), getSlongAt(dataView, offset + 4, byteOrder)];
}

function getIfdPointerAt(dataView, offset, byteOrder) {
    return getLongAt(dataView, offset, byteOrder);
}

function getTypeSize(typeName) {
    if (tagTypes[typeName] === undefined) {
        throw new Error('No such type found.');
    }

    return typeSizes[tagTypes[typeName]];
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/tag-names-common.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* harmony default export */ const tag_names_common = ({
    'LightSource': (value) => {
        if (value === 1) {
            return 'Daylight';
        } else if (value === 2) {
            return 'Fluorescent';
        } else if (value === 3) {
            return 'Tungsten (incandescent light)';
        } else if (value === 4) {
            return 'Flash';
        } else if (value === 9) {
            return 'Fine weather';
        } else if (value === 10) {
            return 'Cloudy weather';
        } else if (value === 11) {
            return 'Shade';
        } else if (value === 12) {
            return 'Daylight fluorescent (D 5700 – 7100K)';
        } else if (value === 13) {
            return 'Day white fluorescent (N 4600 – 5400K)';
        } else if (value === 14) {
            return 'Cool white fluorescent (W 3900 – 4500K)';
        } else if (value === 15) {
            return 'White fluorescent (WW 3200 – 3700K)';
        } else if (value === 17) {
            return 'Standard light A';
        } else if (value === 18) {
            return 'Standard light B';
        } else if (value === 19) {
            return 'Standard light C';
        } else if (value === 20) {
            return 'D55';
        } else if (value === 21) {
            return 'D65';
        } else if (value === 22) {
            return 'D75';
        } else if (value === 23) {
            return 'D50';
        } else if (value === 24) {
            return 'ISO studio tungsten';
        } else if (value === 255) {
            return 'Other light source';
        }
        return 'Unknown';
    }
});

;// CONCATENATED MODULE: ./node_modules/exifreader/src/tag-names-0th-ifd.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ const tag_names_0th_ifd = ({
    0x000b: 'ProcessingSoftware',
    0x00fe: {
        name: 'SubfileType',
        description: (value) => ({
            0x0: 'Full-resolution image',
            0x1: 'Reduced-resolution image',
            0x2: 'Single page of multi-page image',
            0x3: 'Single page of multi-page reduced-resolution image',
            0x4: 'Transparency mask',
            0x5: 'Transparency mask of reduced-resolution image',
            0x6: 'Transparency mask of multi-page image',
            0x7: 'Transparency mask of reduced-resolution multi-page image',
            0x10001: 'Alternate reduced-resolution image',
            0xffffffff: 'Invalid'
        })[value] || 'Unknown'
    },
    0x00ff: {
        name: 'OldSubfileType',
        description: (value) => ({
            0: 'Full-resolution image',
            1: 'Reduced-resolution image',
            2: 'Single page of multi-page image'
        })[value] || 'Unknown'
    },
    0x0100: 'ImageWidth',
    0x0101: 'ImageLength',
    0x0102: 'BitsPerSample',
    0x0103: 'Compression',
    0x0106: 'PhotometricInterpretation',
    0x0107: {
        name: 'Thresholding',
        description: (value) => ({
            1: 'No dithering or halftoning',
            2: 'Ordered dither or halfton',
            3: 'Randomized dither'
        })[value] || 'Unknown'
    },
    0x0108: 'CellWidth',
    0x0109: 'CellLength',
    0x010a: {
        name: 'FillOrder',
        description: (value) => ({
            1: 'Normal',
            2: 'Reversed'
        })[value] || 'Unknown'
    },
    0x010d: 'DocumentName',
    0x010e: 'ImageDescription',
    0x010f: 'Make',
    0x0110: 'Model',
    0x0111: 'StripOffsets',
    0x0112: {
        name: 'Orientation',
        description: (value) => {
            if (value === 1) {
                return 'top-left';
            }
            if (value === 2) {
                return 'top-right';
            }
            if (value === 3) {
                return 'bottom-right';
            }
            if (value === 4) {
                return 'bottom-left';
            }
            if (value === 5) {
                return 'left-top';
            }
            if (value === 6) {
                return 'right-top';
            }
            if (value === 7) {
                return 'right-bottom';
            }
            if (value === 8) {
                return 'left-bottom';
            }
            return 'Undefined';
        }
    },
    0x0115: 'SamplesPerPixel',
    0x0116: 'RowsPerStrip',
    0x0117: 'StripByteCounts',
    0x0118: 'MinSampleValue',
    0x0119: 'MaxSampleValue',
    0x011a: {
        'name': 'XResolution',
        'description': (value) => {
            return '' + Math.round(value[0] / value[1]);
        }
    },
    0x011b: {
        'name': 'YResolution',
        'description': (value) => {
            return '' + Math.round(value[0] / value[1]);
        }
    },
    0x011c: 'PlanarConfiguration',
    0x011d: 'PageName',
    0x011e: {
        'name': 'XPosition',
        'description': (value) => {
            return '' + Math.round(value[0] / value[1]);
        }
    },
    0x011f: {
        'name': 'YPosition',
        'description': (value) => {
            return '' + Math.round(value[0] / value[1]);
        }
    },
    0x0122: {
        name: 'GrayResponseUnit',
        description: (value) => ({
            1: '0.1',
            2: '0.001',
            3: '0.0001',
            4: '1e-05',
            5: '1e-06'
        })[value] || 'Unknown'
    },
    0x0128: {
        name: 'ResolutionUnit',
        description: (value) => {
            if (value === 2) {
                return 'inches';
            }
            if (value === 3) {
                return 'centimeters';
            }
            return 'Unknown';
        }
    },
    0x0129: 'PageNumber',
    0x012d: 'TransferFunction',
    0x0131: 'Software',
    0x0132: 'DateTime',
    0x013b: 'Artist',
    0x013c: 'HostComputer',
    0x013d: 'Predictor',
    0x013e: {
        'name': 'WhitePoint',
        'description': (values) => {
            return values.map((value) => `${value[0]}/${value[1]}`).join(', ');
        }
    },
    0x013f: {
        'name': 'PrimaryChromaticities',
        'description': (values) => {
            return values.map((value) => `${value[0]}/${value[1]}`).join(', ');
        }
    },
    0x0141: 'HalftoneHints',
    0x0142: 'TileWidth',
    0x0143: 'TileLength',
    0x014a: 'A100DataOffset',
    0x014c: {
        name: 'InkSet',
        description: (value) => ({
            1: 'CMYK',
            2: 'Not CMYK'
        })[value] || 'Unknown'
    },
    0x0151: 'TargetPrinter',
    0x0152: {
        name: 'ExtraSamples',
        description: (value) => ({
            0: 'Unspecified',
            1: 'Associated Alpha',
            2: 'Unassociated Alpha',
        })[value] || 'Unknown'
    },
    0x0153: {
        name: 'SampleFormat',
        description: (value) => {
            const formats = {
                1: 'Unsigned',
                2: 'Signed',
                3: 'Float',
                4: 'Undefined',
                5: 'Complex int',
                6: 'Complex float',
            };
            if (!Array.isArray(value)) {
                return 'Unknown';
            }
            return value.map((sample) => formats[sample] || 'Unknown').join(', ');
        }
    },
    0x0201: 'JPEGInterchangeFormat',
    0x0202: 'JPEGInterchangeFormatLength',
    0x0211: {
        'name': 'YCbCrCoefficients',
        'description': (values) => {
            return values.map((value) => '' + value[0] / value[1]).join('/');
        }
    },
    0x0212: 'YCbCrSubSampling',
    0x0213: {
        name: 'YCbCrPositioning',
        description: (value) => {
            if (value === 1) {
                return 'centered';
            }
            if (value === 2) {
                return 'co-sited';
            }
            return 'undefined ' + value;
        }
    },
    0x0214: {
        'name': 'ReferenceBlackWhite',
        'description': (values) => {
            return values.map((value) => '' + value[0] / value[1]).join(', ');
        }
    },
    0x02bc: 'ApplicationNotes',
    0x4746: 'Rating',
    0x4749: 'RatingPercent',
    0x8298: {
        name: 'Copyright',
        description: (value) => value.join('; ')
    },
    0x830e: 'PixelScale',
    0x83bb: 'IPTC-NAA',
    0x8480: 'IntergraphMatrix',
    0x8482: 'ModelTiePoint',
    0x8546: 'SEMInfo',
    0x85d8: 'ModelTransform',
    0x8649: 'PhotoshopSettings',
    0x8769: 'Exif IFD Pointer',
    0x8773: 'ICC_Profile',
    0x87af: 'GeoTiffDirectory',
    0x87b0: 'GeoTiffDoubleParams',
    0x87b1: 'GeoTiffAsciiParams',
    0x8825: 'GPS Info IFD Pointer',
    0x9c9b: 'XPTitle',
    0x9c9c: 'XPComment',
    0x9c9d: 'XPAuthor',
    0x9c9e: 'XPKeywords',
    0x9c9f: 'XPSubject',
    0xa480: 'GDALMetadata',
    0xa481: 'GDALNoData',
    0xc4a5: 'PrintIM',
    0xc613: 'DNGBackwardVersion',
    0xc614: 'UniqueCameraModel',
    0xc615: 'LocalizedCameraModel',
    0xc621: 'ColorMatrix1',
    0xc622: 'ColorMatrix2',
    0xc623: 'CameraCalibration1',
    0xc624: 'CameraCalibration2',
    0xc625: 'ReductionMatrix1',
    0xc626: 'ReductionMatrix2',
    0xc627: 'AnalogBalance',
    0xc628: 'AsShotNeutral',
    0xc629: 'AsShotWhiteXY',
    0xc62a: 'BaselineExposure',
    0xc62b: 'BaselineNoise',
    0xc62c: 'BaselineSharpness',
    0xc62e: 'LinearResponseLimit',
    0xc62f: 'CameraSerialNumber',
    0xc630: 'DNGLensInfo',
    0xc633: 'ShadowScale',
    0xc635: {
        name: 'MakerNoteSafety',
        description: (value) => ({
            0: 'Unsafe',
            1: 'Safe'
        })[value] || 'Unknown'
    },
    0xc65a: {
        name: 'CalibrationIlluminant1',
        description: tag_names_common.LightSource
    },
    0xc65b: {
        name: 'CalibrationIlluminant2',
        description: tag_names_common.LightSource
    },
    0xc65d: 'RawDataUniqueID',
    0xc68b: 'OriginalRawFileName',
    0xc68c: 'OriginalRawFileData',
    0xc68f: 'AsShotICCProfile',
    0xc690: 'AsShotPreProfileMatrix',
    0xc691: 'CurrentICCProfile',
    0xc692: 'CurrentPreProfileMatrix',
    0xc6bf: 'ColorimetricReference',
    0xc6c5: 'SRawType',
    0xc6d2: 'PanasonicTitle',
    0xc6d3: 'PanasonicTitle2',
    0xc6f3: 'CameraCalibrationSig',
    0xc6f4: 'ProfileCalibrationSig',
    0xc6f5: 'ProfileIFD',
    0xc6f6: 'AsShotProfileName',
    0xc6f8: 'ProfileName',
    0xc6f9: 'ProfileHueSatMapDims',
    0xc6fa: 'ProfileHueSatMapData1',
    0xc6fb: 'ProfileHueSatMapData2',
    0xc6fc: 'ProfileToneCurve',
    0xc6fd: {
        name: 'ProfileEmbedPolicy',
        description: (value) => ({
            0: 'Allow Copying',
            1: 'Embed if Used',
            2: 'Never Embed',
            3: 'No Restrictions'
        })[value] || 'Unknown'
    },
    0xc6fe: 'ProfileCopyright',
    0xc714: 'ForwardMatrix1',
    0xc715: 'ForwardMatrix2',
    0xc716: 'PreviewApplicationName',
    0xc717: 'PreviewApplicationVersion',
    0xc718: 'PreviewSettingsName',
    0xc719: 'PreviewSettingsDigest',
    0xc71a: {
        name: 'PreviewColorSpace',
        description: (value) => ({
            1: 'Gray Gamma 2.2',
            2: 'sRGB',
            3: 'Adobe RGB',
            4: 'ProPhoto RGB'
        })[value] || 'Unknown'
    },
    0xc71b: 'PreviewDateTime',
    0xc71c: 'RawImageDigest',
    0xc71d: 'OriginalRawFileDigest',
    0xc725: 'ProfileLookTableDims',
    0xc726: 'ProfileLookTableData',
    0xc763: 'TimeCodes',
    0xc764: 'FrameRate',
    0xc772: 'TStop',
    0xc789: 'ReelName',
    0xc791: 'OriginalDefaultFinalSize',
    0xc792: 'OriginalBestQualitySize',
    0xc793: 'OriginalDefaultCropSize',
    0xc7a1: 'CameraLabel',
    0xc7a3: {
        name: 'ProfileHueSatMapEncoding',
        description: (value) => ({
            0: 'Linear',
            1: 'sRGB'
        })[value] || 'Unknown'
    },
    0xc7a4: {
        name: 'ProfileLookTableEncoding',
        description: (value) => ({
            0: 'Linear',
            1: 'sRGB'
        })[value] || 'Unknown'
    },
    0xc7a5: 'BaselineExposureOffset',
    0xc7a6: {
        name: 'DefaultBlackRender',
        description: (value) => ({
            0: 'Auto',
            1: 'None'
        })[value] || 'Unknown'
    },
    0xc7a7: 'NewRawImageDigest',
    0xc7a8: 'RawToPreviewGain'
});

;// CONCATENATED MODULE: ./node_modules/exifreader/src/tag-names-exif-ifd.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/* harmony default export */ const tag_names_exif_ifd = ({
    0x829a: {
        'name': 'ExposureTime',
        'description': (value) => {
            if (value[0] !== 0) {
                return `1/${Math.round(value[1] / value[0])}`;
            }
            return `0/${value[1]}`;
        }
    },
    0x829d: {
        'name': 'FNumber',
        'description': (value) => `f/${value[0] / value[1]}`
    },
    0x8822: {
        'name': 'ExposureProgram',
        'description': (value) => {
            if (value === 0) {
                return 'Undefined';
            } else if (value === 1) {
                return 'Manual';
            } else if (value === 2) {
                return 'Normal program';
            } else if (value === 3) {
                return 'Aperture priority';
            } else if (value === 4) {
                return 'Shutter priority';
            } else if (value === 5) {
                return 'Creative program';
            } else if (value === 6) {
                return 'Action program';
            } else if (value === 7) {
                return 'Portrait mode';
            } else if (value === 8) {
                return 'Landscape mode';
            } else if (value === 9) {
                return 'Bulb';
            }
            return 'Unknown';
        }
    },
    0x8824: 'SpectralSensitivity',
    0x8827: 'ISOSpeedRatings',
    0x8828: {
        'name': 'OECF',
        'description': () => '[Raw OECF table data]'
    },
    0x882a: 'TimeZoneOffset',
    0x882b: 'SelfTimerMode',
    0x8830: {
        name: 'SensitivityType',
        description: (value) => ({
            1: 'Standard Output Sensitivity',
            2: 'Recommended Exposure Index',
            3: 'ISO Speed',
            4: 'Standard Output Sensitivity and Recommended Exposure Index',
            5: 'Standard Output Sensitivity and ISO Speed',
            6: 'Recommended Exposure Index and ISO Speed',
            7: 'Standard Output Sensitivity, Recommended Exposure Index and ISO Speed'
        })[value] || 'Unknown'
    },
    0x8831: 'StandardOutputSensitivity',
    0x8832: 'RecommendedExposureIndex',
    0x8833: 'ISOSpeed',
    0x8834: 'ISOSpeedLatitudeyyy',
    0x8835: 'ISOSpeedLatitudezzz',
    0x9000: {
        'name': 'ExifVersion',
        'description': (value) => getStringValue(value)
    },
    0x9003: 'DateTimeOriginal',
    0x9004: 'DateTimeDigitized',
    0x9009: 'GooglePlusUploadCode',
    0x9010: 'OffsetTime',
    0x9011: 'OffsetTimeOriginal',
    0x9012: 'OffsetTimeDigitized',
    0x9101: {
        'name': 'ComponentsConfiguration',
        'description': (value) => {
            return value.map((character) => {
                if (character === 0x31) {
                    return 'Y';
                } else if (character === 0x32) {
                    return 'Cb';
                } else if (character === 0x33) {
                    return 'Cr';
                } else if (character === 0x34) {
                    return 'R';
                } else if (character === 0x35) {
                    return 'G';
                } else if (character === 0x36) {
                    return 'B';
                }
            }).join('');
        }
    },
    0x9102: 'CompressedBitsPerPixel',
    0x9201: {
        'name': 'ShutterSpeedValue',
        'description': (value) => {
            return `1/${Math.round(Math.pow(2, value[0] / value[1]))}`;
        }
    },
    0x9202: {
        'name': 'ApertureValue',
        'description': (value) => {
            return Math.pow(Math.sqrt(2), value[0] / value[1]).toFixed(2);
        }
    },
    0x9203: 'BrightnessValue',
    0x9204: 'ExposureBiasValue',
    0x9205: {
        'name': 'MaxApertureValue',
        'description': (value) => {
            return Math.pow(Math.sqrt(2), value[0] / value[1]).toFixed(2);
        }
    },
    0x9206: {
        'name': 'SubjectDistance',
        'description': (value) => (value[0] / value[1]) + ' m'
    },
    0x9207: {
        'name': 'MeteringMode',
        'description': (value) => {
            if (value === 1) {
                return 'Average';
            } else if (value === 2) {
                return 'CenterWeightedAverage';
            } else if (value === 3) {
                return 'Spot';
            } else if (value === 4) {
                return 'MultiSpot';
            } else if (value === 5) {
                return 'Pattern';
            } else if (value === 6) {
                return 'Partial';
            } else if (value === 255) {
                return 'Other';
            }
            return 'Unknown';
        }
    },
    0x9208: {
        'name': 'LightSource',
        description: tag_names_common.LightSource
    },
    0x9209: {
        'name': 'Flash',
        'description': (value) => {
            if (value === 0x00) {
                return 'Flash did not fire';
            } else if (value === 0x01) {
                return 'Flash fired';
            } else if (value === 0x05) {
                return 'Strobe return light not detected';
            } else if (value === 0x07) {
                return 'Strobe return light detected';
            } else if (value === 0x09) {
                return 'Flash fired, compulsory flash mode';
            } else if (value === 0x0d) {
                return 'Flash fired, compulsory flash mode, return light not detected';
            } else if (value === 0x0f) {
                return 'Flash fired, compulsory flash mode, return light detected';
            } else if (value === 0x10) {
                return 'Flash did not fire, compulsory flash mode';
            } else if (value === 0x18) {
                return 'Flash did not fire, auto mode';
            } else if (value === 0x19) {
                return 'Flash fired, auto mode';
            } else if (value === 0x1d) {
                return 'Flash fired, auto mode, return light not detected';
            } else if (value === 0x1f) {
                return 'Flash fired, auto mode, return light detected';
            } else if (value === 0x20) {
                return 'No flash function';
            } else if (value === 0x41) {
                return 'Flash fired, red-eye reduction mode';
            } else if (value === 0x45) {
                return 'Flash fired, red-eye reduction mode, return light not detected';
            } else if (value === 0x47) {
                return 'Flash fired, red-eye reduction mode, return light detected';
            } else if (value === 0x49) {
                return 'Flash fired, compulsory flash mode, red-eye reduction mode';
            } else if (value === 0x4d) {
                return 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected';
            } else if (value === 0x4f) {
                return 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected';
            } else if (value === 0x59) {
                return 'Flash fired, auto mode, red-eye reduction mode';
            } else if (value === 0x5d) {
                return 'Flash fired, auto mode, return light not detected, red-eye reduction mode';
            } else if (value === 0x5f) {
                return 'Flash fired, auto mode, return light detected, red-eye reduction mode';
            }
            return 'Unknown';
        }
    },
    0x920a: {
        'name': 'FocalLength',
        'description': (value) => (value[0] / value[1]) + ' mm'
    },
    0x9211: 'ImageNumber',
    0x9212: {
        name: 'SecurityClassification',
        description: (value) => ({
            'C': 'Confidential',
            'R': 'Restricted',
            'S': 'Secret',
            'T': 'Top Secret',
            'U': 'Unclassified'
        })[value] || 'Unknown'
    },
    0x9213: 'ImageHistory',
    0x9214: {
        'name': 'SubjectArea',
        'description': (value) => {
            if (value.length === 2) {
                return `Location; X: ${value[0]}, Y: ${value[1]}`;
            } else if (value.length === 3) {
                return `Circle; X: ${value[0]}, Y: ${value[1]}, diameter: ${value[2]}`;
            } else if (value.length === 4) {
                return `Rectangle; X: ${value[0]}, Y: ${value[1]}, width: ${value[2]}, height: ${value[3]}`;
            }
            return 'Unknown';
        }
    },
    0x927c: {
        'name': 'MakerNote',
        'description': () => '[Raw maker note data]'
    },
    0x9286: {
        'name': 'UserComment',
        'description': getEncodedString
    },
    0x9290: 'SubSecTime',
    0x9291: 'SubSecTimeOriginal',
    0x9292: 'SubSecTimeDigitized',
    0x9400: {
        'name': 'AmbientTemperature',
        'description': (value) => (value[0] / value[1]) + ' °C'
    },
    0x9401: {
        'name': 'Humidity',
        'description': (value) => (value[0] / value[1]) + ' %'
    },
    0x9402: {
        'name': 'Pressure',
        'description': (value) => (value[0] / value[1]) + ' hPa'
    },
    0x9403: {
        'name': 'WaterDepth',
        'description': (value) => (value[0] / value[1]) + ' m'
    },
    0x9404: {
        'name': 'Acceleration',
        'description': (value) => (value[0] / value[1]) + ' mGal'
    },
    0x9405: {
        'name': 'CameraElevationAngle',
        'description': (value) => (value[0] / value[1]) + ' °'
    },
    0xa000: {
        'name': 'FlashpixVersion',
        'description': (value) => value.map((charCode) => String.fromCharCode(charCode)).join('')
    },
    0xa001: {
        'name': 'ColorSpace',
        'description': (value) => {
            if (value === 1) {
                return 'sRGB';
            } else if (value === 0xffff) {
                return 'Uncalibrated';
            }
            return 'Unknown';
        }
    },
    0xa002: 'PixelXDimension',
    0xa003: 'PixelYDimension',
    0xa004: 'RelatedSoundFile',
    0xa005: 'Interoperability IFD Pointer',
    0xa20b: 'FlashEnergy',
    0xa20c: {
        'name': 'SpatialFrequencyResponse',
        'description': () => '[Raw SFR table data]'
    },
    0xa20e: 'FocalPlaneXResolution',
    0xa20f: 'FocalPlaneYResolution',
    0xa210: {
        'name': 'FocalPlaneResolutionUnit',
        'description': (value) => {
            if (value === 2) {
                return 'inches';
            } else if (value === 3) {
                return 'centimeters';
            }
            return 'Unknown';
        }
    },
    0xa214: {
        'name': 'SubjectLocation',
        'description': ([x, y]) => `X: ${x}, Y: ${y}`
    },
    0xa215: 'ExposureIndex',
    0xa217: {
        'name': 'SensingMethod',
        'description': (value) => {
            if (value === 1) {
                return 'Undefined';
            } else if (value === 2) {
                return 'One-chip color area sensor';
            } else if (value === 3) {
                return 'Two-chip color area sensor';
            } else if (value === 4) {
                return 'Three-chip color area sensor';
            } else if (value === 5) {
                return 'Color sequential area sensor';
            } else if (value === 7) {
                return 'Trilinear sensor';
            } else if (value === 8) {
                return 'Color sequential linear sensor';
            }
            return 'Unknown';
        }
    },
    0xa300: {
        'name': 'FileSource',
        'description': (value) => {
            if (value === 3) {
                return 'DSC';
            }
            return 'Unknown';
        }
    },
    0xa301: {
        'name': 'SceneType',
        'description': (value) => {
            if (value === 1) {
                return 'A directly photographed image';
            }
            return 'Unknown';
        }
    },
    0xa302: {
        'name': 'CFAPattern',
        'description': () => '[Raw CFA pattern table data]'
    },
    0xa401: {
        'name': 'CustomRendered',
        'description': (value) => {
            if (value === 0) {
                return 'Normal process';
            } else if (value === 1) {
                return 'Custom process';
            }
            return 'Unknown';
        }
    },
    0xa402: {
        'name': 'ExposureMode',
        'description': (value) => {
            if (value === 0) {
                return 'Auto exposure';
            } else if (value === 1) {
                return 'Manual exposure';
            } else if (value === 2) {
                return 'Auto bracket';
            }
            return 'Unknown';
        }
    },
    0xa403: {
        'name': 'WhiteBalance',
        'description': (value) => {
            if (value === 0) {
                return 'Auto white balance';
            } else if (value === 1) {
                return 'Manual white balance';
            }
            return 'Unknown';
        }
    },
    0xa404: {
        'name': 'DigitalZoomRatio',
        'description': (value) => {
            if (value[0] === 0) {
                return 'Digital zoom was not used';
            }
            return '' + (value[0] / value[1]);
        }
    },
    0xa405: {
        'name': 'FocalLengthIn35mmFilm',
        'description': (value) => {
            if (value === 0) {
                return 'Unknown';
            }
            return value;
        }
    },
    0xa406: {
        'name': 'SceneCaptureType',
        'description': (value) => {
            if (value === 0) {
                return 'Standard';
            } else if (value === 1) {
                return 'Landscape';
            } else if (value === 2) {
                return 'Portrait';
            } else if (value === 3) {
                return 'Night scene';
            }
            return 'Unknown';
        }
    },
    0xa407: {
        'name': 'GainControl',
        'description': (value) => {
            if (value === 0) {
                return 'None';
            } else if (value === 1) {
                return 'Low gain up';
            } else if (value === 2) {
                return 'High gain up';
            } else if (value === 3) {
                return 'Low gain down';
            } else if (value === 4) {
                return 'High gain down';
            }
            return 'Unknown';
        }
    },
    0xa408: {
        'name': 'Contrast',
        'description': (value) => {
            if (value === 0) {
                return 'Normal';
            } else if (value === 1) {
                return 'Soft';
            } else if (value === 2) {
                return 'Hard';
            }
            return 'Unknown';
        }
    },
    0xa409: {
        'name': 'Saturation',
        'description': (value) => {
            if (value === 0) {
                return 'Normal';
            } else if (value === 1) {
                return 'Low saturation';
            } else if (value === 2) {
                return 'High saturation';
            }
            return 'Unknown';
        }
    },
    0xa40a: {
        'name': 'Sharpness',
        'description': (value) => {
            if (value === 0) {
                return 'Normal';
            } else if (value === 1) {
                return 'Soft';
            } else if (value === 2) {
                return 'Hard';
            }
            return 'Unknown';
        }
    },
    0xa40b: {
        'name': 'DeviceSettingDescription',
        'description': () => '[Raw device settings table data]'
    },
    0xa40c: {
        'name': 'SubjectDistanceRange',
        'description': (value) => {
            if (value === 1) {
                return 'Macro';
            } else if (value === 2) {
                return 'Close view';
            } else if (value === 3) {
                return 'Distant view';
            }
            return 'Unknown';
        }
    },
    0xa420: 'ImageUniqueID',
    0xa430: 'CameraOwnerName',
    0xa431: 'BodySerialNumber',
    0xa432: {
        'name': 'LensSpecification',
        'description': (value) => {
            const focalLengths = `${value[0][0] / value[0][1]}-${value[1][0] / value[1][1]} mm`;
            if (value[3][1] === 0) {
                return `${focalLengths} f/?`;
            }
            return `${focalLengths} f/${1 / ((value[2][1] / value[2][1]) / (value[3][0] / value[3][1]))}`;
        }
    },
    0xa433: 'LensMake',
    0xa434: 'LensModel',
    0xa435: 'LensSerialNumber',
    0xa460: {
        name: 'CompositeImage',
        description: (value) => ({
            1: 'Not a Composite Image',
            2: 'General Composite Image',
            3: 'Composite Image Captured While Shooting',
        })[value] || 'Unknown'
    },
    0xa461: 'SourceImageNumberOfCompositeImage',
    0xa462: 'SourceExposureTimesOfCompositeImage',
    0xa500: 'Gamma',
    0xea1c: 'Padding',
    0xea1d: 'OffsetSchema',
    0xfde8: 'OwnerName',
    0xfde9: 'SerialNumber',
    0xfdea: 'Lens',
    0xfe4c: 'RawFile',
    0xfe4d: 'Converter',
    0xfe4e: 'WhiteBalance',
    0xfe51: 'Exposure',
    0xfe52: 'Shadows',
    0xfe53: 'Brightness',
    0xfe54: 'Contrast',
    0xfe55: 'Saturation',
    0xfe56: 'Sharpness',
    0xfe57: 'Smoothness',
    0xfe58: 'MoireFilter'
});

;// CONCATENATED MODULE: ./node_modules/exifreader/src/tag-names-gps-ifd.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ const tag_names_gps_ifd = ({
    0x0000: {
        'name': 'GPSVersionID',
        'description': (value) => {
            if (value[0] === 2 && value[1] === 2 && value[2] === 0 && value[3] === 0) {
                return 'Version 2.2';
            }
            return 'Unknown';
        }
    },
    0x0001: {
        'name': 'GPSLatitudeRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'N') {
                return 'North latitude';
            } else if (ref === 'S') {
                return 'South latitude';
            }
            return 'Unknown';
        }
    },
    0x0002: {
        'name': 'GPSLatitude',
        'description': getCalculatedGpsValue
    },
    0x0003: {
        'name': 'GPSLongitudeRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'E') {
                return 'East longitude';
            } else if (ref === 'W') {
                return 'West longitude';
            }
            return 'Unknown';
        }
    },
    0x0004: {
        'name': 'GPSLongitude',
        'description': getCalculatedGpsValue
    },
    0x0005: {
        'name': 'GPSAltitudeRef',
        'description': (value) => {
            if (value === 0) {
                return 'Sea level';
            } else if (value === 1) {
                return 'Sea level reference (negative value)';
            }
            return 'Unknown';
        }
    },
    0x0006: {
        'name': 'GPSAltitude',
        'description': (value) => {
            return (value[0] / value[1]) + ' m';
        }
    },
    0x0007: {
        'name': 'GPSTimeStamp',
        'description': (values) => {
            return values.map(([numerator, denominator]) => {
                const num = numerator / denominator;
                if (/^\d(\.|$)/.test(`${num}`)) {
                    return `0${num}`;
                }
                return num;
            }).join(':');
        }
    },
    0x0008: 'GPSSatellites',
    0x0009: {
        'name': 'GPSStatus',
        'description': (value) => {
            const status = value.join('');
            if (status === 'A') {
                return 'Measurement in progress';
            } else if (status === 'V') {
                return 'Measurement Interoperability';
            }
            return 'Unknown';
        }
    },
    0x000a: {
        'name': 'GPSMeasureMode',
        'description': (value) => {
            const mode = value.join('');
            if (mode === '2') {
                return '2-dimensional measurement';
            } else if (mode === '3') {
                return '3-dimensional measurement';
            }
            return 'Unknown';
        }
    },
    0x000b: 'GPSDOP',
    0x000c: {
        'name': 'GPSSpeedRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'K') {
                return 'Kilometers per hour';
            } else if (ref === 'M') {
                return 'Miles per hour';
            } else if (ref === 'N') {
                return 'Knots';
            }
            return 'Unknown';
        }
    },
    0x000d: 'GPSSpeed',
    0x000e: {
        'name': 'GPSTrackRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'T') {
                return 'True direction';
            } else if (ref === 'M') {
                return 'Magnetic direction';
            }
            return 'Unknown';
        }
    },
    0x000f: 'GPSTrack',
    0x0010: {
        'name': 'GPSImgDirectionRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'T') {
                return 'True direction';
            } else if (ref === 'M') {
                return 'Magnetic direction';
            }
            return 'Unknown';
        }
    },
    0x0011: 'GPSImgDirection',
    0x0012: 'GPSMapDatum',
    0x0013: {
        'name': 'GPSDestLatitudeRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'N') {
                return 'North latitude';
            } else if (ref === 'S') {
                return 'South latitude';
            }
            return 'Unknown';
        }
    },
    0x0014: {
        'name': 'GPSDestLatitude',
        'description': (value) => {
            return (value[0][0] / value[0][1]) + (value[1][0] / value[1][1]) / 60 + (value[2][0] / value[2][1]) / 3600;
        }
    },
    0x0015: {
        'name': 'GPSDestLongitudeRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'E') {
                return 'East longitude';
            } else if (ref === 'W') {
                return 'West longitude';
            }
            return 'Unknown';
        }
    },
    0x0016: {
        'name': 'GPSDestLongitude',
        'description': (value) => {
            return (value[0][0] / value[0][1]) + (value[1][0] / value[1][1]) / 60 + (value[2][0] / value[2][1]) / 3600;
        }
    },
    0x0017: {
        'name': 'GPSDestBearingRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'T') {
                return 'True direction';
            } else if (ref === 'M') {
                return 'Magnetic direction';
            }
            return 'Unknown';
        }
    },
    0x0018: 'GPSDestBearing',
    0x0019: {
        'name': 'GPSDestDistanceRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'K') {
                return 'Kilometers';
            } else if (ref === 'M') {
                return 'Miles';
            } else if (ref === 'N') {
                return 'Knots';
            }
            return 'Unknown';
        }
    },
    0x001a: 'GPSDestDistance',
    0x001b: {
        'name': 'GPSProcessingMethod',
        'description': getEncodedString
    },
    0x001c: {
        'name': 'GPSAreaInformation',
        'description': getEncodedString
    },
    0x001d: 'GPSDateStamp',
    0x001e: {
        'name': 'GPSDifferential',
        'description': (value) => {
            if (value === 0) {
                return 'Measurement without differential correction';
            } else if (value === 1) {
                return 'Differential correction applied';
            }
            return 'Unknown';
        }
    },
    0x001f: 'GPSHPositioningError'
});

;// CONCATENATED MODULE: ./node_modules/exifreader/src/tag-names-interoperability-ifd.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ const tag_names_interoperability_ifd = ({
    0x0001: 'InteroperabilityIndex',
    0x0002: {
        name: 'InteroperabilityVersion',
        description: (value) => getStringValue(value)
    },
    0x1000: 'RelatedImageFileFormat',
    0x1001: 'RelatedImageWidth',
    0x1002: 'RelatedImageHeight'
});

;// CONCATENATED MODULE: ./node_modules/exifreader/src/tag-names-mpf-ifd.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ const tag_names_mpf_ifd = ({
    0xb000: {
        'name': 'MPFVersion',
        'description': (value) => getStringValue(value)
    },
    0xb001: 'NumberOfImages',
    0xb002: 'MPEntry',
    0xb003: 'ImageUIDList',
    0xb004: 'TotalFrames'
});

;// CONCATENATED MODULE: ./node_modules/exifreader/src/tag-names.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */









const tagNames0thExifIfds = objectAssign({}, tag_names_0th_ifd, tag_names_exif_ifd);

/* harmony default export */ const tag_names = ({
    '0th': tagNames0thExifIfds,
    'exif': tagNames0thExifIfds,
    'gps': tag_names_gps_ifd,
    'interoperability': tag_names_interoperability_ifd,
    'mpf': constants.USE_MPF ? tag_names_mpf_ifd : {},
});

;// CONCATENATED MODULE: ./node_modules/exifreader/src/tags.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */








const EXIF_IFD_POINTER_KEY = 'Exif IFD Pointer';
const GPS_INFO_IFD_POINTER_KEY = 'GPS Info IFD Pointer';
const INTEROPERABILITY_IFD_POINTER_KEY = 'Interoperability IFD Pointer';

const getTagValueAt = {
    1: types.getByteAt,
    2: types.getAsciiAt,
    3: types.getShortAt,
    4: types.getLongAt,
    5: types.getRationalAt,
    7: types.getUndefinedAt,
    9: types.getSlongAt,
    10: types.getSrationalAt,
    13: types.getIfdPointerAt
};

/* harmony default export */ const src_tags = ({
    read,
    readMpf
});

function read(dataView, tiffHeaderOffset, includeUnknown) {
    const byteOrder = byte_order.getByteOrder(dataView, tiffHeaderOffset);
    let tags = read0thIfd(dataView, tiffHeaderOffset, byteOrder, includeUnknown);
    tags = readExifIfd(tags, dataView, tiffHeaderOffset, byteOrder, includeUnknown);
    tags = readGpsIfd(tags, dataView, tiffHeaderOffset, byteOrder, includeUnknown);
    tags = readInteroperabilityIfd(tags, dataView, tiffHeaderOffset, byteOrder, includeUnknown);

    return tags;
}

function read0thIfd(dataView, tiffHeaderOffset, byteOrder, includeUnknown) {
    return readIfd(dataView, '0th', tiffHeaderOffset, get0thIfdOffset(dataView, tiffHeaderOffset, byteOrder), byteOrder, includeUnknown);
}

function get0thIfdOffset(dataView, tiffHeaderOffset, byteOrder) {
    return tiffHeaderOffset + types.getLongAt(dataView, tiffHeaderOffset + 4, byteOrder);
}

function readExifIfd(tags, dataView, tiffHeaderOffset, byteOrder, includeUnknown) {
    if (tags[EXIF_IFD_POINTER_KEY] !== undefined) {
        return objectAssign(tags, readIfd(dataView, 'exif', tiffHeaderOffset, tiffHeaderOffset + tags[EXIF_IFD_POINTER_KEY].value, byteOrder, includeUnknown));
    }

    return tags;
}

function readGpsIfd(tags, dataView, tiffHeaderOffset, byteOrder, includeUnknown) {
    if (tags[GPS_INFO_IFD_POINTER_KEY] !== undefined) {
        return objectAssign(tags, readIfd(dataView, 'gps', tiffHeaderOffset, tiffHeaderOffset + tags[GPS_INFO_IFD_POINTER_KEY].value, byteOrder, includeUnknown));
    }

    return tags;
}

function readInteroperabilityIfd(tags, dataView, tiffHeaderOffset, byteOrder, includeUnknown) {
    if (tags[INTEROPERABILITY_IFD_POINTER_KEY] !== undefined) {
        return objectAssign(tags, readIfd(dataView, 'interoperability', tiffHeaderOffset, tiffHeaderOffset + tags[INTEROPERABILITY_IFD_POINTER_KEY].value, byteOrder, includeUnknown));
    }

    return tags;
}

function readMpf(dataView, dataOffset, includeUnknown) {
    const byteOrder = byte_order.getByteOrder(dataView, dataOffset);
    const tags = readIfd(dataView, 'mpf', dataOffset, get0thIfdOffset(dataView, dataOffset, byteOrder), byteOrder, includeUnknown);
    return addMpfImages(dataView, dataOffset, tags, byteOrder);
}

function addMpfImages(dataView, dataOffset, tags, byteOrder) {
    const ENTRY_SIZE = 16;

    if (!tags['MPEntry']) {
        return tags;
    }

    const images = [];
    for (let i = 0; i < Math.ceil(tags['MPEntry'].value.length / ENTRY_SIZE); i++) {
        images[i] = {};

        const attributes = getImageNumberValue(tags['MPEntry'].value, i * ENTRY_SIZE, types.getTypeSize('LONG'), byteOrder);
        images[i]['ImageFlags'] = getImageFlags(attributes);
        images[i]['ImageFormat'] = getImageFormat(attributes);
        images[i]['ImageType'] = getImageType(attributes);

        const imageSize = getImageNumberValue(tags['MPEntry'].value, i * ENTRY_SIZE + 4, types.getTypeSize('LONG'), byteOrder);
        images[i]['ImageSize'] = {
            value: imageSize,
            description: '' + imageSize
        };

        const imageOffset = isFirstIndividualImage(i) ? 0 : getImageNumberValue(tags['MPEntry'].value, i * ENTRY_SIZE + 8, types.getTypeSize('LONG'), byteOrder) + dataOffset;
        images[i]['ImageOffset'] = {
            value: imageOffset,
            description: '' + imageOffset
        };

        const dependentImage1EntryNumber =
            getImageNumberValue(tags['MPEntry'].value, i * ENTRY_SIZE + 12, types.getTypeSize('SHORT'), byteOrder);
        images[i]['DependentImage1EntryNumber'] = {
            value: dependentImage1EntryNumber,
            description: '' + dependentImage1EntryNumber
        };

        const dependentImage2EntryNumber =
            getImageNumberValue(tags['MPEntry'].value, i * ENTRY_SIZE + 14, types.getTypeSize('SHORT'), byteOrder);
        images[i]['DependentImage2EntryNumber'] = {
            value: dependentImage2EntryNumber,
            description: '' + dependentImage2EntryNumber
        };

        images[i].image = dataView.buffer.slice(imageOffset, imageOffset + imageSize);
        deferInit(images[i], 'base64', function () {
            return getBase64Image(this.image);
        });
    }

    tags['Images'] = images;

    return tags;
}

function getImageNumberValue(entries, offset, size, byteOrder) {
    if (byteOrder === byte_order.LITTLE_ENDIAN) {
        let value = 0;
        for (let i = 0; i < size; i++) {
            value += entries[offset + i] << (8 * i);
        }
        return value;
    }

    let value = 0;
    for (let i = 0; i < size; i++) {
        value += entries[offset + i] << (8 * (size - 1 - i));
    }
    return value;
}

function getImageFlags(attributes) {
    const flags = [
        (attributes >> 31) & 0x1,
        (attributes >> 30) & 0x1,
        (attributes >> 29) & 0x1
    ];

    const flagsDescription = [];

    if (flags[0]) {
        flagsDescription.push('Dependent Parent Image');
    }
    if (flags[1]) {
        flagsDescription.push('Dependent Child Image');
    }
    if (flags[2]) {
        flagsDescription.push('Representative Image');
    }

    return {
        value: flags,
        description: flagsDescription.join(', ') || 'None'
    };
}

function getImageFormat(attributes) {
    const imageFormat = attributes >> 24 & 0x7;
    return {
        value: imageFormat,
        description: imageFormat === 0 ? 'JPEG' : 'Unknown'
    };
}

function getImageType(attributes) {
    const type = attributes & 0xffffff;
    const descriptions = {
        0x30000: 'Baseline MP Primary Image',
        0x10001: 'Large Thumbnail (VGA equivalent)',
        0x10002: 'Large Thumbnail (Full HD equivalent)',
        0x20001: 'Multi-Frame Image (Panorama)',
        0x20002: 'Multi-Frame Image (Disparity)',
        0x20003: 'Multi-Frame Image (Multi-Angle)',
        0x0: 'Undefined',
    };

    return {
        value: type,
        description: descriptions[type] || 'Unknown'
    };
}

function isFirstIndividualImage(i) {
    return i === 0;
}

function readIfd(dataView, ifdType, tiffHeaderOffset, offset, byteOrder, includeUnknown) {
    const FIELD_COUNT_SIZE = types.getTypeSize('SHORT');
    const FIELD_SIZE = 12;

    const tags = {};
    const numberOfFields = getNumberOfFields(dataView, offset, byteOrder);

    offset += FIELD_COUNT_SIZE;
    for (let fieldIndex = 0; fieldIndex < numberOfFields; fieldIndex++) {
        if (offset + FIELD_SIZE > dataView.byteLength) {
            break;
        }

        const tag = readTag(dataView, ifdType, tiffHeaderOffset, offset, byteOrder, includeUnknown);
        if (tag !== undefined) {
            tags[tag.name] = {
                'id': tag.id,
                'value': tag.value,
                'description': tag.description
            };
        }

        offset += FIELD_SIZE;
    }

    if (constants.USE_THUMBNAIL && (offset < dataView.byteLength - types.getTypeSize('LONG'))) {
        const nextIfdOffset = types.getLongAt(dataView, offset, byteOrder);
        if (nextIfdOffset !== 0) {
            tags['Thumbnail'] = readIfd(dataView, ifdType, tiffHeaderOffset, tiffHeaderOffset + nextIfdOffset, byteOrder, true);
        }
    }

    return tags;
}

function getNumberOfFields(dataView, offset, byteOrder) {
    if (offset + types.getTypeSize('SHORT') <= dataView.byteLength) {
        return types.getShortAt(dataView, offset, byteOrder);
    }
    return 0;
}

function readTag(dataView, ifdType, tiffHeaderOffset, offset, byteOrder, includeUnknown) {
    const TAG_CODE_IPTC_NAA = 0x83bb;
    const TAG_TYPE_OFFSET = types.getTypeSize('SHORT');
    const TAG_COUNT_OFFSET = TAG_TYPE_OFFSET + types.getTypeSize('SHORT');
    const TAG_VALUE_OFFSET = TAG_COUNT_OFFSET + types.getTypeSize('LONG');

    const tagCode = types.getShortAt(dataView, offset, byteOrder);
    const tagType = types.getShortAt(dataView, offset + TAG_TYPE_OFFSET, byteOrder);
    const tagCount = types.getLongAt(dataView, offset + TAG_COUNT_OFFSET, byteOrder);
    let tagValue;

    if (types.typeSizes[tagType] === undefined || (!includeUnknown && tag_names[ifdType][tagCode] === undefined)) {
        return undefined;
    }

    if (tagValueFitsInOffsetSlot(tagType, tagCount)) {
        tagValue = getTagValue(dataView, offset + TAG_VALUE_OFFSET, tagType, tagCount, byteOrder);
    } else {
        const tagValueOffset = types.getLongAt(dataView, offset + TAG_VALUE_OFFSET, byteOrder);
        if (tagValueFitsInDataView(dataView, tiffHeaderOffset, tagValueOffset, tagType, tagCount)) {
            const forceByteType = tagCode === TAG_CODE_IPTC_NAA;
            tagValue = getTagValue(dataView, tiffHeaderOffset + tagValueOffset, tagType, tagCount, byteOrder, forceByteType);
        } else {
            tagValue = '<faulty value>';
        }
    }

    if (tagType === types.tagTypes.ASCII) {
        tagValue = splitNullSeparatedAsciiString(tagValue);
        tagValue = decodeAsciiValue(tagValue);
    }

    let tagName = `undefined-${tagCode}`;
    let tagDescription = tagValue;

    if (tag_names[ifdType][tagCode] !== undefined) {
        if ((tag_names[ifdType][tagCode]['name'] !== undefined) && (tag_names[ifdType][tagCode]['description'] !== undefined)) {
            tagName = tag_names[ifdType][tagCode]['name'];
            try {
                tagDescription = tag_names[ifdType][tagCode]['description'](tagValue);
            } catch (error) {
                tagDescription = getDescriptionFromTagValue(tagValue);
            }
        } else if ((tagType === types.tagTypes.RATIONAL) || (tagType === types.tagTypes.SRATIONAL)) {
            tagName = tag_names[ifdType][tagCode];
            tagDescription = '' + (tagValue[0] / tagValue[1]);
        } else {
            tagName = tag_names[ifdType][tagCode];
            tagDescription = getDescriptionFromTagValue(tagValue);
        }
    }

    return {
        id: tagCode,
        name: tagName,
        value: tagValue,
        description: tagDescription
    };
}

function tagValueFitsInOffsetSlot(tagType, tagCount) {
    return types.typeSizes[tagType] * tagCount <= types.getTypeSize('LONG');
}

function getTagValue(dataView, offset, type, count, byteOrder, forceByteType = false) {
    let value = [];

    if (forceByteType) {
        count = count * types.typeSizes[type];
        type = types.tagTypes.BYTE;
    }
    for (let valueIndex = 0; valueIndex < count; valueIndex++) {
        value.push(getTagValueAt[type](dataView, offset, byteOrder));
        offset += types.typeSizes[type];
    }

    if (type === types.tagTypes.ASCII) {
        value = types.getAsciiValue(value);
    } else if (value.length === 1) {
        value = value[0];
    }

    return value;
}

function tagValueFitsInDataView(dataView, tiffHeaderOffset, tagValueOffset, tagType, tagCount) {
    return tiffHeaderOffset + tagValueOffset + types.typeSizes[tagType] * tagCount <= dataView.byteLength;
}

function splitNullSeparatedAsciiString(string) {
    const tagValue = [];
    let i = 0;

    for (let j = 0; j < string.length; j++) {
        if (string[j] === '\x00') {
            i++;
            continue;
        }
        if (tagValue[i] === undefined) {
            tagValue[i] = '';
        }
        tagValue[i] += string[j];
    }

    return tagValue;
}

function decodeAsciiValue(asciiValue) {
    try {
        return asciiValue.map((value) => decodeURIComponent(escape(value)));
    } catch (error) {
        return asciiValue;
    }
}

function getDescriptionFromTagValue(tagValue) {
    if (tagValue instanceof Array) {
        return tagValue.join(', ');
    }
    return tagValue;
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/file-tags.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ const file_tags = ({
    read: file_tags_read
});

function file_tags_read(dataView, fileDataOffset) {
    const length = getLength(dataView, fileDataOffset);
    const numberOfColorComponents = getNumberOfColorComponents(dataView, fileDataOffset, length);
    return {
        'Bits Per Sample': getDataPrecision(dataView, fileDataOffset, length),
        'Image Height': getImageHeight(dataView, fileDataOffset, length),
        'Image Width': getImageWidth(dataView, fileDataOffset, length),
        'Color Components': numberOfColorComponents,
        'Subsampling': numberOfColorComponents && getSubsampling(dataView, fileDataOffset, numberOfColorComponents.value, length)
    };
}

function getLength(dataView, fileDataOffset) {
    return types.getShortAt(dataView, fileDataOffset);
}

function getDataPrecision(dataView, fileDataOffset, length) {
    const OFFSET = 2;
    const SIZE = 1;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = types.getByteAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: '' + value
    };
}

function getImageHeight(dataView, fileDataOffset, length) {
    const OFFSET = 3;
    const SIZE = 2;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = types.getShortAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: `${value}px`
    };
}

function getImageWidth(dataView, fileDataOffset, length) {
    const OFFSET = 5;
    const SIZE = 2;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = types.getShortAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: `${value}px`
    };
}

function getNumberOfColorComponents(dataView, fileDataOffset, length) {
    const OFFSET = 7;
    const SIZE = 1;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = types.getByteAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: '' + value
    };
}

function getSubsampling(dataView, fileDataOffset, numberOfColorComponents, length) {
    const OFFSET = 8;
    const SIZE = 3 * numberOfColorComponents;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const components = [];

    for (let i = 0; i < numberOfColorComponents; i++) {
        const componentOffset = fileDataOffset + OFFSET + i * 3;
        components.push([
            types.getByteAt(dataView, componentOffset),
            types.getByteAt(dataView, componentOffset + 1),
            types.getByteAt(dataView, componentOffset + 2)
        ]);
    }

    return {
        value: components,
        description: components.length > 1 ? getComponentIds(components) + getSamplingType(components) : ''
    };
}

function getComponentIds(components) {
    const ids = {
        0x01: 'Y',
        0x02: 'Cb',
        0x03: 'Cr',
        0x04: 'I',
        0x05: 'Q',
    };

    return components.map((compontent) => ids[compontent[0]]).join('');
}

function getSamplingType(components) {
    const types = {
        0x11: '4:4:4 (1 1)',
        0x12: '4:4:0 (1 2)',
        0x14: '4:4:1 (1 4)',
        0x21: '4:2:2 (2 1)',
        0x22: '4:2:0 (2 2)',
        0x24: '4:2:1 (2 4)',
        0x41: '4:1:1 (4 1)',
        0x42: '4:1:0 (4 2)'
    };

    if (components.length === 0 || components[0][1] === undefined || types[components[0][1]] === undefined) {
        return '';
    }

    return types[components[0][1]];
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/jfif-tags.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ const jfif_tags = ({
    read: jfif_tags_read
});

function jfif_tags_read(dataView, jfifDataOffset) {
    const length = jfif_tags_getLength(dataView, jfifDataOffset);
    const thumbnailWidth = getThumbnailWidth(dataView, jfifDataOffset, length);
    const thumbnailHeight = getThumbnailHeight(dataView, jfifDataOffset, length);
    const tags = {
        'JFIF Version': getVersion(dataView, jfifDataOffset, length),
        'Resolution Unit': getResolutionUnit(dataView, jfifDataOffset, length),
        'XResolution': getXResolution(dataView, jfifDataOffset, length),
        'YResolution': getYResolution(dataView, jfifDataOffset, length),
        'JFIF Thumbnail Width': thumbnailWidth,
        'JFIF Thumbnail Height': thumbnailHeight
    };

    if (thumbnailWidth !== undefined && thumbnailHeight !== undefined) {
        const thumbnail = getThumbnail(dataView, jfifDataOffset, 3 * thumbnailWidth.value * thumbnailHeight.value, length);
        if (thumbnail) {
            tags['JFIF Thumbnail'] = thumbnail;
        }
    }

    for (const tagName in tags) {
        if (tags[tagName] === undefined) {
            delete tags[tagName];
        }
    }

    return tags;
}

function jfif_tags_getLength(dataView, jfifDataOffset) {
    return types.getShortAt(dataView, jfifDataOffset);
}

function getVersion(dataView, jfifDataOffset, length) {
    const OFFSET = 7;
    const SIZE = 2;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const majorVersion = types.getByteAt(dataView, jfifDataOffset + OFFSET);
    const minorVersion = types.getByteAt(dataView, jfifDataOffset + OFFSET + 1);
    return {
        value: majorVersion * 0x100 + minorVersion,
        description: majorVersion + '.' + minorVersion
    };
}

function getResolutionUnit(dataView, jfifDataOffset, length) {
    const OFFSET = 9;
    const SIZE = 1;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = types.getByteAt(dataView, jfifDataOffset + OFFSET);
    return {
        value,
        description: getResolutionUnitDescription(value)
    };
}

function getResolutionUnitDescription(value) {
    if (value === 0) {
        return 'None';
    }
    if (value === 1) {
        return 'inches';
    }
    if (value === 2) {
        return 'cm';
    }
    return 'Unknown';
}

function getXResolution(dataView, jfifDataOffset, length) {
    const OFFSET = 10;
    const SIZE = 2;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = types.getShortAt(dataView, jfifDataOffset + OFFSET);
    return {
        value,
        description: '' + value
    };
}

function getYResolution(dataView, jfifDataOffset, length) {
    const OFFSET = 12;
    const SIZE = 2;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = types.getShortAt(dataView, jfifDataOffset + OFFSET);
    return {
        value,
        description: '' + value
    };
}

function getThumbnailWidth(dataView, jfifDataOffset, length) {
    const OFFSET = 14;
    const SIZE = 1;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = types.getByteAt(dataView, jfifDataOffset + OFFSET);
    return {
        value,
        description: `${value}px`
    };
}

function getThumbnailHeight(dataView, jfifDataOffset, length) {
    const OFFSET = 15;
    const SIZE = 1;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = types.getByteAt(dataView, jfifDataOffset + OFFSET);
    return {
        value,
        description: `${value}px`
    };
}

function getThumbnail(dataView, jfifDataOffset, thumbnailLength, length) {
    const OFFSET = 16;

    if (thumbnailLength === 0 || OFFSET + thumbnailLength > length) {
        return undefined;
    }

    const value = dataView.buffer.slice(jfifDataOffset + OFFSET, jfifDataOffset + OFFSET + thumbnailLength);
    return {
        value,
        description: '<24-bit RGB pixel data>'
    };
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/iptc-tag-names.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ const iptc_tag_names = ({
    'iptc': {
        0x0100: {
            'name': 'Model Version',
            'description': (value) => {
                return ((value[0] << 8) + value[1]).toString();
            }
        },
        0x0105: {
            'name': 'Destination',
            'repeatable': true
        },
        0x0114: {
            'name': 'File Format',
            'description': (value) => {
                return ((value[0] << 8) + value[1]).toString();
            }
        },
        0x0116: {
            'name': 'File Format Version',
            'description': (value) => {
                return ((value[0] << 8) + value[1]).toString();
            }
        },
        0x011e: 'Service Identifier',
        0x0128: 'Envelope Number',
        0x0132: 'Product ID',
        0x013c: 'Envelope Priority',
        0x0146: {
            'name': 'Date Sent',
            'description': getCreationDate
        },
        0x0150: {
            'name': 'Time Sent',
            'description': getCreationTime
        },
        0x015a: {
            'name': 'Coded Character Set',
            'description': getEncodingName,
            'encoding_name': getEncodingName,
        },
        0x0164: 'UNO',
        0x0178: {
            'name': 'ARM Identifier',
            'description': (value) => {
                return ((value[0] << 8) + value[1]).toString();
            }
        },
        0x017a: {
            'name': 'ARM Version',
            'description': (value) => {
                return ((value[0] << 8) + value[1]).toString();
            }
        },
        0x0200: {
            'name': 'Record Version',
            'description': (value) => {
                return ((value[0] << 8) + value[1]).toString();
            }
        },
        0x0203: 'Object Type Reference',
        0x0204: 'Object Attribute Reference',
        0x0205: 'Object Name',
        0x0207: 'Edit Status',
        0x0208: {
            'name': 'Editorial Update',
            'description': (value) => {
                if (getStringValue(value) === '01') {
                    return 'Additional Language';
                }
                return 'Unknown';
            }
        },
        0x020a: 'Urgency',
        0x020c: {
            'name': 'Subject Reference',
            'repeatable': true,
            'description': (value) => {
                const parts = getStringValue(value).split(':');
                return parts[2] + (parts[3] ? '/' + parts[3] : '') + (parts[4] ? '/' + parts[4] : '');
            }
        },
        0x020f: 'Category',
        0x0214: {
            'name': 'Supplemental Category',
            'repeatable': true
        },
        0x0216: 'Fixture Identifier',
        0x0219: {
            'name': 'Keywords',
            'repeatable': true
        },
        0x021a: {
            'name': 'Content Location Code',
            'repeatable': true
        },
        0x021b: {
            'name': 'Content Location Name',
            'repeatable': true
        },
        0x021e: 'Release Date',
        0x0223: 'Release Time',
        0x0225: 'Expiration Date',
        0x0226: 'Expiration Time',
        0x0228: 'Special Instructions',
        0x022a: {
            'name': 'Action Advised',
            'description': (value) => {
                const string = getStringValue(value);
                if (string === '01') {
                    return 'Object Kill';
                } else if (string === '02') {
                    return 'Object Replace';
                } else if (string === '03') {
                    return 'Object Append';
                } else if (string === '04') {
                    return 'Object Reference';
                }
                return 'Unknown';
            }
        },
        0x022d: {
            'name': 'Reference Service',
            'repeatable': true
        },
        0x022f: {
            'name': 'Reference Date',
            'repeatable': true
        },
        0x0232: {
            'name': 'Reference Number',
            'repeatable': true
        },
        0x0237: {
            'name': 'Date Created',
            'description': getCreationDate
        },
        0x023c: {
            'name': 'Time Created',
            'description': getCreationTime
        },
        0x023e: {
            'name': 'Digital Creation Date',
            'description': getCreationDate
        },
        0x023f: {
            'name': 'Digital Creation Time',
            'description': getCreationTime
        },
        0x0241: 'Originating Program',
        0x0246: 'Program Version',
        0x024b: {
            'name': 'Object Cycle',
            'description': (value) => {
                const string = getStringValue(value);
                if (string === 'a') {
                    return 'morning';
                } else if (string === 'p') {
                    return 'evening';
                } else if (string === 'b') {
                    return 'both';
                }
                return 'Unknown';
            }
        },
        0x0250: {
            'name': 'By-line',
            'repeatable': true
        },
        0x0255: {
            'name': 'By-line Title',
            'repeatable': true
        },
        0x025a: 'City',
        0x025c: 'Sub-location',
        0x025f: 'Province/State',
        0x0264: 'Country/Primary Location Code',
        0x0265: 'Country/Primary Location Name',
        0x0267: 'Original Transmission Reference',
        0x0269: 'Headline',
        0x026e: 'Credit',
        0x0273: 'Source',
        0x0274: 'Copyright Notice',
        0x0276: {
            'name': 'Contact',
            'repeatable': true
        },
        0x0278: 'Caption/Abstract',
        0x027a: {
            'name': 'Writer/Editor',
            'repeatable': true
        },
        0x027d: {
            'name': 'Rasterized Caption',
            'description': (value) => value
        },
        0x0282: 'Image Type',
        0x0283: {
            'name': 'Image Orientation',
            'description': (value) => {
                const string = getStringValue(value);
                if (string === 'P') {
                    return 'Portrait';
                } else if (string === 'L') {
                    return 'Landscape';
                } else if (string === 'S') {
                    return 'Square';
                }
                return 'Unknown';
            }
        },
        0x0287: 'Language Identifier',
        0x0296: {
            'name': 'Audio Type',
            'description': (value) => {
                const stringValue = getStringValue(value);
                const character0 = stringValue.charAt(0);
                const character1 = stringValue.charAt(1);
                let description = '';

                if (character0 === '1') {
                    description += 'Mono';
                } else if (character0 === '2') {
                    description += 'Stereo';
                }

                if (character1 === 'A') {
                    description += ', actuality';
                } else if (character1 === 'C') {
                    description += ', question and answer session';
                } else if (character1 === 'M') {
                    description += ', music, transmitted by itself';
                } else if (character1 === 'Q') {
                    description += ', response to a question';
                } else if (character1 === 'R') {
                    description += ', raw sound';
                } else if (character1 === 'S') {
                    description += ', scener';
                } else if (character1 === 'V') {
                    description += ', voicer';
                } else if (character1 === 'W') {
                    description += ', wrap';
                }

                if (description !== '') {
                    return description;
                }
                return stringValue;
            }
        },
        0x0297: {
            'name': 'Audio Sampling Rate',
            'description': (value) => parseInt(getStringValue(value), 10) + ' Hz'
        },
        0x0298: {
            'name': 'Audio Sampling Resolution',
            'description': (value) => {
                const bits = parseInt(getStringValue(value), 10);
                return bits + (bits === 1 ? ' bit' : ' bits');
            }
        },
        0x0299: {
            'name': 'Audio Duration',
            'description': (value) => {
                const duration = getStringValue(value);
                if (duration.length >= 6) {
                    return duration.substr(0, 2) + ':' + duration.substr(2, 2) + ':' + duration.substr(4, 2);
                }
                return duration;
            }
        },
        0x029a: 'Audio Outcue',
        0x02ba: 'Short Document ID',
        0x02bb: 'Unique Document ID',
        0x02bc: 'Owner ID',
        0x02c8: {
            'name': (value) => {
                if (value.length === 2) {
                    return 'ObjectData Preview File Format';
                }
                return 'Record 2 destination';
            },
            'description': (value) => {
                if (value.length === 2) {
                    const intValue = (value[0] << 8) + value[1];
                    if (intValue === 0) {
                        return 'No ObjectData';
                    } else if (intValue === 1) {
                        return 'IPTC-NAA Digital Newsphoto Parameter Record';
                    } else if (intValue === 2) {
                        return 'IPTC7901 Recommended Message Format';
                    } else if (intValue === 3) {
                        return 'Tagged Image File Format (Adobe/Aldus Image data)';
                    } else if (intValue === 4) {
                        return 'Illustrator (Adobe Graphics data)';
                    } else if (intValue === 5) {
                        return 'AppleSingle (Apple Computer Inc)';
                    } else if (intValue === 6) {
                        return 'NAA 89-3 (ANPA 1312)';
                    } else if (intValue === 7) {
                        return 'MacBinary II';
                    } else if (intValue === 8) {
                        return 'IPTC Unstructured Character Oriented File Format (UCOFF)';
                    } else if (intValue === 9) {
                        return 'United Press International ANPA 1312 variant';
                    } else if (intValue === 10) {
                        return 'United Press International Down-Load Message';
                    } else if (intValue === 11) {
                        return 'JPEG File Interchange (JFIF)';
                    } else if (intValue === 12) {
                        return 'Photo-CD Image-Pac (Eastman Kodak)';
                    } else if (intValue === 13) {
                        return 'Microsoft Bit Mapped Graphics File [*.BMP]';
                    } else if (intValue === 14) {
                        return 'Digital Audio File [*.WAV] (Microsoft & Creative Labs)';
                    } else if (intValue === 15) {
                        return 'Audio plus Moving Video [*.AVI] (Microsoft)';
                    } else if (intValue === 16) {
                        return 'PC DOS/Windows Executable Files [*.COM][*.EXE]';
                    } else if (intValue === 17) {
                        return 'Compressed Binary File [*.ZIP] (PKWare Inc)';
                    } else if (intValue === 18) {
                        return 'Audio Interchange File Format AIFF (Apple Computer Inc)';
                    } else if (intValue === 19) {
                        return 'RIFF Wave (Microsoft Corporation)';
                    } else if (intValue === 20) {
                        return 'Freehand (Macromedia/Aldus)';
                    } else if (intValue === 21) {
                        return 'Hypertext Markup Language "HTML" (The Internet Society)';
                    } else if (intValue === 22) {
                        return 'MPEG 2 Audio Layer 2 (Musicom), ISO/IEC';
                    } else if (intValue === 23) {
                        return 'MPEG 2 Audio Layer 3, ISO/IEC';
                    } else if (intValue === 24) {
                        return 'Portable Document File (*.PDF) Adobe';
                    } else if (intValue === 25) {
                        return 'News Industry Text Format (NITF)';
                    } else if (intValue === 26) {
                        return 'Tape Archive (*.TAR)';
                    } else if (intValue === 27) {
                        return 'Tidningarnas Telegrambyrå NITF version (TTNITF DTD)';
                    } else if (intValue === 28) {
                        return 'Ritzaus Bureau NITF version (RBNITF DTD)';
                    } else if (intValue === 29) {
                        return 'Corel Draw [*.CDR]';
                    }
                    return `Unknown format ${intValue}`;
                }
                return getStringValue(value);
            }
        },
        0x02c9: {
            'name': 'ObjectData Preview File Format Version',
            'description': (value, tags) => {
                // Format ID, Version ID, Version Description
                const formatVersions = {
                    '00': {'00': '1'},
                    '01': {'01': '1', '02': '2', '03': '3', '04': '4'},
                    '02': {'04': '4'},
                    '03': {'01': '5.0', '02': '6.0'},
                    '04': {'01': '1.40'},
                    '05': {'01': '2'},
                    '06': {'01': '1'},
                    '11': {'01': '1.02'},
                    '20': {'01': '3.1', '02': '4.0', '03': '5.0', '04': '5.5'},
                    '21': {'02': '2.0'}
                };
                const stringValue = getStringValue(value);

                if (tags['ObjectData Preview File Format']) {
                    const objectDataPreviewFileFormat = getStringValue(tags['ObjectData Preview File Format'].value);
                    if (formatVersions[objectDataPreviewFileFormat]
                        && formatVersions[objectDataPreviewFileFormat][stringValue]) {
                        return formatVersions[objectDataPreviewFileFormat][stringValue];
                    }
                }

                return stringValue;
            }
        },
        0x02ca: 'ObjectData Preview Data',
        0x070a: {
            'name': 'Size Mode',
            'description': (value) => {
                return (value[0]).toString();
            }
        },
        0x0714: {
            'name': 'Max Subfile Size',
            'description': (value) => {
                let n = 0;
                for (let i = 0; i < value.length; i++) {
                    n = (n << 8) + value[i];
                }
                return n.toString();
            }
        },
        0x075a: {
            'name': 'ObjectData Size Announced',
            'description': (value) => {
                let n = 0;
                for (let i = 0; i < value.length; i++) {
                    n = (n << 8) + value[i];
                }
                return n.toString();
            }
        },
        0x075f: {
            'name': 'Maximum ObjectData Size',
            'description': (value) => {
                let n = 0;
                for (let i = 0; i < value.length; i++) {
                    n = (n << 8) + value[i];
                }
                return n.toString();
            }
        }
    }
});

function getCreationDate(value) {
    const date = getStringValue(value);

    if (date.length >= 8) {
        return date.substr(0, 4) + '-' + date.substr(4, 2) + '-' + date.substr(6, 2);
    }

    return date;
}

function getCreationTime(value) {
    const time = getStringValue(value);
    let parsedTime = time;

    if (time.length >= 6) {
        parsedTime = time.substr(0, 2) + ':' + time.substr(2, 2) + ':' + time.substr(4, 2);
        if (time.length === 11) {
            parsedTime += time.substr(6, 1) + time.substr(7, 2) + ':' + time.substr(9, 2);
        }
    }

    return parsedTime;
}

function getEncodingName(value) {
    const string = getStringValue(value);
    if (string === '\x1b%G') {
        return 'UTF-8';
    } else if (string === '\x1b%5') {
        return 'Windows-1252';
    } else if (string === '\x1b%/G') {
        return 'UTF-8 Level 1';
    } else if (string === '\x1b%/H') {
        return 'UTF-8 Level 2';
    } else if (string === '\x1b%/I') {
        return 'UTF-8 Level 3';
    } else if (string === '\x1B/A') {
        return 'ISO-8859-1';
    } else if (string === '\x1B/B') {
        return 'ISO-8859-2';
    } else if (string === '\x1B/C') {
        return 'ISO-8859-3';
    } else if (string === '\x1B/D') {
        return 'ISO-8859-4';
    } else if (string === '\x1B/@') {
        return 'ISO-8859-5';
    } else if (string === '\x1B/G') {
        return 'ISO-8859-6';
    } else if (string === '\x1B/F') {
        return 'ISO-8859-7';
    } else if (string === '\x1B/H') {
        return 'ISO-8859-8';
    }
    return 'Unknown';
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/text-decoder.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* harmony default export */ const text_decoder = ({
    get
});

function get() {
    if (typeof TextDecoder !== 'undefined') {
        return TextDecoder;
    }

    return undefined;
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/tag-decoder.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



const TAG_HEADER_SIZE = 5;

/* harmony default export */ const tag_decoder = ({
    decode,
    TAG_HEADER_SIZE
});

function decode(encoding, tagValue) {
    const Decoder = text_decoder.get();
    if ((typeof Decoder !== 'undefined') && (encoding !== undefined)) {
        try {
            return new Decoder(encoding).decode(Uint8Array.from(tagValue));
        } catch (error) {
            // Pass through and fall back to ASCII decoding.
        }
    }

    const stringValue = tagValue.map((charCode) => String.fromCharCode(charCode)).join('');
    return tag_decoder_decodeAsciiValue(stringValue);
}

function tag_decoder_decodeAsciiValue(asciiValue) {
    try {
        return decodeURIComponent(escape(asciiValue));
    } catch (error) {
        return asciiValue;
    }
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/iptc-tags.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




const BYTES_8BIM = 0x3842494d;
const BYTES_8BIM_SIZE = 4;
const RESOURCE_BLOCK_HEADER_SIZE = BYTES_8BIM_SIZE + 8;
const NAA_RESOURCE_BLOCK_TYPE = 0x0404;
const iptc_tags_TAG_HEADER_SIZE = 5;

/* harmony default export */ const iptc_tags = ({
    read: iptc_tags_read
});

function iptc_tags_read(dataView, dataOffset, includeUnknown) {
    try {
        if (Array.isArray(dataView)) {
            return parseTags(new DataView(Uint8Array.from(dataView).buffer), {size: dataView.length}, 0, includeUnknown);
        }
        const {naaBlock, dataOffset: newDataOffset} = getNaaResourceBlock(dataView, dataOffset);
        return parseTags(dataView, naaBlock, newDataOffset, includeUnknown);
    } catch (error) {
        return {};
    }
}

function getNaaResourceBlock(dataView, dataOffset) {
    while (dataOffset + RESOURCE_BLOCK_HEADER_SIZE <= dataView.byteLength) {
        const resourceBlock = getResourceBlock(dataView, dataOffset);
        if (isNaaResourceBlock(resourceBlock)) {
            return {naaBlock: resourceBlock, dataOffset: dataOffset + RESOURCE_BLOCK_HEADER_SIZE};
        }
        dataOffset += RESOURCE_BLOCK_HEADER_SIZE + resourceBlock.size + getBlockPadding(resourceBlock);
    }
    throw new Error('No IPTC NAA resource block.');
}

function getResourceBlock(dataView, dataOffset) {
    const RESOURCE_BLOCK_SIZE_OFFSET = 10;

    if (dataView.getUint32(dataOffset, false) !== BYTES_8BIM) {
        throw new Error('Not an IPTC resource block.');
    }

    return {
        type: dataView.getUint16(dataOffset + BYTES_8BIM_SIZE),
        size: dataView.getUint16(dataOffset + RESOURCE_BLOCK_SIZE_OFFSET)
    };
}

function isNaaResourceBlock(resourceBlock) {
    return resourceBlock.type === NAA_RESOURCE_BLOCK_TYPE;
}

function getBlockPadding(resourceBlock) {
    if (resourceBlock.size % 2 !== 0) {
        return 1;
    }
    return 0;
}

function parseTags(dataView, naaBlock, dataOffset, includeUnknown) {
    const tags = {};
    let encoding = undefined;

    const endOfBlockOffset = dataOffset + naaBlock['size'];

    while ((dataOffset < endOfBlockOffset) && (dataOffset < dataView.byteLength)) {
        const {tag, tagSize} = iptc_tags_readTag(dataView, dataOffset, tags, encoding, includeUnknown);

        if (tag === null) {
            break;
        }

        if (tag) {
            if ('encoding' in tag) {
                encoding = tag.encoding;
            }

            if ((tags[tag.name] === undefined) || (tag['repeatable'] === undefined)) {
                tags[tag.name] = {
                    id: tag.id,
                    value: tag.value,
                    description: tag.description
                };
            } else {
                if (!(tags[tag.name] instanceof Array)) {
                    tags[tag.name] = [{
                        id: tags[tag.name].id,
                        value: tags[tag.name].value,
                        description: tags[tag.name].description
                    }];
                }
                tags[tag.name].push({
                    id: tag.id,
                    value: tag.value,
                    description: tag.description
                });
            }
        }

        dataOffset += iptc_tags_TAG_HEADER_SIZE + tagSize;
    }

    return tags;
}

function iptc_tags_readTag(dataView, dataOffset, tags, encoding, includeUnknown) {
    const TAG_CODE_OFFSET = 1;
    const TAG_SIZE_OFFSET = 3;

    if (leadByteIsMissing(dataView, dataOffset)) {
        return {tag: null, tagSize: 0};
    }

    const tagCode = dataView.getUint16(dataOffset + TAG_CODE_OFFSET);
    const tagSize = dataView.getUint16(dataOffset + TAG_SIZE_OFFSET);

    if (!includeUnknown && !iptc_tag_names.iptc[tagCode]) {
        return {tag: undefined, tagSize};
    }

    const tagValue = iptc_tags_getTagValue(dataView, dataOffset + iptc_tags_TAG_HEADER_SIZE, tagSize);

    const tag = {
        id: tagCode,
        name: getTagName(iptc_tag_names.iptc[tagCode], tagCode, tagValue),
        value: tagValue,
        description: getTagDescription(iptc_tag_names.iptc[tagCode], tagValue, tags, encoding)
    };
    if (tagIsRepeatable(tagCode)) {
        tag['repeatable'] = true;
    }
    if (tagContainsEncoding(tagCode)) {
        tag['encoding'] = iptc_tag_names.iptc[tagCode]['encoding_name'](tagValue);
    }

    return {tag, tagSize};
}

function leadByteIsMissing(dataView, dataOffset) {
    const TAG_LEAD_BYTE = 0x1c;
    return dataView.getUint8(dataOffset) !== TAG_LEAD_BYTE;
}

function iptc_tags_getTagValue(dataView, offset, size) {
    const value = [];

    for (let valueIndex = 0; valueIndex < size; valueIndex++) {
        value.push(dataView.getUint8(offset + valueIndex));
    }

    return value;
}

function getTagName(tag, tagCode, tagValue) {
    if (!tag) {
        return `undefined-${tagCode}`;
    }
    if (tagIsName(tag)) {
        return tag;
    }
    if (hasDynamicName(tag)) {
        return tag['name'](tagValue);
    }
    return tag['name'];
}

function tagIsName(tag) {
    return typeof tag === 'string';
}

function hasDynamicName(tag) {
    return typeof (tag['name']) === 'function';
}

function getTagDescription(tag, tagValue, tags, encoding) {
    if (hasDescriptionProperty(tag)) {
        try {
            return tag['description'](tagValue, tags);
        } catch (error) {
            // Fall through to next handler.
        }
    }
    if (tagValueIsText(tag, tagValue)) {
        return tag_decoder.decode(encoding, tagValue);
    }
    return tagValue;
}

function tagValueIsText(tag, tagValue) {
    return tag && tagValue instanceof Array;
}

function hasDescriptionProperty(tag) {
    return tag && tag['description'] !== undefined;
}

function tagIsRepeatable(tagCode) {
    return iptc_tag_names.iptc[tagCode] && iptc_tag_names.iptc[tagCode]['repeatable'];
}

function tagContainsEncoding(tagCode) {
    return iptc_tag_names.iptc[tagCode] && iptc_tag_names.iptc[tagCode]['encoding_name'] !== undefined;
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/xmp-tag-names.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* harmony default export */ const xmp_tag_names = ({
    'tiff:Orientation'(value) {
        if (value === '1') {
            return 'Horizontal (normal)';
        }
        if (value === '2') {
            return 'Mirror horizontal';
        }
        if (value === '3') {
            return 'Rotate 180';
        }
        if (value === '4') {
            return 'Mirror vertical';
        }
        if (value === '5') {
            return 'Mirror horizontal and rotate 270 CW';
        }
        if (value === '6') {
            return 'Rotate 90 CW';
        }
        if (value === '7') {
            return 'Mirror horizontal and rotate 90 CW';
        }
        if (value === '8') {
            return 'Rotate 270 CW';
        }
        return value;
    },
    'exif:GPSLatitude': calculateGPSValue,
    'exif:GPSLongitude': calculateGPSValue
});

function calculateGPSValue(value) {
    const [degreesString, minutesString] = value.split(',');
    if ((degreesString !== undefined) && (minutesString !== undefined)) {
        const degrees = parseFloat(degreesString);
        const minutes = parseFloat(minutesString);
        const ref = minutesString.charAt(minutesString.length - 1);
        if ((!Number.isNaN(degrees)) && (!Number.isNaN(minutes))) {
            return '' + (degrees + minutes / 60) + ref;
        }
    }
    return value;
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/dom-parser.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* harmony default export */ const dom_parser = ({
    get: dom_parser_get
});

function dom_parser_get() {
    if (typeof DOMParser !== 'undefined') {
        return DOMParser;
    }
    try {
        return require('@xmldom/xmldom').DOMParser; // eslint-disable-line no-undef
    } catch (error) {
        return undefined;
    }
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/xmp-tags.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */





/* harmony default export */ const xmp_tags = ({
    read: xmp_tags_read
});

function xmp_tags_read(dataView, chunks) {
    if (typeof dataView === 'string') {
        return readTags({}, dataView);
    }
    return extractCompleteChunks(dataView, chunks).reduce(readTags, {});
}

// The first chunk is always the regular XMP document. Then there is something
// called extended XMP. The extended XMP is also a single XMP document but it
// can be divided into multiple chunks that need to be combined into one.
function extractCompleteChunks(dataView, chunks) {
    if (chunks.length === 0) {
        return [];
    }

    const completeChunks = [combineChunks(dataView, chunks.slice(0, 1))];
    if (chunks.length > 1) {
        completeChunks.push(combineChunks(dataView, chunks.slice(1)));
    }

    return completeChunks;
}

function combineChunks(dataView, chunks) {
    const totalLength = chunks.reduce((size, chunk) => size + chunk.length, 0);
    const combinedChunks = new Uint8Array(totalLength);
    let offset = 0;

    for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        const slice = dataView.buffer.slice(chunk.dataOffset, chunk.dataOffset + chunk.length);
        combinedChunks.set(new Uint8Array(slice), offset);
        offset += chunk.length;
    }

    return new DataView(combinedChunks.buffer);
}

function readTags(tags, chunkDataView) {
    try {
        const {doc, raw} = getDocument(chunkDataView);
        tags._raw = (tags._raw || '') + raw;
        const rdf = getRDF(doc);

        return objectAssign(tags, parseXMPObject(convertToObject(rdf, true)));
    } catch (error) {
        return tags;
    }
}

function getDocument(chunkDataView) {
    const Parser = dom_parser.get();
    if (!Parser) {
        console.warn('Warning: DOMParser is not available. It is needed to be able to parse XMP tags.'); // eslint-disable-line no-console
        throw new Error();
    }

    const domParser = new Parser();
    const xmlString = typeof chunkDataView === 'string' ? chunkDataView : getStringFromDataView(chunkDataView, 0, chunkDataView.byteLength);
    const doc = domParser.parseFromString(trimXmlSource(xmlString), 'application/xml');

    if (doc.documentElement.nodeName === 'parsererror') {
        throw new Error(doc.documentElement.textContent);
    }

    return {
        doc,
        raw: xmlString,
    };
}

function trimXmlSource(xmlSource) {
    return xmlSource.replace(/^.+(<\?xpacket begin)/, '$1').replace(/(<\?xpacket end=".*"\?>).+$/, '$1');
}

function getRDF(node) {
    for (let i = 0; i < node.childNodes.length; i++) {
        if (node.childNodes[i].tagName === 'x:xmpmeta') {
            return getRDF(node.childNodes[i]);
        }
        if (node.childNodes[i].tagName === 'rdf:RDF') {
            return node.childNodes[i];
        }
    }

    throw new Error();
}

function convertToObject(node, isTopNode = false) {
    const childNodes = getChildNodes(node);

    if (hasTextOnlyContent(childNodes)) {
        if (isTopNode) {
            return {};
        }
        return getTextValue(childNodes[0]);
    }

    return getElementsFromNodes(childNodes);
}

function getChildNodes(node) {
    const elements = [];

    for (let i = 0; i < node.childNodes.length; i++) {
        elements.push(node.childNodes[i]);
    }

    return elements;
}

function hasTextOnlyContent(nodes) {
    return (nodes.length === 1) && (nodes[0].nodeName === '#text');
}

function getTextValue(node) {
    return node.nodeValue;
}

function getElementsFromNodes(nodes) {
    const elements = {};

    nodes.forEach((node) => {
        if (isElement(node)) {
            const nodeElement = getElementFromNode(node);

            if (elements[node.nodeName] !== undefined) {
                if (!Array.isArray(elements[node.nodeName])) {
                    elements[node.nodeName] = [elements[node.nodeName]];
                }
                elements[node.nodeName].push(nodeElement);
            } else {
                elements[node.nodeName] = nodeElement;
            }
        }
    });

    return elements;
}

function isElement(node) {
    return (node.nodeName) && (node.nodeName !== '#text');
}

function getElementFromNode(node) {
    return {
        attributes: getAttributes(node),
        value: convertToObject(node)
    };
}

function getAttributes(element) {
    const attributes = {};

    for (let i = 0; i < element.attributes.length; i++) {
        attributes[element.attributes[i].nodeName] = decodeURIComponent(escape(element.attributes[i].value));
    }

    return attributes;
}

function parseXMPObject(xmpObject) {
    const tags = {};

    if (typeof xmpObject === 'string') {
        return xmpObject;
    }

    for (const nodeName in xmpObject) {
        let nodes = xmpObject[nodeName];

        if (!Array.isArray(nodes)) {
            nodes = [nodes];
        }

        nodes.forEach((node) => {
            objectAssign(tags, parseNodeAttributesAsTags(node.attributes));
            if (typeof node.value === 'object') {
                objectAssign(tags, parseNodeChildrenAsTags(node.value));
            }
        });
    }

    return tags;
}

function parseNodeAttributesAsTags(attributes) {
    const tags = {};

    for (const name in attributes) {
        if (isTagAttribute(name)) {
            tags[getLocalName(name)] = {
                value: attributes[name],
                attributes: {},
                description: getDescription(attributes[name], name)
            };
        }
    }

    return tags;
}

function isTagAttribute(name) {
    return (name !== 'rdf:parseType') && (!isNamespaceDefinition(name));
}

function isNamespaceDefinition(name) {
    return name.split(':')[0] === 'xmlns';
}

function getLocalName(name) {
    if (/^MicrosoftPhoto(_\d+_)?:Rating$/i.test(name)) {
        return 'RatingPercent';
    }
    return name.split(':')[1];
}

function getDescription(value, name = undefined) {
    if (Array.isArray(value)) {
        return getDescriptionOfArray(value);
    }
    if (typeof value === 'object') {
        return getDescriptionOfObject(value);
    }

    try {
        if ((name) && (typeof xmp_tag_names[name] === 'function')) {
            return xmp_tag_names[name](value);
        }
        return decodeURIComponent(escape(value));
    } catch (error) {
        return value;
    }
}

function getDescriptionOfArray(value) {
    return value.map((item) => {
        if (item.value !== undefined) {
            return getDescription(item.value);
        }
        return getDescription(item);
    }).join(', ');
}

function getDescriptionOfObject(value) {
    const descriptions = [];

    for (const key in value) {
        descriptions.push(`${getClearTextKey(key)}: ${getDescription(value[key].value)}`);
    }

    return descriptions.join('; ');
}

function getClearTextKey(key) {
    if (key === 'CiAdrCity') {
        return 'CreatorCity';
    }
    if (key === 'CiAdrCtry') {
        return 'CreatorCountry';
    }
    if (key === 'CiAdrExtadr') {
        return 'CreatorAddress';
    }
    if (key === 'CiAdrPcode') {
        return 'CreatorPostalCode';
    }
    if (key === 'CiAdrRegion') {
        return 'CreatorRegion';
    }
    if (key === 'CiEmailWork') {
        return 'CreatorWorkEmail';
    }
    if (key === 'CiTelWork') {
        return 'CreatorWorkPhone';
    }
    if (key === 'CiUrlWork') {
        return 'CreatorWorkUrl';
    }
    return key;
}

function parseNodeChildrenAsTags(children) {
    const tags = {};

    for (const name in children) {
        if (!isNamespaceDefinition(name)) {
            tags[getLocalName(name)] = parseNodeAsTag(children[name], name);
        }
    }

    return tags;
}

function parseNodeAsTag(node, name) {
    if (hasNestedSimpleRdfDescription(node)) {
        return parseNodeAsSimpleRdfDescription(node, name);
    }
    if (hasNestedStructureRdfDescription(node)) {
        return parseNodeAsStructureRdfDescription(node, name);
    }
    if (isCompactStructure(node)) {
        return parseNodeAsCompactStructure(node, name);
    }
    if (isArray(node)) {
        return parseNodeAsArray(node, name);
    }
    return parseNodeAsSimpleValue(node, name);
}

function hasNestedSimpleRdfDescription(node) {
    return ((node.attributes['rdf:parseType'] === 'Resource') && (node.value['rdf:value'] !== undefined))
        || ((node.value['rdf:Description'] !== undefined) && (node.value['rdf:Description'].value['rdf:value'] !== undefined));
}

function parseNodeAsSimpleRdfDescription(node, name) {
    const attributes = parseNodeAttributes(node);

    if (node.value['rdf:Description'] !== undefined) {
        node = node.value['rdf:Description'];
    }

    objectAssign(attributes, parseNodeAttributes(node), parseNodeChildrenAsAttributes(node));

    const value = parseRdfValue(node);

    return {
        value,
        attributes,
        description: getDescription(value, name)
    };
}

function parseNodeAttributes(node) {
    const attributes = {};

    for (const name in node.attributes) {
        if ((name !== 'rdf:parseType') && (name !== 'rdf:resource') && (!isNamespaceDefinition(name))) {
            attributes[getLocalName(name)] = node.attributes[name];
        }
    }

    return attributes;
}

function parseNodeChildrenAsAttributes(node) {
    const attributes = {};

    for (const name in node.value) {
        if ((name !== 'rdf:value') && (!isNamespaceDefinition(name))) {
            attributes[getLocalName(name)] = node.value[name].value;
        }
    }

    return attributes;
}

function parseRdfValue(node) {
    return getURIValue(node.value['rdf:value']) || node.value['rdf:value'].value;
}

function hasNestedStructureRdfDescription(node) {
    return (node.attributes['rdf:parseType'] === 'Resource')
        || ((node.value['rdf:Description'] !== undefined) && (node.value['rdf:Description'].value['rdf:value'] === undefined));
}

function parseNodeAsStructureRdfDescription(node, name) {
    const tag = {
        value: {},
        attributes: {}
    };

    if (node.value['rdf:Description'] !== undefined) {
        objectAssign(tag.value, parseNodeAttributesAsTags(node.value['rdf:Description'].attributes));
        objectAssign(tag.attributes, parseNodeAttributes(node));
        node = node.value['rdf:Description'];
    }

    objectAssign(tag.value, parseNodeChildrenAsTags(node.value));

    tag.description = getDescription(tag.value, name);

    return tag;
}

function isCompactStructure(node) {
    return (Object.keys(node.value).length === 0)
        && (node.attributes['xml:lang'] === undefined)
        && (node.attributes['rdf:resource'] === undefined);
}

function parseNodeAsCompactStructure(node, name) {
    const value = parseNodeAttributesAsTags(node.attributes);

    return {
        value,
        attributes: {},
        description: getDescription(value, name)
    };
}

function isArray(node) {
    return getArrayChild(node.value) !== undefined;
}

function getArrayChild(value) {
    return value['rdf:Bag'] || value['rdf:Seq'] || value['rdf:Alt'];
}

function parseNodeAsArray(node, name) {
    let items = getArrayChild(node.value).value['rdf:li'];
    const attributes = parseNodeAttributes(node);
    const value = [];

    if (items === undefined) {
        items = [];
    } else if (!Array.isArray(items)) {
        items = [items];
    }

    items.forEach((item) => {
        value.push(parseArrayValue(item));
    });

    return {
        value,
        attributes,
        description: getDescription(value, name)
    };
}

function parseArrayValue(item) {
    if (hasNestedSimpleRdfDescription(item)) {
        return parseNodeAsSimpleRdfDescription(item);
    }
    if (hasNestedStructureRdfDescription(item)) {
        return parseNodeAsStructureRdfDescription(item).value;
    }
    if (isCompactStructure(item)) {
        return parseNodeAsCompactStructure(item).value;
    }

    return parseNodeAsSimpleValue(item);
}

function parseNodeAsSimpleValue(node, name) {
    const value = getURIValue(node) || parseXMPObject(node.value);

    return {
        value,
        attributes: parseNodeAttributes(node),
        description: getDescription(value, name)
    };
}

function getURIValue(node) {
    return node.attributes && node.attributes['rdf:resource'];
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/icc-tag-names.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



const iccTags = {
    'desc': {
        'name': 'ICC Description',
    },
    'cprt': {
        'name': 'ICC Copyright',
    },
    'dmdd': {
        'name': 'ICC Device Model Description',
    },
    'vued': {
        'name': 'ICC Viewing Conditions Description',
    },
    'dmnd': {
        'name': 'ICC Device Manufacturer for Display',
    },
    'tech': {
        'name': 'Technology',
    },
};

const iccProfile = {
    4: {
        'name': 'Preferred CMM type',
        'value': (dataView, offset) => getStringFromDataView(dataView, offset, 4),
        'description': (value) => value !== null ? toCompany(value) : '',
    },
    8: {
        'name': 'Profile Version',
        'value': (dataView, offset) => {
            return (dataView.getUint8(offset)).toString(10) + '.'
            + (dataView.getUint8(offset + 1) >> 4).toString(10) + '.'
            + (dataView.getUint8(offset + 1) % 16).toString(10);
        }
    },
    12: {
        'name': 'Profile/Device class',
        'value': (dataView, offset) => getStringFromDataView(dataView, offset, 4),
        'description': (value) => {
            switch (value.toLowerCase()) {
                case 'scnr': return 'Input Device profile';
                case 'mntr': return 'Display Device profile';
                case 'prtr': return 'Output Device profile';
                case 'link': return 'DeviceLink profile';
                case 'abst': return 'Abstract profile';
                case 'spac': return 'ColorSpace profile';
                case 'nmcl': return 'NamedColor profile';
                case 'cenc': return 'ColorEncodingSpace profile';
                case 'mid ': return 'MultiplexIdentification profile';
                case 'mlnk': return 'MultiplexLink profile';
                case 'mvis': return 'MultiplexVisualization profile';
                default: return value;
            }
        }
    },
    16: {
        'name': 'Color Space',
        'value': (dataView, offset) => getStringFromDataView(dataView, offset, 4)
    },
    20: {
        'name': 'Connection Space',
        'value': (dataView, offset) => getStringFromDataView(dataView, offset, 4)
    },
    24: {
        'name': 'ICC Profile Date',
        'value': (dataView, offset) => parseDate(dataView, offset).toISOString()
    },
    36: {
        'name': 'ICC Signature',
        'value': (dataView, offset) => sliceToString(dataView.buffer.slice(offset, offset + 4))
    },
    40: {
        'name': 'Primary Platform',
        'value': (dataView, offset) => getStringFromDataView(dataView, offset, 4),
        'description': (value) => toCompany(value)
    },
    48: {
        'name': 'Device Manufacturer',
        'value': (dataView, offset) => getStringFromDataView(dataView, offset, 4),
        'description': (value) => toCompany(value)
    },
    52: {
        'name': 'Device Model Number',
        'value': (dataView, offset) => getStringFromDataView(dataView, offset, 4)
    },
    64: {
        'name': 'Rendering Intent',
        'value': (dataView, offset) => dataView.getUint32(offset),
        'description': (value) => {
            switch (value) {
                case 0: return 'Perceptual';
                case 1: return 'Relative Colorimetric';
                case 2: return 'Saturation';
                case 3: return 'Absolute Colorimetric';
                default: return value;
            }
        }
    },

    80: {
        'name': 'Profile Creator',
        'value': (dataView, offset) => getStringFromDataView(dataView, offset, 4)
    },
};

function parseDate(dataView, offset) {
    const year = dataView.getUint16(offset);
    const month = dataView.getUint16(offset + 2) - 1;
    const day = dataView.getUint16(offset + 4);
    const hours = dataView.getUint16(offset + 6);
    const minutes = dataView.getUint16(offset + 8);
    const seconds = dataView.getUint16(offset + 10);
    return new Date(Date.UTC(year, month, day, hours, minutes, seconds));
}

function sliceToString(slice) {
    return String.fromCharCode.apply(null, new Uint8Array(slice));
}

function toCompany(value) {
    switch (value.toLowerCase()) {
        case 'appl': return 'Apple';
        case 'adbe': return 'Adobe';
        case 'msft': return 'Microsoft';
        case 'sunw': return 'Sun Microsystems';
        case 'sgi': return 'Silicon Graphics';
        case 'tgnt': return 'Taligent';
        default: return value;
    }
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/icc-tags.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ const icc_tags = ({
    read: icc_tags_read
});

const PROFILE_HEADER_LENGTH = 84;
const ICC_TAG_COUNT_OFFSET = 128;
const ICC_SIGNATURE = 'acsp';
const TAG_TYPE_DESC = 'desc';
const TAG_TYPE_MULTI_LOCALIZED_UNICODE_TYPE = 'mluc';
const TAG_TYPE_TEXT = 'text';
const TAG_TYPE_SIGNATURE = 'sig ';
const TAG_TABLE_SINGLE_TAG_DATA = 12;

// ICC profile data can be longer than application segment max length of ~64k.
// so it can be split into multiple APP2 segments. Each segment includes
// total chunk count and chunk number.
// Here we read all chunks into single continious array of bytes.
function icc_tags_read(dataView, iccData) {
    try {
        const totalIccProfileLength = iccData.reduce((sum, icc) => sum + icc.length, 0);

        const iccBinaryData = new Uint8Array(totalIccProfileLength);
        let offset = 0;
        const buffer = getBuffer(dataView);

        for (let chunkNumber = 1; chunkNumber <= iccData.length; chunkNumber++) {
            const iccDataChunk = iccData.find((x) => x.chunkNumber === chunkNumber);
            if (!iccDataChunk) {
                throw new Error(`ICC chunk ${chunkNumber} not found`);
            }

            const data = buffer.slice(iccDataChunk.offset, iccDataChunk.offset + iccDataChunk.length);
            const chunkData = new Uint8Array(data);

            iccBinaryData.set(chunkData, offset);
            offset += chunkData.length;
        }

        return icc_tags_parseTags(new DataView(iccBinaryData.buffer));
    } catch (error) {
        return {};
    }
}

function getBuffer(dataView) {
    if (Array.isArray(dataView)) {
        return (new DataView(Uint8Array.from(dataView).buffer)).buffer;
    }
    return dataView.buffer;
}

function iccDoesNotHaveTagCount(buffer) {
    return buffer.length < (ICC_TAG_COUNT_OFFSET + 4);
}

function hasTagsData(buffer, tagHeaderOffset) {
    return buffer.length < tagHeaderOffset + TAG_TABLE_SINGLE_TAG_DATA;
}

function icc_tags_parseTags(dataView) {
    const buffer = dataView.buffer;

    const length = dataView.getUint32();
    if (dataView.byteLength !== length) {
        throw new Error('ICC profile length not matching');
    }

    if (dataView.length < PROFILE_HEADER_LENGTH) {
        throw new Error('ICC profile too short');
    }

    const tags = {};

    const iccProfileKeys = Object.keys(iccProfile);
    for (let i = 0; i < iccProfileKeys.length; i++) {
        const offset = iccProfileKeys[i];
        const profileEntry = iccProfile[offset];
        const value = profileEntry.value(dataView, parseInt(offset, 10));
        let description = value;
        if (profileEntry.description) {
            description = profileEntry.description(value);
        }

        tags[profileEntry.name] = {
            value,
            description
        };
    }

    const signature = icc_tags_sliceToString(buffer.slice(36, 40));
    if (signature !== ICC_SIGNATURE) {
        throw new Error('ICC profile: missing signature');
    }

    /* ICC data is incomplete but we have header parsed so lets return it */
    if (iccDoesNotHaveTagCount(buffer)) {
        return tags;
    }

    const tagCount = dataView.getUint32(128);
    let tagHeaderOffset = 132;

    for (let i = 0; i < tagCount; i++) {
        if (hasTagsData(buffer, tagHeaderOffset)) {
            // Tags are corrupted (offset too far), return what we parsed until now
            return tags;
        }
        const tagSignature = getStringFromDataView(dataView, tagHeaderOffset, 4);
        const tagOffset = dataView.getUint32(tagHeaderOffset + 4);
        const tagSize = dataView.getUint32(tagHeaderOffset + 8);

        if (tagOffset > buffer.length) {
            // Tag data is invalid, lets return what we managed to parse
            return tags;
        }
        const tagType = getStringFromDataView(dataView, tagOffset, 4);

        if (tagType === TAG_TYPE_DESC) {
            const tagValueSize = dataView.getUint32(tagOffset + 8);
            if (tagValueSize > tagSize) {
                // Tag data is invalid, lets return what we managed to parse
                return tags;
            }

            const val = icc_tags_sliceToString(buffer.slice(tagOffset + 12, tagOffset + tagValueSize + 11));
            addTag(tags, tagSignature, val);
        } else if (tagType === TAG_TYPE_MULTI_LOCALIZED_UNICODE_TYPE) {
            const numRecords = dataView.getUint32(tagOffset + 8);
            const recordSize = dataView.getUint32(tagOffset + 12);
            let offset = tagOffset + 16;
            const val = [];
            for (let recordNum = 0; recordNum < numRecords; recordNum++) {
                const languageCode = getStringFromDataView(dataView, offset + 0, 2);
                const countryCode = getStringFromDataView(dataView, offset + 2, 2);
                const textLength = dataView.getUint32(offset + 4);
                const textOffset = dataView.getUint32(offset + 8);

                const text = getUnicodeStringFromDataView(dataView, tagOffset + textOffset, textLength);
                val.push({languageCode, countryCode, text});
                offset += recordSize;
            }
            if (numRecords === 1) {
                addTag(tags, tagSignature, val[0].text);
            } else {
                const valObj = {};
                for (let valIndex = 0; valIndex < val.length; valIndex++) {
                    valObj[`${val[valIndex].languageCode}-${val[valIndex].countryCode}`] = val[valIndex].text;
                }
                addTag(tags, tagSignature, valObj);
            }
        } else if (tagType === TAG_TYPE_TEXT) {
            const val = icc_tags_sliceToString(buffer.slice(tagOffset + 8, tagOffset + tagSize - 7));
            addTag(tags, tagSignature, val);
        } else if (tagType === TAG_TYPE_SIGNATURE) {
            const val = icc_tags_sliceToString(buffer.slice(tagOffset + 8, tagOffset + 12));
            addTag(tags, tagSignature, val);
        }
        tagHeaderOffset = tagHeaderOffset + 12;
    }

    return tags;
}

function icc_tags_sliceToString(slice) {
    return String.fromCharCode.apply(null, new Uint8Array(slice));
}

function addTag(tags, tagSignature, value) {
    if (iccTags[tagSignature]) {
        tags[iccTags[tagSignature].name] = {value, description: value};
    } else {
        tags[tagSignature] = {value, description: value};
    }
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/png-file-tags.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ const png_file_tags = ({
    read: png_file_tags_read
});

function png_file_tags_read(dataView, fileDataOffset) {
    return {
        'Image Width': png_file_tags_getImageWidth(dataView, fileDataOffset),
        'Image Height': png_file_tags_getImageHeight(dataView, fileDataOffset),
        'Bit Depth': getBitDepth(dataView, fileDataOffset),
        'Color Type': getColorType(dataView, fileDataOffset),
        'Compression': getCompression(dataView, fileDataOffset),
        'Filter': getFilter(dataView, fileDataOffset),
        'Interlace': getInterlace(dataView, fileDataOffset)
    };
}

function png_file_tags_getImageWidth(dataView, fileDataOffset) {
    const OFFSET = 0;
    const SIZE = 4;

    if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = types.getLongAt(dataView, fileDataOffset);
    return {
        value,
        description: `${value}px`
    };
}

function png_file_tags_getImageHeight(dataView, fileDataOffset) {
    const OFFSET = 4;
    const SIZE = 4;

    if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = types.getLongAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: `${value}px`
    };
}

function getBitDepth(dataView, fileDataOffset) {
    const OFFSET = 8;
    const SIZE = 1;

    if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = types.getByteAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: `${value}`
    };
}

function getColorType(dataView, fileDataOffset) {
    const OFFSET = 9;
    const SIZE = 1;
    const COLOR_TYPES = {
        0: 'Grayscale',
        2: 'RGB',
        3: 'Palette',
        4: 'Grayscale with Alpha',
        6: 'RGB with Alpha'
    };

    if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = types.getByteAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: COLOR_TYPES[value] || 'Unknown'
    };
}

function getCompression(dataView, fileDataOffset) {
    const OFFSET = 10;
    const SIZE = 1;

    if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = types.getByteAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: value === 0 ? 'Deflate/Inflate' : 'Unknown'
    };
}

function getFilter(dataView, fileDataOffset) {
    const OFFSET = 11;
    const SIZE = 1;

    if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = types.getByteAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: value === 0 ? 'Adaptive' : 'Unknown'
    };
}

function getInterlace(dataView, fileDataOffset) {
    const OFFSET = 12;
    const SIZE = 1;
    const INTERLACE_TYPES = {
        0: 'Noninterlaced',
        1: 'Adam7 Interlace'
    };

    if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = types.getByteAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: INTERLACE_TYPES[value] || 'Unknown'
    };
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/thumbnail.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



// https://exiftool.org/TagNames/EXIF.html#Compression
const COMPRESSION_JPEG = [6, 7, 99];

/* harmony default export */ const src_thumbnail = ({
    get: thumbnail_get,
});

function thumbnail_get(dataView, thumbnailTags, tiffHeaderOffset) {
    if (hasJpegThumbnail(thumbnailTags)) {
        thumbnailTags.type = 'image/jpeg';
        const offset = tiffHeaderOffset + thumbnailTags.JPEGInterchangeFormat.value;
        thumbnailTags.image = dataView.buffer.slice(offset, offset + thumbnailTags.JPEGInterchangeFormatLength.value);
        deferInit(thumbnailTags, 'base64', function () {
            return getBase64Image(this.image);
        });
    }

    // There is a small possibility of thumbnails in TIFF format but they are
    // not stored as a self-contained image file and would be much more
    // difficult to extract.
    // https://exiftool.org/forum/index.php?topic=3273.msg14778#msg14778

    return thumbnailTags;
}

function hasJpegThumbnail(tags) {
    return tags && ((tags.Compression === undefined) || (COMPRESSION_JPEG.includes(tags.Compression.value)))
        && tags.JPEGInterchangeFormat && tags.JPEGInterchangeFormat.value
        && tags.JPEGInterchangeFormatLength && tags.JPEGInterchangeFormatLength.value;
}

;// CONCATENATED MODULE: ./node_modules/exifreader/src/errors.js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/**
 * Thrown when no Exif metadata was found for the given image.
 *
 * @param {string} message The error message.
 */
function MetadataMissingError(message) {
    this.name = 'MetadataMissingError';
    this.message = message || 'No Exif data';
    this.stack = (new Error()).stack;
}

MetadataMissingError.prototype = new Error;

/* harmony default export */ const errors = ({
    MetadataMissingError,
});

;// CONCATENATED MODULE: ./node_modules/exifreader/src/exif-reader.js
/**
 * ExifReader
 * http://github.com/mattiasw/exifreader
 * Copyright (C) 2011-2021  Mattias Wallander <mattias@wallander.eu>
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
/* global Buffer, __non_webpack_require__ */

















/* harmony default export */ const exif_reader = ({
    load,
    loadView,
    errors: errors,
});

const exif_reader_errors = (/* unused pure expression or super */ null && (exifErrors));

function load(data, options) {
    if (isFilePathOrURL(data)) {
        return loadFile(data).then((fileContents) => loadFromData(fileContents, options));
    }
    if (isBrowserFileObject(data)) {
        return loadFileObject(data).then((fileContents) => loadFromData(fileContents, options));
    }
    return loadFromData(data, options);
}

function isFilePathOrURL(data) {
    return typeof data === 'string';
}

function loadFile(filename) {
    if (typeof fetch !== 'undefined') {
        return browserFetchRemoteFile(filename);
    }

    if (/^https?:\/\//.test(filename)) {
        return nodeFetchRemoteFile(filename);
    }

    return loadLocalFile(filename);
}

function browserFetchRemoteFile(url) {
    return fetch(url).then((response) => response.arrayBuffer());
}

function nodeFetchRemoteFile(url) {
    return new Promise((resolve, reject) => {
        const get = requireNodeGet(url);
        get(url, (response) => {
            if ((response.statusCode >= 200) && (response.statusCode <= 299)) {
                const data = [];
                response.on('data', (chunk) => data.push(Buffer.from(chunk)));
                response.on('error', (error) => reject(error));
                response.on('end', () => resolve(Buffer.concat(data)));
            } else {
                reject(`Could not fetch file: ${response.statusCode} ${response.statusMessage}`);
                response.resume();
            }
        }).on('error', (error) => reject(error));
    });
}

function requireNodeGet(url) {
    if (/^https:\/\//.test(url)) {
        return require('https').get;
    }
    return require('http').get;
}

function loadLocalFile(filename) {
    return new Promise((resolve, reject) => {
        const fs = requireNodeFs();
        fs.open(filename, (error, fd) => {
            if (error) {
                reject(error);
            } else {
                fs.stat(filename, (error, stat) => {
                    if (error) {
                        reject(error);
                    } else {
                        const buffer = Buffer.alloc(stat.size);
                        fs.read(fd, {buffer}, (error) => {
                            if (error) {
                                reject(error);
                            } else {
                                fs.close(fd, (error) => {
                                    if (error) {
                                        console.warn(`Could not close file ${filename}:`, error); // eslint-disable-line no-console
                                    }
                                    resolve(buffer);
                                });
                            }
                        });
                    }
                });
            }
        });
    });
}

function requireNodeFs() {
    try {
        return require('fs');
    } catch (error) {
        return undefined;
    }
}

function isBrowserFileObject(data) {
    return (typeof window !== 'undefined') && (typeof File !== 'undefined') && (data instanceof File);
}

function loadFileObject(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (readerEvent) => resolve(readerEvent.target.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsArrayBuffer(file);
    });
}

function loadFromData(data, options) {
    if (isNodeBuffer(data)) {
        // File data read in Node can share the underlying buffer with other
        // data. Therefore it's safest to get a new one to avoid weird bugs.
        data = (new Uint8Array(data)).buffer;
    }
    return loadView(getDataView(data), options);
}

function isNodeBuffer(data) {
    try {
        return Buffer.isBuffer(data);
    } catch (error) {
        return false;
    }
}

function getDataView(data) {
    try {
        return new DataView(data);
    } catch (error) {
        return new dataview_DataView(data);
    }
}

function loadView(dataView, {expanded = false, includeUnknown = false} = {expanded: false, includeUnknown: false}) {
    let foundMetaData = false;
    let tags = {};

    const {
        fileDataOffset,
        jfifDataOffset,
        tiffHeaderOffset,
        iptcDataOffset,
        xmpChunks,
        iccChunks,
        mpfDataOffset,
        pngHeaderOffset
    } = image_header.parseAppMarkers(dataView);

    if (constants.USE_JPEG && constants.USE_FILE && hasFileData(fileDataOffset)) {
        foundMetaData = true;
        const readTags = file_tags.read(dataView, fileDataOffset);
        if (expanded) {
            tags.file = readTags;
        } else {
            tags = objectAssign({}, tags, readTags);
        }
    }

    if (constants.USE_JPEG && constants.USE_JFIF && hasJfifData(jfifDataOffset)) {
        foundMetaData = true;
        const readTags = jfif_tags.read(dataView, jfifDataOffset);
        if (expanded) {
            tags.jfif = readTags;
        } else {
            tags = objectAssign({}, tags, readTags);
        }
    }

    if (constants.USE_EXIF && hasExifData(tiffHeaderOffset)) {
        foundMetaData = true;
        const readTags = src_tags.read(dataView, tiffHeaderOffset, includeUnknown);
        if (readTags.Thumbnail) {
            tags.Thumbnail = readTags.Thumbnail;
            delete readTags.Thumbnail;
        }

        if (expanded) {
            tags.exif = readTags;
            addGpsGroup(tags);
        } else {
            tags = objectAssign({}, tags, readTags);
        }

        if (constants.USE_TIFF && constants.USE_IPTC && readTags['IPTC-NAA'] && !hasIptcData(iptcDataOffset)) {
            const readIptcTags = iptc_tags.read(readTags['IPTC-NAA'].value, 0, includeUnknown);
            if (expanded) {
                tags.iptc = readIptcTags;
            } else {
                tags = objectAssign({}, tags, readIptcTags);
            }
        }

        if (constants.USE_TIFF && constants.USE_XMP && readTags['ApplicationNotes'] && !hasXmpData(xmpChunks)) {
            const readXmpTags = xmp_tags.read(getStringValueFromArray(readTags['ApplicationNotes'].value));
            if (expanded) {
                tags.xmp = readXmpTags;
            } else {
                delete readXmpTags._raw;
                tags = objectAssign({}, tags, readXmpTags);
            }
        }

        if (constants.USE_TIFF && constants.USE_ICC && readTags['ICC_Profile'] && !hasIccData(iccChunks)) {
            const readIccTags = icc_tags.read(
                readTags['ICC_Profile'].value,
                [{
                    offset: 0,
                    length: readTags['ICC_Profile'].value.length,
                    chunkNumber: 1,
                    chunksTotal: 1
                }]
            );
            if (expanded) {
                tags.icc = readIccTags;
            } else {
                tags = objectAssign({}, tags, readIccTags);
            }
        }
    }

    if (constants.USE_JPEG && constants.USE_IPTC && hasIptcData(iptcDataOffset)) {
        foundMetaData = true;
        const readTags = iptc_tags.read(dataView, iptcDataOffset, includeUnknown);
        if (expanded) {
            tags.iptc = readTags;
        } else {
            tags = objectAssign({}, tags, readTags);
        }
    }

    if (constants.USE_XMP && hasXmpData(xmpChunks)) {
        foundMetaData = true;
        const readTags = xmp_tags.read(dataView, xmpChunks);
        if (expanded) {
            tags.xmp = readTags;
        } else {
            delete readTags._raw;
            tags = objectAssign({}, tags, readTags);
        }
    }

    if ((constants.USE_JPEG || constants.USE_WEBP) && constants.USE_ICC && hasIccData(iccChunks)) {
        foundMetaData = true;
        const readTags = icc_tags.read(dataView, iccChunks);
        if (expanded) {
            tags.icc = readTags;
        } else {
            tags = objectAssign({}, tags, readTags);
        }
    }

    if (constants.USE_MPF && hasMpfData(mpfDataOffset)) {
        foundMetaData = true;
        const readMpfTags = src_tags.readMpf(dataView, mpfDataOffset, includeUnknown);
        if (expanded) {
            tags.mpf = readMpfTags;
        } else {
            tags = objectAssign({}, tags, readMpfTags);
        }
    }

    if (constants.USE_PNG && constants.USE_PNG_FILE && hasPngFileData(pngHeaderOffset)) {
        foundMetaData = true;
        const readTags = png_file_tags.read(dataView, pngHeaderOffset);
        if (expanded) {
            tags.pngFile = readTags;
        } else {
            tags = objectAssign({}, tags, readTags);
        }
    }

    const thumbnail = (constants.USE_JPEG || constants.USE_WEBP)
        && constants.USE_EXIF
        && constants.USE_THUMBNAIL
        && src_thumbnail.get(dataView, tags.Thumbnail, tiffHeaderOffset);
    if (thumbnail) {
        foundMetaData = true;
        tags.Thumbnail = thumbnail;
    } else {
        delete tags.Thumbnail;
    }

    if (!foundMetaData) {
        throw new errors.MetadataMissingError();
    }

    return tags;
}

function hasFileData(fileDataOffset) {
    return fileDataOffset !== undefined;
}

function hasJfifData(jfifDataOffset) {
    return jfifDataOffset !== undefined;
}

function hasExifData(tiffHeaderOffset) {
    return tiffHeaderOffset !== undefined;
}

function addGpsGroup(tags) {
    if (tags.exif) {
        if (tags.exif.GPSLatitude && tags.exif.GPSLatitudeRef) {
            try {
                tags.gps = tags.gps || {};
                tags.gps.Latitude = getCalculatedGpsValue(tags.exif.GPSLatitude.value);
                if (tags.exif.GPSLatitudeRef.value.join('') === 'S') {
                    tags.gps.Latitude = -tags.gps.Latitude;
                }
            } catch (error) {
                // Ignore.
            }
        }

        if (tags.exif.GPSLongitude && tags.exif.GPSLongitudeRef) {
            try {
                tags.gps = tags.gps || {};
                tags.gps.Longitude = getCalculatedGpsValue(tags.exif.GPSLongitude.value);
                if (tags.exif.GPSLongitudeRef.value.join('') === 'W') {
                    tags.gps.Longitude = -tags.gps.Longitude;
                }
            } catch (error) {
                // Ignore.
            }
        }

        if (tags.exif.GPSAltitude && tags.exif.GPSAltitudeRef) {
            try {
                tags.gps = tags.gps || {};
                tags.gps.Altitude = tags.exif.GPSAltitude.value[0] / tags.exif.GPSAltitude.value[1];
                if (tags.exif.GPSAltitudeRef.value === 1) {
                    tags.gps.Altitude = -tags.gps.Altitude;
                }
            } catch (error) {
                // Ignore.
            }
        }
    }
}

function hasIptcData(iptcDataOffset) {
    return iptcDataOffset !== undefined;
}

function hasXmpData(xmpChunks) {
    return Array.isArray(xmpChunks) && xmpChunks.length > 0;
}

function hasIccData(iccDataOffsets) {
    return Array.isArray(iccDataOffsets) && iccDataOffsets.length > 0;
}

function hasMpfData(mpfDataOffset) {
    return mpfDataOffset !== undefined;
}

function hasPngFileData(pngFileDataOffset) {
    return pngFileDataOffset !== undefined;
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
    var message = String.raw.apply(String, __spreadArray([template], standard_extensions_read(substitutions.map(function (x) {
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

;// CONCATENATED MODULE: ./source/coordinate-of-image.ts
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
// spell-checker: ignore exif


function normalizeDMS(value, isNegative) {
    return value * (isNegative ? -1 : 1);
}
function parseDMS(numbers) {
    var description = numbers === null || numbers === void 0 ? void 0 : numbers.description;
    if (description == null) {
        return null;
    }
    return parseFloat(description);
}
function readFileAsArrayBuffer(file, options) {
    return new Promise(function (resolve, reject) {
        var _a;
        var signal = options === null || options === void 0 ? void 0 : options.signal;
        if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
            return reject(newAbortError());
        }
        var onAbort = signal
            ? function () {
                reader.abort();
                reject(newAbortError());
            }
            : ignore;
        signal === null || signal === void 0 ? void 0 : signal.addEventListener("abort", onAbort);
        var progress = (_a = options === null || options === void 0 ? void 0 : options.progress) !== null && _a !== void 0 ? _a : null;
        var reader = new FileReader();
        reader.onloadstart = progress;
        reader.onprogress = progress;
        reader.onload = function (e) {
            progress === null || progress === void 0 ? void 0 : progress(e);
            signal === null || signal === void 0 ? void 0 : signal.removeEventListener("abort", onAbort);
            resolve(reader.result);
        };
        reader.onerror = function (e) {
            progress === null || progress === void 0 ? void 0 : progress(e);
            signal === null || signal === void 0 ? void 0 : signal.removeEventListener("abort", onAbort);
            reject(e);
        };
        reader.onabort = progress;
        reader.readAsArrayBuffer(file);
    });
}
function coordinateOfImage(file, options) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var buffer, tags, lat, latRef, lng, lngRef;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, readFileAsArrayBuffer(file, options)];
                case 1:
                    buffer = _d.sent();
                    tags = load(buffer);
                    lat = parseDMS(tags.GPSLatitude);
                    latRef = (_a = tags.GPSLatitudeRef) === null || _a === void 0 ? void 0 : _a.description;
                    lng = parseDMS(tags.GPSLongitude);
                    lngRef = (_c = (_b = tags.GPSLongitudeRef) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c[0];
                    if (lng == null || lngRef == null || lat == null || latRef == null) {
                        return [2 /*return*/, null];
                    }
                    return [2 /*return*/, {
                            lat: normalizeDMS(lat, latRef === "S"),
                            lng: normalizeDMS(lng, lngRef === "W"),
                        }];
            }
        });
    });
}

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

;// CONCATENATED MODULE: ./source/gsi-muni-table.json
const gsi_muni_table_namespaceObject = JSON.parse('[[1100,[1,"北海道",1100,"札幌市"]],[1101,[1,"北海道",1101,"札幌市　中央区"]],[1102,[1,"北海道",1102,"札幌市　北区"]],[1103,[1,"北海道",1103,"札幌市　東区"]],[1104,[1,"北海道",1104,"札幌市　白石区"]],[1105,[1,"北海道",1105,"札幌市　豊平区"]],[1106,[1,"北海道",1106,"札幌市　南区"]],[1107,[1,"北海道",1107,"札幌市　西区"]],[1108,[1,"北海道",1108,"札幌市　厚別区"]],[1109,[1,"北海道",1109,"札幌市　手稲区"]],[1110,[1,"北海道",1110,"札幌市　清田区"]],[1202,[1,"北海道",1202,"函館市"]],[1203,[1,"北海道",1203,"小樽市"]],[1204,[1,"北海道",1204,"旭川市"]],[1205,[1,"北海道",1205,"室蘭市"]],[1206,[1,"北海道",1206,"釧路市"]],[1207,[1,"北海道",1207,"帯広市"]],[1208,[1,"北海道",1208,"北見市"]],[1209,[1,"北海道",1209,"夕張市"]],[1210,[1,"北海道",1210,"岩見沢市"]],[1211,[1,"北海道",1211,"網走市"]],[1212,[1,"北海道",1212,"留萌市"]],[1213,[1,"北海道",1213,"苫小牧市"]],[1214,[1,"北海道",1214,"稚内市"]],[1215,[1,"北海道",1215,"美唄市"]],[1216,[1,"北海道",1216,"芦別市"]],[1217,[1,"北海道",1217,"江別市"]],[1218,[1,"北海道",1218,"赤平市"]],[1219,[1,"北海道",1219,"紋別市"]],[1220,[1,"北海道",1220,"士別市"]],[1221,[1,"北海道",1221,"名寄市"]],[1222,[1,"北海道",1222,"三笠市"]],[1223,[1,"北海道",1223,"根室市"]],[1224,[1,"北海道",1224,"千歳市"]],[1225,[1,"北海道",1225,"滝川市"]],[1226,[1,"北海道",1226,"砂川市"]],[1227,[1,"北海道",1227,"歌志内市"]],[1228,[1,"北海道",1228,"深川市"]],[1229,[1,"北海道",1229,"富良野市"]],[1230,[1,"北海道",1230,"登別市"]],[1231,[1,"北海道",1231,"恵庭市"]],[1233,[1,"北海道",1233,"伊達市"]],[1234,[1,"北海道",1234,"北広島市"]],[1235,[1,"北海道",1235,"石狩市"]],[1236,[1,"北海道",1236,"北斗市"]],[1303,[1,"北海道",1303,"当別町"]],[1304,[1,"北海道",1304,"新篠津村"]],[1331,[1,"北海道",1331,"松前町"]],[1332,[1,"北海道",1332,"福島町"]],[1333,[1,"北海道",1333,"知内町"]],[1334,[1,"北海道",1334,"木古内町"]],[1337,[1,"北海道",1337,"七飯町"]],[1343,[1,"北海道",1343,"鹿部町"]],[1345,[1,"北海道",1345,"森町"]],[1346,[1,"北海道",1346,"八雲町"]],[1347,[1,"北海道",1347,"長万部町"]],[1361,[1,"北海道",1361,"江差町"]],[1362,[1,"北海道",1362,"上ノ国町"]],[1363,[1,"北海道",1363,"厚沢部町"]],[1364,[1,"北海道",1364,"乙部町"]],[1367,[1,"北海道",1367,"奥尻町"]],[1370,[1,"北海道",1370,"今金町"]],[1371,[1,"北海道",1371,"せたな町"]],[1391,[1,"北海道",1391,"島牧村"]],[1392,[1,"北海道",1392,"寿都町"]],[1393,[1,"北海道",1393,"黒松内町"]],[1394,[1,"北海道",1394,"蘭越町"]],[1395,[1,"北海道",1395,"ニセコ町"]],[1396,[1,"北海道",1396,"真狩村"]],[1397,[1,"北海道",1397,"留寿都村"]],[1398,[1,"北海道",1398,"喜茂別町"]],[1399,[1,"北海道",1399,"京極町"]],[1400,[1,"北海道",1400,"倶知安町"]],[1401,[1,"北海道",1401,"共和町"]],[1402,[1,"北海道",1402,"岩内町"]],[1403,[1,"北海道",1403,"泊村"]],[1404,[1,"北海道",1404,"神恵内村"]],[1405,[1,"北海道",1405,"積丹町"]],[1406,[1,"北海道",1406,"古平町"]],[1407,[1,"北海道",1407,"仁木町"]],[1408,[1,"北海道",1408,"余市町"]],[1409,[1,"北海道",1409,"赤井川村"]],[1423,[1,"北海道",1423,"南幌町"]],[1424,[1,"北海道",1424,"奈井江町"]],[1425,[1,"北海道",1425,"上砂川町"]],[1427,[1,"北海道",1427,"由仁町"]],[1428,[1,"北海道",1428,"長沼町"]],[1429,[1,"北海道",1429,"栗山町"]],[1430,[1,"北海道",1430,"月形町"]],[1431,[1,"北海道",1431,"浦臼町"]],[1432,[1,"北海道",1432,"新十津川町"]],[1433,[1,"北海道",1433,"妹背牛町"]],[1434,[1,"北海道",1434,"秩父別町"]],[1436,[1,"北海道",1436,"雨竜町"]],[1437,[1,"北海道",1437,"北竜町"]],[1438,[1,"北海道",1438,"沼田町"]],[1452,[1,"北海道",1452,"鷹栖町"]],[1453,[1,"北海道",1453,"東神楽町"]],[1454,[1,"北海道",1454,"当麻町"]],[1455,[1,"北海道",1455,"比布町"]],[1456,[1,"北海道",1456,"愛別町"]],[1457,[1,"北海道",1457,"上川町"]],[1458,[1,"北海道",1458,"東川町"]],[1459,[1,"北海道",1459,"美瑛町"]],[1460,[1,"北海道",1460,"上富良野町"]],[1461,[1,"北海道",1461,"中富良野町"]],[1462,[1,"北海道",1462,"南富良野町"]],[1463,[1,"北海道",1463,"占冠村"]],[1464,[1,"北海道",1464,"和寒町"]],[1465,[1,"北海道",1465,"剣淵町"]],[1468,[1,"北海道",1468,"下川町"]],[1469,[1,"北海道",1469,"美深町"]],[1470,[1,"北海道",1470,"音威子府村"]],[1471,[1,"北海道",1471,"中川町"]],[1472,[1,"北海道",1472,"幌加内町"]],[1481,[1,"北海道",1481,"増毛町"]],[1482,[1,"北海道",1482,"小平町"]],[1483,[1,"北海道",1483,"苫前町"]],[1484,[1,"北海道",1484,"羽幌町"]],[1485,[1,"北海道",1485,"初山別村"]],[1486,[1,"北海道",1486,"遠別町"]],[1487,[1,"北海道",1487,"天塩町"]],[1511,[1,"北海道",1511,"猿払村"]],[1512,[1,"北海道",1512,"浜頓別町"]],[1513,[1,"北海道",1513,"中頓別町"]],[1514,[1,"北海道",1514,"枝幸町"]],[1516,[1,"北海道",1516,"豊富町"]],[1517,[1,"北海道",1517,"礼文町"]],[1518,[1,"北海道",1518,"利尻町"]],[1519,[1,"北海道",1519,"利尻富士町"]],[1520,[1,"北海道",1520,"幌延町"]],[1543,[1,"北海道",1543,"美幌町"]],[1544,[1,"北海道",1544,"津別町"]],[1545,[1,"北海道",1545,"斜里町"]],[1546,[1,"北海道",1546,"清里町"]],[1547,[1,"北海道",1547,"小清水町"]],[1549,[1,"北海道",1549,"訓子府町"]],[1550,[1,"北海道",1550,"置戸町"]],[1552,[1,"北海道",1552,"佐呂間町"]],[1555,[1,"北海道",1555,"遠軽町"]],[1559,[1,"北海道",1559,"湧別町"]],[1560,[1,"北海道",1560,"滝上町"]],[1561,[1,"北海道",1561,"興部町"]],[1562,[1,"北海道",1562,"西興部村"]],[1563,[1,"北海道",1563,"雄武町"]],[1564,[1,"北海道",1564,"大空町"]],[1571,[1,"北海道",1571,"豊浦町"]],[1575,[1,"北海道",1575,"壮瞥町"]],[1578,[1,"北海道",1578,"白老町"]],[1581,[1,"北海道",1581,"厚真町"]],[1584,[1,"北海道",1584,"洞爺湖町"]],[1585,[1,"北海道",1585,"安平町"]],[1586,[1,"北海道",1586,"むかわ町"]],[1601,[1,"北海道",1601,"日高町"]],[1602,[1,"北海道",1602,"平取町"]],[1604,[1,"北海道",1604,"新冠町"]],[1607,[1,"北海道",1607,"浦河町"]],[1608,[1,"北海道",1608,"様似町"]],[1609,[1,"北海道",1609,"えりも町"]],[1610,[1,"北海道",1610,"新ひだか町"]],[1631,[1,"北海道",1631,"音更町"]],[1632,[1,"北海道",1632,"士幌町"]],[1633,[1,"北海道",1633,"上士幌町"]],[1634,[1,"北海道",1634,"鹿追町"]],[1635,[1,"北海道",1635,"新得町"]],[1636,[1,"北海道",1636,"清水町"]],[1637,[1,"北海道",1637,"芽室町"]],[1638,[1,"北海道",1638,"中札内村"]],[1639,[1,"北海道",1639,"更別村"]],[1641,[1,"北海道",1641,"大樹町"]],[1642,[1,"北海道",1642,"広尾町"]],[1643,[1,"北海道",1643,"幕別町"]],[1644,[1,"北海道",1644,"池田町"]],[1645,[1,"北海道",1645,"豊頃町"]],[1646,[1,"北海道",1646,"本別町"]],[1647,[1,"北海道",1647,"足寄町"]],[1648,[1,"北海道",1648,"陸別町"]],[1649,[1,"北海道",1649,"浦幌町"]],[1661,[1,"北海道",1661,"釧路町"]],[1662,[1,"北海道",1662,"厚岸町"]],[1663,[1,"北海道",1663,"浜中町"]],[1664,[1,"北海道",1664,"標茶町"]],[1665,[1,"北海道",1665,"弟子屈町"]],[1667,[1,"北海道",1667,"鶴居村"]],[1668,[1,"北海道",1668,"白糠町"]],[1691,[1,"北海道",1691,"別海町"]],[1692,[1,"北海道",1692,"中標津町"]],[1693,[1,"北海道",1693,"標津町"]],[1694,[1,"北海道",1694,"羅臼町"]],[1695,[1,"北海道",1695,"色丹村"]],[1696,[1,"北海道",1696,"泊村"]],[1697,[1,"北海道",1697,"留夜別村"]],[1698,[1,"北海道",1698,"留別村"]],[1699,[1,"北海道",1699,"紗那村"]],[1700,[1,"北海道",1700,"蘂取村"]],[2201,[2,"青森県",2201,"青森市"]],[2202,[2,"青森県",2202,"弘前市"]],[2203,[2,"青森県",2203,"八戸市"]],[2204,[2,"青森県",2204,"黒石市"]],[2205,[2,"青森県",2205,"五所川原市"]],[2206,[2,"青森県",2206,"十和田市"]],[2207,[2,"青森県",2207,"三沢市"]],[2208,[2,"青森県",2208,"むつ市"]],[2209,[2,"青森県",2209,"つがる市"]],[2210,[2,"青森県",2210,"平川市"]],[2301,[2,"青森県",2301,"平内町"]],[2303,[2,"青森県",2303,"今別町"]],[2304,[2,"青森県",2304,"蓬田村"]],[2307,[2,"青森県",2307,"外ヶ浜町"]],[2321,[2,"青森県",2321,"鰺ヶ沢町"]],[2323,[2,"青森県",2323,"深浦町"]],[2343,[2,"青森県",2343,"西目屋村"]],[2361,[2,"青森県",2361,"藤崎町"]],[2362,[2,"青森県",2362,"大鰐町"]],[2367,[2,"青森県",2367,"田舎館村"]],[2381,[2,"青森県",2381,"板柳町"]],[2384,[2,"青森県",2384,"鶴田町"]],[2387,[2,"青森県",2387,"中泊町"]],[2401,[2,"青森県",2401,"野辺地町"]],[2402,[2,"青森県",2402,"七戸町"]],[2405,[2,"青森県",2405,"六戸町"]],[2406,[2,"青森県",2406,"横浜町"]],[2408,[2,"青森県",2408,"東北町"]],[2411,[2,"青森県",2411,"六ヶ所村"]],[2412,[2,"青森県",2412,"おいらせ町"]],[2423,[2,"青森県",2423,"大間町"]],[2424,[2,"青森県",2424,"東通村"]],[2425,[2,"青森県",2425,"風間浦村"]],[2426,[2,"青森県",2426,"佐井村"]],[2441,[2,"青森県",2441,"三戸町"]],[2442,[2,"青森県",2442,"五戸町"]],[2443,[2,"青森県",2443,"田子町"]],[2445,[2,"青森県",2445,"南部町"]],[2446,[2,"青森県",2446,"階上町"]],[2450,[2,"青森県",2450,"新郷村"]],[3201,[3,"岩手県",3201,"盛岡市"]],[3202,[3,"岩手県",3202,"宮古市"]],[3203,[3,"岩手県",3203,"大船渡市"]],[3205,[3,"岩手県",3205,"花巻市"]],[3206,[3,"岩手県",3206,"北上市"]],[3207,[3,"岩手県",3207,"久慈市"]],[3208,[3,"岩手県",3208,"遠野市"]],[3209,[3,"岩手県",3209,"一関市"]],[3210,[3,"岩手県",3210,"陸前高田市"]],[3211,[3,"岩手県",3211,"釜石市"]],[3213,[3,"岩手県",3213,"二戸市"]],[3214,[3,"岩手県",3214,"八幡平市"]],[3215,[3,"岩手県",3215,"奥州市"]],[3216,[3,"岩手県",3216,"滝沢市"]],[3301,[3,"岩手県",3301,"雫石町"]],[3302,[3,"岩手県",3302,"葛巻町"]],[3303,[3,"岩手県",3303,"岩手町"]],[3321,[3,"岩手県",3321,"紫波町"]],[3322,[3,"岩手県",3322,"矢巾町"]],[3366,[3,"岩手県",3366,"西和賀町"]],[3381,[3,"岩手県",3381,"金ケ崎町"]],[3402,[3,"岩手県",3402,"平泉町"]],[3441,[3,"岩手県",3441,"住田町"]],[3461,[3,"岩手県",3461,"大槌町"]],[3482,[3,"岩手県",3482,"山田町"]],[3483,[3,"岩手県",3483,"岩泉町"]],[3484,[3,"岩手県",3484,"田野畑村"]],[3485,[3,"岩手県",3485,"普代村"]],[3501,[3,"岩手県",3501,"軽米町"]],[3503,[3,"岩手県",3503,"野田村"]],[3506,[3,"岩手県",3506,"九戸村"]],[3507,[3,"岩手県",3507,"洋野町"]],[3524,[3,"岩手県",3524,"一戸町"]],[4100,[4,"宮城県",4100,"仙台市"]],[4101,[4,"宮城県",4101,"仙台市　青葉区"]],[4102,[4,"宮城県",4102,"仙台市　宮城野区"]],[4103,[4,"宮城県",4103,"仙台市　若林区"]],[4104,[4,"宮城県",4104,"仙台市　太白区"]],[4105,[4,"宮城県",4105,"仙台市　泉区"]],[4202,[4,"宮城県",4202,"石巻市"]],[4203,[4,"宮城県",4203,"塩竈市"]],[4205,[4,"宮城県",4205,"気仙沼市"]],[4206,[4,"宮城県",4206,"白石市"]],[4207,[4,"宮城県",4207,"名取市"]],[4208,[4,"宮城県",4208,"角田市"]],[4209,[4,"宮城県",4209,"多賀城市"]],[4211,[4,"宮城県",4211,"岩沼市"]],[4212,[4,"宮城県",4212,"登米市"]],[4213,[4,"宮城県",4213,"栗原市"]],[4214,[4,"宮城県",4214,"東松島市"]],[4215,[4,"宮城県",4215,"大崎市"]],[4216,[4,"宮城県",4216,"富谷市"]],[4301,[4,"宮城県",4301,"蔵王町"]],[4302,[4,"宮城県",4302,"七ケ宿町"]],[4321,[4,"宮城県",4321,"大河原町"]],[4322,[4,"宮城県",4322,"村田町"]],[4323,[4,"宮城県",4323,"柴田町"]],[4324,[4,"宮城県",4324,"川崎町"]],[4341,[4,"宮城県",4341,"丸森町"]],[4361,[4,"宮城県",4361,"亘理町"]],[4362,[4,"宮城県",4362,"山元町"]],[4401,[4,"宮城県",4401,"松島町"]],[4404,[4,"宮城県",4404,"七ヶ浜町"]],[4406,[4,"宮城県",4406,"利府町"]],[4421,[4,"宮城県",4421,"大和町"]],[4422,[4,"宮城県",4422,"大郷町"]],[4423,[4,"宮城県",4423,"富谷市"]],[4424,[4,"宮城県",4424,"大衡村"]],[4444,[4,"宮城県",4444,"色麻町"]],[4445,[4,"宮城県",4445,"加美町"]],[4501,[4,"宮城県",4501,"涌谷町"]],[4505,[4,"宮城県",4505,"美里町"]],[4581,[4,"宮城県",4581,"女川町"]],[4606,[4,"宮城県",4606,"南三陸町"]],[5201,[5,"秋田県",5201,"秋田市"]],[5202,[5,"秋田県",5202,"能代市"]],[5203,[5,"秋田県",5203,"横手市"]],[5204,[5,"秋田県",5204,"大館市"]],[5206,[5,"秋田県",5206,"男鹿市"]],[5207,[5,"秋田県",5207,"湯沢市"]],[5209,[5,"秋田県",5209,"鹿角市"]],[5210,[5,"秋田県",5210,"由利本荘市"]],[5211,[5,"秋田県",5211,"潟上市"]],[5212,[5,"秋田県",5212,"大仙市"]],[5213,[5,"秋田県",5213,"北秋田市"]],[5214,[5,"秋田県",5214,"にかほ市"]],[5215,[5,"秋田県",5215,"仙北市"]],[5303,[5,"秋田県",5303,"小坂町"]],[5327,[5,"秋田県",5327,"上小阿仁村"]],[5346,[5,"秋田県",5346,"藤里町"]],[5348,[5,"秋田県",5348,"三種町"]],[5349,[5,"秋田県",5349,"八峰町"]],[5361,[5,"秋田県",5361,"五城目町"]],[5363,[5,"秋田県",5363,"八郎潟町"]],[5366,[5,"秋田県",5366,"井川町"]],[5368,[5,"秋田県",5368,"大潟村"]],[5434,[5,"秋田県",5434,"美郷町"]],[5463,[5,"秋田県",5463,"羽後町"]],[5464,[5,"秋田県",5464,"東成瀬村"]],[6201,[6,"山形県",6201,"山形市"]],[6202,[6,"山形県",6202,"米沢市"]],[6203,[6,"山形県",6203,"鶴岡市"]],[6204,[6,"山形県",6204,"酒田市"]],[6205,[6,"山形県",6205,"新庄市"]],[6206,[6,"山形県",6206,"寒河江市"]],[6207,[6,"山形県",6207,"上山市"]],[6208,[6,"山形県",6208,"村山市"]],[6209,[6,"山形県",6209,"長井市"]],[6210,[6,"山形県",6210,"天童市"]],[6211,[6,"山形県",6211,"東根市"]],[6212,[6,"山形県",6212,"尾花沢市"]],[6213,[6,"山形県",6213,"南陽市"]],[6301,[6,"山形県",6301,"山辺町"]],[6302,[6,"山形県",6302,"中山町"]],[6321,[6,"山形県",6321,"河北町"]],[6322,[6,"山形県",6322,"西川町"]],[6323,[6,"山形県",6323,"朝日町"]],[6324,[6,"山形県",6324,"大江町"]],[6341,[6,"山形県",6341,"大石田町"]],[6361,[6,"山形県",6361,"金山町"]],[6362,[6,"山形県",6362,"最上町"]],[6363,[6,"山形県",6363,"舟形町"]],[6364,[6,"山形県",6364,"真室川町"]],[6365,[6,"山形県",6365,"大蔵村"]],[6366,[6,"山形県",6366,"鮭川村"]],[6367,[6,"山形県",6367,"戸沢村"]],[6381,[6,"山形県",6381,"高畠町"]],[6382,[6,"山形県",6382,"川西町"]],[6401,[6,"山形県",6401,"小国町"]],[6402,[6,"山形県",6402,"白鷹町"]],[6403,[6,"山形県",6403,"飯豊町"]],[6426,[6,"山形県",6426,"三川町"]],[6428,[6,"山形県",6428,"庄内町"]],[6461,[6,"山形県",6461,"遊佐町"]],[7201,[7,"福島県",7201,"福島市"]],[7202,[7,"福島県",7202,"会津若松市"]],[7203,[7,"福島県",7203,"郡山市"]],[7204,[7,"福島県",7204,"いわき市"]],[7205,[7,"福島県",7205,"白河市"]],[7207,[7,"福島県",7207,"須賀川市"]],[7208,[7,"福島県",7208,"喜多方市"]],[7209,[7,"福島県",7209,"相馬市"]],[7210,[7,"福島県",7210,"二本松市"]],[7211,[7,"福島県",7211,"田村市"]],[7212,[7,"福島県",7212,"南相馬市"]],[7213,[7,"福島県",7213,"伊達市"]],[7214,[7,"福島県",7214,"本宮市"]],[7301,[7,"福島県",7301,"桑折町"]],[7303,[7,"福島県",7303,"国見町"]],[7308,[7,"福島県",7308,"川俣町"]],[7322,[7,"福島県",7322,"大玉村"]],[7342,[7,"福島県",7342,"鏡石町"]],[7344,[7,"福島県",7344,"天栄村"]],[7362,[7,"福島県",7362,"下郷町"]],[7364,[7,"福島県",7364,"檜枝岐村"]],[7367,[7,"福島県",7367,"只見町"]],[7368,[7,"福島県",7368,"南会津町"]],[7402,[7,"福島県",7402,"北塩原村"]],[7405,[7,"福島県",7405,"西会津町"]],[7407,[7,"福島県",7407,"磐梯町"]],[7408,[7,"福島県",7408,"猪苗代町"]],[7421,[7,"福島県",7421,"会津坂下町"]],[7422,[7,"福島県",7422,"湯川村"]],[7423,[7,"福島県",7423,"柳津町"]],[7444,[7,"福島県",7444,"三島町"]],[7445,[7,"福島県",7445,"金山町"]],[7446,[7,"福島県",7446,"昭和村"]],[7447,[7,"福島県",7447,"会津美里町"]],[7461,[7,"福島県",7461,"西郷村"]],[7464,[7,"福島県",7464,"泉崎村"]],[7465,[7,"福島県",7465,"中島村"]],[7466,[7,"福島県",7466,"矢吹町"]],[7481,[7,"福島県",7481,"棚倉町"]],[7482,[7,"福島県",7482,"矢祭町"]],[7483,[7,"福島県",7483,"塙町"]],[7484,[7,"福島県",7484,"鮫川村"]],[7501,[7,"福島県",7501,"石川町"]],[7502,[7,"福島県",7502,"玉川村"]],[7503,[7,"福島県",7503,"平田村"]],[7504,[7,"福島県",7504,"浅川町"]],[7505,[7,"福島県",7505,"古殿町"]],[7521,[7,"福島県",7521,"三春町"]],[7522,[7,"福島県",7522,"小野町"]],[7541,[7,"福島県",7541,"広野町"]],[7542,[7,"福島県",7542,"楢葉町"]],[7543,[7,"福島県",7543,"富岡町"]],[7544,[7,"福島県",7544,"川内村"]],[7545,[7,"福島県",7545,"大熊町"]],[7546,[7,"福島県",7546,"双葉町"]],[7547,[7,"福島県",7547,"浪江町"]],[7548,[7,"福島県",7548,"葛尾村"]],[7561,[7,"福島県",7561,"新地町"]],[7564,[7,"福島県",7564,"飯舘村"]],[8201,[8,"茨城県",8201,"水戸市"]],[8202,[8,"茨城県",8202,"日立市"]],[8203,[8,"茨城県",8203,"土浦市"]],[8204,[8,"茨城県",8204,"古河市"]],[8205,[8,"茨城県",8205,"石岡市"]],[8207,[8,"茨城県",8207,"結城市"]],[8208,[8,"茨城県",8208,"龍ケ崎市"]],[8210,[8,"茨城県",8210,"下妻市"]],[8211,[8,"茨城県",8211,"常総市"]],[8212,[8,"茨城県",8212,"常陸太田市"]],[8214,[8,"茨城県",8214,"高萩市"]],[8215,[8,"茨城県",8215,"北茨城市"]],[8216,[8,"茨城県",8216,"笠間市"]],[8217,[8,"茨城県",8217,"取手市"]],[8219,[8,"茨城県",8219,"牛久市"]],[8220,[8,"茨城県",8220,"つくば市"]],[8221,[8,"茨城県",8221,"ひたちなか市"]],[8222,[8,"茨城県",8222,"鹿嶋市"]],[8223,[8,"茨城県",8223,"潮来市"]],[8224,[8,"茨城県",8224,"守谷市"]],[8225,[8,"茨城県",8225,"常陸大宮市"]],[8226,[8,"茨城県",8226,"那珂市"]],[8227,[8,"茨城県",8227,"筑西市"]],[8228,[8,"茨城県",8228,"坂東市"]],[8229,[8,"茨城県",8229,"稲敷市"]],[8230,[8,"茨城県",8230,"かすみがうら市"]],[8231,[8,"茨城県",8231,"桜川市"]],[8232,[8,"茨城県",8232,"神栖市"]],[8233,[8,"茨城県",8233,"行方市"]],[8234,[8,"茨城県",8234,"鉾田市"]],[8235,[8,"茨城県",8235,"つくばみらい市"]],[8236,[8,"茨城県",8236,"小美玉市"]],[8302,[8,"茨城県",8302,"茨城町"]],[8309,[8,"茨城県",8309,"大洗町"]],[8310,[8,"茨城県",8310,"城里町"]],[8341,[8,"茨城県",8341,"東海村"]],[8364,[8,"茨城県",8364,"大子町"]],[8442,[8,"茨城県",8442,"美浦村"]],[8443,[8,"茨城県",8443,"阿見町"]],[8447,[8,"茨城県",8447,"河内町"]],[8521,[8,"茨城県",8521,"八千代町"]],[8542,[8,"茨城県",8542,"五霞町"]],[8546,[8,"茨城県",8546,"境町"]],[8564,[8,"茨城県",8564,"利根町"]],[9201,[9,"栃木県",9201,"宇都宮市"]],[9202,[9,"栃木県",9202,"足利市"]],[9203,[9,"栃木県",9203,"栃木市"]],[9204,[9,"栃木県",9204,"佐野市"]],[9205,[9,"栃木県",9205,"鹿沼市"]],[9206,[9,"栃木県",9206,"日光市"]],[9208,[9,"栃木県",9208,"小山市"]],[9209,[9,"栃木県",9209,"真岡市"]],[9210,[9,"栃木県",9210,"大田原市"]],[9211,[9,"栃木県",9211,"矢板市"]],[9213,[9,"栃木県",9213,"那須塩原市"]],[9214,[9,"栃木県",9214,"さくら市"]],[9215,[9,"栃木県",9215,"那須烏山市"]],[9216,[9,"栃木県",9216,"下野市"]],[9301,[9,"栃木県",9301,"上三川町"]],[9342,[9,"栃木県",9342,"益子町"]],[9343,[9,"栃木県",9343,"茂木町"]],[9344,[9,"栃木県",9344,"市貝町"]],[9345,[9,"栃木県",9345,"芳賀町"]],[9361,[9,"栃木県",9361,"壬生町"]],[9364,[9,"栃木県",9364,"野木町"]],[9384,[9,"栃木県",9384,"塩谷町"]],[9386,[9,"栃木県",9386,"高根沢町"]],[9407,[9,"栃木県",9407,"那須町"]],[9411,[9,"栃木県",9411,"那珂川町"]],[10201,[10,"群馬県",10201,"前橋市"]],[10202,[10,"群馬県",10202,"高崎市"]],[10203,[10,"群馬県",10203,"桐生市"]],[10204,[10,"群馬県",10204,"伊勢崎市"]],[10205,[10,"群馬県",10205,"太田市"]],[10206,[10,"群馬県",10206,"沼田市"]],[10207,[10,"群馬県",10207,"館林市"]],[10208,[10,"群馬県",10208,"渋川市"]],[10209,[10,"群馬県",10209,"藤岡市"]],[10210,[10,"群馬県",10210,"富岡市"]],[10211,[10,"群馬県",10211,"安中市"]],[10212,[10,"群馬県",10212,"みどり市"]],[10344,[10,"群馬県",10344,"榛東村"]],[10345,[10,"群馬県",10345,"吉岡町"]],[10366,[10,"群馬県",10366,"上野村"]],[10367,[10,"群馬県",10367,"神流町"]],[10382,[10,"群馬県",10382,"下仁田町"]],[10383,[10,"群馬県",10383,"南牧村"]],[10384,[10,"群馬県",10384,"甘楽町"]],[10421,[10,"群馬県",10421,"中之条町"]],[10424,[10,"群馬県",10424,"長野原町"]],[10425,[10,"群馬県",10425,"嬬恋村"]],[10426,[10,"群馬県",10426,"草津町"]],[10428,[10,"群馬県",10428,"高山村"]],[10429,[10,"群馬県",10429,"東吾妻町"]],[10443,[10,"群馬県",10443,"片品村"]],[10444,[10,"群馬県",10444,"川場村"]],[10448,[10,"群馬県",10448,"昭和村"]],[10449,[10,"群馬県",10449,"みなかみ町"]],[10464,[10,"群馬県",10464,"玉村町"]],[10521,[10,"群馬県",10521,"板倉町"]],[10522,[10,"群馬県",10522,"明和町"]],[10523,[10,"群馬県",10523,"千代田町"]],[10524,[10,"群馬県",10524,"大泉町"]],[10525,[10,"群馬県",10525,"邑楽町"]],[11100,[11,"埼玉県",11100,"さいたま市"]],[11101,[11,"埼玉県",11101,"さいたま市　西区"]],[11102,[11,"埼玉県",11102,"さいたま市　北区"]],[11103,[11,"埼玉県",11103,"さいたま市　大宮区"]],[11104,[11,"埼玉県",11104,"さいたま市　見沼区"]],[11105,[11,"埼玉県",11105,"さいたま市　中央区"]],[11106,[11,"埼玉県",11106,"さいたま市　桜区"]],[11107,[11,"埼玉県",11107,"さいたま市　浦和区"]],[11108,[11,"埼玉県",11108,"さいたま市　南区"]],[11109,[11,"埼玉県",11109,"さいたま市　緑区"]],[11110,[11,"埼玉県",11110,"さいたま市　岩槻区"]],[11201,[11,"埼玉県",11201,"川越市"]],[11202,[11,"埼玉県",11202,"熊谷市"]],[11203,[11,"埼玉県",11203,"川口市"]],[11206,[11,"埼玉県",11206,"行田市"]],[11207,[11,"埼玉県",11207,"秩父市"]],[11208,[11,"埼玉県",11208,"所沢市"]],[11209,[11,"埼玉県",11209,"飯能市"]],[11210,[11,"埼玉県",11210,"加須市"]],[11211,[11,"埼玉県",11211,"本庄市"]],[11212,[11,"埼玉県",11212,"東松山市"]],[11214,[11,"埼玉県",11214,"春日部市"]],[11215,[11,"埼玉県",11215,"狭山市"]],[11216,[11,"埼玉県",11216,"羽生市"]],[11217,[11,"埼玉県",11217,"鴻巣市"]],[11218,[11,"埼玉県",11218,"深谷市"]],[11219,[11,"埼玉県",11219,"上尾市"]],[11221,[11,"埼玉県",11221,"草加市"]],[11222,[11,"埼玉県",11222,"越谷市"]],[11223,[11,"埼玉県",11223,"蕨市"]],[11224,[11,"埼玉県",11224,"戸田市"]],[11225,[11,"埼玉県",11225,"入間市"]],[11227,[11,"埼玉県",11227,"朝霞市"]],[11228,[11,"埼玉県",11228,"志木市"]],[11229,[11,"埼玉県",11229,"和光市"]],[11230,[11,"埼玉県",11230,"新座市"]],[11231,[11,"埼玉県",11231,"桶川市"]],[11232,[11,"埼玉県",11232,"久喜市"]],[11233,[11,"埼玉県",11233,"北本市"]],[11234,[11,"埼玉県",11234,"八潮市"]],[11235,[11,"埼玉県",11235,"富士見市"]],[11237,[11,"埼玉県",11237,"三郷市"]],[11238,[11,"埼玉県",11238,"蓮田市"]],[11239,[11,"埼玉県",11239,"坂戸市"]],[11240,[11,"埼玉県",11240,"幸手市"]],[11241,[11,"埼玉県",11241,"鶴ヶ島市"]],[11242,[11,"埼玉県",11242,"日高市"]],[11243,[11,"埼玉県",11243,"吉川市"]],[11245,[11,"埼玉県",11245,"ふじみ野市"]],[11246,[11,"埼玉県",11246,"白岡市"]],[11301,[11,"埼玉県",11301,"伊奈町"]],[11324,[11,"埼玉県",11324,"三芳町"]],[11326,[11,"埼玉県",11326,"毛呂山町"]],[11327,[11,"埼玉県",11327,"越生町"]],[11341,[11,"埼玉県",11341,"滑川町"]],[11342,[11,"埼玉県",11342,"嵐山町"]],[11343,[11,"埼玉県",11343,"小川町"]],[11346,[11,"埼玉県",11346,"川島町"]],[11347,[11,"埼玉県",11347,"吉見町"]],[11348,[11,"埼玉県",11348,"鳩山町"]],[11349,[11,"埼玉県",11349,"ときがわ町"]],[11361,[11,"埼玉県",11361,"横瀬町"]],[11362,[11,"埼玉県",11362,"皆野町"]],[11363,[11,"埼玉県",11363,"長瀞町"]],[11365,[11,"埼玉県",11365,"小鹿野町"]],[11369,[11,"埼玉県",11369,"東秩父村"]],[11381,[11,"埼玉県",11381,"美里町"]],[11383,[11,"埼玉県",11383,"神川町"]],[11385,[11,"埼玉県",11385,"上里町"]],[11408,[11,"埼玉県",11408,"寄居町"]],[11442,[11,"埼玉県",11442,"宮代町"]],[11464,[11,"埼玉県",11464,"杉戸町"]],[11465,[11,"埼玉県",11465,"松伏町"]],[12100,[12,"千葉県",12100,"千葉市"]],[12101,[12,"千葉県",12101,"千葉市　中央区"]],[12102,[12,"千葉県",12102,"千葉市　花見川区"]],[12103,[12,"千葉県",12103,"千葉市　稲毛区"]],[12104,[12,"千葉県",12104,"千葉市　若葉区"]],[12105,[12,"千葉県",12105,"千葉市　緑区"]],[12106,[12,"千葉県",12106,"千葉市　美浜区"]],[12202,[12,"千葉県",12202,"銚子市"]],[12203,[12,"千葉県",12203,"市川市"]],[12204,[12,"千葉県",12204,"船橋市"]],[12205,[12,"千葉県",12205,"館山市"]],[12206,[12,"千葉県",12206,"木更津市"]],[12207,[12,"千葉県",12207,"松戸市"]],[12208,[12,"千葉県",12208,"野田市"]],[12210,[12,"千葉県",12210,"茂原市"]],[12211,[12,"千葉県",12211,"成田市"]],[12212,[12,"千葉県",12212,"佐倉市"]],[12213,[12,"千葉県",12213,"東金市"]],[12215,[12,"千葉県",12215,"旭市"]],[12216,[12,"千葉県",12216,"習志野市"]],[12217,[12,"千葉県",12217,"柏市"]],[12218,[12,"千葉県",12218,"勝浦市"]],[12219,[12,"千葉県",12219,"市原市"]],[12220,[12,"千葉県",12220,"流山市"]],[12221,[12,"千葉県",12221,"八千代市"]],[12222,[12,"千葉県",12222,"我孫子市"]],[12223,[12,"千葉県",12223,"鴨川市"]],[12224,[12,"千葉県",12224,"鎌ケ谷市"]],[12225,[12,"千葉県",12225,"君津市"]],[12226,[12,"千葉県",12226,"富津市"]],[12227,[12,"千葉県",12227,"浦安市"]],[12228,[12,"千葉県",12228,"四街道市"]],[12229,[12,"千葉県",12229,"袖ケ浦市"]],[12230,[12,"千葉県",12230,"八街市"]],[12231,[12,"千葉県",12231,"印西市"]],[12232,[12,"千葉県",12232,"白井市"]],[12233,[12,"千葉県",12233,"富里市"]],[12234,[12,"千葉県",12234,"南房総市"]],[12235,[12,"千葉県",12235,"匝瑳市"]],[12236,[12,"千葉県",12236,"香取市"]],[12237,[12,"千葉県",12237,"山武市"]],[12238,[12,"千葉県",12238,"いすみ市"]],[12239,[12,"千葉県",12239,"大網白里市"]],[12322,[12,"千葉県",12322,"酒々井町"]],[12329,[12,"千葉県",12329,"栄町"]],[12342,[12,"千葉県",12342,"神崎町"]],[12347,[12,"千葉県",12347,"多古町"]],[12349,[12,"千葉県",12349,"東庄町"]],[12403,[12,"千葉県",12403,"九十九里町"]],[12409,[12,"千葉県",12409,"芝山町"]],[12410,[12,"千葉県",12410,"横芝光町"]],[12421,[12,"千葉県",12421,"一宮町"]],[12422,[12,"千葉県",12422,"睦沢町"]],[12423,[12,"千葉県",12423,"長生村"]],[12424,[12,"千葉県",12424,"白子町"]],[12426,[12,"千葉県",12426,"長柄町"]],[12427,[12,"千葉県",12427,"長南町"]],[12441,[12,"千葉県",12441,"大多喜町"]],[12443,[12,"千葉県",12443,"御宿町"]],[12463,[12,"千葉県",12463,"鋸南町"]],[13101,[13,"東京都",13101,"千代田区"]],[13102,[13,"東京都",13102,"中央区"]],[13103,[13,"東京都",13103,"港区"]],[13104,[13,"東京都",13104,"新宿区"]],[13105,[13,"東京都",13105,"文京区"]],[13106,[13,"東京都",13106,"台東区"]],[13107,[13,"東京都",13107,"墨田区"]],[13108,[13,"東京都",13108,"江東区"]],[13109,[13,"東京都",13109,"品川区"]],[13110,[13,"東京都",13110,"目黒区"]],[13111,[13,"東京都",13111,"大田区"]],[13112,[13,"東京都",13112,"世田谷区"]],[13113,[13,"東京都",13113,"渋谷区"]],[13114,[13,"東京都",13114,"中野区"]],[13115,[13,"東京都",13115,"杉並区"]],[13116,[13,"東京都",13116,"豊島区"]],[13117,[13,"東京都",13117,"北区"]],[13118,[13,"東京都",13118,"荒川区"]],[13119,[13,"東京都",13119,"板橋区"]],[13120,[13,"東京都",13120,"練馬区"]],[13121,[13,"東京都",13121,"足立区"]],[13122,[13,"東京都",13122,"葛飾区"]],[13123,[13,"東京都",13123,"江戸川区"]],[13201,[13,"東京都",13201,"八王子市"]],[13202,[13,"東京都",13202,"立川市"]],[13203,[13,"東京都",13203,"武蔵野市"]],[13204,[13,"東京都",13204,"三鷹市"]],[13205,[13,"東京都",13205,"青梅市"]],[13206,[13,"東京都",13206,"府中市"]],[13207,[13,"東京都",13207,"昭島市"]],[13208,[13,"東京都",13208,"調布市"]],[13209,[13,"東京都",13209,"町田市"]],[13210,[13,"東京都",13210,"小金井市"]],[13211,[13,"東京都",13211,"小平市"]],[13212,[13,"東京都",13212,"日野市"]],[13213,[13,"東京都",13213,"東村山市"]],[13214,[13,"東京都",13214,"国分寺市"]],[13215,[13,"東京都",13215,"国立市"]],[13218,[13,"東京都",13218,"福生市"]],[13219,[13,"東京都",13219,"狛江市"]],[13220,[13,"東京都",13220,"東大和市"]],[13221,[13,"東京都",13221,"清瀬市"]],[13222,[13,"東京都",13222,"東久留米市"]],[13223,[13,"東京都",13223,"武蔵村山市"]],[13224,[13,"東京都",13224,"多摩市"]],[13225,[13,"東京都",13225,"稲城市"]],[13227,[13,"東京都",13227,"羽村市"]],[13228,[13,"東京都",13228,"あきる野市"]],[13229,[13,"東京都",13229,"西東京市"]],[13303,[13,"東京都",13303,"瑞穂町"]],[13305,[13,"東京都",13305,"日の出町"]],[13307,[13,"東京都",13307,"檜原村"]],[13308,[13,"東京都",13308,"奥多摩町"]],[13361,[13,"東京都",13361,"大島町"]],[13362,[13,"東京都",13362,"利島村"]],[13363,[13,"東京都",13363,"新島村"]],[13364,[13,"東京都",13364,"神津島村"]],[13381,[13,"東京都",13381,"三宅村"]],[13382,[13,"東京都",13382,"御蔵島村"]],[13401,[13,"東京都",13401,"八丈町"]],[13402,[13,"東京都",13402,"青ヶ島村"]],[13421,[13,"東京都",13421,"小笠原村"]],[14100,[14,"神奈川県",14100,"横浜市"]],[14101,[14,"神奈川県",14101,"横浜市　鶴見区"]],[14102,[14,"神奈川県",14102,"横浜市　神奈川区"]],[14103,[14,"神奈川県",14103,"横浜市　西区"]],[14104,[14,"神奈川県",14104,"横浜市　中区"]],[14105,[14,"神奈川県",14105,"横浜市　南区"]],[14106,[14,"神奈川県",14106,"横浜市　保土ケ谷区"]],[14107,[14,"神奈川県",14107,"横浜市　磯子区"]],[14108,[14,"神奈川県",14108,"横浜市　金沢区"]],[14109,[14,"神奈川県",14109,"横浜市　港北区"]],[14110,[14,"神奈川県",14110,"横浜市　戸塚区"]],[14111,[14,"神奈川県",14111,"横浜市　港南区"]],[14112,[14,"神奈川県",14112,"横浜市　旭区"]],[14113,[14,"神奈川県",14113,"横浜市　緑区"]],[14114,[14,"神奈川県",14114,"横浜市　瀬谷区"]],[14115,[14,"神奈川県",14115,"横浜市　栄区"]],[14116,[14,"神奈川県",14116,"横浜市　泉区"]],[14117,[14,"神奈川県",14117,"横浜市　青葉区"]],[14118,[14,"神奈川県",14118,"横浜市　都筑区"]],[14130,[14,"神奈川県",14130,"川崎市"]],[14131,[14,"神奈川県",14131,"川崎市　川崎区"]],[14132,[14,"神奈川県",14132,"川崎市　幸区"]],[14133,[14,"神奈川県",14133,"川崎市　中原区"]],[14134,[14,"神奈川県",14134,"川崎市　高津区"]],[14135,[14,"神奈川県",14135,"川崎市　多摩区"]],[14136,[14,"神奈川県",14136,"川崎市　宮前区"]],[14137,[14,"神奈川県",14137,"川崎市　麻生区"]],[14150,[14,"神奈川県",14150,"相模原市"]],[14151,[14,"神奈川県",14151,"相模原市　緑区"]],[14152,[14,"神奈川県",14152,"相模原市　中央区"]],[14153,[14,"神奈川県",14153,"相模原市　南区"]],[14201,[14,"神奈川県",14201,"横須賀市"]],[14203,[14,"神奈川県",14203,"平塚市"]],[14204,[14,"神奈川県",14204,"鎌倉市"]],[14205,[14,"神奈川県",14205,"藤沢市"]],[14206,[14,"神奈川県",14206,"小田原市"]],[14207,[14,"神奈川県",14207,"茅ヶ崎市"]],[14208,[14,"神奈川県",14208,"逗子市"]],[14210,[14,"神奈川県",14210,"三浦市"]],[14211,[14,"神奈川県",14211,"秦野市"]],[14212,[14,"神奈川県",14212,"厚木市"]],[14213,[14,"神奈川県",14213,"大和市"]],[14214,[14,"神奈川県",14214,"伊勢原市"]],[14215,[14,"神奈川県",14215,"海老名市"]],[14216,[14,"神奈川県",14216,"座間市"]],[14217,[14,"神奈川県",14217,"南足柄市"]],[14218,[14,"神奈川県",14218,"綾瀬市"]],[14301,[14,"神奈川県",14301,"葉山町"]],[14321,[14,"神奈川県",14321,"寒川町"]],[14341,[14,"神奈川県",14341,"大磯町"]],[14342,[14,"神奈川県",14342,"二宮町"]],[14361,[14,"神奈川県",14361,"中井町"]],[14362,[14,"神奈川県",14362,"大井町"]],[14363,[14,"神奈川県",14363,"松田町"]],[14364,[14,"神奈川県",14364,"山北町"]],[14366,[14,"神奈川県",14366,"開成町"]],[14382,[14,"神奈川県",14382,"箱根町"]],[14383,[14,"神奈川県",14383,"真鶴町"]],[14384,[14,"神奈川県",14384,"湯河原町"]],[14401,[14,"神奈川県",14401,"愛川町"]],[14402,[14,"神奈川県",14402,"清川村"]],[15100,[15,"新潟県",15100,"新潟市"]],[15101,[15,"新潟県",15101,"新潟市　北区"]],[15102,[15,"新潟県",15102,"新潟市　東区"]],[15103,[15,"新潟県",15103,"新潟市　中央区"]],[15104,[15,"新潟県",15104,"新潟市　江南区"]],[15105,[15,"新潟県",15105,"新潟市　秋葉区"]],[15106,[15,"新潟県",15106,"新潟市　南区"]],[15107,[15,"新潟県",15107,"新潟市　西区"]],[15108,[15,"新潟県",15108,"新潟市　西蒲区"]],[15202,[15,"新潟県",15202,"長岡市"]],[15204,[15,"新潟県",15204,"三条市"]],[15205,[15,"新潟県",15205,"柏崎市"]],[15206,[15,"新潟県",15206,"新発田市"]],[15208,[15,"新潟県",15208,"小千谷市"]],[15209,[15,"新潟県",15209,"加茂市"]],[15210,[15,"新潟県",15210,"十日町市"]],[15211,[15,"新潟県",15211,"見附市"]],[15212,[15,"新潟県",15212,"村上市"]],[15213,[15,"新潟県",15213,"燕市"]],[15216,[15,"新潟県",15216,"糸魚川市"]],[15217,[15,"新潟県",15217,"妙高市"]],[15218,[15,"新潟県",15218,"五泉市"]],[15222,[15,"新潟県",15222,"上越市"]],[15223,[15,"新潟県",15223,"阿賀野市"]],[15224,[15,"新潟県",15224,"佐渡市"]],[15225,[15,"新潟県",15225,"魚沼市"]],[15226,[15,"新潟県",15226,"南魚沼市"]],[15227,[15,"新潟県",15227,"胎内市"]],[15307,[15,"新潟県",15307,"聖籠町"]],[15342,[15,"新潟県",15342,"弥彦村"]],[15361,[15,"新潟県",15361,"田上町"]],[15385,[15,"新潟県",15385,"阿賀町"]],[15405,[15,"新潟県",15405,"出雲崎町"]],[15461,[15,"新潟県",15461,"湯沢町"]],[15482,[15,"新潟県",15482,"津南町"]],[15504,[15,"新潟県",15504,"刈羽村"]],[15581,[15,"新潟県",15581,"関川村"]],[15586,[15,"新潟県",15586,"粟島浦村"]],[16201,[16,"富山県",16201,"富山市"]],[16202,[16,"富山県",16202,"高岡市"]],[16204,[16,"富山県",16204,"魚津市"]],[16205,[16,"富山県",16205,"氷見市"]],[16206,[16,"富山県",16206,"滑川市"]],[16207,[16,"富山県",16207,"黒部市"]],[16208,[16,"富山県",16208,"砺波市"]],[16209,[16,"富山県",16209,"小矢部市"]],[16210,[16,"富山県",16210,"南砺市"]],[16211,[16,"富山県",16211,"射水市"]],[16321,[16,"富山県",16321,"舟橋村"]],[16322,[16,"富山県",16322,"上市町"]],[16323,[16,"富山県",16323,"立山町"]],[16342,[16,"富山県",16342,"入善町"]],[16343,[16,"富山県",16343,"朝日町"]],[17201,[17,"石川県",17201,"金沢市"]],[17202,[17,"石川県",17202,"七尾市"]],[17203,[17,"石川県",17203,"小松市"]],[17204,[17,"石川県",17204,"輪島市"]],[17205,[17,"石川県",17205,"珠洲市"]],[17206,[17,"石川県",17206,"加賀市"]],[17207,[17,"石川県",17207,"羽咋市"]],[17209,[17,"石川県",17209,"かほく市"]],[17210,[17,"石川県",17210,"白山市"]],[17211,[17,"石川県",17211,"能美市"]],[17212,[17,"石川県",17212,"野々市市"]],[17324,[17,"石川県",17324,"川北町"]],[17361,[17,"石川県",17361,"津幡町"]],[17365,[17,"石川県",17365,"内灘町"]],[17384,[17,"石川県",17384,"志賀町"]],[17386,[17,"石川県",17386,"宝達志水町"]],[17407,[17,"石川県",17407,"中能登町"]],[17461,[17,"石川県",17461,"穴水町"]],[17463,[17,"石川県",17463,"能登町"]],[18201,[18,"福井県",18201,"福井市"]],[18202,[18,"福井県",18202,"敦賀市"]],[18204,[18,"福井県",18204,"小浜市"]],[18205,[18,"福井県",18205,"大野市"]],[18206,[18,"福井県",18206,"勝山市"]],[18207,[18,"福井県",18207,"鯖江市"]],[18208,[18,"福井県",18208,"あわら市"]],[18209,[18,"福井県",18209,"越前市"]],[18210,[18,"福井県",18210,"坂井市"]],[18322,[18,"福井県",18322,"永平寺町"]],[18382,[18,"福井県",18382,"池田町"]],[18404,[18,"福井県",18404,"南越前町"]],[18423,[18,"福井県",18423,"越前町"]],[18442,[18,"福井県",18442,"美浜町"]],[18481,[18,"福井県",18481,"高浜町"]],[18483,[18,"福井県",18483,"おおい町"]],[18501,[18,"福井県",18501,"若狭町"]],[19201,[19,"山梨県",19201,"甲府市"]],[19202,[19,"山梨県",19202,"富士吉田市"]],[19204,[19,"山梨県",19204,"都留市"]],[19205,[19,"山梨県",19205,"山梨市"]],[19206,[19,"山梨県",19206,"大月市"]],[19207,[19,"山梨県",19207,"韮崎市"]],[19208,[19,"山梨県",19208,"南アルプス市"]],[19209,[19,"山梨県",19209,"北杜市"]],[19210,[19,"山梨県",19210,"甲斐市"]],[19211,[19,"山梨県",19211,"笛吹市"]],[19212,[19,"山梨県",19212,"上野原市"]],[19213,[19,"山梨県",19213,"甲州市"]],[19214,[19,"山梨県",19214,"中央市"]],[19346,[19,"山梨県",19346,"市川三郷町"]],[19364,[19,"山梨県",19364,"早川町"]],[19365,[19,"山梨県",19365,"身延町"]],[19366,[19,"山梨県",19366,"南部町"]],[19368,[19,"山梨県",19368,"富士川町"]],[19384,[19,"山梨県",19384,"昭和町"]],[19422,[19,"山梨県",19422,"道志村"]],[19423,[19,"山梨県",19423,"西桂町"]],[19424,[19,"山梨県",19424,"忍野村"]],[19425,[19,"山梨県",19425,"山中湖村"]],[19429,[19,"山梨県",19429,"鳴沢村"]],[19430,[19,"山梨県",19430,"富士河口湖町"]],[19442,[19,"山梨県",19442,"小菅村"]],[19443,[19,"山梨県",19443,"丹波山村"]],[20201,[20,"長野県",20201,"長野市"]],[20202,[20,"長野県",20202,"松本市"]],[20203,[20,"長野県",20203,"上田市"]],[20204,[20,"長野県",20204,"岡谷市"]],[20205,[20,"長野県",20205,"飯田市"]],[20206,[20,"長野県",20206,"諏訪市"]],[20207,[20,"長野県",20207,"須坂市"]],[20208,[20,"長野県",20208,"小諸市"]],[20209,[20,"長野県",20209,"伊那市"]],[20210,[20,"長野県",20210,"駒ヶ根市"]],[20211,[20,"長野県",20211,"中野市"]],[20212,[20,"長野県",20212,"大町市"]],[20213,[20,"長野県",20213,"飯山市"]],[20214,[20,"長野県",20214,"茅野市"]],[20215,[20,"長野県",20215,"塩尻市"]],[20217,[20,"長野県",20217,"佐久市"]],[20218,[20,"長野県",20218,"千曲市"]],[20219,[20,"長野県",20219,"東御市"]],[20220,[20,"長野県",20220,"安曇野市"]],[20303,[20,"長野県",20303,"小海町"]],[20304,[20,"長野県",20304,"川上村"]],[20305,[20,"長野県",20305,"南牧村"]],[20306,[20,"長野県",20306,"南相木村"]],[20307,[20,"長野県",20307,"北相木村"]],[20309,[20,"長野県",20309,"佐久穂町"]],[20321,[20,"長野県",20321,"軽井沢町"]],[20323,[20,"長野県",20323,"御代田町"]],[20324,[20,"長野県",20324,"立科町"]],[20349,[20,"長野県",20349,"青木村"]],[20350,[20,"長野県",20350,"長和町"]],[20361,[20,"長野県",20361,"下諏訪町"]],[20362,[20,"長野県",20362,"富士見町"]],[20363,[20,"長野県",20363,"原村"]],[20382,[20,"長野県",20382,"辰野町"]],[20383,[20,"長野県",20383,"箕輪町"]],[20384,[20,"長野県",20384,"飯島町"]],[20385,[20,"長野県",20385,"南箕輪村"]],[20386,[20,"長野県",20386,"中川村"]],[20388,[20,"長野県",20388,"宮田村"]],[20402,[20,"長野県",20402,"松川町"]],[20403,[20,"長野県",20403,"高森町"]],[20404,[20,"長野県",20404,"阿南町"]],[20407,[20,"長野県",20407,"阿智村"]],[20409,[20,"長野県",20409,"平谷村"]],[20410,[20,"長野県",20410,"根羽村"]],[20411,[20,"長野県",20411,"下條村"]],[20412,[20,"長野県",20412,"売木村"]],[20413,[20,"長野県",20413,"天龍村"]],[20414,[20,"長野県",20414,"泰阜村"]],[20415,[20,"長野県",20415,"喬木村"]],[20416,[20,"長野県",20416,"豊丘村"]],[20417,[20,"長野県",20417,"大鹿村"]],[20422,[20,"長野県",20422,"上松町"]],[20423,[20,"長野県",20423,"南木曽町"]],[20425,[20,"長野県",20425,"木祖村"]],[20429,[20,"長野県",20429,"王滝村"]],[20430,[20,"長野県",20430,"大桑村"]],[20432,[20,"長野県",20432,"木曽町"]],[20446,[20,"長野県",20446,"麻績村"]],[20448,[20,"長野県",20448,"生坂村"]],[20450,[20,"長野県",20450,"山形村"]],[20451,[20,"長野県",20451,"朝日村"]],[20452,[20,"長野県",20452,"筑北村"]],[20481,[20,"長野県",20481,"池田町"]],[20482,[20,"長野県",20482,"松川村"]],[20485,[20,"長野県",20485,"白馬村"]],[20486,[20,"長野県",20486,"小谷村"]],[20521,[20,"長野県",20521,"坂城町"]],[20541,[20,"長野県",20541,"小布施町"]],[20543,[20,"長野県",20543,"高山村"]],[20561,[20,"長野県",20561,"山ノ内町"]],[20562,[20,"長野県",20562,"木島平村"]],[20563,[20,"長野県",20563,"野沢温泉村"]],[20583,[20,"長野県",20583,"信濃町"]],[20588,[20,"長野県",20588,"小川村"]],[20590,[20,"長野県",20590,"飯綱町"]],[20602,[20,"長野県",20602,"栄村"]],[21201,[21,"岐阜県",21201,"岐阜市"]],[21202,[21,"岐阜県",21202,"大垣市"]],[21203,[21,"岐阜県",21203,"高山市"]],[21204,[21,"岐阜県",21204,"多治見市"]],[21205,[21,"岐阜県",21205,"関市"]],[21206,[21,"岐阜県",21206,"中津川市"]],[21207,[21,"岐阜県",21207,"美濃市"]],[21208,[21,"岐阜県",21208,"瑞浪市"]],[21209,[21,"岐阜県",21209,"羽島市"]],[21210,[21,"岐阜県",21210,"恵那市"]],[21211,[21,"岐阜県",21211,"美濃加茂市"]],[21212,[21,"岐阜県",21212,"土岐市"]],[21213,[21,"岐阜県",21213,"各務原市"]],[21214,[21,"岐阜県",21214,"可児市"]],[21215,[21,"岐阜県",21215,"山県市"]],[21216,[21,"岐阜県",21216,"瑞穂市"]],[21217,[21,"岐阜県",21217,"飛騨市"]],[21218,[21,"岐阜県",21218,"本巣市"]],[21219,[21,"岐阜県",21219,"郡上市"]],[21220,[21,"岐阜県",21220,"下呂市"]],[21221,[21,"岐阜県",21221,"海津市"]],[21302,[21,"岐阜県",21302,"岐南町"]],[21303,[21,"岐阜県",21303,"笠松町"]],[21341,[21,"岐阜県",21341,"養老町"]],[21361,[21,"岐阜県",21361,"垂井町"]],[21362,[21,"岐阜県",21362,"関ケ原町"]],[21381,[21,"岐阜県",21381,"神戸町"]],[21382,[21,"岐阜県",21382,"輪之内町"]],[21383,[21,"岐阜県",21383,"安八町"]],[21401,[21,"岐阜県",21401,"揖斐川町"]],[21403,[21,"岐阜県",21403,"大野町"]],[21404,[21,"岐阜県",21404,"池田町"]],[21421,[21,"岐阜県",21421,"北方町"]],[21501,[21,"岐阜県",21501,"坂祝町"]],[21502,[21,"岐阜県",21502,"富加町"]],[21503,[21,"岐阜県",21503,"川辺町"]],[21504,[21,"岐阜県",21504,"七宗町"]],[21505,[21,"岐阜県",21505,"八百津町"]],[21506,[21,"岐阜県",21506,"白川町"]],[21507,[21,"岐阜県",21507,"東白川村"]],[21521,[21,"岐阜県",21521,"御嵩町"]],[21604,[21,"岐阜県",21604,"白川村"]],[22100,[22,"静岡県",22100,"静岡市"]],[22101,[22,"静岡県",22101,"静岡市　葵区"]],[22102,[22,"静岡県",22102,"静岡市　駿河区"]],[22103,[22,"静岡県",22103,"静岡市　清水区"]],[22130,[22,"静岡県",22130,"浜松市"]],[22131,[22,"静岡県",22131,"浜松市　中区"]],[22132,[22,"静岡県",22132,"浜松市　東区"]],[22133,[22,"静岡県",22133,"浜松市　西区"]],[22134,[22,"静岡県",22134,"浜松市　南区"]],[22135,[22,"静岡県",22135,"浜松市　北区"]],[22136,[22,"静岡県",22136,"浜松市　浜北区"]],[22137,[22,"静岡県",22137,"浜松市　天竜区"]],[22203,[22,"静岡県",22203,"沼津市"]],[22205,[22,"静岡県",22205,"熱海市"]],[22206,[22,"静岡県",22206,"三島市"]],[22207,[22,"静岡県",22207,"富士宮市"]],[22208,[22,"静岡県",22208,"伊東市"]],[22209,[22,"静岡県",22209,"島田市"]],[22210,[22,"静岡県",22210,"富士市"]],[22211,[22,"静岡県",22211,"磐田市"]],[22212,[22,"静岡県",22212,"焼津市"]],[22213,[22,"静岡県",22213,"掛川市"]],[22214,[22,"静岡県",22214,"藤枝市"]],[22215,[22,"静岡県",22215,"御殿場市"]],[22216,[22,"静岡県",22216,"袋井市"]],[22219,[22,"静岡県",22219,"下田市"]],[22220,[22,"静岡県",22220,"裾野市"]],[22221,[22,"静岡県",22221,"湖西市"]],[22222,[22,"静岡県",22222,"伊豆市"]],[22223,[22,"静岡県",22223,"御前崎市"]],[22224,[22,"静岡県",22224,"菊川市"]],[22225,[22,"静岡県",22225,"伊豆の国市"]],[22226,[22,"静岡県",22226,"牧之原市"]],[22301,[22,"静岡県",22301,"東伊豆町"]],[22302,[22,"静岡県",22302,"河津町"]],[22304,[22,"静岡県",22304,"南伊豆町"]],[22305,[22,"静岡県",22305,"松崎町"]],[22306,[22,"静岡県",22306,"西伊豆町"]],[22325,[22,"静岡県",22325,"函南町"]],[22341,[22,"静岡県",22341,"清水町"]],[22342,[22,"静岡県",22342,"長泉町"]],[22344,[22,"静岡県",22344,"小山町"]],[22424,[22,"静岡県",22424,"吉田町"]],[22429,[22,"静岡県",22429,"川根本町"]],[22461,[22,"静岡県",22461,"森町"]],[23100,[23,"愛知県",23100,"名古屋市"]],[23101,[23,"愛知県",23101,"名古屋市　千種区"]],[23102,[23,"愛知県",23102,"名古屋市　東区"]],[23103,[23,"愛知県",23103,"名古屋市　北区"]],[23104,[23,"愛知県",23104,"名古屋市　西区"]],[23105,[23,"愛知県",23105,"名古屋市　中村区"]],[23106,[23,"愛知県",23106,"名古屋市　中区"]],[23107,[23,"愛知県",23107,"名古屋市　昭和区"]],[23108,[23,"愛知県",23108,"名古屋市　瑞穂区"]],[23109,[23,"愛知県",23109,"名古屋市　熱田区"]],[23110,[23,"愛知県",23110,"名古屋市　中川区"]],[23111,[23,"愛知県",23111,"名古屋市　港区"]],[23112,[23,"愛知県",23112,"名古屋市　南区"]],[23113,[23,"愛知県",23113,"名古屋市　守山区"]],[23114,[23,"愛知県",23114,"名古屋市　緑区"]],[23115,[23,"愛知県",23115,"名古屋市　名東区"]],[23116,[23,"愛知県",23116,"名古屋市　天白区"]],[23201,[23,"愛知県",23201,"豊橋市"]],[23202,[23,"愛知県",23202,"岡崎市"]],[23203,[23,"愛知県",23203,"一宮市"]],[23204,[23,"愛知県",23204,"瀬戸市"]],[23205,[23,"愛知県",23205,"半田市"]],[23206,[23,"愛知県",23206,"春日井市"]],[23207,[23,"愛知県",23207,"豊川市"]],[23208,[23,"愛知県",23208,"津島市"]],[23209,[23,"愛知県",23209,"碧南市"]],[23210,[23,"愛知県",23210,"刈谷市"]],[23211,[23,"愛知県",23211,"豊田市"]],[23212,[23,"愛知県",23212,"安城市"]],[23213,[23,"愛知県",23213,"西尾市"]],[23214,[23,"愛知県",23214,"蒲郡市"]],[23215,[23,"愛知県",23215,"犬山市"]],[23216,[23,"愛知県",23216,"常滑市"]],[23217,[23,"愛知県",23217,"江南市"]],[23219,[23,"愛知県",23219,"小牧市"]],[23220,[23,"愛知県",23220,"稲沢市"]],[23221,[23,"愛知県",23221,"新城市"]],[23222,[23,"愛知県",23222,"東海市"]],[23223,[23,"愛知県",23223,"大府市"]],[23224,[23,"愛知県",23224,"知多市"]],[23225,[23,"愛知県",23225,"知立市"]],[23226,[23,"愛知県",23226,"尾張旭市"]],[23227,[23,"愛知県",23227,"高浜市"]],[23228,[23,"愛知県",23228,"岩倉市"]],[23229,[23,"愛知県",23229,"豊明市"]],[23230,[23,"愛知県",23230,"日進市"]],[23231,[23,"愛知県",23231,"田原市"]],[23232,[23,"愛知県",23232,"愛西市"]],[23233,[23,"愛知県",23233,"清須市"]],[23234,[23,"愛知県",23234,"北名古屋市"]],[23235,[23,"愛知県",23235,"弥富市"]],[23236,[23,"愛知県",23236,"みよし市"]],[23237,[23,"愛知県",23237,"あま市"]],[23238,[23,"愛知県",23238,"長久手市"]],[23302,[23,"愛知県",23302,"東郷町"]],[23342,[23,"愛知県",23342,"豊山町"]],[23361,[23,"愛知県",23361,"大口町"]],[23362,[23,"愛知県",23362,"扶桑町"]],[23424,[23,"愛知県",23424,"大治町"]],[23425,[23,"愛知県",23425,"蟹江町"]],[23427,[23,"愛知県",23427,"飛島村"]],[23441,[23,"愛知県",23441,"阿久比町"]],[23442,[23,"愛知県",23442,"東浦町"]],[23445,[23,"愛知県",23445,"南知多町"]],[23446,[23,"愛知県",23446,"美浜町"]],[23447,[23,"愛知県",23447,"武豊町"]],[23501,[23,"愛知県",23501,"幸田町"]],[23561,[23,"愛知県",23561,"設楽町"]],[23562,[23,"愛知県",23562,"東栄町"]],[23563,[23,"愛知県",23563,"豊根村"]],[24201,[24,"三重県",24201,"津市"]],[24202,[24,"三重県",24202,"四日市市"]],[24203,[24,"三重県",24203,"伊勢市"]],[24204,[24,"三重県",24204,"松阪市"]],[24205,[24,"三重県",24205,"桑名市"]],[24207,[24,"三重県",24207,"鈴鹿市"]],[24208,[24,"三重県",24208,"名張市"]],[24209,[24,"三重県",24209,"尾鷲市"]],[24210,[24,"三重県",24210,"亀山市"]],[24211,[24,"三重県",24211,"鳥羽市"]],[24212,[24,"三重県",24212,"熊野市"]],[24214,[24,"三重県",24214,"いなべ市"]],[24215,[24,"三重県",24215,"志摩市"]],[24216,[24,"三重県",24216,"伊賀市"]],[24303,[24,"三重県",24303,"木曽岬町"]],[24324,[24,"三重県",24324,"東員町"]],[24341,[24,"三重県",24341,"菰野町"]],[24343,[24,"三重県",24343,"朝日町"]],[24344,[24,"三重県",24344,"川越町"]],[24441,[24,"三重県",24441,"多気町"]],[24442,[24,"三重県",24442,"明和町"]],[24443,[24,"三重県",24443,"大台町"]],[24461,[24,"三重県",24461,"玉城町"]],[24470,[24,"三重県",24470,"度会町"]],[24471,[24,"三重県",24471,"大紀町"]],[24472,[24,"三重県",24472,"南伊勢町"]],[24543,[24,"三重県",24543,"紀北町"]],[24561,[24,"三重県",24561,"御浜町"]],[24562,[24,"三重県",24562,"紀宝町"]],[25201,[25,"滋賀県",25201,"大津市"]],[25202,[25,"滋賀県",25202,"彦根市"]],[25203,[25,"滋賀県",25203,"長浜市"]],[25204,[25,"滋賀県",25204,"近江八幡市"]],[25206,[25,"滋賀県",25206,"草津市"]],[25207,[25,"滋賀県",25207,"守山市"]],[25208,[25,"滋賀県",25208,"栗東市"]],[25209,[25,"滋賀県",25209,"甲賀市"]],[25210,[25,"滋賀県",25210,"野洲市"]],[25211,[25,"滋賀県",25211,"湖南市"]],[25212,[25,"滋賀県",25212,"高島市"]],[25213,[25,"滋賀県",25213,"東近江市"]],[25214,[25,"滋賀県",25214,"米原市"]],[25383,[25,"滋賀県",25383,"日野町"]],[25384,[25,"滋賀県",25384,"竜王町"]],[25425,[25,"滋賀県",25425,"愛荘町"]],[25441,[25,"滋賀県",25441,"豊郷町"]],[25442,[25,"滋賀県",25442,"甲良町"]],[25443,[25,"滋賀県",25443,"多賀町"]],[26100,[26,"京都府",26100,"京都市"]],[26101,[26,"京都府",26101,"京都市　北区"]],[26102,[26,"京都府",26102,"京都市　上京区"]],[26103,[26,"京都府",26103,"京都市　左京区"]],[26104,[26,"京都府",26104,"京都市　中京区"]],[26105,[26,"京都府",26105,"京都市　東山区"]],[26106,[26,"京都府",26106,"京都市　下京区"]],[26107,[26,"京都府",26107,"京都市　南区"]],[26108,[26,"京都府",26108,"京都市　右京区"]],[26109,[26,"京都府",26109,"京都市　伏見区"]],[26110,[26,"京都府",26110,"京都市　山科区"]],[26111,[26,"京都府",26111,"京都市　西京区"]],[26201,[26,"京都府",26201,"福知山市"]],[26202,[26,"京都府",26202,"舞鶴市"]],[26203,[26,"京都府",26203,"綾部市"]],[26204,[26,"京都府",26204,"宇治市"]],[26205,[26,"京都府",26205,"宮津市"]],[26206,[26,"京都府",26206,"亀岡市"]],[26207,[26,"京都府",26207,"城陽市"]],[26208,[26,"京都府",26208,"向日市"]],[26209,[26,"京都府",26209,"長岡京市"]],[26210,[26,"京都府",26210,"八幡市"]],[26211,[26,"京都府",26211,"京田辺市"]],[26212,[26,"京都府",26212,"京丹後市"]],[26213,[26,"京都府",26213,"南丹市"]],[26214,[26,"京都府",26214,"木津川市"]],[26303,[26,"京都府",26303,"大山崎町"]],[26322,[26,"京都府",26322,"久御山町"]],[26343,[26,"京都府",26343,"井手町"]],[26344,[26,"京都府",26344,"宇治田原町"]],[26364,[26,"京都府",26364,"笠置町"]],[26365,[26,"京都府",26365,"和束町"]],[26366,[26,"京都府",26366,"精華町"]],[26367,[26,"京都府",26367,"南山城村"]],[26407,[26,"京都府",26407,"京丹波町"]],[26463,[26,"京都府",26463,"伊根町"]],[26465,[26,"京都府",26465,"与謝野町"]],[27100,[27,"大阪府",27100,"大阪市"]],[27102,[27,"大阪府",27102,"大阪市　都島区"]],[27103,[27,"大阪府",27103,"大阪市　福島区"]],[27104,[27,"大阪府",27104,"大阪市　此花区"]],[27106,[27,"大阪府",27106,"大阪市　西区"]],[27107,[27,"大阪府",27107,"大阪市　港区"]],[27108,[27,"大阪府",27108,"大阪市　大正区"]],[27109,[27,"大阪府",27109,"大阪市　天王寺区"]],[27111,[27,"大阪府",27111,"大阪市　浪速区"]],[27113,[27,"大阪府",27113,"大阪市　西淀川区"]],[27114,[27,"大阪府",27114,"大阪市　東淀川区"]],[27115,[27,"大阪府",27115,"大阪市　東成区"]],[27116,[27,"大阪府",27116,"大阪市　生野区"]],[27117,[27,"大阪府",27117,"大阪市　旭区"]],[27118,[27,"大阪府",27118,"大阪市　城東区"]],[27119,[27,"大阪府",27119,"大阪市　阿倍野区"]],[27120,[27,"大阪府",27120,"大阪市　住吉区"]],[27121,[27,"大阪府",27121,"大阪市　東住吉区"]],[27122,[27,"大阪府",27122,"大阪市　西成区"]],[27123,[27,"大阪府",27123,"大阪市　淀川区"]],[27124,[27,"大阪府",27124,"大阪市　鶴見区"]],[27125,[27,"大阪府",27125,"大阪市　住之江区"]],[27126,[27,"大阪府",27126,"大阪市　平野区"]],[27127,[27,"大阪府",27127,"大阪市　北区"]],[27128,[27,"大阪府",27128,"大阪市　中央区"]],[27140,[27,"大阪府",27140,"堺市"]],[27141,[27,"大阪府",27141,"堺市　堺区"]],[27142,[27,"大阪府",27142,"堺市　中区"]],[27143,[27,"大阪府",27143,"堺市　東区"]],[27144,[27,"大阪府",27144,"堺市　西区"]],[27145,[27,"大阪府",27145,"堺市　南区"]],[27146,[27,"大阪府",27146,"堺市　北区"]],[27147,[27,"大阪府",27147,"堺市　美原区"]],[27202,[27,"大阪府",27202,"岸和田市"]],[27203,[27,"大阪府",27203,"豊中市"]],[27204,[27,"大阪府",27204,"池田市"]],[27205,[27,"大阪府",27205,"吹田市"]],[27206,[27,"大阪府",27206,"泉大津市"]],[27207,[27,"大阪府",27207,"高槻市"]],[27208,[27,"大阪府",27208,"貝塚市"]],[27209,[27,"大阪府",27209,"守口市"]],[27210,[27,"大阪府",27210,"枚方市"]],[27211,[27,"大阪府",27211,"茨木市"]],[27212,[27,"大阪府",27212,"八尾市"]],[27213,[27,"大阪府",27213,"泉佐野市"]],[27214,[27,"大阪府",27214,"富田林市"]],[27215,[27,"大阪府",27215,"寝屋川市"]],[27216,[27,"大阪府",27216,"河内長野市"]],[27217,[27,"大阪府",27217,"松原市"]],[27218,[27,"大阪府",27218,"大東市"]],[27219,[27,"大阪府",27219,"和泉市"]],[27220,[27,"大阪府",27220,"箕面市"]],[27221,[27,"大阪府",27221,"柏原市"]],[27222,[27,"大阪府",27222,"羽曳野市"]],[27223,[27,"大阪府",27223,"門真市"]],[27224,[27,"大阪府",27224,"摂津市"]],[27225,[27,"大阪府",27225,"高石市"]],[27226,[27,"大阪府",27226,"藤井寺市"]],[27227,[27,"大阪府",27227,"東大阪市"]],[27228,[27,"大阪府",27228,"泉南市"]],[27229,[27,"大阪府",27229,"四條畷市"]],[27230,[27,"大阪府",27230,"交野市"]],[27231,[27,"大阪府",27231,"大阪狭山市"]],[27232,[27,"大阪府",27232,"阪南市"]],[27301,[27,"大阪府",27301,"島本町"]],[27321,[27,"大阪府",27321,"豊能町"]],[27322,[27,"大阪府",27322,"能勢町"]],[27341,[27,"大阪府",27341,"忠岡町"]],[27361,[27,"大阪府",27361,"熊取町"]],[27362,[27,"大阪府",27362,"田尻町"]],[27366,[27,"大阪府",27366,"岬町"]],[27381,[27,"大阪府",27381,"太子町"]],[27382,[27,"大阪府",27382,"河南町"]],[27383,[27,"大阪府",27383,"千早赤阪村"]],[28100,[28,"兵庫県",28100,"神戸市"]],[28101,[28,"兵庫県",28101,"神戸市　東灘区"]],[28102,[28,"兵庫県",28102,"神戸市　灘区"]],[28105,[28,"兵庫県",28105,"神戸市　兵庫区"]],[28106,[28,"兵庫県",28106,"神戸市　長田区"]],[28107,[28,"兵庫県",28107,"神戸市　須磨区"]],[28108,[28,"兵庫県",28108,"神戸市　垂水区"]],[28109,[28,"兵庫県",28109,"神戸市　北区"]],[28110,[28,"兵庫県",28110,"神戸市　中央区"]],[28111,[28,"兵庫県",28111,"神戸市　西区"]],[28201,[28,"兵庫県",28201,"姫路市"]],[28202,[28,"兵庫県",28202,"尼崎市"]],[28203,[28,"兵庫県",28203,"明石市"]],[28204,[28,"兵庫県",28204,"西宮市"]],[28205,[28,"兵庫県",28205,"洲本市"]],[28206,[28,"兵庫県",28206,"芦屋市"]],[28207,[28,"兵庫県",28207,"伊丹市"]],[28208,[28,"兵庫県",28208,"相生市"]],[28209,[28,"兵庫県",28209,"豊岡市"]],[28210,[28,"兵庫県",28210,"加古川市"]],[28212,[28,"兵庫県",28212,"赤穂市"]],[28213,[28,"兵庫県",28213,"西脇市"]],[28214,[28,"兵庫県",28214,"宝塚市"]],[28215,[28,"兵庫県",28215,"三木市"]],[28216,[28,"兵庫県",28216,"高砂市"]],[28217,[28,"兵庫県",28217,"川西市"]],[28218,[28,"兵庫県",28218,"小野市"]],[28219,[28,"兵庫県",28219,"三田市"]],[28220,[28,"兵庫県",28220,"加西市"]],[28221,[28,"兵庫県",28221,"丹波篠山市"]],[28222,[28,"兵庫県",28222,"養父市"]],[28223,[28,"兵庫県",28223,"丹波市"]],[28224,[28,"兵庫県",28224,"南あわじ市"]],[28225,[28,"兵庫県",28225,"朝来市"]],[28226,[28,"兵庫県",28226,"淡路市"]],[28227,[28,"兵庫県",28227,"宍粟市"]],[28228,[28,"兵庫県",28228,"加東市"]],[28229,[28,"兵庫県",28229,"たつの市"]],[28301,[28,"兵庫県",28301,"猪名川町"]],[28365,[28,"兵庫県",28365,"多可町"]],[28381,[28,"兵庫県",28381,"稲美町"]],[28382,[28,"兵庫県",28382,"播磨町"]],[28442,[28,"兵庫県",28442,"市川町"]],[28443,[28,"兵庫県",28443,"福崎町"]],[28446,[28,"兵庫県",28446,"神河町"]],[28464,[28,"兵庫県",28464,"太子町"]],[28481,[28,"兵庫県",28481,"上郡町"]],[28501,[28,"兵庫県",28501,"佐用町"]],[28585,[28,"兵庫県",28585,"香美町"]],[28586,[28,"兵庫県",28586,"新温泉町"]],[29201,[29,"奈良県",29201,"奈良市"]],[29202,[29,"奈良県",29202,"大和高田市"]],[29203,[29,"奈良県",29203,"大和郡山市"]],[29204,[29,"奈良県",29204,"天理市"]],[29205,[29,"奈良県",29205,"橿原市"]],[29206,[29,"奈良県",29206,"桜井市"]],[29207,[29,"奈良県",29207,"五條市"]],[29208,[29,"奈良県",29208,"御所市"]],[29209,[29,"奈良県",29209,"生駒市"]],[29210,[29,"奈良県",29210,"香芝市"]],[29211,[29,"奈良県",29211,"葛城市"]],[29212,[29,"奈良県",29212,"宇陀市"]],[29322,[29,"奈良県",29322,"山添村"]],[29342,[29,"奈良県",29342,"平群町"]],[29343,[29,"奈良県",29343,"三郷町"]],[29344,[29,"奈良県",29344,"斑鳩町"]],[29345,[29,"奈良県",29345,"安堵町"]],[29361,[29,"奈良県",29361,"川西町"]],[29362,[29,"奈良県",29362,"三宅町"]],[29363,[29,"奈良県",29363,"田原本町"]],[29385,[29,"奈良県",29385,"曽爾村"]],[29386,[29,"奈良県",29386,"御杖村"]],[29401,[29,"奈良県",29401,"高取町"]],[29402,[29,"奈良県",29402,"明日香村"]],[29424,[29,"奈良県",29424,"上牧町"]],[29425,[29,"奈良県",29425,"王寺町"]],[29426,[29,"奈良県",29426,"広陵町"]],[29427,[29,"奈良県",29427,"河合町"]],[29441,[29,"奈良県",29441,"吉野町"]],[29442,[29,"奈良県",29442,"大淀町"]],[29443,[29,"奈良県",29443,"下市町"]],[29444,[29,"奈良県",29444,"黒滝村"]],[29446,[29,"奈良県",29446,"天川村"]],[29447,[29,"奈良県",29447,"野迫川村"]],[29449,[29,"奈良県",29449,"十津川村"]],[29450,[29,"奈良県",29450,"下北山村"]],[29451,[29,"奈良県",29451,"上北山村"]],[29452,[29,"奈良県",29452,"川上村"]],[29453,[29,"奈良県",29453,"東吉野村"]],[30201,[30,"和歌山県",30201,"和歌山市"]],[30202,[30,"和歌山県",30202,"海南市"]],[30203,[30,"和歌山県",30203,"橋本市"]],[30204,[30,"和歌山県",30204,"有田市"]],[30205,[30,"和歌山県",30205,"御坊市"]],[30206,[30,"和歌山県",30206,"田辺市"]],[30207,[30,"和歌山県",30207,"新宮市"]],[30208,[30,"和歌山県",30208,"紀の川市"]],[30209,[30,"和歌山県",30209,"岩出市"]],[30304,[30,"和歌山県",30304,"紀美野町"]],[30341,[30,"和歌山県",30341,"かつらぎ町"]],[30343,[30,"和歌山県",30343,"九度山町"]],[30344,[30,"和歌山県",30344,"高野町"]],[30361,[30,"和歌山県",30361,"湯浅町"]],[30362,[30,"和歌山県",30362,"広川町"]],[30366,[30,"和歌山県",30366,"有田川町"]],[30381,[30,"和歌山県",30381,"美浜町"]],[30382,[30,"和歌山県",30382,"日高町"]],[30383,[30,"和歌山県",30383,"由良町"]],[30390,[30,"和歌山県",30390,"印南町"]],[30391,[30,"和歌山県",30391,"みなべ町"]],[30392,[30,"和歌山県",30392,"日高川町"]],[30401,[30,"和歌山県",30401,"白浜町"]],[30404,[30,"和歌山県",30404,"上富田町"]],[30406,[30,"和歌山県",30406,"すさみ町"]],[30421,[30,"和歌山県",30421,"那智勝浦町"]],[30422,[30,"和歌山県",30422,"太地町"]],[30424,[30,"和歌山県",30424,"古座川町"]],[30427,[30,"和歌山県",30427,"北山村"]],[30428,[30,"和歌山県",30428,"串本町"]],[31201,[31,"鳥取県",31201,"鳥取市"]],[31202,[31,"鳥取県",31202,"米子市"]],[31203,[31,"鳥取県",31203,"倉吉市"]],[31204,[31,"鳥取県",31204,"境港市"]],[31302,[31,"鳥取県",31302,"岩美町"]],[31325,[31,"鳥取県",31325,"若桜町"]],[31328,[31,"鳥取県",31328,"智頭町"]],[31329,[31,"鳥取県",31329,"八頭町"]],[31364,[31,"鳥取県",31364,"三朝町"]],[31370,[31,"鳥取県",31370,"湯梨浜町"]],[31371,[31,"鳥取県",31371,"琴浦町"]],[31372,[31,"鳥取県",31372,"北栄町"]],[31384,[31,"鳥取県",31384,"日吉津村"]],[31386,[31,"鳥取県",31386,"大山町"]],[31389,[31,"鳥取県",31389,"南部町"]],[31390,[31,"鳥取県",31390,"伯耆町"]],[31401,[31,"鳥取県",31401,"日南町"]],[31402,[31,"鳥取県",31402,"日野町"]],[31403,[31,"鳥取県",31403,"江府町"]],[32201,[32,"島根県",32201,"松江市"]],[32202,[32,"島根県",32202,"浜田市"]],[32203,[32,"島根県",32203,"出雲市"]],[32204,[32,"島根県",32204,"益田市"]],[32205,[32,"島根県",32205,"大田市"]],[32206,[32,"島根県",32206,"安来市"]],[32207,[32,"島根県",32207,"江津市"]],[32209,[32,"島根県",32209,"雲南市"]],[32343,[32,"島根県",32343,"奥出雲町"]],[32386,[32,"島根県",32386,"飯南町"]],[32441,[32,"島根県",32441,"川本町"]],[32448,[32,"島根県",32448,"美郷町"]],[32449,[32,"島根県",32449,"邑南町"]],[32501,[32,"島根県",32501,"津和野町"]],[32505,[32,"島根県",32505,"吉賀町"]],[32525,[32,"島根県",32525,"海士町"]],[32526,[32,"島根県",32526,"西ノ島町"]],[32527,[32,"島根県",32527,"知夫村"]],[32528,[32,"島根県",32528,"隠岐の島町"]],[33100,[33,"岡山県",33100,"岡山市"]],[33101,[33,"岡山県",33101,"岡山市　北区"]],[33102,[33,"岡山県",33102,"岡山市　中区"]],[33103,[33,"岡山県",33103,"岡山市　東区"]],[33104,[33,"岡山県",33104,"岡山市　南区"]],[33202,[33,"岡山県",33202,"倉敷市"]],[33203,[33,"岡山県",33203,"津山市"]],[33204,[33,"岡山県",33204,"玉野市"]],[33205,[33,"岡山県",33205,"笠岡市"]],[33207,[33,"岡山県",33207,"井原市"]],[33208,[33,"岡山県",33208,"総社市"]],[33209,[33,"岡山県",33209,"高梁市"]],[33210,[33,"岡山県",33210,"新見市"]],[33211,[33,"岡山県",33211,"備前市"]],[33212,[33,"岡山県",33212,"瀬戸内市"]],[33213,[33,"岡山県",33213,"赤磐市"]],[33214,[33,"岡山県",33214,"真庭市"]],[33215,[33,"岡山県",33215,"美作市"]],[33216,[33,"岡山県",33216,"浅口市"]],[33346,[33,"岡山県",33346,"和気町"]],[33423,[33,"岡山県",33423,"早島町"]],[33445,[33,"岡山県",33445,"里庄町"]],[33461,[33,"岡山県",33461,"矢掛町"]],[33586,[33,"岡山県",33586,"新庄村"]],[33606,[33,"岡山県",33606,"鏡野町"]],[33622,[33,"岡山県",33622,"勝央町"]],[33623,[33,"岡山県",33623,"奈義町"]],[33643,[33,"岡山県",33643,"西粟倉村"]],[33663,[33,"岡山県",33663,"久米南町"]],[33666,[33,"岡山県",33666,"美咲町"]],[33681,[33,"岡山県",33681,"吉備中央町"]],[34100,[34,"広島県",34100,"広島市"]],[34101,[34,"広島県",34101,"広島市　中区"]],[34102,[34,"広島県",34102,"広島市　東区"]],[34103,[34,"広島県",34103,"広島市　南区"]],[34104,[34,"広島県",34104,"広島市　西区"]],[34105,[34,"広島県",34105,"広島市　安佐南区"]],[34106,[34,"広島県",34106,"広島市　安佐北区"]],[34107,[34,"広島県",34107,"広島市　安芸区"]],[34108,[34,"広島県",34108,"広島市　佐伯区"]],[34202,[34,"広島県",34202,"呉市"]],[34203,[34,"広島県",34203,"竹原市"]],[34204,[34,"広島県",34204,"三原市"]],[34205,[34,"広島県",34205,"尾道市"]],[34207,[34,"広島県",34207,"福山市"]],[34208,[34,"広島県",34208,"府中市"]],[34209,[34,"広島県",34209,"三次市"]],[34210,[34,"広島県",34210,"庄原市"]],[34211,[34,"広島県",34211,"大竹市"]],[34212,[34,"広島県",34212,"東広島市"]],[34213,[34,"広島県",34213,"廿日市市"]],[34214,[34,"広島県",34214,"安芸高田市"]],[34215,[34,"広島県",34215,"江田島市"]],[34302,[34,"広島県",34302,"府中町"]],[34304,[34,"広島県",34304,"海田町"]],[34307,[34,"広島県",34307,"熊野町"]],[34309,[34,"広島県",34309,"坂町"]],[34368,[34,"広島県",34368,"安芸太田町"]],[34369,[34,"広島県",34369,"北広島町"]],[34431,[34,"広島県",34431,"大崎上島町"]],[34462,[34,"広島県",34462,"世羅町"]],[34545,[34,"広島県",34545,"神石高原町"]],[35201,[35,"山口県",35201,"下関市"]],[35202,[35,"山口県",35202,"宇部市"]],[35203,[35,"山口県",35203,"山口市"]],[35204,[35,"山口県",35204,"萩市"]],[35206,[35,"山口県",35206,"防府市"]],[35207,[35,"山口県",35207,"下松市"]],[35208,[35,"山口県",35208,"岩国市"]],[35210,[35,"山口県",35210,"光市"]],[35211,[35,"山口県",35211,"長門市"]],[35212,[35,"山口県",35212,"柳井市"]],[35213,[35,"山口県",35213,"美祢市"]],[35215,[35,"山口県",35215,"周南市"]],[35216,[35,"山口県",35216,"山陽小野田市"]],[35305,[35,"山口県",35305,"周防大島町"]],[35321,[35,"山口県",35321,"和木町"]],[35341,[35,"山口県",35341,"上関町"]],[35343,[35,"山口県",35343,"田布施町"]],[35344,[35,"山口県",35344,"平生町"]],[35502,[35,"山口県",35502,"阿武町"]],[36201,[36,"徳島県",36201,"徳島市"]],[36202,[36,"徳島県",36202,"鳴門市"]],[36203,[36,"徳島県",36203,"小松島市"]],[36204,[36,"徳島県",36204,"阿南市"]],[36205,[36,"徳島県",36205,"吉野川市"]],[36206,[36,"徳島県",36206,"阿波市"]],[36207,[36,"徳島県",36207,"美馬市"]],[36208,[36,"徳島県",36208,"三好市"]],[36301,[36,"徳島県",36301,"勝浦町"]],[36302,[36,"徳島県",36302,"上勝町"]],[36321,[36,"徳島県",36321,"佐那河内村"]],[36341,[36,"徳島県",36341,"石井町"]],[36342,[36,"徳島県",36342,"神山町"]],[36368,[36,"徳島県",36368,"那賀町"]],[36383,[36,"徳島県",36383,"牟岐町"]],[36387,[36,"徳島県",36387,"美波町"]],[36388,[36,"徳島県",36388,"海陽町"]],[36401,[36,"徳島県",36401,"松茂町"]],[36402,[36,"徳島県",36402,"北島町"]],[36403,[36,"徳島県",36403,"藍住町"]],[36404,[36,"徳島県",36404,"板野町"]],[36405,[36,"徳島県",36405,"上板町"]],[36468,[36,"徳島県",36468,"つるぎ町"]],[36489,[36,"徳島県",36489,"東みよし町"]],[37201,[37,"香川県",37201,"高松市"]],[37202,[37,"香川県",37202,"丸亀市"]],[37203,[37,"香川県",37203,"坂出市"]],[37204,[37,"香川県",37204,"善通寺市"]],[37205,[37,"香川県",37205,"観音寺市"]],[37206,[37,"香川県",37206,"さぬき市"]],[37207,[37,"香川県",37207,"東かがわ市"]],[37208,[37,"香川県",37208,"三豊市"]],[37322,[37,"香川県",37322,"土庄町"]],[37324,[37,"香川県",37324,"小豆島町"]],[37341,[37,"香川県",37341,"三木町"]],[37364,[37,"香川県",37364,"直島町"]],[37386,[37,"香川県",37386,"宇多津町"]],[37387,[37,"香川県",37387,"綾川町"]],[37403,[37,"香川県",37403,"琴平町"]],[37404,[37,"香川県",37404,"多度津町"]],[37406,[37,"香川県",37406,"まんのう町"]],[38201,[38,"愛媛県",38201,"松山市"]],[38202,[38,"愛媛県",38202,"今治市"]],[38203,[38,"愛媛県",38203,"宇和島市"]],[38204,[38,"愛媛県",38204,"八幡浜市"]],[38205,[38,"愛媛県",38205,"新居浜市"]],[38206,[38,"愛媛県",38206,"西条市"]],[38207,[38,"愛媛県",38207,"大洲市"]],[38210,[38,"愛媛県",38210,"伊予市"]],[38213,[38,"愛媛県",38213,"四国中央市"]],[38214,[38,"愛媛県",38214,"西予市"]],[38215,[38,"愛媛県",38215,"東温市"]],[38356,[38,"愛媛県",38356,"上島町"]],[38386,[38,"愛媛県",38386,"久万高原町"]],[38401,[38,"愛媛県",38401,"松前町"]],[38402,[38,"愛媛県",38402,"砥部町"]],[38422,[38,"愛媛県",38422,"内子町"]],[38442,[38,"愛媛県",38442,"伊方町"]],[38484,[38,"愛媛県",38484,"松野町"]],[38488,[38,"愛媛県",38488,"鬼北町"]],[38506,[38,"愛媛県",38506,"愛南町"]],[39201,[39,"高知県",39201,"高知市"]],[39202,[39,"高知県",39202,"室戸市"]],[39203,[39,"高知県",39203,"安芸市"]],[39204,[39,"高知県",39204,"南国市"]],[39205,[39,"高知県",39205,"土佐市"]],[39206,[39,"高知県",39206,"須崎市"]],[39208,[39,"高知県",39208,"宿毛市"]],[39209,[39,"高知県",39209,"土佐清水市"]],[39210,[39,"高知県",39210,"四万十市"]],[39211,[39,"高知県",39211,"香南市"]],[39212,[39,"高知県",39212,"香美市"]],[39301,[39,"高知県",39301,"東洋町"]],[39302,[39,"高知県",39302,"奈半利町"]],[39303,[39,"高知県",39303,"田野町"]],[39304,[39,"高知県",39304,"安田町"]],[39305,[39,"高知県",39305,"北川村"]],[39306,[39,"高知県",39306,"馬路村"]],[39307,[39,"高知県",39307,"芸西村"]],[39341,[39,"高知県",39341,"本山町"]],[39344,[39,"高知県",39344,"大豊町"]],[39363,[39,"高知県",39363,"土佐町"]],[39364,[39,"高知県",39364,"大川村"]],[39386,[39,"高知県",39386,"いの町"]],[39387,[39,"高知県",39387,"仁淀川町"]],[39401,[39,"高知県",39401,"中土佐町"]],[39402,[39,"高知県",39402,"佐川町"]],[39403,[39,"高知県",39403,"越知町"]],[39405,[39,"高知県",39405,"梼原町"]],[39410,[39,"高知県",39410,"日高村"]],[39411,[39,"高知県",39411,"津野町"]],[39412,[39,"高知県",39412,"四万十町"]],[39424,[39,"高知県",39424,"大月町"]],[39427,[39,"高知県",39427,"三原村"]],[39428,[39,"高知県",39428,"黒潮町"]],[40100,[40,"福岡県",40100,"北九州市"]],[40101,[40,"福岡県",40101,"北九州市　門司区"]],[40103,[40,"福岡県",40103,"北九州市　若松区"]],[40105,[40,"福岡県",40105,"北九州市　戸畑区"]],[40106,[40,"福岡県",40106,"北九州市　小倉北区"]],[40107,[40,"福岡県",40107,"北九州市　小倉南区"]],[40108,[40,"福岡県",40108,"北九州市　八幡東区"]],[40109,[40,"福岡県",40109,"北九州市　八幡西区"]],[40130,[40,"福岡県",40130,"福岡市"]],[40131,[40,"福岡県",40131,"福岡市　東区"]],[40132,[40,"福岡県",40132,"福岡市　博多区"]],[40133,[40,"福岡県",40133,"福岡市　中央区"]],[40134,[40,"福岡県",40134,"福岡市　南区"]],[40135,[40,"福岡県",40135,"福岡市　西区"]],[40136,[40,"福岡県",40136,"福岡市　城南区"]],[40137,[40,"福岡県",40137,"福岡市　早良区"]],[40202,[40,"福岡県",40202,"大牟田市"]],[40203,[40,"福岡県",40203,"久留米市"]],[40204,[40,"福岡県",40204,"直方市"]],[40205,[40,"福岡県",40205,"飯塚市"]],[40206,[40,"福岡県",40206,"田川市"]],[40207,[40,"福岡県",40207,"柳川市"]],[40210,[40,"福岡県",40210,"八女市"]],[40211,[40,"福岡県",40211,"筑後市"]],[40212,[40,"福岡県",40212,"大川市"]],[40213,[40,"福岡県",40213,"行橋市"]],[40214,[40,"福岡県",40214,"豊前市"]],[40215,[40,"福岡県",40215,"中間市"]],[40216,[40,"福岡県",40216,"小郡市"]],[40217,[40,"福岡県",40217,"筑紫野市"]],[40218,[40,"福岡県",40218,"春日市"]],[40219,[40,"福岡県",40219,"大野城市"]],[40220,[40,"福岡県",40220,"宗像市"]],[40221,[40,"福岡県",40221,"太宰府市"]],[40223,[40,"福岡県",40223,"古賀市"]],[40224,[40,"福岡県",40224,"福津市"]],[40225,[40,"福岡県",40225,"うきは市"]],[40226,[40,"福岡県",40226,"宮若市"]],[40227,[40,"福岡県",40227,"嘉麻市"]],[40228,[40,"福岡県",40228,"朝倉市"]],[40229,[40,"福岡県",40229,"みやま市"]],[40230,[40,"福岡県",40230,"糸島市"]],[40231,[40,"福岡県",40231,"那珂川市"]],[40341,[40,"福岡県",40341,"宇美町"]],[40342,[40,"福岡県",40342,"篠栗町"]],[40343,[40,"福岡県",40343,"志免町"]],[40344,[40,"福岡県",40344,"須恵町"]],[40345,[40,"福岡県",40345,"新宮町"]],[40348,[40,"福岡県",40348,"久山町"]],[40349,[40,"福岡県",40349,"粕屋町"]],[40381,[40,"福岡県",40381,"芦屋町"]],[40382,[40,"福岡県",40382,"水巻町"]],[40383,[40,"福岡県",40383,"岡垣町"]],[40384,[40,"福岡県",40384,"遠賀町"]],[40401,[40,"福岡県",40401,"小竹町"]],[40402,[40,"福岡県",40402,"鞍手町"]],[40421,[40,"福岡県",40421,"桂川町"]],[40447,[40,"福岡県",40447,"筑前町"]],[40448,[40,"福岡県",40448,"東峰村"]],[40503,[40,"福岡県",40503,"大刀洗町"]],[40522,[40,"福岡県",40522,"大木町"]],[40544,[40,"福岡県",40544,"広川町"]],[40601,[40,"福岡県",40601,"香春町"]],[40602,[40,"福岡県",40602,"添田町"]],[40604,[40,"福岡県",40604,"糸田町"]],[40605,[40,"福岡県",40605,"川崎町"]],[40608,[40,"福岡県",40608,"大任町"]],[40609,[40,"福岡県",40609,"赤村"]],[40610,[40,"福岡県",40610,"福智町"]],[40621,[40,"福岡県",40621,"苅田町"]],[40625,[40,"福岡県",40625,"みやこ町"]],[40642,[40,"福岡県",40642,"吉富町"]],[40646,[40,"福岡県",40646,"上毛町"]],[40647,[40,"福岡県",40647,"築上町"]],[41201,[41,"佐賀県",41201,"佐賀市"]],[41202,[41,"佐賀県",41202,"唐津市"]],[41203,[41,"佐賀県",41203,"鳥栖市"]],[41204,[41,"佐賀県",41204,"多久市"]],[41205,[41,"佐賀県",41205,"伊万里市"]],[41206,[41,"佐賀県",41206,"武雄市"]],[41207,[41,"佐賀県",41207,"鹿島市"]],[41208,[41,"佐賀県",41208,"小城市"]],[41209,[41,"佐賀県",41209,"嬉野市"]],[41210,[41,"佐賀県",41210,"神埼市"]],[41327,[41,"佐賀県",41327,"吉野ヶ里町"]],[41341,[41,"佐賀県",41341,"基山町"]],[41345,[41,"佐賀県",41345,"上峰町"]],[41346,[41,"佐賀県",41346,"みやき町"]],[41387,[41,"佐賀県",41387,"玄海町"]],[41401,[41,"佐賀県",41401,"有田町"]],[41423,[41,"佐賀県",41423,"大町町"]],[41424,[41,"佐賀県",41424,"江北町"]],[41425,[41,"佐賀県",41425,"白石町"]],[41441,[41,"佐賀県",41441,"太良町"]],[42201,[42,"長崎県",42201,"長崎市"]],[42202,[42,"長崎県",42202,"佐世保市"]],[42203,[42,"長崎県",42203,"島原市"]],[42204,[42,"長崎県",42204,"諫早市"]],[42205,[42,"長崎県",42205,"大村市"]],[42207,[42,"長崎県",42207,"平戸市"]],[42208,[42,"長崎県",42208,"松浦市"]],[42209,[42,"長崎県",42209,"対馬市"]],[42210,[42,"長崎県",42210,"壱岐市"]],[42211,[42,"長崎県",42211,"五島市"]],[42212,[42,"長崎県",42212,"西海市"]],[42213,[42,"長崎県",42213,"雲仙市"]],[42214,[42,"長崎県",42214,"南島原市"]],[42307,[42,"長崎県",42307,"長与町"]],[42308,[42,"長崎県",42308,"時津町"]],[42321,[42,"長崎県",42321,"東彼杵町"]],[42322,[42,"長崎県",42322,"川棚町"]],[42323,[42,"長崎県",42323,"波佐見町"]],[42383,[42,"長崎県",42383,"小値賀町"]],[42391,[42,"長崎県",42391,"佐々町"]],[42411,[42,"長崎県",42411,"新上五島町"]],[43100,[43,"熊本県",43100,"熊本市"]],[43101,[43,"熊本県",43101,"熊本市　中央区"]],[43102,[43,"熊本県",43102,"熊本市　東区"]],[43103,[43,"熊本県",43103,"熊本市　西区"]],[43104,[43,"熊本県",43104,"熊本市　南区"]],[43105,[43,"熊本県",43105,"熊本市　北区"]],[43202,[43,"熊本県",43202,"八代市"]],[43203,[43,"熊本県",43203,"人吉市"]],[43204,[43,"熊本県",43204,"荒尾市"]],[43205,[43,"熊本県",43205,"水俣市"]],[43206,[43,"熊本県",43206,"玉名市"]],[43208,[43,"熊本県",43208,"山鹿市"]],[43210,[43,"熊本県",43210,"菊池市"]],[43211,[43,"熊本県",43211,"宇土市"]],[43212,[43,"熊本県",43212,"上天草市"]],[43213,[43,"熊本県",43213,"宇城市"]],[43214,[43,"熊本県",43214,"阿蘇市"]],[43215,[43,"熊本県",43215,"天草市"]],[43216,[43,"熊本県",43216,"合志市"]],[43348,[43,"熊本県",43348,"美里町"]],[43364,[43,"熊本県",43364,"玉東町"]],[43367,[43,"熊本県",43367,"南関町"]],[43368,[43,"熊本県",43368,"長洲町"]],[43369,[43,"熊本県",43369,"和水町"]],[43403,[43,"熊本県",43403,"大津町"]],[43404,[43,"熊本県",43404,"菊陽町"]],[43423,[43,"熊本県",43423,"南小国町"]],[43424,[43,"熊本県",43424,"小国町"]],[43425,[43,"熊本県",43425,"産山村"]],[43428,[43,"熊本県",43428,"高森町"]],[43432,[43,"熊本県",43432,"西原村"]],[43433,[43,"熊本県",43433,"南阿蘇村"]],[43441,[43,"熊本県",43441,"御船町"]],[43442,[43,"熊本県",43442,"嘉島町"]],[43443,[43,"熊本県",43443,"益城町"]],[43444,[43,"熊本県",43444,"甲佐町"]],[43447,[43,"熊本県",43447,"山都町"]],[43468,[43,"熊本県",43468,"氷川町"]],[43482,[43,"熊本県",43482,"芦北町"]],[43484,[43,"熊本県",43484,"津奈木町"]],[43501,[43,"熊本県",43501,"錦町"]],[43505,[43,"熊本県",43505,"多良木町"]],[43506,[43,"熊本県",43506,"湯前町"]],[43507,[43,"熊本県",43507,"水上村"]],[43510,[43,"熊本県",43510,"相良村"]],[43511,[43,"熊本県",43511,"五木村"]],[43512,[43,"熊本県",43512,"山江村"]],[43513,[43,"熊本県",43513,"球磨村"]],[43514,[43,"熊本県",43514,"あさぎり町"]],[43531,[43,"熊本県",43531,"苓北町"]],[44201,[44,"大分県",44201,"大分市"]],[44202,[44,"大分県",44202,"別府市"]],[44203,[44,"大分県",44203,"中津市"]],[44204,[44,"大分県",44204,"日田市"]],[44205,[44,"大分県",44205,"佐伯市"]],[44206,[44,"大分県",44206,"臼杵市"]],[44207,[44,"大分県",44207,"津久見市"]],[44208,[44,"大分県",44208,"竹田市"]],[44209,[44,"大分県",44209,"豊後高田市"]],[44210,[44,"大分県",44210,"杵築市"]],[44211,[44,"大分県",44211,"宇佐市"]],[44212,[44,"大分県",44212,"豊後大野市"]],[44213,[44,"大分県",44213,"由布市"]],[44214,[44,"大分県",44214,"国東市"]],[44322,[44,"大分県",44322,"姫島村"]],[44341,[44,"大分県",44341,"日出町"]],[44461,[44,"大分県",44461,"九重町"]],[44462,[44,"大分県",44462,"玖珠町"]],[45201,[45,"宮崎県",45201,"宮崎市"]],[45202,[45,"宮崎県",45202,"都城市"]],[45203,[45,"宮崎県",45203,"延岡市"]],[45204,[45,"宮崎県",45204,"日南市"]],[45205,[45,"宮崎県",45205,"小林市"]],[45206,[45,"宮崎県",45206,"日向市"]],[45207,[45,"宮崎県",45207,"串間市"]],[45208,[45,"宮崎県",45208,"西都市"]],[45209,[45,"宮崎県",45209,"えびの市"]],[45341,[45,"宮崎県",45341,"三股町"]],[45361,[45,"宮崎県",45361,"高原町"]],[45382,[45,"宮崎県",45382,"国富町"]],[45383,[45,"宮崎県",45383,"綾町"]],[45401,[45,"宮崎県",45401,"高鍋町"]],[45402,[45,"宮崎県",45402,"新富町"]],[45403,[45,"宮崎県",45403,"西米良村"]],[45404,[45,"宮崎県",45404,"木城町"]],[45405,[45,"宮崎県",45405,"川南町"]],[45406,[45,"宮崎県",45406,"都農町"]],[45421,[45,"宮崎県",45421,"門川町"]],[45429,[45,"宮崎県",45429,"諸塚村"]],[45430,[45,"宮崎県",45430,"椎葉村"]],[45431,[45,"宮崎県",45431,"美郷町"]],[45441,[45,"宮崎県",45441,"高千穂町"]],[45442,[45,"宮崎県",45442,"日之影町"]],[45443,[45,"宮崎県",45443,"五ヶ瀬町"]],[46201,[46,"鹿児島県",46201,"鹿児島市"]],[46203,[46,"鹿児島県",46203,"鹿屋市"]],[46204,[46,"鹿児島県",46204,"枕崎市"]],[46206,[46,"鹿児島県",46206,"阿久根市"]],[46208,[46,"鹿児島県",46208,"出水市"]],[46210,[46,"鹿児島県",46210,"指宿市"]],[46213,[46,"鹿児島県",46213,"西之表市"]],[46214,[46,"鹿児島県",46214,"垂水市"]],[46215,[46,"鹿児島県",46215,"薩摩川内市"]],[46216,[46,"鹿児島県",46216,"日置市"]],[46217,[46,"鹿児島県",46217,"曽於市"]],[46218,[46,"鹿児島県",46218,"霧島市"]],[46219,[46,"鹿児島県",46219,"いちき串木野市"]],[46220,[46,"鹿児島県",46220,"南さつま市"]],[46221,[46,"鹿児島県",46221,"志布志市"]],[46222,[46,"鹿児島県",46222,"奄美市"]],[46223,[46,"鹿児島県",46223,"南九州市"]],[46224,[46,"鹿児島県",46224,"伊佐市"]],[46225,[46,"鹿児島県",46225,"姶良市"]],[46303,[46,"鹿児島県",46303,"三島村"]],[46304,[46,"鹿児島県",46304,"十島村"]],[46392,[46,"鹿児島県",46392,"さつま町"]],[46404,[46,"鹿児島県",46404,"長島町"]],[46452,[46,"鹿児島県",46452,"湧水町"]],[46468,[46,"鹿児島県",46468,"大崎町"]],[46482,[46,"鹿児島県",46482,"東串良町"]],[46490,[46,"鹿児島県",46490,"錦江町"]],[46491,[46,"鹿児島県",46491,"南大隅町"]],[46492,[46,"鹿児島県",46492,"肝付町"]],[46501,[46,"鹿児島県",46501,"中種子町"]],[46502,[46,"鹿児島県",46502,"南種子町"]],[46505,[46,"鹿児島県",46505,"屋久島町"]],[46523,[46,"鹿児島県",46523,"大和村"]],[46524,[46,"鹿児島県",46524,"宇検村"]],[46525,[46,"鹿児島県",46525,"瀬戸内町"]],[46527,[46,"鹿児島県",46527,"龍郷町"]],[46529,[46,"鹿児島県",46529,"喜界町"]],[46530,[46,"鹿児島県",46530,"徳之島町"]],[46531,[46,"鹿児島県",46531,"天城町"]],[46532,[46,"鹿児島県",46532,"伊仙町"]],[46533,[46,"鹿児島県",46533,"和泊町"]],[46534,[46,"鹿児島県",46534,"知名町"]],[46535,[46,"鹿児島県",46535,"与論町"]],[47201,[47,"沖縄県",47201,"那覇市"]],[47205,[47,"沖縄県",47205,"宜野湾市"]],[47207,[47,"沖縄県",47207,"石垣市"]],[47208,[47,"沖縄県",47208,"浦添市"]],[47209,[47,"沖縄県",47209,"名護市"]],[47210,[47,"沖縄県",47210,"糸満市"]],[47211,[47,"沖縄県",47211,"沖縄市"]],[47212,[47,"沖縄県",47212,"豊見城市"]],[47213,[47,"沖縄県",47213,"うるま市"]],[47214,[47,"沖縄県",47214,"宮古島市"]],[47215,[47,"沖縄県",47215,"南城市"]],[47301,[47,"沖縄県",47301,"国頭村"]],[47302,[47,"沖縄県",47302,"大宜味村"]],[47303,[47,"沖縄県",47303,"東村"]],[47306,[47,"沖縄県",47306,"今帰仁村"]],[47308,[47,"沖縄県",47308,"本部町"]],[47311,[47,"沖縄県",47311,"恩納村"]],[47313,[47,"沖縄県",47313,"宜野座村"]],[47314,[47,"沖縄県",47314,"金武町"]],[47315,[47,"沖縄県",47315,"伊江村"]],[47324,[47,"沖縄県",47324,"読谷村"]],[47325,[47,"沖縄県",47325,"嘉手納町"]],[47326,[47,"沖縄県",47326,"北谷町"]],[47327,[47,"沖縄県",47327,"北中城村"]],[47328,[47,"沖縄県",47328,"中城村"]],[47329,[47,"沖縄県",47329,"西原町"]],[47348,[47,"沖縄県",47348,"与那原町"]],[47350,[47,"沖縄県",47350,"南風原町"]],[47353,[47,"沖縄県",47353,"渡嘉敷村"]],[47354,[47,"沖縄県",47354,"座間味村"]],[47355,[47,"沖縄県",47355,"粟国村"]],[47356,[47,"沖縄県",47356,"渡名喜村"]],[47357,[47,"沖縄県",47357,"南大東村"]],[47358,[47,"沖縄県",47358,"北大東村"]],[47359,[47,"沖縄県",47359,"伊平屋村"]],[47360,[47,"沖縄県",47360,"伊是名村"]],[47361,[47,"沖縄県",47361,"久米島町"]],[47362,[47,"沖縄県",47362,"八重瀬町"]],[47375,[47,"沖縄県",47375,"多良間村"]],[47381,[47,"沖縄県",47381,"竹富町"]],[47382,[47,"沖縄県",47382,"与那国町"]]]');
var source_gsi_muni_table_namespaceObject = /*#__PURE__*/__webpack_require__.t(gsi_muni_table_namespaceObject, 2);
;// CONCATENATED MODULE: ./source/gsi-reverse-geocoder.ts
var gsi_reverse_geocoder_assign = (undefined && undefined.__assign) || function () {
    gsi_reverse_geocoder_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return gsi_reverse_geocoder_assign.apply(this, arguments);
};
var gsi_reverse_geocoder_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var gsi_reverse_geocoder_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
var gsi_reverse_geocoder_values = (undefined && undefined.__values) || function(o) {
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
var gsi_reverse_geocoder_read = (undefined && undefined.__read) || function (o, n) {
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


function readTable() {
    return gsi_reverse_geocoder_awaiter(this, void 0, void 0, function () {
        var result, table_1, table_1_1, _a, key, value;
        var e_1, _b;
        return gsi_reverse_geocoder_generator(this, function (_c) {
            result = new Map();
            try {
                for (table_1 = gsi_reverse_geocoder_values(source_gsi_muni_table_namespaceObject), table_1_1 = table_1.next(); !table_1_1.done; table_1_1 = table_1.next()) {
                    _a = gsi_reverse_geocoder_read(table_1_1.value, 2), key = _a[0], value = _a[1];
                    result.set(key, value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (table_1_1 && !table_1_1.done && (_b = table_1.return)) _b.call(table_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return [2 /*return*/, result];
        });
    });
}
var ErrorResultS = emptyRecord;
var ResultSpec = or(record({
    results: record({
        /** @example "08220" */
        muniCd: string,
        /** @example "北郷" */
        lv01Nm: string,
    }),
}), ErrorResultS);
var resultSpec = ResultSpec;
function lonLatToAddress(lon, lat, option) {
    var _a;
    return gsi_reverse_geocoder_awaiter(this, void 0, void 0, function () {
        var params, response, result, results, table, detail;
        return gsi_reverse_geocoder_generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    params = new URLSearchParams({ lon: String(lon), lat: String(lat) });
                    return [4 /*yield*/, fetch("https://mreversegeocoder.gsi.go.jp/reverse-geocoder/LonLatToAddress?".concat(params.toString()), { cache: (_a = option === null || option === void 0 ? void 0 : option.cache) !== null && _a !== void 0 ? _a : "force-cache", signal: option === null || option === void 0 ? void 0 : option.signal })];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _b.sent();
                    resultSpec.validate(result);
                    if (!result.results) {
                        return [2 /*return*/];
                    }
                    results = result.results;
                    return [4 /*yield*/, readTable()];
                case 3:
                    table = _b.sent();
                    detail = table.get(Number(results.muniCd));
                    if (!detail) {
                        return [2 /*return*/];
                    }
                    return [2 /*return*/, gsi_reverse_geocoder_assign(gsi_reverse_geocoder_assign({}, results), { detail: detail })];
            }
        });
    });
}

;// CONCATENATED MODULE: ./source/iitc-plugin-quick-jump.tsx
var iitc_plugin_quick_jump_extends = (undefined && undefined.__extends) || (function () {
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
var iitc_plugin_quick_jump_assign = (undefined && undefined.__assign) || function () {
    iitc_plugin_quick_jump_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return iitc_plugin_quick_jump_assign.apply(this, arguments);
};
var iitc_plugin_quick_jump_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var iitc_plugin_quick_jump_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
var iitc_plugin_quick_jump_read = (undefined && undefined.__read) || function (o, n) {
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

// spell-checker: ignore chatinput




function handleAsyncError(promise) {
    promise.catch(function (error) { return console.error(error); });
}
var namespace = "iitc-plugin-quick-jump";
var Names = Object.freeze({
    hidden: "".concat(namespace, "-hidden"),
    searchBar: "".concat(namespace, "-search-bar"),
    terminal: "".concat(namespace, "-terminal"),
    outputList: "".concat(namespace, "-output-list"),
    crossHair: "".concat(namespace, "-cross-hair"),
    toastList: "".concat(namespace, "-toast-list"),
    toastItem: "".concat(namespace, "-toast-item"),
    dropZone: "".concat(namespace, "-drop-zone"),
    dragOver: "".concat(namespace, "-drag-over"),
});
var css = "\n    .".concat(Names.terminal, " {\n        width: 100%;\n    }\n    .").concat(Names.searchBar, " {\n        background: rgba(8, 48, 78, 0.9);\n        border: 1px solid #20A8B1;\n    }\n    .").concat(Names.searchBar, " input {\n        width: 100%;\n    }\n    .").concat(Names.crossHair, " {\n        position: fixed;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        z-index: 3000;\n\n        font-size: 24px;\n        font-family: sans-serif;\n        color: #FFF;\n        text-shadow: 0 0 0.3em #000, 0 0 0.5em #000;\n        filter: drop-shadow(0 0 0.5em #000);\n    }\n    .").concat(Names.hidden, " {\n        display: none;\n    }\n    .").concat(Names.toastList, " {\n        list-style: none;\n        padding: 0;\n    }\n    .").concat(Names.toastItem, ":first-of-type {\n        border-top: 1px solid #ddd;\n    }\n    .").concat(Names.toastItem, " {\n        background-color: white;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-top: 1px dashed #ccc;\n        margin: 0 0.5em;\n        padding: 0.1em;\n        box-shadow: 0 2px 2px rgb(0 0 0 / 50%);\n    }\n    .").concat(Names.toastItem, " > input {\n        width: 100%;\n        color: #444;\n        background: rgba(0 0 0 / 0%);\n    }\n    .").concat(Names.dropZone, " {\n        background: white;\n        padding: 0.5rem;\n        border-radius: 0.3rem;\n        box-shadow: 0 0 0.5rem black;\n    }\n    .").concat(Names.dragOver, " {\n        background: #ddd;\n    }\n");
function searchCoordinate(searchText, _option) {
    var _a, _b;
    return iitc_plugin_quick_jump_awaiter(this, void 0, void 0, function () {
        var match, latitude, longitude;
        return iitc_plugin_quick_jump_generator(this, function (_c) {
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
var itemCount = 0;
function put(_a, message, _b) {
    var _this = this;
    var outputList = _a.outputList;
    var _c = _b === void 0 ? {} : _b, _d = _c.removeDeray, removeDeray = _d === void 0 ? 5000 : _d, _e = _c.maxCount, maxCount = _e === void 0 ? 5 : _e;
    var item = (jsx("li", iitc_plugin_quick_jump_assign({ class: Names.toastItem }, { children: jsx("input", { value: message }) })));
    outputList.append(item);
    itemCount++;
    handleAsyncError((function () { return iitc_plugin_quick_jump_awaiter(_this, void 0, void 0, function () {
        var _a;
        return iitc_plugin_quick_jump_generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, sleep(removeDeray)];
                case 1:
                    _b.sent();
                    if (maxCount < itemCount) {
                        (_a = outputList.firstElementChild) === null || _a === void 0 ? void 0 : _a.remove();
                        itemCount--;
                    }
                    return [2 /*return*/];
            }
        });
    }); })());
}
function waitAndExecuteCommand(view, options) {
    return iitc_plugin_quick_jump_awaiter(this, void 0, void 0, function () {
        var inputWaitInterval, searchInput, value;
        return iitc_plugin_quick_jump_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    inputWaitInterval = view.inputWaitInterval, searchInput = view.searchInput;
                    // しばらく待ってから
                    return [4 /*yield*/, sleep(inputWaitInterval, options)];
                case 1:
                    // しばらく待ってから
                    _a.sent();
                    value = searchInput.value;
                    return [2 /*return*/, executeCommand(view, value, options)];
            }
        });
    });
}
function executeCommand(view, value, options) {
    return iitc_plugin_quick_jump_awaiter(this, void 0, void 0, function () {
        var parentMap, coordinate;
        return iitc_plugin_quick_jump_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    parentMap = view.parentMap;
                    return [4 /*yield*/, searchCoordinate(value, options)];
                case 1:
                    coordinate = _a.sent();
                    if (!coordinate) {
                        return [2 /*return*/, put(view, "".concat(value, " \u306E\u5EA7\u6A19\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002"))];
                    }
                    // 親地図を指定した座標に移動
                    parentMap.setView(coordinate);
                    return [2 /*return*/];
            }
        });
    });
}
function createAsyncCancelScope() {
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
var Terminal = /** @class */ (function (_super) {
    iitc_plugin_quick_jump_extends(Terminal, _super);
    function Terminal(options, _settings) {
        var _this = _super.call(this, options) || this;
        _this._settings = _settings;
        return _this;
    }
    Terminal.prototype.onAdd = function (parentMap) {
        var _this = this;
        var settings = this._settings;
        var inputWaitInterval = settings.inputWaitInterval, locationUpdateWaitInterval = settings.locationUpdateWaitInterval;
        var searchInput = (jsx("input", {}));
        var outputList = jsx("ul", { class: Names.toastList });
        var searchBar = jsx("div", iitc_plugin_quick_jump_assign({ class: Names.searchBar }, { children: searchInput }));
        var crossHair = jsx("div", iitc_plugin_quick_jump_assign({ class: Names.crossHair }, { children: "\u253C" }));
        var terminal = (jsxs("div", iitc_plugin_quick_jump_assign({ class: Names.terminal }, { children: [outputList, searchBar, crossHair] })));
        terminal.classList.add(Names.hidden);
        var view = (this._view = iitc_plugin_quick_jump_assign(iitc_plugin_quick_jump_assign({}, settings), { parentMap: parentMap, inputWaitInterval: inputWaitInterval, searchInput: searchInput, crossHair: crossHair, outputList: outputList }));
        var searchBarHandler = createAsyncCancelScope();
        function startSearch(inputWaitInterval) {
            searchBarHandler(function (signal) {
                return waitAndExecuteCommand(iitc_plugin_quick_jump_assign(iitc_plugin_quick_jump_assign({}, view), { inputWaitInterval: inputWaitInterval }), { signal: signal });
            });
        }
        // ドキュメントで Ctrl + Q キーが押されたとき、表示しフォーカスを当てる
        document.addEventListener("keyup", function (e) {
            if (e.key === "q" && e.ctrlKey) {
                terminal.classList.remove(Names.hidden);
                searchInput.focus();
                searchInput.select();
            }
        });
        searchBar.addEventListener("keyup", function (e) {
            switch (e.key) {
                // 検索バーで Esc が押されたとき、隠す
                case "Escape": {
                    terminal.classList.add(Names.hidden);
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
        // 主地図が移動し終わったとき、現在地を更新する
        var locationAsyncScope = createAsyncCancelScope();
        parentMap.addEventListener("moveend", function () {
            locationAsyncScope(function (signal) { return iitc_plugin_quick_jump_awaiter(_this, void 0, void 0, function () {
                var _a, lng, lat, address, lv01Nm, detail, _b, kenName, shiName;
                return iitc_plugin_quick_jump_generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: 
                        // 少し待って
                        return [4 /*yield*/, sleep(locationUpdateWaitInterval, { signal: signal })];
                        case 1:
                            // 少し待って
                            _c.sent();
                            _a = parentMap.getCenter(), lng = _a.lng, lat = _a.lat;
                            return [4 /*yield*/, lonLatToAddress(lng, lat, { signal: signal })];
                        case 2:
                            address = _c.sent();
                            // 表示
                            if (!address) {
                                return [2 /*return*/, put(view, "".concat(lng, ", ").concat(lat, ": \u306E\u4F4F\u6240\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002"))];
                            }
                            lv01Nm = address.lv01Nm, detail = address.detail;
                            _b = iitc_plugin_quick_jump_read(detail, 4), kenName = _b[1], shiName = _b[3];
                            put(view, "".concat(lat, ", ").concat(lng));
                            put(view, "".concat(kenName, ", ").concat(shiName, ", ").concat(lv01Nm));
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        return terminal;
    };
    Terminal.prototype.put = function (message, options) {
        if (this._view) {
            put(this._view, message, options);
        }
        else {
            console.log(message);
        }
    };
    return Terminal;
}(window.L.Control));
function processDroppedFiles(e, parentMap, terminal, _a) {
    var _b, _c;
    var signal = _a.signal;
    return iitc_plugin_quick_jump_awaiter(this, void 0, void 0, function () {
        var file0, coordinate;
        return iitc_plugin_quick_jump_generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    file0 = (_c = (_b = e.dataTransfer) === null || _b === void 0 ? void 0 : _b.files) === null || _c === void 0 ? void 0 : _c[0];
                    if (file0 === undefined) {
                        return [2 /*return*/, terminal.put("ファイルがドロップされていません。")];
                    }
                    terminal.put("\u30D5\u30A1\u30A4\u30EB\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026 ( ".concat(file0.name, " )"));
                    return [4 /*yield*/, coordinateOfImage(file0, { signal: signal })];
                case 1:
                    coordinate = _d.sent();
                    if (!coordinate) {
                        return [2 /*return*/, terminal.put("\u5EA7\u6A19\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002( ".concat(file0.name, " )"))];
                    }
                    parentMap.setView(coordinate);
                    terminal.put("".concat(coordinate.lat, ", ").concat(coordinate.lng, " \u306B\u79FB\u52D5\u3057\u307E\u3057\u305F\u3002( ").concat(file0.name, " )"));
                    return [2 /*return*/];
            }
        });
    });
}
function createDropZone(parentMap, terminal) {
    var fileInput = jsx("input", { type: "file", name: "file" });
    var dropZone = jsx("div", iitc_plugin_quick_jump_assign({ class: Names.dropZone }, { children: fileInput }));
    dropZone.addEventListener("dragover", function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.classList.add(Names.dragOver);
    }, false);
    dropZone.addEventListener("dragleave", function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.classList.remove(Names.dragOver);
    });
    var fileDropScope = createAsyncCancelScope();
    dropZone.addEventListener("drop", function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.classList.remove(Names.dragOver);
        fileDropScope(function (signal) {
            return processDroppedFiles(e, parentMap, terminal, { signal: signal });
        });
    });
    return dropZone;
}
var DropZone = /** @class */ (function (_super) {
    iitc_plugin_quick_jump_extends(DropZone, _super);
    function DropZone(_terminal, options) {
        var _this = _super.call(this, options) || this;
        _this._terminal = _terminal;
        return _this;
    }
    DropZone.prototype.onAdd = function (parentMap) {
        return createDropZone(parentMap, this._terminal);
    };
    return DropZone;
}(window.L.Control));
function asyncMain() {
    return iitc_plugin_quick_jump_awaiter(this, void 0, void 0, function () {
        var terminal;
        return iitc_plugin_quick_jump_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, waitElementLoaded()];
                case 1:
                    _a.sent();
                    if (window.map == null) {
                        console.error("map が見つかりませんでした。");
                        return [2 /*return*/];
                    }
                    addStyle(css);
                    terminal = new Terminal({ position: "bottomleft" }, {
                        inputWaitInterval: 3000,
                        locationUpdateWaitInterval: 3000,
                    }).addTo(window.map);
                    new DropZone(terminal, { position: "bottomleft" }).addTo(window.map);
                    return [2 /*return*/];
            }
        });
    });
}
function main() {
    handleAsyncError(asyncMain());
}

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