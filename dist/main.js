/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/background-90.png */ "./src/assets/background-90.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/second.png */ "./src/assets/second.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/first.png */ "./src/assets/first.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Aclonica&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Abel&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --primary: #c4ff9e;\r\n  --seconday: #d8e4ea;\r\n  --primaryfont: \"Aclonica\", sans-serif;\r\n  --secondaryfont: \"Abel\", sans-serif;\r\n}\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.header {\r\n  background: var(--primary);\r\n  height: 70px;\r\n  font-family: var(--primaryfont);\r\n  font-size: 30px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.header .grid {\r\n  justify-items: center;\r\n  align-items: center;\r\n  height: 100%;\r\n\r\n\r\n}\r\n\r\nimg{\r\n  width:75%;\r\n}\r\n\r\n.content{\r\n    grid-column: 3/7;\r\n    display: flex;\r\n    text-align: center;\r\n}\r\n\r\n.header .menu, .contact{\r\n    padding-left: 35px;\r\n}\r\n\r\nmain .contact{\r\n  text-align: center;\r\n\r\n}\r\n\r\n.contactContent p{\r\n  padding-bottom: 45px;\r\n\r\n}\r\n\r\n.contactContent{\r\n  position: relative;\r\n  padding-left: 0px;\r\n\r\n}\r\n\r\n.contactContent .img{\r\n  position: absolute;\r\nleft: 57.32%;\r\ntop: 4.14%;\r\nbottom: 35.28%;\r\nwidth:40%;\r\n\r\n}\r\n\r\n\r\nbody  {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  \r\n \r\n  background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: right   top;\r\n    background-attachment: fixed;  \r\n  \r\n\r\n\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(8, 1fr);\r\n  column-gap: 25px;\r\n  margin: 0px 80px 25px 80px;\r\n  row-gap: 25px;\r\n}\r\n\r\n.title {\r\n  grid-column: 2/8;\r\n  font-family: var(--primaryfont);\r\n  font-size: 90px;\r\n  padding-top: 10px;\r\n  text-shadow: #c4ff9e 1px 0px 10px;\r\n\r\n \r\n}\r\n\r\nmain .menu {\r\n  grid-column: 2/8;\r\n  justify-self: center;\r\n}\r\n\r\n.dishName {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.discription {\r\n  font-size: 25px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.menuImg{\r\n    \r\n    text-align: end;\r\n}\r\n\r\n.card {\r\n  grid-column: 3/7;\r\n  background-color: var(--primary);\r\n  font-family: var(--secondaryfont);\r\n  font-size: 33px;\r\n  border-radius: 10px;\r\n\r\n  text-align: left;\r\n  padding: 15px 25px 15px 25px;\r\n  line-height: 38px;\r\n  max-width: 628px;\r\n  \r\n\r\n  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,\r\n    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\r\n    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n}\r\n\r\n.reviewer {\r\n  text-align: right;\r\n  padding-right: 15px;\r\n}\r\n\r\n.schedule {\r\n  text-align: center;\r\n}\r\n.schedule h2 {\r\n  font-weight: normal;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.photo {\r\n  grid-column: 7/9;\r\n  border-radius: 3px;\r\n  max-width: 500px;\r\n}\r\n\r\n.first {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-size: contain;\r\n  background-position: center;\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.second {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-size: contain;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.location {\r\n  text-align: center;\r\n}\r\n\r\n.locationDetail {\r\n  margin-top: 40px;\r\n}\r\n\r\n.footer {\r\n  width: 100%;\r\n  background: var(--primary);\r\n  height: 70px;\r\n  font-family: var(--primaryfont);\r\n  font-size: 15px;\r\n}\r\n.footer .grid {\r\n  margin-top: 25px;\r\n  margin-bottom: 0px;\r\n  justify-items: center;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n.credit {\r\n  grid-column: span 2;\r\n}\r\n\r\n\r\n@media screen and (max-width:700px){\r\n\r\n  body{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  \r\n \r\n    background-repeat: no-repeat;\r\n      background-size: cover;\r\n      /* background-position: left; */\r\n      background-attachment: fixed;  \r\n    \r\n   \r\n  }\r\n\r\n  .grid{\r\n    margin: 0px 8px 10px 8px;\r\n    column-gap: 16px;\r\n  }\r\n\r\n  .title{\r\n    font-size: 50px;\r\n    text-align: start;\r\n    grid-column: 1/9;\r\n  }\r\n  .card{\r\n    width:100%;\r\n    grid-column: 1/9;\r\n    font-size: 28px;\r\n  }\r\n\r\n  .discription {\r\n    font-size: 20px;\r\n}\r\n\r\n .footer{\r\n   font-size: 10px;\r\n }\r\n  \r\n}\r\n\r\n@media (min-width:701px)and (max-width:900px){\r\n\r\n  .grid{\r\n    margin: 0px 8px 10px 8px;\r\n    column-gap: 16px;\r\n  } \r\n \r\n  .title{\r\n    font-size: 55px;\r\n    text-align: start;\r\n    grid-column: 1/9;\r\n  }\r\n  .card{\r\n    grid-column: 2/8;\r\n \r\n\r\n  }\r\n\r\n  .discription {\r\n    font-size: 20px;\r\n}\r\n  \r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,qCAAqC;EACrC,mCAAmC;AACrC;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,0BAA0B;EAC1B,YAAY;EACZ,+BAA+B;EAC/B,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;;;AAGd;;AAEA;EACE,SAAS;AACX;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;EACE,kBAAkB;;AAEpB;;AAEA;EACE,oBAAoB;;AAEtB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;;AAEnB;;AAEA;EACE,kBAAkB;AACpB,YAAY;AACZ,UAAU;AACV,cAAc;AACd,SAAS;;AAET;;;AAGA;EACE,mDAA6C;;;EAG7C,4BAA4B;IAC1B,sBAAsB;IACtB,gCAAgC;IAChC,4BAA4B;;;;AAIhC;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,gBAAgB;EAChB,0BAA0B;EAC1B,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,+BAA+B;EAC/B,eAAe;EACf,iBAAiB;EACjB,iCAAiC;;;AAGnC;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;AACjB;;;;;;AAMA;;IAEI,eAAe;AACnB;;AAEA;EACE,gBAAgB;EAChB,gCAAgC;EAChC,iCAAiC;EACjC,eAAe;EACf,mBAAmB;;EAEnB,gBAAgB;EAChB,4BAA4B;EAC5B,iBAAiB;EACjB,gBAAgB;;;EAGhB;;+CAE6C;AAC/C;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,mDAAsC;EACtC,wBAAwB;EACxB,2BAA2B;EAC3B,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE,mDAAqC;EACrC,wBAAwB;EACxB,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,0BAA0B;EAC1B,YAAY;EACZ,+BAA+B;EAC/B,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;;AAGA;;EAEE;IACE,mDAA6C;;;IAG7C,4BAA4B;MAC1B,sBAAsB;MACtB,+BAA+B;MAC/B,4BAA4B;;;EAGhC;;EAEA;IACE,wBAAwB;IACxB,gBAAgB;EAClB;;EAEA;IACE,eAAe;IACf,iBAAiB;IACjB,gBAAgB;EAClB;EACA;IACE,UAAU;IACV,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,eAAe;AACnB;;CAEC;GACE,eAAe;CACjB;;AAED;;AAEA;;EAEE;IACE,wBAAwB;IACxB,gBAAgB;EAClB;;EAEA;IACE,eAAe;IACf,iBAAiB;IACjB,gBAAgB;EAClB;EACA;IACE,gBAAgB;;;EAGlB;;EAEA;IACE,eAAe;AACnB;;AAEA","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Aclonica&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Abel&display=swap\");\r\n\r\n:root {\r\n  --primary: #c4ff9e;\r\n  --seconday: #d8e4ea;\r\n  --primaryfont: \"Aclonica\", sans-serif;\r\n  --secondaryfont: \"Abel\", sans-serif;\r\n}\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.header {\r\n  background: var(--primary);\r\n  height: 70px;\r\n  font-family: var(--primaryfont);\r\n  font-size: 30px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.header .grid {\r\n  justify-items: center;\r\n  align-items: center;\r\n  height: 100%;\r\n\r\n\r\n}\r\n\r\nimg{\r\n  width:75%;\r\n}\r\n\r\n.content{\r\n    grid-column: 3/7;\r\n    display: flex;\r\n    text-align: center;\r\n}\r\n\r\n.header .menu, .contact{\r\n    padding-left: 35px;\r\n}\r\n\r\nmain .contact{\r\n  text-align: center;\r\n\r\n}\r\n\r\n.contactContent p{\r\n  padding-bottom: 45px;\r\n\r\n}\r\n\r\n.contactContent{\r\n  position: relative;\r\n  padding-left: 0px;\r\n\r\n}\r\n\r\n.contactContent .img{\r\n  position: absolute;\r\nleft: 57.32%;\r\ntop: 4.14%;\r\nbottom: 35.28%;\r\nwidth:40%;\r\n\r\n}\r\n\r\n\r\nbody  {\r\n  background: url(\"./assets/background-90.png\");\r\n  \r\n \r\n  background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: right   top;\r\n    background-attachment: fixed;  \r\n  \r\n\r\n\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(8, 1fr);\r\n  column-gap: 25px;\r\n  margin: 0px 80px 25px 80px;\r\n  row-gap: 25px;\r\n}\r\n\r\n.title {\r\n  grid-column: 2/8;\r\n  font-family: var(--primaryfont);\r\n  font-size: 90px;\r\n  padding-top: 10px;\r\n  text-shadow: #c4ff9e 1px 0px 10px;\r\n\r\n \r\n}\r\n\r\nmain .menu {\r\n  grid-column: 2/8;\r\n  justify-self: center;\r\n}\r\n\r\n.dishName {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.discription {\r\n  font-size: 25px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.menuImg{\r\n    \r\n    text-align: end;\r\n}\r\n\r\n.card {\r\n  grid-column: 3/7;\r\n  background-color: var(--primary);\r\n  font-family: var(--secondaryfont);\r\n  font-size: 33px;\r\n  border-radius: 10px;\r\n\r\n  text-align: left;\r\n  padding: 15px 25px 15px 25px;\r\n  line-height: 38px;\r\n  max-width: 628px;\r\n  \r\n\r\n  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,\r\n    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\r\n    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n}\r\n\r\n.reviewer {\r\n  text-align: right;\r\n  padding-right: 15px;\r\n}\r\n\r\n.schedule {\r\n  text-align: center;\r\n}\r\n.schedule h2 {\r\n  font-weight: normal;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.photo {\r\n  grid-column: 7/9;\r\n  border-radius: 3px;\r\n  max-width: 500px;\r\n}\r\n\r\n.first {\r\n  background: url(\"./assets/second.png\");\r\n  background-size: contain;\r\n  background-position: center;\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.second {\r\n  background: url(\"./assets/first.png\");\r\n  background-size: contain;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.location {\r\n  text-align: center;\r\n}\r\n\r\n.locationDetail {\r\n  margin-top: 40px;\r\n}\r\n\r\n.footer {\r\n  width: 100%;\r\n  background: var(--primary);\r\n  height: 70px;\r\n  font-family: var(--primaryfont);\r\n  font-size: 15px;\r\n}\r\n.footer .grid {\r\n  margin-top: 25px;\r\n  margin-bottom: 0px;\r\n  justify-items: center;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n.credit {\r\n  grid-column: span 2;\r\n}\r\n\r\n\r\n@media screen and (max-width:700px){\r\n\r\n  body{\r\n    background: url(\"./assets/background-90.png\");\r\n  \r\n \r\n    background-repeat: no-repeat;\r\n      background-size: cover;\r\n      /* background-position: left; */\r\n      background-attachment: fixed;  \r\n    \r\n   \r\n  }\r\n\r\n  .grid{\r\n    margin: 0px 8px 10px 8px;\r\n    column-gap: 16px;\r\n  }\r\n\r\n  .title{\r\n    font-size: 50px;\r\n    text-align: start;\r\n    grid-column: 1/9;\r\n  }\r\n  .card{\r\n    width:100%;\r\n    grid-column: 1/9;\r\n    font-size: 28px;\r\n  }\r\n\r\n  .discription {\r\n    font-size: 20px;\r\n}\r\n\r\n .footer{\r\n   font-size: 10px;\r\n }\r\n  \r\n}\r\n\r\n@media (min-width:701px)and (max-width:900px){\r\n\r\n  .grid{\r\n    margin: 0px 8px 10px 8px;\r\n    column-gap: 16px;\r\n  } \r\n \r\n  .title{\r\n    font-size: 55px;\r\n    text-align: start;\r\n    grid-column: 1/9;\r\n  }\r\n  .card{\r\n    grid-column: 2/8;\r\n \r\n\r\n  }\r\n\r\n  .discription {\r\n    font-size: 20px;\r\n}\r\n  \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _parent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parent.js */ "./src/parent.js");
/* harmony import */ var _assets_chef_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/chef.png */ "./src/assets/chef.png");
/* harmony import */ var _assets_manager_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/manager.png */ "./src/assets/manager.png");





class contact extends _parent_js__WEBPACK_IMPORTED_MODULE_0__.common{

    constructor(dom,content){
        super(dom);
        this.content=content;
    }


    appendContact(){
        const images=[_assets_chef_png__WEBPACK_IMPORTED_MODULE_1__,_assets_manager_png__WEBPACK_IMPORTED_MODULE_2__]
        for(let staff in this.content.staffs){
            const staffInfoDiv=document.createElement("div");
            // const photo=document.createElement("div");
            // photo.classList.add("contactImg");
            const img=document.createElement('img');
            img.classList.add("img");
            this.mainDom.appendChild(staffInfoDiv);
            console.log("inside first loop",staff)
           
            staffInfoDiv.innerHTML=`<p>${this.content.staffs[staff].name}</p><p>${this.content.staffs[staff].position}</p><p>${this.content.staffs[staff].contact}</p><p>${this.content.staffs[staff].email}</p>`
          
            
            staffInfoDiv.classList.add("card");
            staffInfoDiv.classList.add("contactContent");

            for (let i = 0; i < 1; i++) {
                img.src=images[i];
                images.splice(0,1);
                
               
                
            }
            // photo.appendChild(img);
            staffInfoDiv.appendChild(img);
        }
            
        }
    

}

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayController": () => (/* binding */ displayController)
/* harmony export */ });
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _parent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parent.js */ "./src/parent.js");





class displayController {
   
    static createHomepage(contentDom, homeContent) {
        const homepage = new _home_js__WEBPACK_IMPORTED_MODULE_1__.home(contentDom, homeContent);
        homepage.appendTitle(homeContent.title);
        homepage.appendFeedback(homepage.mainDom);
        homepage.appendSchedule(homepage.mainDom);
        homepage.apppendLocation(homepage.mainDom);
        homepage.appendFooter();
    }


    static clearScreen(dom) {
        const body=document.querySelector("body");
        
        dom.remove()
    }

    static createHeading(dom){
        const header = new _parent_js__WEBPACK_IMPORTED_MODULE_3__.common(dom);
        header.appendHeader()

    }

    static createMenupage(contentDom,menuContent){
        const menupage = new _menu_js__WEBPACK_IMPORTED_MODULE_2__.menu(contentDom,menuContent);
        menupage.appendTitle(menuContent.title);
        menupage.appendMenu();
        menupage.appendFooter()
    }

    static createContactPage(dom,content){
        const contactPage= new _contact_js__WEBPACK_IMPORTED_MODULE_0__.contact(dom,content);
        contactPage.appendTitle(content.title)
        contactPage.appendContact();
        contactPage.appendFooter();
    }
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _parent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parent.js */ "./src/parent.js");


class home extends _parent_js__WEBPACK_IMPORTED_MODULE_0__.common{
    constructor(dom,content){
        super(dom);
        this.content=content;
       

    }

    appendFeedback(mainDom){
       const review= this.content.review;
       const reviewer=this.content.reviewer;
       const reviewDom= document.createElement('div');
       reviewDom.classList.add("card");
       reviewDom.classList.add("review");
       reviewDom.innerHTML=`<p>${review}</p><p class="reviewer">-${reviewer}</p>`;
       mainDom.append(reviewDom);

       const photo= document.createElement('div');
       photo.classList.add("photo");
       photo.classList.add("first");
       
       mainDom.appendChild(photo);
        return {reviewDom,photo};


    }

    appendSchedule(mainDom){
        const scheduleDom= document.createElement("div");
        scheduleDom.classList.add("card");
        scheduleDom.classList.add("schedule");

        scheduleDom.innerHTML=`<h2>${this.content.schedule.title}</h2p>`;
        mainDom.append(scheduleDom);
        for(let key in this.content.schedule.time ){ //for breaking line after each day
            const scheduleDetailDom= document.createElement("div");
            scheduleDetailDom.innerHTML=`<p>${key}:${this.content.schedule.time[key]}</p>`;
            scheduleDom.append(scheduleDetailDom);    
        }

        const photo= document.createElement('div');
       photo.classList.add("photo");
       photo.classList.add("second");
       
       mainDom.appendChild(photo);

        return {scheduleDom,photo};

    }

   apppendLocation(mainDom){
       const locationDom=document.createElement("div");
       locationDom.classList.add("card");
       locationDom.classList.add("location");
       locationDom.innerHTML=`<p>Location</p><p class="locationDetail">${this.content.location}`;
       mainDom.appendChild(locationDom);
       return locationDom;

   }
    


}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _parent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parent.js */ "./src/parent.js");
/* harmony import */ var _assets_breakfast_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/breakfast.png */ "./src/assets/breakfast.png");
/* harmony import */ var _assets_maincourse_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/maincourse.png */ "./src/assets/maincourse.png");




class menu extends _parent_js__WEBPACK_IMPORTED_MODULE_0__.common{
    constructor (dom,content){
        super(dom);
        this.content=content;

    }

    appendMenu(){
        const images=[_assets_breakfast_png__WEBPACK_IMPORTED_MODULE_1__,_assets_maincourse_png__WEBPACK_IMPORTED_MODULE_2__]
        for (let menu in this.content.menu) {
            const menuDom =document.createElement("div");
            const photo=document.createElement("div");
            photo.classList.add("menuImg");
            const img=document.createElement('img');
            img.classList.add("img");
            // const img=new Image();
            for (let dishes in this.content.menu[menu]){

                this.mainDom.appendChild(menuDom);
                const dishesDom=document.createElement("div");
                dishesDom.classList.add("dish")
                dishesDom.innerHTML=`<p class="dishName">${this.content.menu[menu][dishes].dishName}<span class="price">${this.content.menu[menu][dishes].price}</span><p class="discription">${this.content.menu[menu][dishes].discription}</p`;
                menuDom.appendChild(dishesDom);
                menuDom.classList.add("card");
                
            }
            for (let i = 0; i < 1; i++) {
                img.src=images[i];
                images.splice(0,1);
                
               
                
            }
            photo.appendChild(img);
            menuDom.appendChild(photo);

            
        }
    }
}



/***/ }),

/***/ "./src/parent.js":
/*!***********************!*\
  !*** ./src/parent.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "common": () => (/* binding */ common)
/* harmony export */ });
class common{
    constructor(dom){
        this.dom=dom;
        this.mainDom=document.createElement("main");
    }
    
    appendHeader(){
        const header= document.createElement('div');
        header.classList.add("header");
        this.dom.appendChild(header)
        
        //text inside options
        const home=document.createElement('div');
        const menu=document.createElement('div');
        const contact=document.createElement('div');
        home.classList.add("home");
        menu.classList.add("menu");
        contact.classList.add("contact");
        home.textContent="Home";
        menu.textContent="Menu";
        contact.textContent="contact"

        home.classList.add("option");
        menu.classList.add("option");
        contact.classList.add("option");
       

        //adding doms inside header
    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);
        return header;         

    }



    appendTitle(title){

        const titleDom = document.createElement("div");
        titleDom.textContent= title;
        titleDom.classList.add("title");
        
        titleDom.classList.add(`${title.split(' ')[0]}`.toLowerCase());
        this.mainDom.classList.add("grid");
            
        this.dom.appendChild(this.mainDom);
        this.mainDom.appendChild(titleDom);
        return titleDom;
    }

    appendFooter(){

        const footer=document.createElement("footer");
        const footerContent = document.createElement("div");
        footer.classList.add('footer');
        footerContent.classList.add("grid");
        for(let key in this.content.credit){
            const credit=document.createElement('div');
            credit.classList.add('credit');
            credit.innerHTML=`<p class=>${this.content.credit[key]}`;
            footerContent.appendChild(credit)
        }

        this.dom.appendChild(footer);
        footer.appendChild(footerContent);
        return {footer,footerContent};


        // for footer content
        

    }

    appendImages(images){
        
    }

    
}








/***/ }),

/***/ "./src/assets/background-90.png":
/*!**************************************!*\
  !*** ./src/assets/background-90.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5445451bbacba37bc58.png";

/***/ }),

/***/ "./src/assets/breakfast.png":
/*!**********************************!*\
  !*** ./src/assets/breakfast.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9bb9b2e95d5c55aae369.png";

/***/ }),

/***/ "./src/assets/chef.png":
/*!*****************************!*\
  !*** ./src/assets/chef.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "562c0fa7dbe3d07fb56c.png";

/***/ }),

/***/ "./src/assets/first.png":
/*!******************************!*\
  !*** ./src/assets/first.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f038b66b93e1e73404fa.png";

/***/ }),

/***/ "./src/assets/maincourse.png":
/*!***********************************!*\
  !*** ./src/assets/maincourse.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "908e3f098968690b03e4.png";

/***/ }),

/***/ "./src/assets/manager.png":
/*!********************************!*\
  !*** ./src/assets/manager.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7c82a4e46174938064e.png";

/***/ }),

/***/ "./src/assets/second.png":
/*!*******************************!*\
  !*** ./src/assets/second.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85f49ca1f889552574e7.png";

/***/ })

/******/ 	});
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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const homeContent = {
    title: "The Famous One's Kitchen ",
    review:
        "This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority. Food is pretty good, some italian classics and some twists, and for their prices it’s 100% worth it.",
    reviewer: "Billy",
    schedule: {
        title: "Hours",
        time: {
            Sunday: "8am - 8pm",
            Monday: "6am - 6pm",
            Tuesday: "6am - 6pm",
            Wednesday: "6am - 6pm",
            Thursday: " 6am - 10pm",
            Friday: " 6am - 10pm",
            Saturday: "8am - 10pm",
        },
    },
    location: "123 Forest Drive, Forestville, Maine",
    credit: {
        first: `Photo by <a href="https://unsplash.com/@miracletwentyone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText "target="_blank">Joseph Gonzalez</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>`,
        second: `Photo by <a href="https://unsplash.com/@kodeblacc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Favour Otunji</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>`,
        third: `Photo by <a href="https://unsplash.com/@vardarious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Volkan Vardar</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>`,
        fourth: `Background by <a href="https://unsplash.com/@brookelark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Brooke Lark</a> on <a href="https://unsplash.com/s/photos/resturant-white?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>
           `,
    },
};

const menuContent = {
    title: "Menu",
    menu: {
        firstMenu: {

            firstDish: {

                dishName: "Two By Five",
                price: "14.99",
                discription: "2 eggs, 2 sausage links, 2 strips of maple bacon, 2 buttermilk pancakes and 2 slices of toast.",

            },

            secondDish: {
                dishName: "Avocado toast",
                price: "10.99",
                discription: "Sourdough toast topped with smashed avocado, tomatoes, mixed greens and a soft poached egg.",

            },

            thirdDish: {
                dishName: "Brioche Breakfast Club",
                price: "13.59",
                discription: "Fried egg, double slices of Canadian Cheddar, maple bacon, lettuce, tomato and mayo on a grilled brioche bun. Served with shredded hashbrowns.",

            },

        },

        secondMenu: {
            firstDish: {

                dishName: "Beer-Battered Fish & Chips",
                price: "16.59",
                discription: "2 pieces of hand-battered Ocean Wise cod fillets, freshly dipped in our housemade beer batter and served with tartar sauce, coleslaw and fresh cut homestyle fries.",

            },

            secondDish: {
                dishName: "Southern-Style Chicken Tenders ",
                price: "17.59",

                discription: "6 pieces of premium chicken tenderloin, hand-battered in our secret southern-style recipe. Served with your choice of dipping sauce, coleslaw and fresh cut homestyle fries.",
            },

            thirdDish: {
                dishName: "The Amazing Ginger Bowl",
                price: "17.99",
                discription: "Hand-breaded chicken tenders, tossed in citrus ginger sauce, with carrots and onions on chef’s rice topped with sesame seeds and green onions. Served with naan bread",

            },

        },
    },

    credit: {
        first: "Menu from <a href='https://rickysrestaurants.ca/menus/?location_id=558' target=_blank>Rikey's Resturant</a>",
    }


};

const contactContact={
    title:"Contact",
    staffs:{
        staffNo1:{
            name:"Harry",
            position:"Cook",
            contact:"555-555-5554",
            email:"totallyRealEmail@notFake.com",

        },

        staffNo2:{
            name:"Nick",
            position:"Manager",
            contact:"555-555-5554",
            email:"totallyRealEmail@notFake.com",

        },

    },
    credit:{
        first:"Made by Diwash Nembang",
    },
}


const contentDom = document.querySelector("#content");
_displayController__WEBPACK_IMPORTED_MODULE_0__.displayController.createHeading(contentDom);
_displayController__WEBPACK_IMPORTED_MODULE_0__.displayController.createHomepage(contentDom,homeContent);
const headerDom=Array.from(document.querySelectorAll(".option"));
headerDom.forEach(header=>{
    const choosen=header.getAttribute("class").split(' ')[0];    
    header.addEventListener("click",()=>{
        const mainDom=document.querySelector("main");
        const footerDom=document.querySelector("footer");
        console.log(choosen)
        switch (choosen) {
            case "home":
                
                _displayController__WEBPACK_IMPORTED_MODULE_0__.displayController.clearScreen(mainDom);
                _displayController__WEBPACK_IMPORTED_MODULE_0__.displayController.clearScreen(footerDom);
                _displayController__WEBPACK_IMPORTED_MODULE_0__.displayController.createHomepage(contentDom,homeContent);
                break;
            
                case "menu":
                _displayController__WEBPACK_IMPORTED_MODULE_0__.displayController.clearScreen(mainDom);
                _displayController__WEBPACK_IMPORTED_MODULE_0__.displayController.clearScreen(footerDom);
                _displayController__WEBPACK_IMPORTED_MODULE_0__.displayController.createMenupage(contentDom, menuContent); 
                break;
                
                case "contact":
                _displayController__WEBPACK_IMPORTED_MODULE_0__.displayController.clearScreen(mainDom);
                _displayController__WEBPACK_IMPORTED_MODULE_0__.displayController.clearScreen(footerDom);
                _displayController__WEBPACK_IMPORTED_MODULE_0__.displayController.createContactPage(contentDom, contactContact); 
                
                break;
                
                default:   
                break;
        }
       
});
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRCxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3R1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vc3JjL3BhcmVudC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3R1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3R1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2JhY2tncm91bmQtOTAucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvc2Vjb25kLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZpcnN0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWNsb25pY2EmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWJlbCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLXByaW1hcnk6ICNjNGZmOWU7XFxyXFxuICAtLXNlY29uZGF5OiAjZDhlNGVhO1xcclxcbiAgLS1wcmltYXJ5Zm9udDogXFxcIkFjbG9uaWNhXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIC0tc2Vjb25kYXJ5Zm9udDogXFxcIkFiZWxcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnlmb250KTtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmdyaWQge1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuaW1ne1xcclxcbiAgd2lkdGg6NzUlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDMvNztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5tZW51LCAuY29udGFjdHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jb250YWN0e1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdENvbnRlbnQgcHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA0NXB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdENvbnRlbnR7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RDb250ZW50IC5pbWd7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxubGVmdDogNTcuMzIlO1xcclxcbnRvcDogNC4xNCU7XFxyXFxuYm90dG9tOiAzNS4yOCU7XFxyXFxud2lkdGg6NDAlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5ib2R5ICB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgXFxyXFxuIFxcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgICB0b3A7XFxyXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7ICBcXHJcXG4gIFxcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXHJcXG4gIGNvbHVtbi1nYXA6IDI1cHg7XFxyXFxuICBtYXJnaW46IDBweCA4MHB4IDI1cHggODBweDtcXHJcXG4gIHJvdy1nYXA6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBncmlkLWNvbHVtbjogMi84O1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnlmb250KTtcXHJcXG4gIGZvbnQtc2l6ZTogOTBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgdGV4dC1zaGFkb3c6ICNjNGZmOWUgMXB4IDBweCAxMHB4O1xcclxcblxcclxcbiBcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubWVudSB7XFxyXFxuICBncmlkLWNvbHVtbjogMi84O1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kaXNoTmFtZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzY3JpcHRpb24ge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubWVudUltZ3tcXHJcXG4gICAgXFxyXFxuICAgIHRleHQtYWxpZ246IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgZ3JpZC1jb2x1bW46IDMvNztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeWZvbnQpO1xcclxcbiAgZm9udC1zaXplOiAzM3B4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDI1cHggMTVweCAyNXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XFxyXFxuICBtYXgtd2lkdGg6IDYyOHB4O1xcclxcbiAgXFxyXFxuXFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDYsIDI0LCA0NCwgMC40KSAwcHggMHB4IDBweCAycHgsXFxyXFxuICAgIHJnYmEoNiwgMjQsIDQ0LCAwLjY1KSAwcHggNHB4IDZweCAtMXB4LFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDBweCAxcHggMHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4ucmV2aWV3ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2NoZWR1bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uc2NoZWR1bGUgaDIge1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5waG90byB7XFxyXFxuICBncmlkLWNvbHVtbjogNy85O1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpcnN0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9jYXRpb24ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9jYXRpb25EZXRhaWwge1xcclxcbiAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnlmb250KTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuLmZvb3RlciAuZ3JpZCB7XFxyXFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWRpdCB7XFxyXFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjcwMHB4KXtcXHJcXG5cXHJcXG4gIGJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBcXHJcXG4gXFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0OyAqL1xcclxcbiAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7ICBcXHJcXG4gICAgXFxyXFxuICAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZ3JpZHtcXHJcXG4gICAgbWFyZ2luOiAwcHggOHB4IDEwcHggOHB4O1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpdGxle1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBncmlkLWNvbHVtbjogMS85O1xcclxcbiAgfVxcclxcbiAgLmNhcmR7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kaXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuIC5mb290ZXJ7XFxyXFxuICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiB9XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6NzAxcHgpYW5kIChtYXgtd2lkdGg6OTAwcHgpe1xcclxcblxcclxcbiAgLmdyaWR7XFxyXFxuICAgIG1hcmdpbjogMHB4IDhweCAxMHB4IDhweDtcXHJcXG4gICAgY29sdW1uLWdhcDogMTZweDtcXHJcXG4gIH0gXFxyXFxuIFxcclxcbiAgLnRpdGxle1xcclxcbiAgICBmb250LXNpemU6IDU1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBncmlkLWNvbHVtbjogMS85O1xcclxcbiAgfVxcclxcbiAgLmNhcmR7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyLzg7XFxyXFxuIFxcclxcblxcclxcbiAgfVxcclxcblxcclxcbiAgLmRpc2NyaXB0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG4gIFxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsbUNBQW1D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OztFQUVBO0lBQ0UsZUFBZTtBQUNuQjs7QUFFQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BY2xvbmljYSZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BYmVsJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tcHJpbWFyeTogI2M0ZmY5ZTtcXHJcXG4gIC0tc2Vjb25kYXk6ICNkOGU0ZWE7XFxyXFxuICAtLXByaW1hcnlmb250OiBcXFwiQWNsb25pY2FcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1zZWNvbmRhcnlmb250OiBcXFwiQWJlbFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeWZvbnQpO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAuZ3JpZCB7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5pbWd7XFxyXFxuICB3aWR0aDo3NSU7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50e1xcclxcbiAgICBncmlkLWNvbHVtbjogMy83O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLm1lbnUsIC5jb250YWN0e1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gLmNvbnRhY3R7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jb250YWN0Q29udGVudCBwe1xcclxcbiAgcGFkZGluZy1ib3R0b206IDQ1cHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jb250YWN0Q29udGVudHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdENvbnRlbnQgLmltZ3tcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5sZWZ0OiA1Ny4zMiU7XFxyXFxudG9wOiA0LjE0JTtcXHJcXG5ib3R0b206IDM1LjI4JTtcXHJcXG53aWR0aDo0MCU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbmJvZHkgIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvYmFja2dyb3VuZC05MC5wbmdcXFwiKTtcXHJcXG4gIFxcclxcbiBcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0ICAgdG9wO1xcclxcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkOyAgXFxyXFxuICBcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XFxyXFxuICBjb2x1bW4tZ2FwOiAyNXB4O1xcclxcbiAgbWFyZ2luOiAwcHggODBweCAyNXB4IDgwcHg7XFxyXFxuICByb3ctZ2FwOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZ3JpZC1jb2x1bW46IDIvODtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5Zm9udCk7XFxyXFxuICBmb250LXNpemU6IDkwcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIHRleHQtc2hhZG93OiAjYzRmZjllIDFweCAwcHggMTBweDtcXHJcXG5cXHJcXG4gXFxyXFxufVxcclxcblxcclxcbm1haW4gLm1lbnUge1xcclxcbiAgZ3JpZC1jb2x1bW46IDIvODtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaE5hbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2NyaXB0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLm1lbnVJbWd7XFxyXFxuICAgIFxcclxcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAzLzc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnlmb250KTtcXHJcXG4gIGZvbnQtc2l6ZTogMzNweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgcGFkZGluZzogMTVweCAyNXB4IDE1cHggMjVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xcclxcbiAgbWF4LXdpZHRoOiA2MjhweDtcXHJcXG4gIFxcclxcblxcclxcbiAgYm94LXNoYWRvdzogcmdiYSg2LCAyNCwgNDQsIDAuNCkgMHB4IDBweCAwcHggMnB4LFxcclxcbiAgICByZ2JhKDYsIDI0LCA0NCwgMC42NSkgMHB4IDRweCA2cHggLTFweCxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLnJldmlld2VyIHtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNjaGVkdWxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnNjaGVkdWxlIGgyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGhvdG8ge1xcclxcbiAgZ3JpZC1jb2x1bW46IDcvOTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5maXJzdCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL3NlY29uZC5wbmdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmQge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9maXJzdC5wbmdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5sb2NhdGlvbiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2NhdGlvbkRldGFpbCB7XFxyXFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeWZvbnQpO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG4uZm9vdGVyIC5ncmlkIHtcXHJcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlZGl0IHtcXHJcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzAwcHgpe1xcclxcblxcclxcbiAgYm9keXtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9iYWNrZ3JvdW5kLTkwLnBuZ1xcXCIpO1xcclxcbiAgXFxyXFxuIFxcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgICAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDsgKi9cXHJcXG4gICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkOyAgXFxyXFxuICAgIFxcclxcbiAgIFxcclxcbiAgfVxcclxcblxcclxcbiAgLmdyaWR7XFxyXFxuICAgIG1hcmdpbjogMHB4IDhweCAxMHB4IDhweDtcXHJcXG4gICAgY29sdW1uLWdhcDogMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aXRsZXtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvOTtcXHJcXG4gIH1cXHJcXG4gIC5jYXJke1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBncmlkLWNvbHVtbjogMS85O1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGlzY3JpcHRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiAuZm9vdGVye1xcclxcbiAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gfVxcclxcbiAgXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOjcwMXB4KWFuZCAobWF4LXdpZHRoOjkwMHB4KXtcXHJcXG5cXHJcXG4gIC5ncmlke1xcclxcbiAgICBtYXJnaW46IDBweCA4cHggMTBweCA4cHg7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDE2cHg7XFxyXFxuICB9IFxcclxcbiBcXHJcXG4gIC50aXRsZXtcXHJcXG4gICAgZm9udC1zaXplOiA1NXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvOTtcXHJcXG4gIH1cXHJcXG4gIC5jYXJke1xcclxcbiAgICBncmlkLWNvbHVtbjogMi84O1xcclxcbiBcXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kaXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuICBcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtjb21tb259IGZyb20gXCIuL3BhcmVudC5qc1wiXHJcbmltcG9ydCBjb29rSW1nIGZyb20gXCIuL2Fzc2V0cy9jaGVmLnBuZ1wiXHJcbmltcG9ydCBtYW5hZ2VySW1nIGZyb20gXCIuL2Fzc2V0cy9tYW5hZ2VyLnBuZ1wiXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIGNvbnRhY3QgZXh0ZW5kcyBjb21tb257XHJcblxyXG4gICAgY29uc3RydWN0b3IoZG9tLGNvbnRlbnQpe1xyXG4gICAgICAgIHN1cGVyKGRvbSk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50PWNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFwcGVuZENvbnRhY3QoKXtcclxuICAgICAgICBjb25zdCBpbWFnZXM9W2Nvb2tJbWcsbWFuYWdlckltZ11cclxuICAgICAgICBmb3IobGV0IHN0YWZmIGluIHRoaXMuY29udGVudC5zdGFmZnMpe1xyXG4gICAgICAgICAgICBjb25zdCBzdGFmZkluZm9EaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgLy8gY29uc3QgcGhvdG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgLy8gcGhvdG8uY2xhc3NMaXN0LmFkZChcImNvbnRhY3RJbWdcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGltZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbkRvbS5hcHBlbmRDaGlsZChzdGFmZkluZm9EaXYpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluc2lkZSBmaXJzdCBsb29wXCIsc3RhZmYpXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN0YWZmSW5mb0Rpdi5pbm5lckhUTUw9YDxwPiR7dGhpcy5jb250ZW50LnN0YWZmc1tzdGFmZl0ubmFtZX08L3A+PHA+JHt0aGlzLmNvbnRlbnQuc3RhZmZzW3N0YWZmXS5wb3NpdGlvbn08L3A+PHA+JHt0aGlzLmNvbnRlbnQuc3RhZmZzW3N0YWZmXS5jb250YWN0fTwvcD48cD4ke3RoaXMuY29udGVudC5zdGFmZnNbc3RhZmZdLmVtYWlsfTwvcD5gXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN0YWZmSW5mb0Rpdi5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcclxuICAgICAgICAgICAgc3RhZmZJbmZvRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0Q29udGVudFwiKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpbWcuc3JjPWltYWdlc1tpXTtcclxuICAgICAgICAgICAgICAgIGltYWdlcy5zcGxpY2UoMCwxKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHBob3RvLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgICAgIHN0YWZmSW5mb0Rpdi5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcblxyXG59IiwiaW1wb3J0IHsgY29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcclxuaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWUuanNcIjtcclxuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuL21lbnUuanNcIjtcclxuaW1wb3J0IHtjb21tb259IGZyb20gXCIuL3BhcmVudC5qc1wiXHJcblxyXG5leHBvcnQgY2xhc3MgZGlzcGxheUNvbnRyb2xsZXIge1xyXG4gICBcclxuICAgIHN0YXRpYyBjcmVhdGVIb21lcGFnZShjb250ZW50RG9tLCBob21lQ29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IGhvbWVwYWdlID0gbmV3IGhvbWUoY29udGVudERvbSwgaG9tZUNvbnRlbnQpO1xyXG4gICAgICAgIGhvbWVwYWdlLmFwcGVuZFRpdGxlKGhvbWVDb250ZW50LnRpdGxlKTtcclxuICAgICAgICBob21lcGFnZS5hcHBlbmRGZWVkYmFjayhob21lcGFnZS5tYWluRG9tKTtcclxuICAgICAgICBob21lcGFnZS5hcHBlbmRTY2hlZHVsZShob21lcGFnZS5tYWluRG9tKTtcclxuICAgICAgICBob21lcGFnZS5hcHBwZW5kTG9jYXRpb24oaG9tZXBhZ2UubWFpbkRvbSk7XHJcbiAgICAgICAgaG9tZXBhZ2UuYXBwZW5kRm9vdGVyKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBjbGVhclNjcmVlbihkb20pIHtcclxuICAgICAgICBjb25zdCBib2R5PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRvbS5yZW1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVIZWFkaW5nKGRvbSl7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gbmV3IGNvbW1vbihkb20pO1xyXG4gICAgICAgIGhlYWRlci5hcHBlbmRIZWFkZXIoKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlTWVudXBhZ2UoY29udGVudERvbSxtZW51Q29udGVudCl7XHJcbiAgICAgICAgY29uc3QgbWVudXBhZ2UgPSBuZXcgbWVudShjb250ZW50RG9tLG1lbnVDb250ZW50KTtcclxuICAgICAgICBtZW51cGFnZS5hcHBlbmRUaXRsZShtZW51Q29udGVudC50aXRsZSk7XHJcbiAgICAgICAgbWVudXBhZ2UuYXBwZW5kTWVudSgpO1xyXG4gICAgICAgIG1lbnVwYWdlLmFwcGVuZEZvb3RlcigpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUNvbnRhY3RQYWdlKGRvbSxjb250ZW50KXtcclxuICAgICAgICBjb25zdCBjb250YWN0UGFnZT0gbmV3IGNvbnRhY3QoZG9tLGNvbnRlbnQpO1xyXG4gICAgICAgIGNvbnRhY3RQYWdlLmFwcGVuZFRpdGxlKGNvbnRlbnQudGl0bGUpXHJcbiAgICAgICAgY29udGFjdFBhZ2UuYXBwZW5kQ29udGFjdCgpO1xyXG4gICAgICAgIGNvbnRhY3RQYWdlLmFwcGVuZEZvb3RlcigpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtjb21tb259IGZyb20gJy4vcGFyZW50LmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBob21lIGV4dGVuZHMgY29tbW9ue1xyXG4gICAgY29uc3RydWN0b3IoZG9tLGNvbnRlbnQpe1xyXG4gICAgICAgIHN1cGVyKGRvbSk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50PWNvbnRlbnQ7XHJcbiAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kRmVlZGJhY2sobWFpbkRvbSl7XHJcbiAgICAgICBjb25zdCByZXZpZXc9IHRoaXMuY29udGVudC5yZXZpZXc7XHJcbiAgICAgICBjb25zdCByZXZpZXdlcj10aGlzLmNvbnRlbnQucmV2aWV3ZXI7XHJcbiAgICAgICBjb25zdCByZXZpZXdEb209IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgcmV2aWV3RG9tLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xyXG4gICAgICAgcmV2aWV3RG9tLmNsYXNzTGlzdC5hZGQoXCJyZXZpZXdcIik7XHJcbiAgICAgICByZXZpZXdEb20uaW5uZXJIVE1MPWA8cD4ke3Jldmlld308L3A+PHAgY2xhc3M9XCJyZXZpZXdlclwiPi0ke3Jldmlld2VyfTwvcD5gO1xyXG4gICAgICAgbWFpbkRvbS5hcHBlbmQocmV2aWV3RG9tKTtcclxuXHJcbiAgICAgICBjb25zdCBwaG90bz0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICBwaG90by5jbGFzc0xpc3QuYWRkKFwicGhvdG9cIik7XHJcbiAgICAgICBwaG90by5jbGFzc0xpc3QuYWRkKFwiZmlyc3RcIik7XHJcbiAgICAgICBcclxuICAgICAgIG1haW5Eb20uYXBwZW5kQ2hpbGQocGhvdG8pO1xyXG4gICAgICAgIHJldHVybiB7cmV2aWV3RG9tLHBob3RvfTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZFNjaGVkdWxlKG1haW5Eb20pe1xyXG4gICAgICAgIGNvbnN0IHNjaGVkdWxlRG9tPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHNjaGVkdWxlRG9tLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xyXG4gICAgICAgIHNjaGVkdWxlRG9tLmNsYXNzTGlzdC5hZGQoXCJzY2hlZHVsZVwiKTtcclxuXHJcbiAgICAgICAgc2NoZWR1bGVEb20uaW5uZXJIVE1MPWA8aDI+JHt0aGlzLmNvbnRlbnQuc2NoZWR1bGUudGl0bGV9PC9oMnA+YDtcclxuICAgICAgICBtYWluRG9tLmFwcGVuZChzY2hlZHVsZURvbSk7XHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gdGhpcy5jb250ZW50LnNjaGVkdWxlLnRpbWUgKXsgLy9mb3IgYnJlYWtpbmcgbGluZSBhZnRlciBlYWNoIGRheVxyXG4gICAgICAgICAgICBjb25zdCBzY2hlZHVsZURldGFpbERvbT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgc2NoZWR1bGVEZXRhaWxEb20uaW5uZXJIVE1MPWA8cD4ke2tleX06JHt0aGlzLmNvbnRlbnQuc2NoZWR1bGUudGltZVtrZXldfTwvcD5gO1xyXG4gICAgICAgICAgICBzY2hlZHVsZURvbS5hcHBlbmQoc2NoZWR1bGVEZXRhaWxEb20pOyAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBob3RvPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgIHBob3RvLmNsYXNzTGlzdC5hZGQoXCJwaG90b1wiKTtcclxuICAgICAgIHBob3RvLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmRcIik7XHJcbiAgICAgICBcclxuICAgICAgIG1haW5Eb20uYXBwZW5kQ2hpbGQocGhvdG8pO1xyXG5cclxuICAgICAgICByZXR1cm4ge3NjaGVkdWxlRG9tLHBob3RvfTtcclxuXHJcbiAgICB9XHJcblxyXG4gICBhcHBwZW5kTG9jYXRpb24obWFpbkRvbSl7XHJcbiAgICAgICBjb25zdCBsb2NhdGlvbkRvbT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgbG9jYXRpb25Eb20uY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcbiAgICAgICBsb2NhdGlvbkRvbS5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb25cIik7XHJcbiAgICAgICBsb2NhdGlvbkRvbS5pbm5lckhUTUw9YDxwPkxvY2F0aW9uPC9wPjxwIGNsYXNzPVwibG9jYXRpb25EZXRhaWxcIj4ke3RoaXMuY29udGVudC5sb2NhdGlvbn1gO1xyXG4gICAgICAgbWFpbkRvbS5hcHBlbmRDaGlsZChsb2NhdGlvbkRvbSk7XHJcbiAgICAgICByZXR1cm4gbG9jYXRpb25Eb207XHJcblxyXG4gICB9XHJcbiAgICBcclxuXHJcblxyXG59IiwiaW1wb3J0IHtjb21tb259IGZyb20gXCIuL3BhcmVudC5qc1wiXHJcbmltcG9ydCBicmVha2Zhc3QgZnJvbSBcIi4vYXNzZXRzL2JyZWFrZmFzdC5wbmdcIlxyXG5pbXBvcnQgbWFpbmNvdXJzZSBmcm9tIFwiLi9hc3NldHMvbWFpbmNvdXJzZS5wbmdcIlxyXG5cclxuZXhwb3J0IGNsYXNzIG1lbnUgZXh0ZW5kcyBjb21tb257XHJcbiAgICBjb25zdHJ1Y3RvciAoZG9tLGNvbnRlbnQpe1xyXG4gICAgICAgIHN1cGVyKGRvbSk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50PWNvbnRlbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZE1lbnUoKXtcclxuICAgICAgICBjb25zdCBpbWFnZXM9W2JyZWFrZmFzdCxtYWluY291cnNlXVxyXG4gICAgICAgIGZvciAobGV0IG1lbnUgaW4gdGhpcy5jb250ZW50Lm1lbnUpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVudURvbSA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgY29uc3QgcGhvdG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgcGhvdG8uY2xhc3NMaXN0LmFkZChcIm1lbnVJbWdcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGltZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGltZz1uZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZGlzaGVzIGluIHRoaXMuY29udGVudC5tZW51W21lbnVdKXtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5Eb20uYXBwZW5kQ2hpbGQobWVudURvbSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXNoZXNEb209ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGRpc2hlc0RvbS5jbGFzc0xpc3QuYWRkKFwiZGlzaFwiKVxyXG4gICAgICAgICAgICAgICAgZGlzaGVzRG9tLmlubmVySFRNTD1gPHAgY2xhc3M9XCJkaXNoTmFtZVwiPiR7dGhpcy5jb250ZW50Lm1lbnVbbWVudV1bZGlzaGVzXS5kaXNoTmFtZX08c3BhbiBjbGFzcz1cInByaWNlXCI+JHt0aGlzLmNvbnRlbnQubWVudVttZW51XVtkaXNoZXNdLnByaWNlfTwvc3Bhbj48cCBjbGFzcz1cImRpc2NyaXB0aW9uXCI+JHt0aGlzLmNvbnRlbnQubWVudVttZW51XVtkaXNoZXNdLmRpc2NyaXB0aW9ufTwvcGA7XHJcbiAgICAgICAgICAgICAgICBtZW51RG9tLmFwcGVuZENoaWxkKGRpc2hlc0RvbSk7XHJcbiAgICAgICAgICAgICAgICBtZW51RG9tLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGltZy5zcmM9aW1hZ2VzW2ldO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VzLnNwbGljZSgwLDEpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGhvdG8uYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICAgICAgbWVudURvbS5hcHBlbmRDaGlsZChwaG90byk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBjbGFzcyBjb21tb257XHJcbiAgICBjb25zdHJ1Y3Rvcihkb20pe1xyXG4gICAgICAgIHRoaXMuZG9tPWRvbTtcclxuICAgICAgICB0aGlzLm1haW5Eb209ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFwcGVuZEhlYWRlcigpe1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XHJcbiAgICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdGV4dCBpbnNpZGUgb3B0aW9uc1xyXG4gICAgICAgIGNvbnN0IGhvbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgbWVudT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBjb250YWN0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcclxuICAgICAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xyXG4gICAgICAgIGhvbWUudGV4dENvbnRlbnQ9XCJIb21lXCI7XHJcbiAgICAgICAgbWVudS50ZXh0Q29udGVudD1cIk1lbnVcIjtcclxuICAgICAgICBjb250YWN0LnRleHRDb250ZW50PVwiY29udGFjdFwiXHJcblxyXG4gICAgICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcIm9wdGlvblwiKTtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwib3B0aW9uXCIpO1xyXG4gICAgICAgXHJcblxyXG4gICAgICAgIC8vYWRkaW5nIGRvbXMgaW5zaWRlIGhlYWRlclxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhvbWUpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXI7ICAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgYXBwZW5kVGl0bGUodGl0bGUpe1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZURvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGl0bGVEb20udGV4dENvbnRlbnQ9IHRpdGxlO1xyXG4gICAgICAgIHRpdGxlRG9tLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aXRsZURvbS5jbGFzc0xpc3QuYWRkKGAke3RpdGxlLnNwbGl0KCcgJylbMF19YC50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICB0aGlzLm1haW5Eb20uY2xhc3NMaXN0LmFkZChcImdyaWRcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuZG9tLmFwcGVuZENoaWxkKHRoaXMubWFpbkRvbSk7XHJcbiAgICAgICAgdGhpcy5tYWluRG9tLmFwcGVuZENoaWxkKHRpdGxlRG9tKTtcclxuICAgICAgICByZXR1cm4gdGl0bGVEb207XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kRm9vdGVyKCl7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvb3Rlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gICAgICAgIGNvbnN0IGZvb3RlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcclxuICAgICAgICBmb290ZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xyXG4gICAgICAgIGZvcihsZXQga2V5IGluIHRoaXMuY29udGVudC5jcmVkaXQpe1xyXG4gICAgICAgICAgICBjb25zdCBjcmVkaXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNyZWRpdC5jbGFzc0xpc3QuYWRkKCdjcmVkaXQnKTtcclxuICAgICAgICAgICAgY3JlZGl0LmlubmVySFRNTD1gPHAgY2xhc3M9PiR7dGhpcy5jb250ZW50LmNyZWRpdFtrZXldfWA7XHJcbiAgICAgICAgICAgIGZvb3RlckNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlZGl0KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGVudCk7XHJcbiAgICAgICAgcmV0dXJuIHtmb290ZXIsZm9vdGVyQ29udGVudH07XHJcblxyXG5cclxuICAgICAgICAvLyBmb3IgZm9vdGVyIGNvbnRlbnRcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kSW1hZ2VzKGltYWdlcyl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuXHJcblxyXG5jb25zdCBob21lQ29udGVudCA9IHtcclxuICAgIHRpdGxlOiBcIlRoZSBGYW1vdXMgT25lJ3MgS2l0Y2hlbiBcIixcclxuICAgIHJldmlldzpcclxuICAgICAgICBcIlRoaXMgcGxhY2UgaXMgZ3JlYXQhIEF0bW9zcGhlcmUgaXMgY2hpbGwgYW5kIGNvb2wgYnV0IHRoZSBzdGFmZiBpcyBhbHNvIHJlYWxseSBmcmllbmRseS4gVGhleSBrbm93IHdoYXQgdGhleeKAmXJlIGRvaW5nIGFuZCB3aGF0IHRoZXnigJlyZSB0YWxraW5nIGFib3V0LCBhbmQgeW91IGNhbiB0ZWxsIG1ha2luZyB0aGUgY3VzdG9tZXJzIGhhcHB5IGlzIHRoZWlyIG1haW4gcHJpb3JpdHkuIEZvb2QgaXMgcHJldHR5IGdvb2QsIHNvbWUgaXRhbGlhbiBjbGFzc2ljcyBhbmQgc29tZSB0d2lzdHMsIGFuZCBmb3IgdGhlaXIgcHJpY2VzIGl04oCZcyAxMDAlIHdvcnRoIGl0LlwiLFxyXG4gICAgcmV2aWV3ZXI6IFwiQmlsbHlcIixcclxuICAgIHNjaGVkdWxlOiB7XHJcbiAgICAgICAgdGl0bGU6IFwiSG91cnNcIixcclxuICAgICAgICB0aW1lOiB7XHJcbiAgICAgICAgICAgIFN1bmRheTogXCI4YW0gLSA4cG1cIixcclxuICAgICAgICAgICAgTW9uZGF5OiBcIjZhbSAtIDZwbVwiLFxyXG4gICAgICAgICAgICBUdWVzZGF5OiBcIjZhbSAtIDZwbVwiLFxyXG4gICAgICAgICAgICBXZWRuZXNkYXk6IFwiNmFtIC0gNnBtXCIsXHJcbiAgICAgICAgICAgIFRodXJzZGF5OiBcIiA2YW0gLSAxMHBtXCIsXHJcbiAgICAgICAgICAgIEZyaWRheTogXCIgNmFtIC0gMTBwbVwiLFxyXG4gICAgICAgICAgICBTYXR1cmRheTogXCI4YW0gLSAxMHBtXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjogXCIxMjMgRm9yZXN0IERyaXZlLCBGb3Jlc3R2aWxsZSwgTWFpbmVcIixcclxuICAgIGNyZWRpdDoge1xyXG4gICAgICAgIGZpcnN0OiBgUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BtaXJhY2xldHdlbnR5b25lP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dCBcInRhcmdldD1cIl9ibGFua1wiPkpvc2VwaCBHb256YWxlejwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3MvcGhvdG9zL3Jlc3RhdXJhbnQ/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VW5zcGxhc2g8L2E+YCxcclxuICAgICAgICBzZWNvbmQ6IGBQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGtvZGVibGFjYz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5GYXZvdXIgT3R1bmppPC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcy9waG90b3MvcmVzdGF1cmFudD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5VbnNwbGFzaDwvYT5gLFxyXG4gICAgICAgIHRoaXJkOiBgUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0B2YXJkYXJpb3VzP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiIHRhcmdldD1cIl9ibGFua1wiPlZvbGthbiBWYXJkYXI8L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9zL3Bob3Rvcy9yZXN0YXVyYW50P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiIHRhcmdldD1cIl9ibGFua1wiPlVuc3BsYXNoPC9hPmAsXHJcbiAgICAgICAgZm91cnRoOiBgQmFja2dyb3VuZCBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGJyb29rZWxhcms/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+QnJvb2tlIExhcms8L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9zL3Bob3Rvcy9yZXN0dXJhbnQtd2hpdGU/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VW5zcGxhc2g8L2E+XHJcbiAgICAgICAgICAgYCxcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCBtZW51Q29udGVudCA9IHtcclxuICAgIHRpdGxlOiBcIk1lbnVcIixcclxuICAgIG1lbnU6IHtcclxuICAgICAgICBmaXJzdE1lbnU6IHtcclxuXHJcbiAgICAgICAgICAgIGZpcnN0RGlzaDoge1xyXG5cclxuICAgICAgICAgICAgICAgIGRpc2hOYW1lOiBcIlR3byBCeSBGaXZlXCIsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogXCIxNC45OVwiLFxyXG4gICAgICAgICAgICAgICAgZGlzY3JpcHRpb246IFwiMiBlZ2dzLCAyIHNhdXNhZ2UgbGlua3MsIDIgc3RyaXBzIG9mIG1hcGxlIGJhY29uLCAyIGJ1dHRlcm1pbGsgcGFuY2FrZXMgYW5kIDIgc2xpY2VzIG9mIHRvYXN0LlwiLFxyXG5cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHNlY29uZERpc2g6IHtcclxuICAgICAgICAgICAgICAgIGRpc2hOYW1lOiBcIkF2b2NhZG8gdG9hc3RcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjEwLjk5XCIsXHJcbiAgICAgICAgICAgICAgICBkaXNjcmlwdGlvbjogXCJTb3VyZG91Z2ggdG9hc3QgdG9wcGVkIHdpdGggc21hc2hlZCBhdm9jYWRvLCB0b21hdG9lcywgbWl4ZWQgZ3JlZW5zIGFuZCBhIHNvZnQgcG9hY2hlZCBlZ2cuXCIsXHJcblxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgdGhpcmREaXNoOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNoTmFtZTogXCJCcmlvY2hlIEJyZWFrZmFzdCBDbHViXCIsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogXCIxMy41OVwiLFxyXG4gICAgICAgICAgICAgICAgZGlzY3JpcHRpb246IFwiRnJpZWQgZWdnLCBkb3VibGUgc2xpY2VzIG9mIENhbmFkaWFuIENoZWRkYXIsIG1hcGxlIGJhY29uLCBsZXR0dWNlLCB0b21hdG8gYW5kIG1heW8gb24gYSBncmlsbGVkIGJyaW9jaGUgYnVuLiBTZXJ2ZWQgd2l0aCBzaHJlZGRlZCBoYXNoYnJvd25zLlwiLFxyXG5cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2Vjb25kTWVudToge1xyXG4gICAgICAgICAgICBmaXJzdERpc2g6IHtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNoTmFtZTogXCJCZWVyLUJhdHRlcmVkIEZpc2ggJiBDaGlwc1wiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiMTYuNTlcIixcclxuICAgICAgICAgICAgICAgIGRpc2NyaXB0aW9uOiBcIjIgcGllY2VzIG9mIGhhbmQtYmF0dGVyZWQgT2NlYW4gV2lzZSBjb2QgZmlsbGV0cywgZnJlc2hseSBkaXBwZWQgaW4gb3VyIGhvdXNlbWFkZSBiZWVyIGJhdHRlciBhbmQgc2VydmVkIHdpdGggdGFydGFyIHNhdWNlLCBjb2xlc2xhdyBhbmQgZnJlc2ggY3V0IGhvbWVzdHlsZSBmcmllcy5cIixcclxuXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBzZWNvbmREaXNoOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNoTmFtZTogXCJTb3V0aGVybi1TdHlsZSBDaGlja2VuIFRlbmRlcnMgXCIsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogXCIxNy41OVwiLFxyXG5cclxuICAgICAgICAgICAgICAgIGRpc2NyaXB0aW9uOiBcIjYgcGllY2VzIG9mIHByZW1pdW0gY2hpY2tlbiB0ZW5kZXJsb2luLCBoYW5kLWJhdHRlcmVkIGluIG91ciBzZWNyZXQgc291dGhlcm4tc3R5bGUgcmVjaXBlLiBTZXJ2ZWQgd2l0aCB5b3VyIGNob2ljZSBvZiBkaXBwaW5nIHNhdWNlLCBjb2xlc2xhdyBhbmQgZnJlc2ggY3V0IGhvbWVzdHlsZSBmcmllcy5cIixcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHRoaXJkRGlzaDoge1xyXG4gICAgICAgICAgICAgICAgZGlzaE5hbWU6IFwiVGhlIEFtYXppbmcgR2luZ2VyIEJvd2xcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjE3Ljk5XCIsXHJcbiAgICAgICAgICAgICAgICBkaXNjcmlwdGlvbjogXCJIYW5kLWJyZWFkZWQgY2hpY2tlbiB0ZW5kZXJzLCB0b3NzZWQgaW4gY2l0cnVzIGdpbmdlciBzYXVjZSwgd2l0aCBjYXJyb3RzIGFuZCBvbmlvbnMgb24gY2hlZuKAmXMgcmljZSB0b3BwZWQgd2l0aCBzZXNhbWUgc2VlZHMgYW5kIGdyZWVuIG9uaW9ucy4gU2VydmVkIHdpdGggbmFhbiBicmVhZFwiLFxyXG5cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgY3JlZGl0OiB7XHJcbiAgICAgICAgZmlyc3Q6IFwiTWVudSBmcm9tIDxhIGhyZWY9J2h0dHBzOi8vcmlja3lzcmVzdGF1cmFudHMuY2EvbWVudXMvP2xvY2F0aW9uX2lkPTU1OCcgdGFyZ2V0PV9ibGFuaz5SaWtleSdzIFJlc3R1cmFudDwvYT5cIixcclxuICAgIH1cclxuXHJcblxyXG59O1xyXG5cclxuY29uc3QgY29udGFjdENvbnRhY3Q9e1xyXG4gICAgdGl0bGU6XCJDb250YWN0XCIsXHJcbiAgICBzdGFmZnM6e1xyXG4gICAgICAgIHN0YWZmTm8xOntcclxuICAgICAgICAgICAgbmFtZTpcIkhhcnJ5XCIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOlwiQ29va1wiLFxyXG4gICAgICAgICAgICBjb250YWN0OlwiNTU1LTU1NS01NTU0XCIsXHJcbiAgICAgICAgICAgIGVtYWlsOlwidG90YWxseVJlYWxFbWFpbEBub3RGYWtlLmNvbVwiLFxyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzdGFmZk5vMjp7XHJcbiAgICAgICAgICAgIG5hbWU6XCJOaWNrXCIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOlwiTWFuYWdlclwiLFxyXG4gICAgICAgICAgICBjb250YWN0OlwiNTU1LTU1NS01NTU0XCIsXHJcbiAgICAgICAgICAgIGVtYWlsOlwidG90YWxseVJlYWxFbWFpbEBub3RGYWtlLmNvbVwiLFxyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcbiAgICBjcmVkaXQ6e1xyXG4gICAgICAgIGZpcnN0OlwiTWFkZSBieSBEaXdhc2ggTmVtYmFuZ1wiLFxyXG4gICAgfSxcclxufVxyXG5cclxuXHJcbmNvbnN0IGNvbnRlbnREb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbmRpc3BsYXlDb250cm9sbGVyLmNyZWF0ZUhlYWRpbmcoY29udGVudERvbSk7XHJcbmRpc3BsYXlDb250cm9sbGVyLmNyZWF0ZUhvbWVwYWdlKGNvbnRlbnREb20saG9tZUNvbnRlbnQpO1xyXG5jb25zdCBoZWFkZXJEb209QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wdGlvblwiKSk7XHJcbmhlYWRlckRvbS5mb3JFYWNoKGhlYWRlcj0+e1xyXG4gICAgY29uc3QgY2hvb3Nlbj1oZWFkZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuc3BsaXQoJyAnKVswXTsgICAgXHJcbiAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgICAgICBjb25zdCBtYWluRG9tPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gICAgICAgIGNvbnN0IGZvb3RlckRvbT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNob29zZW4pXHJcbiAgICAgICAgc3dpdGNoIChjaG9vc2VuKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJob21lXCI6XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNsZWFyU2NyZWVuKG1haW5Eb20pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuY2xlYXJTY3JlZW4oZm9vdGVyRG9tKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNyZWF0ZUhvbWVwYWdlKGNvbnRlbnREb20saG9tZUNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm1lbnVcIjpcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNsZWFyU2NyZWVuKG1haW5Eb20pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuY2xlYXJTY3JlZW4oZm9vdGVyRG9tKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNyZWF0ZU1lbnVwYWdlKGNvbnRlbnREb20sIG1lbnVDb250ZW50KTsgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNvbnRhY3RcIjpcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNsZWFyU2NyZWVuKG1haW5Eb20pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuY2xlYXJTY3JlZW4oZm9vdGVyRG9tKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNyZWF0ZUNvbnRhY3RQYWdlKGNvbnRlbnREb20sIGNvbnRhY3RDb250YWN0KTsgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbn0pO1xyXG59KVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9