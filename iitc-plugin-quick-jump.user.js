
// ==UserScript==
// @name         IITC plugin: Quick jump
// @category     Controls
// @namespace    https://github.com/wiinuk/iitc-plugin-quick-jump
// @downloadURL  https://github.com/wiinuk/iitc-plugin-quick-jump/raw/master/iitc-plugin-quick-jump.user.js
// @updateURL    https://github.com/wiinuk/iitc-plugin-quick-jump/raw/master/iitc-plugin-quick-jump.user.js
// @homepageURL  https://github.com/wiinuk/iitc-plugin-quick-jump
// @version      0.1.0
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
// @grant        none
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./source/iitc-plugin-quick-jump.tsx
function handleAsyncError(promise) {
    promise.catch(function (error) { return console.error(error); });
}
function asyncMain() {
    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); });
}
function main() {
    handleAsyncError(asyncMain());
}

;// CONCATENATED MODULE: ./source/iitc-plugin-quick-jump.user.ts
main();

/******/ })()
;