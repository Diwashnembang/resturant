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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --primary: #c4ff9e;\r\n  --seconday: #d8e4ea;\r\n  --primaryfont: \"Aclonica\", sans-serif;\r\n  --secondaryfont: \"Abel\", sans-serif;\r\n}\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.header {\r\n  background: var(--primary);\r\n  height: 70px;\r\n  font-family: var(--primaryfont);\r\n  font-size: 30px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.header .grid {\r\n  justify-items: center;\r\n  align-items: center;\r\n  height: 100%;\r\n\r\n\r\n}\r\n\r\nimg{\r\n  width:75%;\r\n}\r\n\r\n.content{\r\n    grid-column: 3/7;\r\n    display: flex;\r\n    text-align: center;\r\n}\r\n\r\n.menu, .contact{\r\n    /* padding-left: 2%; */\r\n    /* text-align: center; */\r\n    margin-left: 4%;\r\n}\r\n\r\nmain .contact{\r\n  text-align: center;\r\n\r\n}\r\n\r\n.contactContent p{\r\n  padding-bottom: 45px;\r\n\r\n}\r\n\r\n.contactContent{\r\n  position: relative;\r\n  overflow-wrap: break-word;\r\n \r\n\r\n}\r\n\r\n.contactContent .img{\r\n  position: absolute;\r\nleft: 57.32%;\r\ntop: 4.14%;\r\nbottom: 35.28%;\r\nwidth:40%;\r\nmax-height: 250px;\r\n\r\n}\r\n\r\n\r\nbody  {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  \r\n \r\n  background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: right   top;\r\n    background-attachment: fixed;  \r\n  \r\n\r\n\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(8, 1fr);\r\n  column-gap: 25px;\r\n  margin: 0px 80px 25px 80px;\r\n  row-gap: 25px;\r\n}\r\n\r\n.title {\r\n  grid-column: 2/8;\r\n  font-family: var(--primaryfont);\r\n  font-size: 90px;\r\n  padding-top: 10px;\r\n  text-shadow: #c4ff9e 1px 0px 10px;\r\n\r\n \r\n}\r\n\r\nmain .menu {\r\n  grid-column: 2/8;\r\n  justify-self: center;\r\n}\r\n\r\n.dishName {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.discription {\r\n  font-size: 25px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.menuImg{\r\n    \r\n    text-align: end;\r\n}\r\n\r\n.card {\r\n  grid-column: 3/7;\r\n  background-color: var(--primary);\r\n  font-family: var(--secondaryfont);\r\n  font-size: 33px;\r\n  border-radius: 10px;\r\n\r\n  text-align: left;\r\n  padding: 15px 25px 15px 25px;\r\n  line-height: 38px;\r\n  max-width: 628px;\r\n  \r\n\r\n  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,\r\n    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\r\n    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n}\r\n\r\n.reviewer {\r\n  text-align: right;\r\n  padding-right: 15px;\r\n}\r\n\r\n.schedule {\r\n  text-align: center;\r\n}\r\n.schedule h2 {\r\n  font-weight: normal;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.photo {\r\n  grid-column: 7/9;\r\n  border-radius: 3px;\r\n  max-width: 500px;\r\n}\r\n\r\n.first {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-size: contain;\r\n  background-position: center;\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.second {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-size: contain;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.location {\r\n  text-align: center;\r\n}\r\n\r\n.locationDetail {\r\n  margin-top: 40px;\r\n}\r\n\r\n.footer {\r\n  width: 100%;\r\n  background: var(--primary);\r\n  height: 70px;\r\n  font-family: var(--primaryfont);\r\n  font-size: 15px;\r\n}\r\n.footer .grid {\r\n  margin-top: 25px;\r\n  margin-bottom: 0px;\r\n  justify-items: center;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n.credit {\r\n  grid-column: span 2;\r\n}\r\n\r\n\r\n@media screen and (max-width:700px){\r\n\r\n  body{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  \r\n \r\n    background-repeat: no-repeat;\r\n      background-size: cover;\r\n      /* background-position: left; */\r\n      background-attachment: fixed;  \r\n    \r\n   \r\n  }\r\n\r\n  .grid{\r\n    margin: 0px 8px 10px 8px;\r\n    column-gap: 16px;\r\n  }\r\n\r\n  .title{\r\n    font-size: 50px;\r\n    text-align: start;\r\n    grid-column: 1/9;\r\n  }\r\n  .card{\r\n    width:100%;\r\n    grid-column: 1/9;\r\n    font-size: 28px;\r\n  }\r\n\r\n  .discription {\r\n    font-size: 20px;\r\n}\r\n\r\n .footer{\r\n   font-size: 10px;\r\n }\r\n  \r\n}\r\n\r\n@media (min-width:701px)and (max-width:900px){\r\n\r\n  .grid{\r\n    margin: 0px 8px 10px 8px;\r\n    column-gap: 16px;\r\n  } \r\n \r\n  .title{\r\n    font-size: 55px;\r\n    text-align: start;\r\n    grid-column: 1/9;\r\n  }\r\n  .card{\r\n    grid-column: 2/8;\r\n \r\n\r\n  }\r\n\r\n  .discription {\r\n    font-size: 20px;\r\n}\r\n  \r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,qCAAqC;EACrC,mCAAmC;AACrC;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,0BAA0B;EAC1B,YAAY;EACZ,+BAA+B;EAC/B,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;;;AAGd;;AAEA;EACE,SAAS;AACX;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,eAAe;AACnB;;AAEA;EACE,kBAAkB;;AAEpB;;AAEA;EACE,oBAAoB;;AAEtB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;;;AAG3B;;AAEA;EACE,kBAAkB;AACpB,YAAY;AACZ,UAAU;AACV,cAAc;AACd,SAAS;AACT,iBAAiB;;AAEjB;;;AAGA;EACE,mDAA6C;;;EAG7C,4BAA4B;IAC1B,sBAAsB;IACtB,gCAAgC;IAChC,4BAA4B;;;;AAIhC;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,gBAAgB;EAChB,0BAA0B;EAC1B,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,+BAA+B;EAC/B,eAAe;EACf,iBAAiB;EACjB,iCAAiC;;;AAGnC;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;AACjB;;;;;;AAMA;;IAEI,eAAe;AACnB;;AAEA;EACE,gBAAgB;EAChB,gCAAgC;EAChC,iCAAiC;EACjC,eAAe;EACf,mBAAmB;;EAEnB,gBAAgB;EAChB,4BAA4B;EAC5B,iBAAiB;EACjB,gBAAgB;;;EAGhB;;+CAE6C;AAC/C;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,mDAAsC;EACtC,wBAAwB;EACxB,2BAA2B;EAC3B,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE,mDAAqC;EACrC,wBAAwB;EACxB,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,0BAA0B;EAC1B,YAAY;EACZ,+BAA+B;EAC/B,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;;AAGA;;EAEE;IACE,mDAA6C;;;IAG7C,4BAA4B;MAC1B,sBAAsB;MACtB,+BAA+B;MAC/B,4BAA4B;;;EAGhC;;EAEA;IACE,wBAAwB;IACxB,gBAAgB;EAClB;;EAEA;IACE,eAAe;IACf,iBAAiB;IACjB,gBAAgB;EAClB;EACA;IACE,UAAU;IACV,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,eAAe;AACnB;;CAEC;GACE,eAAe;CACjB;;AAED;;AAEA;;EAEE;IACE,wBAAwB;IACxB,gBAAgB;EAClB;;EAEA;IACE,eAAe;IACf,iBAAiB;IACjB,gBAAgB;EAClB;EACA;IACE,gBAAgB;;;EAGlB;;EAEA;IACE,eAAe;AACnB;;AAEA","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Aclonica&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Abel&display=swap\");\r\n\r\n:root {\r\n  --primary: #c4ff9e;\r\n  --seconday: #d8e4ea;\r\n  --primaryfont: \"Aclonica\", sans-serif;\r\n  --secondaryfont: \"Abel\", sans-serif;\r\n}\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.header {\r\n  background: var(--primary);\r\n  height: 70px;\r\n  font-family: var(--primaryfont);\r\n  font-size: 30px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.header .grid {\r\n  justify-items: center;\r\n  align-items: center;\r\n  height: 100%;\r\n\r\n\r\n}\r\n\r\nimg{\r\n  width:75%;\r\n}\r\n\r\n.content{\r\n    grid-column: 3/7;\r\n    display: flex;\r\n    text-align: center;\r\n}\r\n\r\n.menu, .contact{\r\n    /* padding-left: 2%; */\r\n    /* text-align: center; */\r\n    margin-left: 4%;\r\n}\r\n\r\nmain .contact{\r\n  text-align: center;\r\n\r\n}\r\n\r\n.contactContent p{\r\n  padding-bottom: 45px;\r\n\r\n}\r\n\r\n.contactContent{\r\n  position: relative;\r\n  overflow-wrap: break-word;\r\n \r\n\r\n}\r\n\r\n.contactContent .img{\r\n  position: absolute;\r\nleft: 57.32%;\r\ntop: 4.14%;\r\nbottom: 35.28%;\r\nwidth:40%;\r\nmax-height: 250px;\r\n\r\n}\r\n\r\n\r\nbody  {\r\n  background: url(\"./assets/background-90.png\");\r\n  \r\n \r\n  background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: right   top;\r\n    background-attachment: fixed;  \r\n  \r\n\r\n\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(8, 1fr);\r\n  column-gap: 25px;\r\n  margin: 0px 80px 25px 80px;\r\n  row-gap: 25px;\r\n}\r\n\r\n.title {\r\n  grid-column: 2/8;\r\n  font-family: var(--primaryfont);\r\n  font-size: 90px;\r\n  padding-top: 10px;\r\n  text-shadow: #c4ff9e 1px 0px 10px;\r\n\r\n \r\n}\r\n\r\nmain .menu {\r\n  grid-column: 2/8;\r\n  justify-self: center;\r\n}\r\n\r\n.dishName {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.discription {\r\n  font-size: 25px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.menuImg{\r\n    \r\n    text-align: end;\r\n}\r\n\r\n.card {\r\n  grid-column: 3/7;\r\n  background-color: var(--primary);\r\n  font-family: var(--secondaryfont);\r\n  font-size: 33px;\r\n  border-radius: 10px;\r\n\r\n  text-align: left;\r\n  padding: 15px 25px 15px 25px;\r\n  line-height: 38px;\r\n  max-width: 628px;\r\n  \r\n\r\n  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,\r\n    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\r\n    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n}\r\n\r\n.reviewer {\r\n  text-align: right;\r\n  padding-right: 15px;\r\n}\r\n\r\n.schedule {\r\n  text-align: center;\r\n}\r\n.schedule h2 {\r\n  font-weight: normal;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.photo {\r\n  grid-column: 7/9;\r\n  border-radius: 3px;\r\n  max-width: 500px;\r\n}\r\n\r\n.first {\r\n  background: url(\"./assets/second.png\");\r\n  background-size: contain;\r\n  background-position: center;\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.second {\r\n  background: url(\"./assets/first.png\");\r\n  background-size: contain;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.location {\r\n  text-align: center;\r\n}\r\n\r\n.locationDetail {\r\n  margin-top: 40px;\r\n}\r\n\r\n.footer {\r\n  width: 100%;\r\n  background: var(--primary);\r\n  height: 70px;\r\n  font-family: var(--primaryfont);\r\n  font-size: 15px;\r\n}\r\n.footer .grid {\r\n  margin-top: 25px;\r\n  margin-bottom: 0px;\r\n  justify-items: center;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n.credit {\r\n  grid-column: span 2;\r\n}\r\n\r\n\r\n@media screen and (max-width:700px){\r\n\r\n  body{\r\n    background: url(\"./assets/background-90.png\");\r\n  \r\n \r\n    background-repeat: no-repeat;\r\n      background-size: cover;\r\n      /* background-position: left; */\r\n      background-attachment: fixed;  \r\n    \r\n   \r\n  }\r\n\r\n  .grid{\r\n    margin: 0px 8px 10px 8px;\r\n    column-gap: 16px;\r\n  }\r\n\r\n  .title{\r\n    font-size: 50px;\r\n    text-align: start;\r\n    grid-column: 1/9;\r\n  }\r\n  .card{\r\n    width:100%;\r\n    grid-column: 1/9;\r\n    font-size: 28px;\r\n  }\r\n\r\n  .discription {\r\n    font-size: 20px;\r\n}\r\n\r\n .footer{\r\n   font-size: 10px;\r\n }\r\n  \r\n}\r\n\r\n@media (min-width:701px)and (max-width:900px){\r\n\r\n  .grid{\r\n    margin: 0px 8px 10px 8px;\r\n    column-gap: 16px;\r\n  } \r\n \r\n  .title{\r\n    font-size: 55px;\r\n    text-align: start;\r\n    grid-column: 1/9;\r\n  }\r\n  .card{\r\n    grid-column: 2/8;\r\n \r\n\r\n  }\r\n\r\n  .discription {\r\n    font-size: 20px;\r\n}\r\n  \r\n}"],"sourceRoot":""}]);
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

                dishName: "Beer-Battered Fish And Chips",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCLG1GQUFtQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3R1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vc3JjL3BhcmVudC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3R1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3R1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2JhY2tncm91bmQtOTAucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvc2Vjb25kLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZpcnN0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWNsb25pY2EmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWJlbCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLXByaW1hcnk6ICNjNGZmOWU7XFxyXFxuICAtLXNlY29uZGF5OiAjZDhlNGVhO1xcclxcbiAgLS1wcmltYXJ5Zm9udDogXFxcIkFjbG9uaWNhXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIC0tc2Vjb25kYXJ5Zm9udDogXFxcIkFiZWxcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnlmb250KTtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmdyaWQge1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuaW1ne1xcclxcbiAgd2lkdGg6NzUlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDMvNztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSwgLmNvbnRhY3R7XFxyXFxuICAgIC8qIHBhZGRpbmctbGVmdDogMiU7ICovXFxyXFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC5jb250YWN0e1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdENvbnRlbnQgcHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA0NXB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdENvbnRlbnR7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbiBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RDb250ZW50IC5pbWd7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxubGVmdDogNTcuMzIlO1xcclxcbnRvcDogNC4xNCU7XFxyXFxuYm90dG9tOiAzNS4yOCU7XFxyXFxud2lkdGg6NDAlO1xcclxcbm1heC1oZWlnaHQ6IDI1MHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5ib2R5ICB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgXFxyXFxuIFxcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgICB0b3A7XFxyXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7ICBcXHJcXG4gIFxcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXHJcXG4gIGNvbHVtbi1nYXA6IDI1cHg7XFxyXFxuICBtYXJnaW46IDBweCA4MHB4IDI1cHggODBweDtcXHJcXG4gIHJvdy1nYXA6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBncmlkLWNvbHVtbjogMi84O1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnlmb250KTtcXHJcXG4gIGZvbnQtc2l6ZTogOTBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgdGV4dC1zaGFkb3c6ICNjNGZmOWUgMXB4IDBweCAxMHB4O1xcclxcblxcclxcbiBcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubWVudSB7XFxyXFxuICBncmlkLWNvbHVtbjogMi84O1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kaXNoTmFtZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzY3JpcHRpb24ge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubWVudUltZ3tcXHJcXG4gICAgXFxyXFxuICAgIHRleHQtYWxpZ246IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgZ3JpZC1jb2x1bW46IDMvNztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeWZvbnQpO1xcclxcbiAgZm9udC1zaXplOiAzM3B4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDI1cHggMTVweCAyNXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XFxyXFxuICBtYXgtd2lkdGg6IDYyOHB4O1xcclxcbiAgXFxyXFxuXFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDYsIDI0LCA0NCwgMC40KSAwcHggMHB4IDBweCAycHgsXFxyXFxuICAgIHJnYmEoNiwgMjQsIDQ0LCAwLjY1KSAwcHggNHB4IDZweCAtMXB4LFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDBweCAxcHggMHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4ucmV2aWV3ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2NoZWR1bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uc2NoZWR1bGUgaDIge1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5waG90byB7XFxyXFxuICBncmlkLWNvbHVtbjogNy85O1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpcnN0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9jYXRpb24ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9jYXRpb25EZXRhaWwge1xcclxcbiAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnlmb250KTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuLmZvb3RlciAuZ3JpZCB7XFxyXFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWRpdCB7XFxyXFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjcwMHB4KXtcXHJcXG5cXHJcXG4gIGJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBcXHJcXG4gXFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0OyAqL1xcclxcbiAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7ICBcXHJcXG4gICAgXFxyXFxuICAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZ3JpZHtcXHJcXG4gICAgbWFyZ2luOiAwcHggOHB4IDEwcHggOHB4O1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpdGxle1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBncmlkLWNvbHVtbjogMS85O1xcclxcbiAgfVxcclxcbiAgLmNhcmR7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kaXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuIC5mb290ZXJ7XFxyXFxuICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiB9XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6NzAxcHgpYW5kIChtYXgtd2lkdGg6OTAwcHgpe1xcclxcblxcclxcbiAgLmdyaWR7XFxyXFxuICAgIG1hcmdpbjogMHB4IDhweCAxMHB4IDhweDtcXHJcXG4gICAgY29sdW1uLWdhcDogMTZweDtcXHJcXG4gIH0gXFxyXFxuIFxcclxcbiAgLnRpdGxle1xcclxcbiAgICBmb250LXNpemU6IDU1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBncmlkLWNvbHVtbjogMS85O1xcclxcbiAgfVxcclxcbiAgLmNhcmR7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyLzg7XFxyXFxuIFxcclxcblxcclxcbiAgfVxcclxcblxcclxcbiAgLmRpc2NyaXB0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG4gIFxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTs7O0FBR2Q7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxvQkFBb0I7O0FBRXRCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5Qjs7O0FBRzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCLFlBQVk7QUFDWixVQUFVO0FBQ1YsY0FBYztBQUNkLFNBQVM7QUFDVCxpQkFBaUI7O0FBRWpCOzs7QUFHQTtFQUNFLG1EQUE2Qzs7O0VBRzdDLDRCQUE0QjtJQUMxQixzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLDRCQUE0Qjs7OztBQUloQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUNBQWlDOzs7QUFHbkM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7Ozs7OztBQU1BOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsbUJBQW1COztFQUVuQixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixnQkFBZ0I7OztFQUdoQjs7K0NBRTZDO0FBQy9DOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbURBQXNDO0VBQ3RDLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1EQUFxQztFQUNyQyx3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7QUFHQTs7RUFFRTtJQUNFLG1EQUE2Qzs7O0lBRzdDLDRCQUE0QjtNQUMxQixzQkFBc0I7TUFDdEIsK0JBQStCO01BQy9CLDRCQUE0Qjs7O0VBR2hDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0FBQ25COztDQUVDO0dBQ0UsZUFBZTtDQUNqQjs7QUFFRDs7QUFFQTs7RUFFRTtJQUNFLHdCQUF3QjtJQUN4QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZ0JBQWdCOzs7RUFHbEI7O0VBRUE7SUFDRSxlQUFlO0FBQ25COztBQUVBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFjbG9uaWNhJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFiZWwmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1wcmltYXJ5OiAjYzRmZjllO1xcclxcbiAgLS1zZWNvbmRheTogI2Q4ZTRlYTtcXHJcXG4gIC0tcHJpbWFyeWZvbnQ6IFxcXCJBY2xvbmljYVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAtLXNlY29uZGFyeWZvbnQ6IFxcXCJBYmVsXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5Zm9udCk7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5ncmlkIHtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcbmltZ3tcXHJcXG4gIHdpZHRoOjc1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnR7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAzLzc7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUsIC5jb250YWN0e1xcclxcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDIlOyAqL1xcclxcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAuY29udGFjdHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RDb250ZW50IHB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNDVweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RDb250ZW50e1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG4gXFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jb250YWN0Q29udGVudCAuaW1ne1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbmxlZnQ6IDU3LjMyJTtcXHJcXG50b3A6IDQuMTQlO1xcclxcbmJvdHRvbTogMzUuMjglO1xcclxcbndpZHRoOjQwJTtcXHJcXG5tYXgtaGVpZ2h0OiAyNTBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYm9keSAge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9iYWNrZ3JvdW5kLTkwLnBuZ1xcXCIpO1xcclxcbiAgXFxyXFxuIFxcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgICB0b3A7XFxyXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7ICBcXHJcXG4gIFxcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXHJcXG4gIGNvbHVtbi1nYXA6IDI1cHg7XFxyXFxuICBtYXJnaW46IDBweCA4MHB4IDI1cHggODBweDtcXHJcXG4gIHJvdy1nYXA6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBncmlkLWNvbHVtbjogMi84O1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnlmb250KTtcXHJcXG4gIGZvbnQtc2l6ZTogOTBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgdGV4dC1zaGFkb3c6ICNjNGZmOWUgMXB4IDBweCAxMHB4O1xcclxcblxcclxcbiBcXHJcXG59XFxyXFxuXFxyXFxubWFpbiAubWVudSB7XFxyXFxuICBncmlkLWNvbHVtbjogMi84O1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kaXNoTmFtZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzY3JpcHRpb24ge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubWVudUltZ3tcXHJcXG4gICAgXFxyXFxuICAgIHRleHQtYWxpZ246IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgZ3JpZC1jb2x1bW46IDMvNztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeWZvbnQpO1xcclxcbiAgZm9udC1zaXplOiAzM3B4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDI1cHggMTVweCAyNXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XFxyXFxuICBtYXgtd2lkdGg6IDYyOHB4O1xcclxcbiAgXFxyXFxuXFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDYsIDI0LCA0NCwgMC40KSAwcHggMHB4IDBweCAycHgsXFxyXFxuICAgIHJnYmEoNiwgMjQsIDQ0LCAwLjY1KSAwcHggNHB4IDZweCAtMXB4LFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDBweCAxcHggMHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4ucmV2aWV3ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2NoZWR1bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uc2NoZWR1bGUgaDIge1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5waG90byB7XFxyXFxuICBncmlkLWNvbHVtbjogNy85O1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpcnN0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvc2Vjb25kLnBuZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL2ZpcnN0LnBuZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uRGV0YWlsIHtcXHJcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5Zm9udCk7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcbi5mb290ZXIgLmdyaWQge1xcclxcbiAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jcmVkaXQge1xcclxcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3MDBweCl7XFxyXFxuXFxyXFxuICBib2R5e1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL2JhY2tncm91bmQtOTAucG5nXFxcIik7XFxyXFxuICBcXHJcXG4gXFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0OyAqL1xcclxcbiAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7ICBcXHJcXG4gICAgXFxyXFxuICAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZ3JpZHtcXHJcXG4gICAgbWFyZ2luOiAwcHggOHB4IDEwcHggOHB4O1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpdGxle1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBncmlkLWNvbHVtbjogMS85O1xcclxcbiAgfVxcclxcbiAgLmNhcmR7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kaXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuIC5mb290ZXJ7XFxyXFxuICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiB9XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6NzAxcHgpYW5kIChtYXgtd2lkdGg6OTAwcHgpe1xcclxcblxcclxcbiAgLmdyaWR7XFxyXFxuICAgIG1hcmdpbjogMHB4IDhweCAxMHB4IDhweDtcXHJcXG4gICAgY29sdW1uLWdhcDogMTZweDtcXHJcXG4gIH0gXFxyXFxuIFxcclxcbiAgLnRpdGxle1xcclxcbiAgICBmb250LXNpemU6IDU1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBncmlkLWNvbHVtbjogMS85O1xcclxcbiAgfVxcclxcbiAgLmNhcmR7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyLzg7XFxyXFxuIFxcclxcblxcclxcbiAgfVxcclxcblxcclxcbiAgLmRpc2NyaXB0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG4gIFxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2NvbW1vbn0gZnJvbSBcIi4vcGFyZW50LmpzXCJcclxuaW1wb3J0IGNvb2tJbWcgZnJvbSBcIi4vYXNzZXRzL2NoZWYucG5nXCJcclxuaW1wb3J0IG1hbmFnZXJJbWcgZnJvbSBcIi4vYXNzZXRzL21hbmFnZXIucG5nXCJcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgY29udGFjdCBleHRlbmRzIGNvbW1vbntcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihkb20sY29udGVudCl7XHJcbiAgICAgICAgc3VwZXIoZG9tKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQ9Y29udGVudDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYXBwZW5kQ29udGFjdCgpe1xyXG4gICAgICAgIGNvbnN0IGltYWdlcz1bY29va0ltZyxtYW5hZ2VySW1nXVxyXG4gICAgICAgIGZvcihsZXQgc3RhZmYgaW4gdGhpcy5jb250ZW50LnN0YWZmcyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YWZmSW5mb0Rpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAvLyBjb25zdCBwaG90bz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAvLyBwaG90by5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEltZ1wiKTtcclxuICAgICAgICAgICAgY29uc3QgaW1nPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcImltZ1wiKTtcclxuICAgICAgICAgICAgdGhpcy5tYWluRG9tLmFwcGVuZENoaWxkKHN0YWZmSW5mb0Rpdik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIGZpcnN0IGxvb3BcIixzdGFmZilcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgc3RhZmZJbmZvRGl2LmlubmVySFRNTD1gPHA+JHt0aGlzLmNvbnRlbnQuc3RhZmZzW3N0YWZmXS5uYW1lfTwvcD48cD4ke3RoaXMuY29udGVudC5zdGFmZnNbc3RhZmZdLnBvc2l0aW9ufTwvcD48cD4ke3RoaXMuY29udGVudC5zdGFmZnNbc3RhZmZdLmNvbnRhY3R9PC9wPjxwPiR7dGhpcy5jb250ZW50LnN0YWZmc1tzdGFmZl0uZW1haWx9PC9wPmBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3RhZmZJbmZvRGl2LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xyXG4gICAgICAgICAgICBzdGFmZkluZm9EaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RDb250ZW50XCIpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGltZy5zcmM9aW1hZ2VzW2ldO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VzLnNwbGljZSgwLDEpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcGhvdG8uYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICAgICAgc3RhZmZJbmZvRGl2LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuXHJcbn0iLCJpbXBvcnQgeyBjb250YWN0IH0gZnJvbSBcIi4vY29udGFjdC5qc1wiO1xyXG5pbXBvcnQgeyBob21lIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xyXG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiO1xyXG5pbXBvcnQge2NvbW1vbn0gZnJvbSBcIi4vcGFyZW50LmpzXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBkaXNwbGF5Q29udHJvbGxlciB7XHJcbiAgIFxyXG4gICAgc3RhdGljIGNyZWF0ZUhvbWVwYWdlKGNvbnRlbnREb20sIGhvbWVDb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgaG9tZXBhZ2UgPSBuZXcgaG9tZShjb250ZW50RG9tLCBob21lQ29udGVudCk7XHJcbiAgICAgICAgaG9tZXBhZ2UuYXBwZW5kVGl0bGUoaG9tZUNvbnRlbnQudGl0bGUpO1xyXG4gICAgICAgIGhvbWVwYWdlLmFwcGVuZEZlZWRiYWNrKGhvbWVwYWdlLm1haW5Eb20pO1xyXG4gICAgICAgIGhvbWVwYWdlLmFwcGVuZFNjaGVkdWxlKGhvbWVwYWdlLm1haW5Eb20pO1xyXG4gICAgICAgIGhvbWVwYWdlLmFwcHBlbmRMb2NhdGlvbihob21lcGFnZS5tYWluRG9tKTtcclxuICAgICAgICBob21lcGFnZS5hcHBlbmRGb290ZXIoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGNsZWFyU2NyZWVuKGRvbSkge1xyXG4gICAgICAgIGNvbnN0IGJvZHk9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9tLnJlbW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUhlYWRpbmcoZG9tKXtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBuZXcgY29tbW9uKGRvbSk7XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZEhlYWRlcigpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVNZW51cGFnZShjb250ZW50RG9tLG1lbnVDb250ZW50KXtcclxuICAgICAgICBjb25zdCBtZW51cGFnZSA9IG5ldyBtZW51KGNvbnRlbnREb20sbWVudUNvbnRlbnQpO1xyXG4gICAgICAgIG1lbnVwYWdlLmFwcGVuZFRpdGxlKG1lbnVDb250ZW50LnRpdGxlKTtcclxuICAgICAgICBtZW51cGFnZS5hcHBlbmRNZW51KCk7XHJcbiAgICAgICAgbWVudXBhZ2UuYXBwZW5kRm9vdGVyKClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlQ29udGFjdFBhZ2UoZG9tLGNvbnRlbnQpe1xyXG4gICAgICAgIGNvbnN0IGNvbnRhY3RQYWdlPSBuZXcgY29udGFjdChkb20sY29udGVudCk7XHJcbiAgICAgICAgY29udGFjdFBhZ2UuYXBwZW5kVGl0bGUoY29udGVudC50aXRsZSlcclxuICAgICAgICBjb250YWN0UGFnZS5hcHBlbmRDb250YWN0KCk7XHJcbiAgICAgICAgY29udGFjdFBhZ2UuYXBwZW5kRm9vdGVyKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2NvbW1vbn0gZnJvbSAnLi9wYXJlbnQuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIGhvbWUgZXh0ZW5kcyBjb21tb257XHJcbiAgICBjb25zdHJ1Y3Rvcihkb20sY29udGVudCl7XHJcbiAgICAgICAgc3VwZXIoZG9tKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQ9Y29udGVudDtcclxuICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRGZWVkYmFjayhtYWluRG9tKXtcclxuICAgICAgIGNvbnN0IHJldmlldz0gdGhpcy5jb250ZW50LnJldmlldztcclxuICAgICAgIGNvbnN0IHJldmlld2VyPXRoaXMuY29udGVudC5yZXZpZXdlcjtcclxuICAgICAgIGNvbnN0IHJldmlld0RvbT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICByZXZpZXdEb20uY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcbiAgICAgICByZXZpZXdEb20uY2xhc3NMaXN0LmFkZChcInJldmlld1wiKTtcclxuICAgICAgIHJldmlld0RvbS5pbm5lckhUTUw9YDxwPiR7cmV2aWV3fTwvcD48cCBjbGFzcz1cInJldmlld2VyXCI+LSR7cmV2aWV3ZXJ9PC9wPmA7XHJcbiAgICAgICBtYWluRG9tLmFwcGVuZChyZXZpZXdEb20pO1xyXG5cclxuICAgICAgIGNvbnN0IHBob3RvPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgIHBob3RvLmNsYXNzTGlzdC5hZGQoXCJwaG90b1wiKTtcclxuICAgICAgIHBob3RvLmNsYXNzTGlzdC5hZGQoXCJmaXJzdFwiKTtcclxuICAgICAgIFxyXG4gICAgICAgbWFpbkRvbS5hcHBlbmRDaGlsZChwaG90byk7XHJcbiAgICAgICAgcmV0dXJuIHtyZXZpZXdEb20scGhvdG99O1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kU2NoZWR1bGUobWFpbkRvbSl7XHJcbiAgICAgICAgY29uc3Qgc2NoZWR1bGVEb209IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgc2NoZWR1bGVEb20uY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcbiAgICAgICAgc2NoZWR1bGVEb20uY2xhc3NMaXN0LmFkZChcInNjaGVkdWxlXCIpO1xyXG5cclxuICAgICAgICBzY2hlZHVsZURvbS5pbm5lckhUTUw9YDxoMj4ke3RoaXMuY29udGVudC5zY2hlZHVsZS50aXRsZX08L2gycD5gO1xyXG4gICAgICAgIG1haW5Eb20uYXBwZW5kKHNjaGVkdWxlRG9tKTtcclxuICAgICAgICBmb3IobGV0IGtleSBpbiB0aGlzLmNvbnRlbnQuc2NoZWR1bGUudGltZSApeyAvL2ZvciBicmVha2luZyBsaW5lIGFmdGVyIGVhY2ggZGF5XHJcbiAgICAgICAgICAgIGNvbnN0IHNjaGVkdWxlRGV0YWlsRG9tPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBzY2hlZHVsZURldGFpbERvbS5pbm5lckhUTUw9YDxwPiR7a2V5fToke3RoaXMuY29udGVudC5zY2hlZHVsZS50aW1lW2tleV19PC9wPmA7XHJcbiAgICAgICAgICAgIHNjaGVkdWxlRG9tLmFwcGVuZChzY2hlZHVsZURldGFpbERvbSk7ICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGhvdG89IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgcGhvdG8uY2xhc3NMaXN0LmFkZChcInBob3RvXCIpO1xyXG4gICAgICAgcGhvdG8uY2xhc3NMaXN0LmFkZChcInNlY29uZFwiKTtcclxuICAgICAgIFxyXG4gICAgICAgbWFpbkRvbS5hcHBlbmRDaGlsZChwaG90byk7XHJcblxyXG4gICAgICAgIHJldHVybiB7c2NoZWR1bGVEb20scGhvdG99O1xyXG5cclxuICAgIH1cclxuXHJcbiAgIGFwcHBlbmRMb2NhdGlvbihtYWluRG9tKXtcclxuICAgICAgIGNvbnN0IGxvY2F0aW9uRG9tPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICBsb2NhdGlvbkRvbS5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcclxuICAgICAgIGxvY2F0aW9uRG9tLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblwiKTtcclxuICAgICAgIGxvY2F0aW9uRG9tLmlubmVySFRNTD1gPHA+TG9jYXRpb248L3A+PHAgY2xhc3M9XCJsb2NhdGlvbkRldGFpbFwiPiR7dGhpcy5jb250ZW50LmxvY2F0aW9ufWA7XHJcbiAgICAgICBtYWluRG9tLmFwcGVuZENoaWxkKGxvY2F0aW9uRG9tKTtcclxuICAgICAgIHJldHVybiBsb2NhdGlvbkRvbTtcclxuXHJcbiAgIH1cclxuICAgIFxyXG5cclxuXHJcbn0iLCJpbXBvcnQge2NvbW1vbn0gZnJvbSBcIi4vcGFyZW50LmpzXCJcclxuaW1wb3J0IGJyZWFrZmFzdCBmcm9tIFwiLi9hc3NldHMvYnJlYWtmYXN0LnBuZ1wiXHJcbmltcG9ydCBtYWluY291cnNlIGZyb20gXCIuL2Fzc2V0cy9tYWluY291cnNlLnBuZ1wiXHJcblxyXG5leHBvcnQgY2xhc3MgbWVudSBleHRlbmRzIGNvbW1vbntcclxuICAgIGNvbnN0cnVjdG9yIChkb20sY29udGVudCl7XHJcbiAgICAgICAgc3VwZXIoZG9tKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQ9Y29udGVudDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kTWVudSgpe1xyXG4gICAgICAgIGNvbnN0IGltYWdlcz1bYnJlYWtmYXN0LG1haW5jb3Vyc2VdXHJcbiAgICAgICAgZm9yIChsZXQgbWVudSBpbiB0aGlzLmNvbnRlbnQubWVudSkge1xyXG4gICAgICAgICAgICBjb25zdCBtZW51RG9tID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBwaG90bz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBwaG90by5jbGFzc0xpc3QuYWRkKFwibWVudUltZ1wiKTtcclxuICAgICAgICAgICAgY29uc3QgaW1nPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcImltZ1wiKTtcclxuICAgICAgICAgICAgLy8gY29uc3QgaW1nPW5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBkaXNoZXMgaW4gdGhpcy5jb250ZW50Lm1lbnVbbWVudV0pe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkRvbS5hcHBlbmRDaGlsZChtZW51RG9tKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc2hlc0RvbT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgZGlzaGVzRG9tLmNsYXNzTGlzdC5hZGQoXCJkaXNoXCIpXHJcbiAgICAgICAgICAgICAgICBkaXNoZXNEb20uaW5uZXJIVE1MPWA8cCBjbGFzcz1cImRpc2hOYW1lXCI+JHt0aGlzLmNvbnRlbnQubWVudVttZW51XVtkaXNoZXNdLmRpc2hOYW1lfTxzcGFuIGNsYXNzPVwicHJpY2VcIj4ke3RoaXMuY29udGVudC5tZW51W21lbnVdW2Rpc2hlc10ucHJpY2V9PC9zcGFuPjxwIGNsYXNzPVwiZGlzY3JpcHRpb25cIj4ke3RoaXMuY29udGVudC5tZW51W21lbnVdW2Rpc2hlc10uZGlzY3JpcHRpb259PC9wYDtcclxuICAgICAgICAgICAgICAgIG1lbnVEb20uYXBwZW5kQ2hpbGQoZGlzaGVzRG9tKTtcclxuICAgICAgICAgICAgICAgIG1lbnVEb20uY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaW1nLnNyYz1pbWFnZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpbWFnZXMuc3BsaWNlKDAsMSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwaG90by5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgICAgICBtZW51RG9tLmFwcGVuZENoaWxkKHBob3RvKTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGNsYXNzIGNvbW1vbntcclxuICAgIGNvbnN0cnVjdG9yKGRvbSl7XHJcbiAgICAgICAgdGhpcy5kb209ZG9tO1xyXG4gICAgICAgIHRoaXMubWFpbkRvbT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXBwZW5kSGVhZGVyKCl7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuICAgICAgICB0aGlzLmRvbS5hcHBlbmRDaGlsZChoZWFkZXIpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy90ZXh0IGluc2lkZSBvcHRpb25zXHJcbiAgICAgICAgY29uc3QgaG9tZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBtZW51PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhY3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG4gICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XHJcbiAgICAgICAgaG9tZS50ZXh0Q29udGVudD1cIkhvbWVcIjtcclxuICAgICAgICBtZW51LnRleHRDb250ZW50PVwiTWVudVwiO1xyXG4gICAgICAgIGNvbnRhY3QudGV4dENvbnRlbnQ9XCJjb250YWN0XCJcclxuXHJcbiAgICAgICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwib3B0aW9uXCIpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm9wdGlvblwiKTtcclxuICAgICAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJvcHRpb25cIik7XHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgLy9hZGRpbmcgZG9tcyBpbnNpZGUgaGVhZGVyXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcjsgICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBhcHBlbmRUaXRsZSh0aXRsZSl7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpdGxlRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aXRsZURvbS50ZXh0Q29udGVudD0gdGl0bGU7XHJcbiAgICAgICAgdGl0bGVEb20uY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRpdGxlRG9tLmNsYXNzTGlzdC5hZGQoYCR7dGl0bGUuc3BsaXQoJyAnKVswXX1gLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIHRoaXMubWFpbkRvbS5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQodGhpcy5tYWluRG9tKTtcclxuICAgICAgICB0aGlzLm1haW5Eb20uYXBwZW5kQ2hpbGQodGl0bGVEb20pO1xyXG4gICAgICAgIHJldHVybiB0aXRsZURvbTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRGb290ZXIoKXtcclxuXHJcbiAgICAgICAgY29uc3QgZm9vdGVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgICAgICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xyXG4gICAgICAgIGZvb3RlckNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImdyaWRcIik7XHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gdGhpcy5jb250ZW50LmNyZWRpdCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWRpdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY3JlZGl0LmNsYXNzTGlzdC5hZGQoJ2NyZWRpdCcpO1xyXG4gICAgICAgICAgICBjcmVkaXQuaW5uZXJIVE1MPWA8cCBjbGFzcz0+JHt0aGlzLmNvbnRlbnQuY3JlZGl0W2tleV19YDtcclxuICAgICAgICAgICAgZm9vdGVyQ29udGVudC5hcHBlbmRDaGlsZChjcmVkaXQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRvbS5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJDb250ZW50KTtcclxuICAgICAgICByZXR1cm4ge2Zvb3Rlcixmb290ZXJDb250ZW50fTtcclxuXHJcblxyXG4gICAgICAgIC8vIGZvciBmb290ZXIgY29udGVudFxyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRJbWFnZXMoaW1hZ2VzKXtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgeyBkaXNwbGF5Q29udHJvbGxlciB9IGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyXCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IGhvbWVDb250ZW50ID0ge1xyXG4gICAgdGl0bGU6IFwiVGhlIEZhbW91cyBPbmUncyBLaXRjaGVuIFwiLFxyXG4gICAgcmV2aWV3OlxyXG4gICAgICAgIFwiVGhpcyBwbGFjZSBpcyBncmVhdCEgQXRtb3NwaGVyZSBpcyBjaGlsbCBhbmQgY29vbCBidXQgdGhlIHN0YWZmIGlzIGFsc28gcmVhbGx5IGZyaWVuZGx5LiBUaGV5IGtub3cgd2hhdCB0aGV54oCZcmUgZG9pbmcgYW5kIHdoYXQgdGhleeKAmXJlIHRhbGtpbmcgYWJvdXQsIGFuZCB5b3UgY2FuIHRlbGwgbWFraW5nIHRoZSBjdXN0b21lcnMgaGFwcHkgaXMgdGhlaXIgbWFpbiBwcmlvcml0eS4gRm9vZCBpcyBwcmV0dHkgZ29vZCwgc29tZSBpdGFsaWFuIGNsYXNzaWNzIGFuZCBzb21lIHR3aXN0cywgYW5kIGZvciB0aGVpciBwcmljZXMgaXTigJlzIDEwMCUgd29ydGggaXQuXCIsXHJcbiAgICByZXZpZXdlcjogXCJCaWxseVwiLFxyXG4gICAgc2NoZWR1bGU6IHtcclxuICAgICAgICB0aXRsZTogXCJIb3Vyc1wiLFxyXG4gICAgICAgIHRpbWU6IHtcclxuICAgICAgICAgICAgU3VuZGF5OiBcIjhhbSAtIDhwbVwiLFxyXG4gICAgICAgICAgICBNb25kYXk6IFwiNmFtIC0gNnBtXCIsXHJcbiAgICAgICAgICAgIFR1ZXNkYXk6IFwiNmFtIC0gNnBtXCIsXHJcbiAgICAgICAgICAgIFdlZG5lc2RheTogXCI2YW0gLSA2cG1cIixcclxuICAgICAgICAgICAgVGh1cnNkYXk6IFwiIDZhbSAtIDEwcG1cIixcclxuICAgICAgICAgICAgRnJpZGF5OiBcIiA2YW0gLSAxMHBtXCIsXHJcbiAgICAgICAgICAgIFNhdHVyZGF5OiBcIjhhbSAtIDEwcG1cIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGxvY2F0aW9uOiBcIjEyMyBGb3Jlc3QgRHJpdmUsIEZvcmVzdHZpbGxlLCBNYWluZVwiLFxyXG4gICAgY3JlZGl0OiB7XHJcbiAgICAgICAgZmlyc3Q6IGBQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQG1pcmFjbGV0d2VudHlvbmU/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0IFwidGFyZ2V0PVwiX2JsYW5rXCI+Sm9zZXBoIEdvbnphbGV6PC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcy9waG90b3MvcmVzdGF1cmFudD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5VbnNwbGFzaDwvYT5gLFxyXG4gICAgICAgIHNlY29uZDogYFBob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9Aa29kZWJsYWNjP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiIHRhcmdldD1cIl9ibGFua1wiPkZhdm91ciBPdHVuamk8L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9zL3Bob3Rvcy9yZXN0YXVyYW50P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiIHRhcmdldD1cIl9ibGFua1wiPlVuc3BsYXNoPC9hPmAsXHJcbiAgICAgICAgdGhpcmQ6IGBQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHZhcmRhcmlvdXM/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+Vm9sa2FuIFZhcmRhcjwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3MvcGhvdG9zL3Jlc3RhdXJhbnQ/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VW5zcGxhc2g8L2E+YCxcclxuICAgICAgICBmb3VydGg6IGBCYWNrZ3JvdW5kIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AYnJvb2tlbGFyaz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5Ccm9va2UgTGFyazwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3MvcGhvdG9zL3Jlc3R1cmFudC13aGl0ZT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5VbnNwbGFzaDwvYT5cclxuICAgICAgICAgICBgLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IG1lbnVDb250ZW50ID0ge1xyXG4gICAgdGl0bGU6IFwiTWVudVwiLFxyXG4gICAgbWVudToge1xyXG4gICAgICAgIGZpcnN0TWVudToge1xyXG5cclxuICAgICAgICAgICAgZmlyc3REaXNoOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgZGlzaE5hbWU6IFwiVHdvIEJ5IEZpdmVcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjE0Ljk5XCIsXHJcbiAgICAgICAgICAgICAgICBkaXNjcmlwdGlvbjogXCIyIGVnZ3MsIDIgc2F1c2FnZSBsaW5rcywgMiBzdHJpcHMgb2YgbWFwbGUgYmFjb24sIDIgYnV0dGVybWlsayBwYW5jYWtlcyBhbmQgMiBzbGljZXMgb2YgdG9hc3QuXCIsXHJcblxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgc2Vjb25kRGlzaDoge1xyXG4gICAgICAgICAgICAgICAgZGlzaE5hbWU6IFwiQXZvY2FkbyB0b2FzdFwiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiMTAuOTlcIixcclxuICAgICAgICAgICAgICAgIGRpc2NyaXB0aW9uOiBcIlNvdXJkb3VnaCB0b2FzdCB0b3BwZWQgd2l0aCBzbWFzaGVkIGF2b2NhZG8sIHRvbWF0b2VzLCBtaXhlZCBncmVlbnMgYW5kIGEgc29mdCBwb2FjaGVkIGVnZy5cIixcclxuXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB0aGlyZERpc2g6IHtcclxuICAgICAgICAgICAgICAgIGRpc2hOYW1lOiBcIkJyaW9jaGUgQnJlYWtmYXN0IENsdWJcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjEzLjU5XCIsXHJcbiAgICAgICAgICAgICAgICBkaXNjcmlwdGlvbjogXCJGcmllZCBlZ2csIGRvdWJsZSBzbGljZXMgb2YgQ2FuYWRpYW4gQ2hlZGRhciwgbWFwbGUgYmFjb24sIGxldHR1Y2UsIHRvbWF0byBhbmQgbWF5byBvbiBhIGdyaWxsZWQgYnJpb2NoZSBidW4uIFNlcnZlZCB3aXRoIHNocmVkZGVkIGhhc2hicm93bnMuXCIsXHJcblxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZWNvbmRNZW51OiB7XHJcbiAgICAgICAgICAgIGZpcnN0RGlzaDoge1xyXG5cclxuICAgICAgICAgICAgICAgIGRpc2hOYW1lOiBcIkJlZXItQmF0dGVyZWQgRmlzaCBBbmQgQ2hpcHNcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiBcIjE2LjU5XCIsXHJcbiAgICAgICAgICAgICAgICBkaXNjcmlwdGlvbjogXCIyIHBpZWNlcyBvZiBoYW5kLWJhdHRlcmVkIE9jZWFuIFdpc2UgY29kIGZpbGxldHMsIGZyZXNobHkgZGlwcGVkIGluIG91ciBob3VzZW1hZGUgYmVlciBiYXR0ZXIgYW5kIHNlcnZlZCB3aXRoIHRhcnRhciBzYXVjZSwgY29sZXNsYXcgYW5kIGZyZXNoIGN1dCBob21lc3R5bGUgZnJpZXMuXCIsXHJcblxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgc2Vjb25kRGlzaDoge1xyXG4gICAgICAgICAgICAgICAgZGlzaE5hbWU6IFwiU291dGhlcm4tU3R5bGUgQ2hpY2tlbiBUZW5kZXJzIFwiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiMTcuNTlcIixcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNjcmlwdGlvbjogXCI2IHBpZWNlcyBvZiBwcmVtaXVtIGNoaWNrZW4gdGVuZGVybG9pbiwgaGFuZC1iYXR0ZXJlZCBpbiBvdXIgc2VjcmV0IHNvdXRoZXJuLXN0eWxlIHJlY2lwZS4gU2VydmVkIHdpdGggeW91ciBjaG9pY2Ugb2YgZGlwcGluZyBzYXVjZSwgY29sZXNsYXcgYW5kIGZyZXNoIGN1dCBob21lc3R5bGUgZnJpZXMuXCIsXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB0aGlyZERpc2g6IHtcclxuICAgICAgICAgICAgICAgIGRpc2hOYW1lOiBcIlRoZSBBbWF6aW5nIEdpbmdlciBCb3dsXCIsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogXCIxNy45OVwiLFxyXG4gICAgICAgICAgICAgICAgZGlzY3JpcHRpb246IFwiSGFuZC1icmVhZGVkIGNoaWNrZW4gdGVuZGVycywgdG9zc2VkIGluIGNpdHJ1cyBnaW5nZXIgc2F1Y2UsIHdpdGggY2Fycm90cyBhbmQgb25pb25zIG9uIGNoZWbigJlzIHJpY2UgdG9wcGVkIHdpdGggc2VzYW1lIHNlZWRzIGFuZCBncmVlbiBvbmlvbnMuIFNlcnZlZCB3aXRoIG5hYW4gYnJlYWRcIixcclxuXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWRpdDoge1xyXG4gICAgICAgIGZpcnN0OiBcIk1lbnUgZnJvbSA8YSBocmVmPSdodHRwczovL3JpY2t5c3Jlc3RhdXJhbnRzLmNhL21lbnVzLz9sb2NhdGlvbl9pZD01NTgnIHRhcmdldD1fYmxhbms+UmlrZXkncyBSZXN0dXJhbnQ8L2E+XCIsXHJcbiAgICB9XHJcblxyXG5cclxufTtcclxuXHJcbmNvbnN0IGNvbnRhY3RDb250YWN0PXtcclxuICAgIHRpdGxlOlwiQ29udGFjdFwiLFxyXG4gICAgc3RhZmZzOntcclxuICAgICAgICBzdGFmZk5vMTp7XHJcbiAgICAgICAgICAgIG5hbWU6XCJIYXJyeVwiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjpcIkNvb2tcIixcclxuICAgICAgICAgICAgY29udGFjdDpcIjU1NS01NTUtNTU1NFwiLFxyXG4gICAgICAgICAgICBlbWFpbDpcInRvdGFsbHlSZWFsRW1haWxAbm90RmFrZS5jb21cIixcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc3RhZmZObzI6e1xyXG4gICAgICAgICAgICBuYW1lOlwiTmlja1wiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjpcIk1hbmFnZXJcIixcclxuICAgICAgICAgICAgY29udGFjdDpcIjU1NS01NTUtNTU1NFwiLFxyXG4gICAgICAgICAgICBlbWFpbDpcInRvdGFsbHlSZWFsRW1haWxAbm90RmFrZS5jb21cIixcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICB9LFxyXG4gICAgY3JlZGl0OntcclxuICAgICAgICBmaXJzdDpcIk1hZGUgYnkgRGl3YXNoIE5lbWJhbmdcIixcclxuICAgIH0sXHJcbn1cclxuXHJcblxyXG5jb25zdCBjb250ZW50RG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5kaXNwbGF5Q29udHJvbGxlci5jcmVhdGVIZWFkaW5nKGNvbnRlbnREb20pO1xyXG5kaXNwbGF5Q29udHJvbGxlci5jcmVhdGVIb21lcGFnZShjb250ZW50RG9tLGhvbWVDb250ZW50KTtcclxuY29uc3QgaGVhZGVyRG9tPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcHRpb25cIikpO1xyXG5oZWFkZXJEb20uZm9yRWFjaChoZWFkZXI9PntcclxuICAgIGNvbnN0IGNob29zZW49aGVhZGVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLnNwbGl0KCcgJylbMF07ICAgIFxyXG4gICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICAgICAgY29uc3QgbWFpbkRvbT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICAgICAgICBjb25zdCBmb290ZXJEb209ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjaG9vc2VuKVxyXG4gICAgICAgIHN3aXRjaCAoY2hvb3Nlbikge1xyXG4gICAgICAgICAgICBjYXNlIFwiaG9tZVwiOlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5jbGVhclNjcmVlbihtYWluRG9tKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNsZWFyU2NyZWVuKGZvb3RlckRvbSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5jcmVhdGVIb21lcGFnZShjb250ZW50RG9tLGhvbWVDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJtZW51XCI6XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5jbGVhclNjcmVlbihtYWluRG9tKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNsZWFyU2NyZWVuKGZvb3RlckRvbSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5jcmVhdGVNZW51cGFnZShjb250ZW50RG9tLCBtZW51Q29udGVudCk7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjb250YWN0XCI6XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5jbGVhclNjcmVlbihtYWluRG9tKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNsZWFyU2NyZWVuKGZvb3RlckRvbSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5jcmVhdGVDb250YWN0UGFnZShjb250ZW50RG9tLCBjb250YWN0Q29udGFjdCk7IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG59KTtcclxufSlcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==