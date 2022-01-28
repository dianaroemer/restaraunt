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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/montserrat/Montserrat-VariableFont_wght.ttf */ "./src/assets/fonts/montserrat/Montserrat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/montserrat/Montserrat-Italic-VariableFont_wght.ttf */ "./src/assets/fonts/montserrat/Montserrat-Italic-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Montserrat';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n    \n    font-weight: 400;\n    font-style: normal;\n}\n\n#content-container {\n    font-family: 'Montserrat';\n    display:flex;\n    justify-content: center;\n\n}\n\n.hamburger-menu-container {\n    position: relative;\n    \n    /* background-color: pink; */\n    height: 180;\n    width: 60px;\n    /* border-radius: 7px; */\n    /* border-style: solid; */\n    /* border-width: 1px; */\n    /* border-color: rgb(92, 72, 72); */\n    \n    \n    left: 22%;\n    top: 70px;\n    z-index: 3;\n}\n\n.hamburger-image {\n    \n    /* position: relative; */\n    box-shadow: -1px 2px 7px rgb(92, 72, 72);\n    background-color: pink;\n    width: 60px;\n    border-style:solid;\n    border-radius: 5px;\n    border-width: 1px;\n}\n\n.hamburger-image:hover {\n    transform: scale(1.1);\n    transition-duration: 120ms;\n}\n\n.hamburger-image.selected {\n    background-color: rgb(182, 98, 98);\n    transition-duration: 120ms;\n}\n/* \n#home-image.selected {\n    background-color: rgb(182, 98, 98)\n}\n\n#menu-image.selected {\n    background-color: rgb(182, 98, 98)\n}\n\n#contact-image.selected {\n    background-color: rgb(182, 98, 98)\n} */\n\n\n\n\n\n\n\n#content {\n    background-color: pink;\n    box-shadow: 0px 5px 15px rgb(92, 72, 72);\n    border-radius: 20px;\n    padding: 3% 7% 3% 7%;\n    margin: 50px calc(20% + 60px) 0 20%;\n    min-width: 700px;\n    display:flex;\n}\n\n\n\n\n.name-container {\n    justify-content: center;\n    height: 200px;\n    background-color: rgb(182, 98, 98);\n    box-shadow: 0px 4px 15px rgb(92, 72, 72);\n    border-radius: 20px;\n    border: 2px solid rgb(92, 72, 72);\n}\n\n.name-content {\n    font-size: 75px;\n}\n\n.ladle-image-right {\n    position:relative;\n    left: 330px;\n    bottom:140px;\n    width: 100px;\n    transform: rotate(0deg);\n}\n\n.ladle-image-left {\n    position:relative;\n    right: 330px;\n    bottom:140px;\n    width: 100px;\n    transform: scaleX(-1);\n}\n\n#box {\n    display: flex;\n    flex-direction: column;\n}\n\n.generic-container {\n    /* text-align: center; */\n    /* justify-self: center; */\n    align-self: center;\n    background-color:rgb(218, 140, 140);\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n    width: 60%;\n}\n\n.review-container {\n    display: flex;\n    width: 100%;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    \n}\n\n.review-content {\n    display:flex;\n    width: 100%;\n    background-color: rgb(218, 140, 140);\n    align-self: center;\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n    box-shadow: 0px 0px 10px rgb(92, 72, 72);\n    padding: 7px;\n}\n\n.customer-image {\n    border-radius: 5px;\n    box-shadow: 0px 0px 10px rgb(92, 72, 72);\n    border: 2px solid rgb(92, 72, 72);\n    height: fit-content;\n}\n\n.customer-name {\n    align-self: flex-end;\n}\n\n#review-content-1 {\n    /* justify-self: flex-start; */\n    text-align: left;\n    display: flex;\n    flex-direction: column;\n}\n\n#review-content-2 {\n    text-align: left;\n    padding-left: 17px;\n    display: flex;\n    flex-direction: column;\n}\n\n#review-content-3 {\n    text-align: left;\n    display: flex;\n    flex-direction: column;\n}\n\n#customer-image-1 { \n    width: 25%;\n } \n\n#customer-image-2 {\n    width: 30%;\n}\n\n#customer-image-3 {\n    width: 25%;\n}\n\n.hours-container {\n    display: flex;\n    justify-content: center;\n\n\n}\n\n.hours-content {\n    background-color:rgb(218, 140, 140);\n    padding: 0 20 20 20;\n    box-shadow: 0px 0px 10px rgb(92, 72, 72);\n    border: 2px solid rgb(92, 72, 72);\n    border-radius: 5px;\n}\n\n\n/* MENU STYLING ------------------------------------------------------------- */\n\n#menu-container {\n    width: 100%;\n}\n\n.header-signs-content {\n    display:flex;\n    justify-content: space-around;\n    flex: 1;\n}\n\n.header-sign {\n    text-align: center;\n    padding: 10px;\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n    background-color:rgb(218, 140, 140);\n    box-shadow: 0px 0px 10px rgb(92, 72, 72);\n\n}\n\n#header-sign-1 {\n    display: flex;\n    justify-self: flex-end;\n    text-align: center;\n    flex-direction: column;\n    align-self: center;\n    padding-bottom: 17px;\n    /* background-color: grey; */\n}\n\n#header-sign-refuse {\n    color:red;\n    font-weight: 700;\n}\n\n#header-sign-anyone {\n    font-weight: 700;\n}\n\n#header-sign-know {\n    font-weight: 700;\n}\n\n.menu-title-container {\n    display: flex;\n    justify-content: center;\n    padding: 15 0 40 0;\n}\n\n.menu-title-content {\n    font-weight:700;\n    font-size: 50px;\n}\n\n\n/* Menu Content ------------------------------------------------------------- */\n\n.menu-content {\n    width: 100%;\n    /* display: flex; */\n}\n\n.menu-list-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.menu-list-left {\n    display:flex;\n    flex-direction: column;\n    width: 200px;\n}\n\n.menu-list-content {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    background-color: rgb(218, 140, 140);\n    padding: 15px;\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n    height: 450px;\n}\n\n.menu-list-right {\n    display: flex;\n    flex-direction: column;\n    width: 200px;\n}\n\n\n.soup-image {\n    width: 200px;\n    box-shadow: 0px 0px 10px rgb(92, 72, 72);\n    /* border: 2px solid rgb(92, 72, 72); */\n\n}\n\n\n#soup-mulligatawny {\n    /* width: 200px; */\n    border-radius: 5px 5px 0 0;\n}\n\n#soup-black-bean {\n    /* width: 200px; */\n}\n\n#soup-tomato-rice {\n    transform: scaleX(-1);\n    height: 200px;\n    object-fit: cover;\n    object-position: 100% 80%;\n}\n\n#soup-jambalaya {\n    border-radius: 5px 5px 0 0;\n    width: 200px;\n    height: 160px;\n    object-fit: cover;\n    object-position: 100% 70%;\n}\n\n#soup-french-onion {\n    height: 180px;\n    object-fit: cover;\n}\n\n#soup-clam-bisque {\n    height: 250px;\n    object-fit: cover;\n    border-radius: 0 0 5px 5px;\n}\n\n\n/* Contact Styling ------------------------------------------------------- */\n\n.contact-container {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.contact-content {\n    text-align: center;\n    padding-top: 12px;\n    padding-bottom: 5px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Montserrat';\n    src: url('./assets/fonts/montserrat/Montserrat-VariableFont_wght.ttf') format('truetype'),\n    url('./assets/fonts/montserrat/Montserrat-Italic-VariableFont_wght.ttf') format('truetype');\n    \n    font-weight: 400;\n    font-style: normal;\n}\n\n#content-container {\n    font-family: 'Montserrat';\n    display:flex;\n    justify-content: center;\n\n}\n\n.hamburger-menu-container {\n    position: relative;\n    \n    /* background-color: pink; */\n    height: 180;\n    width: 60px;\n    /* border-radius: 7px; */\n    /* border-style: solid; */\n    /* border-width: 1px; */\n    /* border-color: rgb(92, 72, 72); */\n    \n    \n    left: 22%;\n    top: 70px;\n    z-index: 3;\n}\n\n.hamburger-image {\n    \n    /* position: relative; */\n    box-shadow: -1px 2px 7px rgb(92, 72, 72);\n    background-color: pink;\n    width: 60px;\n    border-style:solid;\n    border-radius: 5px;\n    border-width: 1px;\n}\n\n.hamburger-image:hover {\n    transform: scale(1.1);\n    transition-duration: 120ms;\n}\n\n.hamburger-image.selected {\n    background-color: rgb(182, 98, 98);\n    transition-duration: 120ms;\n}\n/* \n#home-image.selected {\n    background-color: rgb(182, 98, 98)\n}\n\n#menu-image.selected {\n    background-color: rgb(182, 98, 98)\n}\n\n#contact-image.selected {\n    background-color: rgb(182, 98, 98)\n} */\n\n\n\n\n\n\n\n#content {\n    background-color: pink;\n    box-shadow: 0px 5px 15px rgb(92, 72, 72);\n    border-radius: 20px;\n    padding: 3% 7% 3% 7%;\n    margin: 50px calc(20% + 60px) 0 20%;\n    min-width: 700px;\n    display:flex;\n}\n\n\n\n\n.name-container {\n    justify-content: center;\n    height: 200px;\n    background-color: rgb(182, 98, 98);\n    box-shadow: 0px 4px 15px rgb(92, 72, 72);\n    border-radius: 20px;\n    border: 2px solid rgb(92, 72, 72);\n}\n\n.name-content {\n    font-size: 75px;\n}\n\n.ladle-image-right {\n    position:relative;\n    left: 330px;\n    bottom:140px;\n    width: 100px;\n    transform: rotate(0deg);\n}\n\n.ladle-image-left {\n    position:relative;\n    right: 330px;\n    bottom:140px;\n    width: 100px;\n    transform: scaleX(-1);\n}\n\n#box {\n    display: flex;\n    flex-direction: column;\n}\n\n.generic-container {\n    /* text-align: center; */\n    /* justify-self: center; */\n    align-self: center;\n    background-color:rgb(218, 140, 140);\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n    width: 60%;\n}\n\n.review-container {\n    display: flex;\n    width: 100%;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    \n}\n\n.review-content {\n    display:flex;\n    width: 100%;\n    background-color: rgb(218, 140, 140);\n    align-self: center;\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n    box-shadow: 0px 0px 10px rgb(92, 72, 72);\n    padding: 7px;\n}\n\n.customer-image {\n    border-radius: 5px;\n    box-shadow: 0px 0px 10px rgb(92, 72, 72);\n    border: 2px solid rgb(92, 72, 72);\n    height: fit-content;\n}\n\n.customer-name {\n    align-self: flex-end;\n}\n\n#review-content-1 {\n    /* justify-self: flex-start; */\n    text-align: left;\n    display: flex;\n    flex-direction: column;\n}\n\n#review-content-2 {\n    text-align: left;\n    padding-left: 17px;\n    display: flex;\n    flex-direction: column;\n}\n\n#review-content-3 {\n    text-align: left;\n    display: flex;\n    flex-direction: column;\n}\n\n#customer-image-1 { \n    width: 25%;\n } \n\n#customer-image-2 {\n    width: 30%;\n}\n\n#customer-image-3 {\n    width: 25%;\n}\n\n.hours-container {\n    display: flex;\n    justify-content: center;\n\n\n}\n\n.hours-content {\n    background-color:rgb(218, 140, 140);\n    padding: 0 20 20 20;\n    box-shadow: 0px 0px 10px rgb(92, 72, 72);\n    border: 2px solid rgb(92, 72, 72);\n    border-radius: 5px;\n}\n\n\n/* MENU STYLING ------------------------------------------------------------- */\n\n#menu-container {\n    width: 100%;\n}\n\n.header-signs-content {\n    display:flex;\n    justify-content: space-around;\n    flex: 1;\n}\n\n.header-sign {\n    text-align: center;\n    padding: 10px;\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n    background-color:rgb(218, 140, 140);\n    box-shadow: 0px 0px 10px rgb(92, 72, 72);\n\n}\n\n#header-sign-1 {\n    display: flex;\n    justify-self: flex-end;\n    text-align: center;\n    flex-direction: column;\n    align-self: center;\n    padding-bottom: 17px;\n    /* background-color: grey; */\n}\n\n#header-sign-refuse {\n    color:red;\n    font-weight: 700;\n}\n\n#header-sign-anyone {\n    font-weight: 700;\n}\n\n#header-sign-know {\n    font-weight: 700;\n}\n\n.menu-title-container {\n    display: flex;\n    justify-content: center;\n    padding: 15 0 40 0;\n}\n\n.menu-title-content {\n    font-weight:700;\n    font-size: 50px;\n}\n\n\n/* Menu Content ------------------------------------------------------------- */\n\n.menu-content {\n    width: 100%;\n    /* display: flex; */\n}\n\n.menu-list-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.menu-list-left {\n    display:flex;\n    flex-direction: column;\n    width: 200px;\n}\n\n.menu-list-content {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    background-color: rgb(218, 140, 140);\n    padding: 15px;\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n    height: 450px;\n}\n\n.menu-list-right {\n    display: flex;\n    flex-direction: column;\n    width: 200px;\n}\n\n\n.soup-image {\n    width: 200px;\n    box-shadow: 0px 0px 10px rgb(92, 72, 72);\n    /* border: 2px solid rgb(92, 72, 72); */\n\n}\n\n\n#soup-mulligatawny {\n    /* width: 200px; */\n    border-radius: 5px 5px 0 0;\n}\n\n#soup-black-bean {\n    /* width: 200px; */\n}\n\n#soup-tomato-rice {\n    transform: scaleX(-1);\n    height: 200px;\n    object-fit: cover;\n    object-position: 100% 80%;\n}\n\n#soup-jambalaya {\n    border-radius: 5px 5px 0 0;\n    width: 200px;\n    height: 160px;\n    object-fit: cover;\n    object-position: 100% 70%;\n}\n\n#soup-french-onion {\n    height: 180px;\n    object-fit: cover;\n}\n\n#soup-clam-bisque {\n    height: 250px;\n    object-fit: cover;\n    border-radius: 0 0 5px 5px;\n}\n\n\n/* Contact Styling ------------------------------------------------------- */\n\n.contact-container {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.contact-content {\n    text-align: center;\n    padding-top: 12px;\n    padding-bottom: 5px;\n}"],"sourceRoot":""}]);
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
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/helpers */ "./src/utils/helpers.js");



const contact = () => {
    const contactContainer = document.createElement('div');
    contactContainer.id = "contact-container";

    // const contactContent = document.createElement('div');
    // contactContent.classList.add('contact-content');
    // contactContent.innerHTML = "Contact soup?"
    // contactContainer.appendChild(contactContent);


    // const newElement = generateElement('div', 'newElement', 'newElement-class');
    // newElement.innerHTML = "Banana nut bananas";
    // newElement.innerHTML += "<br>Uh oh spaghettis";
    // newElement.innerHTML += `<br> This is a really long string, I wonder if I'll automatically get wrap around with this string or if I'll run off the page and on the background of the webpage.`
    
    // console.log(newElement);
    // contactContainer.appendChild(newElement);

    const contactContent = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('div', null, 'contact-content');
    contactContent.innerHTML = `You want to contact us? No phone orders. <br>
    If you try to make a custom order or change my soup, then NO SOUP FOR YOU `
    contactContainer.appendChild(contactContent);


    return contactContainer;

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/landing.js":
/*!************************!*\
  !*** ./src/landing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_ladle_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/ladle.png */ "./src/assets/ladle.png");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/helpers */ "./src/utils/helpers.js");
/* harmony import */ var _assets_customer1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/customer1.png */ "./src/assets/customer1.png");
/* harmony import */ var _assets_customer2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/customer2.png */ "./src/assets/customer2.png");
/* harmony import */ var _assets_customer3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/customer3.png */ "./src/assets/customer3.png");

// Reference module code for creating and exporting a function with a return value for use in another script
// const myName = (name) => {
//     console.log("sup");
//     return 'Hi! My name is ' + name + "!";
// }
// export default myName;

// import Logo from './assets/logo.jpg'









const landing = () => {

    const landingContainerElement = document.createElement('div');

    // const content = document.createElement('div');
    landingContainerElement.id = 'landingContainerElement';
    landingContainerElement.style.position = "relative";
    // landingContainerElement.style.top = "70px";
    landingContainerElement.style.display = "flex";
    landingContainerElement.style.justifyContent = "center";

    const boxContainer = document.createElement('div');
    boxContainer.id = "box";
    // boxContainer.style.top = "70px";
    boxContainer.style.textAlign = "center";
    landingContainerElement.appendChild(boxContainer);

    // const logoImage = document.createElement('img');
    // logoImage.classList.add('logo-picture');
    // // logoImage.src = './logo.jpg';
    // logoImage.src = Logo;
    // logoImage.alt = "A blue and white painted saign, saying 'Greek Corner Cafe'";
    // logoImage.style.borderRadius = "50px";
    // boxContainer.appendChild(logoImage);

    const nameContainer = document.createElement('div');
    nameContainer.classList.add('name-container');
    boxContainer.appendChild(nameContainer);

    const nameContent = document.createElement('div');
    nameContent.classList.add("name-content");
    nameContent.innerHTML = "Soup and Soup Accessories";
    nameContainer.appendChild(nameContent);

    const ladleImage = document.createElement('img');
    ladleImage.classList.add('ladle-image-right');
    ladleImage.src = _assets_ladle_png__WEBPACK_IMPORTED_MODULE_0__;
    ladleImage.alt = "An image of a cartoon ladle"
    nameContainer.appendChild(ladleImage);

    const ladleImageLeft = document.createElement('img');
    ladleImageLeft.classList.add('ladle-image-left');
    ladleImageLeft.src = _assets_ladle_png__WEBPACK_IMPORTED_MODULE_0__;
    ladleImageLeft.alt = "An image of a cartoon ladle"
    nameContainer.appendChild(ladleImageLeft);


    const welcome = document.createElement('h2');
    welcome.classList.add('headLine');
    welcome.innerHTML = 'Welcome to the Soup and Soup Accessories';
    boxContainer.appendChild(welcome);
    
    const tagline = document.createElement('h3');
    tagline.classList.add('tagline');
    tagline.innerHTML = `"We're super." - Founder, Yev "Flazi" Kassem <br> <br>`;
    boxContainer.appendChild(tagline);



    const reviewContainer0 = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])('div', null, 'generic-container');
    reviewContainer0.innerHTML = `Here are review of Soup and Soup Accessories`;
    boxContainer.appendChild(reviewContainer0);



    // First Customer Review --------------------------------

    const reviewContainer1 = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])('div', null, 'review-container');
    boxContainer.appendChild(reviewContainer1);

    const reviewContent1 = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'review-content-1', 'review-content');
    reviewContent1.innerHTML = `"This guy makes the best soup in the city, Jerry, the best! You know what they call him? Soup Flazi."<br> 
   "All right, Bania, I'm not letting you cut in line." <br>
    "Why not?" <br>
    "Because if he catches us, we'll never be able to get soup again!"`
    // reviewContent1.innerHTML += ;
    reviewContainer1.appendChild(reviewContent1);

    const customerName1 = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'customer-name-1', 'customer-name');
    customerName1.innerHTML = "- Bania, customer";
    reviewContent1.appendChild(customerName1);

    const customerImage1 = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])('img', 'customer-image-1', 'customer-image');
    customerImage1.src = _assets_customer1_png__WEBPACK_IMPORTED_MODULE_2__;
    reviewContainer1.appendChild(customerImage1);

    // Second Customer Review --------------------------------

    const reviewContainer2 = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])('div', null, 'review-container');
    boxContainer.appendChild(reviewContainer2);

    const customerImage2 = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])('img', 'customer-image-2', 'customer-image');
    customerImage2.src = _assets_customer2_png__WEBPACK_IMPORTED_MODULE_3__;
    reviewContainer2.appendChild(customerImage2);

    const reviewContent2 = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'review-content-2', 'review-content');
    reviewContent2.innerHTML = `"Oh, man. Ohh! This is fantastic. How does he do it?" <br>
    "You know, I don't see how you can sit there eating that and not even offer me any?" <br>
    "I gave you a taste. What do you want?" <br>
    "Why can't we share?" <br>
    "I told you not to say anything. You can't go in there, brazenly flaunt the rules, and then think I'm gonna share with you!" <br>
    "Do you hear yourself?" <br>
    "I'm sorry. This is what comes from living under a Flazi regime." <br>
    "Well, I gotta go back there and try again" `;
    reviewContainer2.appendChild(reviewContent2);

    const customerName2 = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'customer-name-2', 'customer-name');
    customerName2.innerHTML = " - Jimmy and Jorge, customers";
    reviewContent2.appendChild(customerName2);

    // Third Customer Review --------------------------------

    const reviewContainer3 = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])('div', null, 'review-container');
    boxContainer.appendChild(reviewContainer3);

    const reviewContent3 = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'review-content-3', 'review-content');
    reviewContent3.innerHTML = `"You are the only one who understands me." <br>
    "You suffer for your soup!" <br>    
    "Yes. That is right."<br>
    "You demand perfection from yourself, from your soup." <br>
    "How can I tolerate any less from my customer?"<br>`
    reviewContainer3.appendChild(reviewContent3);

    const customerName3 = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'customer-name-3', 'customer-name');
    customerName3.innerHTML = "- Yev, owner";
    reviewContent3.appendChild(customerName3);

    const customerImage3 = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])('img', 'customer-image-3', 'customer-image');
    customerImage3.src = _assets_customer3_png__WEBPACK_IMPORTED_MODULE_4__;
    reviewContainer3.appendChild(customerImage3);

    // Hours ----------------------------------------------

    const hoursContainer = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])('div', null, 'hours-container');
    boxContainer.appendChild(hoursContainer);

    const hoursContent = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])('div', null, 'hours-content');
    hoursContent.innerHTML = `<h3>HOURS:</h3>
    MON-FRI: 9AM - 6PM <br>
    SAT-SUN: 10AM - 8PM`;
    
    hoursContainer.appendChild(hoursContent);







    return landingContainerElement;

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (landing);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/helpers */ "./src/utils/helpers.js");
/* harmony import */ var _assets_soup_mulligatawny_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/soup-mulligatawny.jpg */ "./src/assets/soup-mulligatawny.jpg");
/* harmony import */ var _assets_soup_black_bean_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/soup-black-bean.jpg */ "./src/assets/soup-black-bean.jpg");
/* harmony import */ var _assets_soup_tomato_rice_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/soup-tomato-rice.jpg */ "./src/assets/soup-tomato-rice.jpg");
/* harmony import */ var _assets_soup_jambalaya_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/soup-jambalaya.jpg */ "./src/assets/soup-jambalaya.jpg");
/* harmony import */ var _assets_soup_french_onion_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/soup-french-onion.jpg */ "./src/assets/soup-french-onion.jpg");
/* harmony import */ var _assets_soup_clam_bisque_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/soup-clam-bisque.jpg */ "./src/assets/soup-clam-bisque.jpg");












const menu = () => {
    const menuContainer = document.createElement('div');
    menuContainer.id = "menu-container";


// Header Signs -----------------------------------------------

    const headerSignsContainer = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('div', null, 'header-signs-container');
    menuContainer.appendChild(headerSignsContainer);

    const headerSignsContent = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('div', null, 'header-signs-content');
    headerSignsContainer.appendChild(headerSignsContent);

    const headerSign1 = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'header-sign-1', 'header-sign');
    headerSign1.innerHTML = `WE <br>
    reserve the right <br>`;
    const headerSign1Refuse = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'header-sign-refuse', null);
    headerSign1Refuse.innerHTML = `TO REFUSE SERVICE <br>`;
    headerSign1.appendChild(headerSign1Refuse);
    const headerSign1Anyone = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'header-sign-anyone', null);
    headerSign1Anyone.innerHTML = `TO ANYONE`;
    headerSign1.appendChild(headerSign1Anyone);

    headerSignsContent.appendChild(headerSign1);

    const headerSign2 = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'header-sign-2', 'header-sign');
    headerSign2.innerHTML = `SINGLE FILE ONLY <br>
    HAVE CASH READY <br>
    ----------------- <br>`;

    const headerSign2Know = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'header-sign-know', null);
    headerSign2Know.innerHTML = `KNOW YOUR SOUP <br>`;
    headerSign2.appendChild(headerSign2Know);
    headerSign2.innerHTML += `-----------------`;

    headerSignsContent.appendChild(headerSign2);

// Menu title card -------------------------------------------------------------

    const menuTitleContainer = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('div', null, 'menu-title-container');
    
    const menuTitleContent = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('div', null, 'menu-title-content');
    menuTitleContent.innerHTML = `MENU`;
    menuTitleContainer.appendChild(menuTitleContent);

    menuContainer.appendChild(menuTitleContainer);


// Menu Content ----------------------------------------------------------------

    const menuContent = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('div', null, 'menu-content');

    const menuListContainer = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('div', null, 'menu-list-container');
    menuContent.appendChild(menuListContainer);

    const menuListLeft = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'menu-list-left', 'menu-list-left');
    menuListContainer.appendChild(menuListLeft);

    const soupMulligatawny = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'soup-mulligatawny', 'soup-image');
    soupMulligatawny.src = _assets_soup_mulligatawny_jpg__WEBPACK_IMPORTED_MODULE_1__;
    menuListLeft.appendChild(soupMulligatawny);

    const soupBlackBean = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'soup-black-bean', 'soup-image');
    soupBlackBean.src = _assets_soup_black_bean_jpg__WEBPACK_IMPORTED_MODULE_2__;
    menuListLeft.appendChild(soupBlackBean);

    const soupTomatoRice = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'soup-tomato-rice', 'soup-image');
    soupTomatoRice.src = _assets_soup_tomato_rice_jpg__WEBPACK_IMPORTED_MODULE_3__;
    menuListLeft.appendChild(soupTomatoRice);


    
    const menuListContent = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('div', null, 'menu-list-content');
    menuListContainer.appendChild(menuListContent);

    menuListContent.innerHTML = `Hot Soup 
    <br> <br>
    Med 16OZ. $2.99 
    <br> <br>
    LARGE 32OZ. 3.99 
    <br> <br>
    Mulligatawny <br>
    Crab Bisque <br>
    Turkey Chili <br>
    Jambalaya  <br>
    Black Bean  <br>
    Chicken Broccoli <br> 
    Clam Bisque  <br>
    Split Pea  <br>
    French Onion  <br>
    Mushroom Barley  <br>
    Tomato Rice  <br>
    <br> 
    ALL SELECTIONS MADE 
    <br>
    FRESH DAILY 
    <br>  <br>
     
    
    NO SUBSTITUTIONS OR  
    <br>
    PHONE ORDERS`;



    const menuListRight = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'menu-list-right', 'menu-list-right');
    menuListContainer.appendChild(menuListRight);

    const soupJambalaya = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'soup-jambalaya', 'soup-image');
    soupJambalaya.src = _assets_soup_jambalaya_jpg__WEBPACK_IMPORTED_MODULE_4__;
    menuListRight.appendChild(soupJambalaya);

    const soupFrenchOnion = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'soup-french-onion', 'soup-image');
    soupFrenchOnion.src = _assets_soup_french_onion_jpg__WEBPACK_IMPORTED_MODULE_5__;
    menuListRight.appendChild(soupFrenchOnion);

    const soupClamBisque = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'soup-clam-bisque', 'soup-image');
    soupClamBisque.src = _assets_soup_clam_bisque_jpg__WEBPACK_IMPORTED_MODULE_6__;
    menuListRight.appendChild(soupClamBisque);


    menuContainer.appendChild(menuContent);



    return menuContainer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/utils/helpers.js":
/*!******************************!*\
  !*** ./src/utils/helpers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const generateElement = (type, id , className) => {

    let element;

    if (!type || type === null) {
        console.log(` Error: generateElement could not parse element: ${element}`);
        return;
    }

    element = document.createElement(type);

    if(id) {
        element.id = id;
    }
    if(className){
        element.classList.add(className)
    }

    return element;

}

// const generateElement2 = (obj) => {

//     let element;

//     obj[0];

//     if(obj.type !== string) {
//         console.log("ERROR: generateElement's type is not a string! " + obj.type );
//         return ""
//     }


// }

// let blerp = generateElement2({type:'div', id: 'sample', })

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateElement);

/***/ }),

/***/ "./src/assets/contact.png":
/*!********************************!*\
  !*** ./src/assets/contact.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d260e0093ea37114ca8d.png";

/***/ }),

/***/ "./src/assets/customer1.png":
/*!**********************************!*\
  !*** ./src/assets/customer1.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26d5f5cfc8c615a501bf.png";

/***/ }),

/***/ "./src/assets/customer2.png":
/*!**********************************!*\
  !*** ./src/assets/customer2.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eac4457ea179ef38a81f.png";

/***/ }),

/***/ "./src/assets/customer3.png":
/*!**********************************!*\
  !*** ./src/assets/customer3.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a30131236289c976655.png";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Italic-VariableFont_wght.ttf":
/*!*****************************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Italic-VariableFont_wght.ttf ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f578a4cdcf58b09e908f.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-VariableFont_wght.ttf":
/*!**********************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-VariableFont_wght.ttf ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3068cdb43142f5625baf.ttf";

/***/ }),

/***/ "./src/assets/home.png":
/*!*****************************!*\
  !*** ./src/assets/home.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3f23696274da4003ab0.png";

/***/ }),

/***/ "./src/assets/ladle.png":
/*!******************************!*\
  !*** ./src/assets/ladle.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0d6170b9bfec2989f7de.png";

/***/ }),

/***/ "./src/assets/menu.png":
/*!*****************************!*\
  !*** ./src/assets/menu.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9acf93d468b3a7fcd512.png";

/***/ }),

/***/ "./src/assets/soup-black-bean.jpg":
/*!****************************************!*\
  !*** ./src/assets/soup-black-bean.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "14844e3cdd8bc6c021a1.jpg";

/***/ }),

/***/ "./src/assets/soup-clam-bisque.jpg":
/*!*****************************************!*\
  !*** ./src/assets/soup-clam-bisque.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "faa9b86b52bb2b5f1faf.jpg";

/***/ }),

/***/ "./src/assets/soup-french-onion.jpg":
/*!******************************************!*\
  !*** ./src/assets/soup-french-onion.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88b0b977003be5be1d63.jpg";

/***/ }),

/***/ "./src/assets/soup-jambalaya.jpg":
/*!***************************************!*\
  !*** ./src/assets/soup-jambalaya.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "923bd1f80f7f013689f6.jpg";

/***/ }),

/***/ "./src/assets/soup-mulligatawny.jpg":
/*!******************************************!*\
  !*** ./src/assets/soup-mulligatawny.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4ee70115f939029a35d.jpg";

/***/ }),

/***/ "./src/assets/soup-tomato-rice.jpg":
/*!*****************************************!*\
  !*** ./src/assets/soup-tomato-rice.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5739e049b1cecace0126.jpg";

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
/******/ 			"main": 0
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
/* harmony import */ var _landing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.js */ "./src/landing.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_home_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/home.png */ "./src/assets/home.png");
/* harmony import */ var _assets_menu_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/menu.png */ "./src/assets/menu.png");
/* harmony import */ var _assets_contact_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/contact.png */ "./src/assets/contact.png");

// import myName from './landing.js';

















// const gameBoard = (() => {

//     let _gameBoard = ["", "", "", "", "", "", "", "", ""];

//     // Returns current gameBoard
//     const getInfo = () => {
//         return _gameBoard;
//     }

//     return {
//         getInfo,
//         updateGameBoard,
//         resetGameBoard,
//         logBoard, 
//     }
// })();

const displayController = (() => {

    let _sample = "what's happening";

    const _hamburgerMenuContainer = document.createElement('div');
    const _homeImage = document.createElement('img');
    const _menuImage = document.createElement('img');
    const _contactImage = document.createElement('img');

    const _content = document.getElementById('content');

    const init = () => {
        _drawHamburgerMenu()
        _addHamburgerEventListeners();
        _homeImage.classList.toggle('selected');
        document.getElementById('content').appendChild((0,_landing_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
    }



    const _drawHamburgerMenu = () => {
        _hamburgerMenuContainer.classList.add('hamburger-menu-container');
        // _hamburgerMenuContainer.innerHTML = "Bollocks"
        document.getElementById('content-container').insertBefore(_hamburgerMenuContainer, document.getElementById('content') );
                
        _homeImage.classList.add('hamburger-image');
        _homeImage.id = "home-image"
        _homeImage.src = _assets_home_png__WEBPACK_IMPORTED_MODULE_4__;
        _homeImage.alt = "An image of a house, indicating home";
        // homeImage.classList.toggle('selected');
        _hamburgerMenuContainer.appendChild(_homeImage);
        
        _menuImage.classList.add('hamburger-image');
        _menuImage.id = "menu-image"
        _menuImage.src = _assets_menu_png__WEBPACK_IMPORTED_MODULE_5__;
        _menuImage.alt = "An image of a fork and knife, indicating menu";
        _hamburgerMenuContainer.appendChild(_menuImage);
        
        _contactImage.classList.add('hamburger-image');
        _contactImage.id = "contact-image"
        _contactImage.src = _assets_contact_png__WEBPACK_IMPORTED_MODULE_6__;
        _contactImage.alt = "An image of a phone, indicating navigation to the Contact page";
        _hamburgerMenuContainer.appendChild(_contactImage);
        
    }

    const _addHamburgerEventListeners = () => {
        let imageArr = [_homeImage, _menuImage, _contactImage];
        imageArr.forEach( element => {
            element.addEventListener('click', () => {
                
                
                _setImagesDeselected();
                element.classList.toggle('selected');
                // console.log(element.id);
                // console.log(element);
                switch(element.id) {
                    case 'home-image':
                        // console.log(_content.childNodes[1]);

                        if(_content.childNodes) {
                            _content.removeChild(_content.childNodes[1]);
                            _content.appendChild((0,_landing_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
                        }
                        break;
                    case 'menu-image':
                        if(_content.childNodes) {
                            _content.removeChild(_content.childNodes[1]);
                            _content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
                        }
                        break;
                    case 'contact-image':
                        if(_content.childNodes) {
                            _content.removeChild(_content.childNodes[1]);
                            _content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
                        }
                        break;
                }
            
            })
        })
    }

    const _setImagesDeselected = () => {
        _homeImage.classList.remove('selected');
        _menuImage.classList.remove('selected');
        _contactImage.classList.remove('selected');
    }

    const getInfo = () => {
        console.log('This is displayControllers getInfo() ' + _sample)
        return _sample;
    }

    return {
        init,
        getInfo,
    }

})();


displayController.getInfo();
displayController.init();

console.log(displayController);








// document.getElementById('content').appendChild(landing());



// function component() {
//     const element = document.createElement('div');
//     // const btn = 

//     element.innerHTML = myName('Wonkers');
//     element.classList.add('hi');
    
//     return element;
// }
// document.body.appendChild(component());


// document.body.removeChild(document.getElementById('content'));







// document.body.appendChild(landing());


// TO DO
// establish tab switching functionality on index.js
// Rebuild landing / front page
// Build menu page
// Build contact page
// build CSS so content can just be plug & played



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCx1REFBTztBQUM5RDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZDQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2Q0FBUztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdEQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQsdURBQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxvREFBSTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELHVEQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7OztBQUdEO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQVNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7Ozs7O0FBUUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhcmF1bnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhcmF1bnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhcmF1bnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQvLi9zcmMvbGFuZGluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC8uL3NyYy91dGlscy9oZWxwZXJzLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXJhdW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhcmF1bnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXJhdW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhcmF1bnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvbW9udHNlcnJhdC9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL21vbnRzZXJyYXQvTW9udHNlcnJhdC1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuI2NvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuLmhhbWJ1cmdlci1tZW51LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHBpbms7ICovXFxuICAgIGhlaWdodDogMTgwO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgLyogYm9yZGVyLXJhZGl1czogN3B4OyAqL1xcbiAgICAvKiBib3JkZXItc3R5bGU6IHNvbGlkOyAqL1xcbiAgICAvKiBib3JkZXItd2lkdGg6IDFweDsgKi9cXG4gICAgLyogYm9yZGVyLWNvbG9yOiByZ2IoOTIsIDcyLCA3Mik7ICovXFxuICAgIFxcbiAgICBcXG4gICAgbGVmdDogMjIlO1xcbiAgICB0b3A6IDcwcHg7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5oYW1idXJnZXItaW1hZ2Uge1xcbiAgICBcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgICBib3gtc2hhZG93OiAtMXB4IDJweCA3cHggcmdiKDkyLCA3MiwgNzIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG5cXG4uaGFtYnVyZ2VyLWltYWdlOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMjBtcztcXG59XFxuXFxuLmhhbWJ1cmdlci1pbWFnZS5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODIsIDk4LCA5OCk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEyMG1zO1xcbn1cXG4vKiBcXG4jaG9tZS1pbWFnZS5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODIsIDk4LCA5OClcXG59XFxuXFxuI21lbnUtaW1hZ2Uuc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCA5OCwgOTgpXFxufVxcblxcbiNjb250YWN0LWltYWdlLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgOTgsIDk4KVxcbn0gKi9cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4jY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTVweCByZ2IoOTIsIDcyLCA3Mik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDMlIDclIDMlIDclO1xcbiAgICBtYXJnaW46IDUwcHggY2FsYygyMCUgKyA2MHB4KSAwIDIwJTtcXG4gICAgbWluLXdpZHRoOiA3MDBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG5cXG5cXG5cXG4ubmFtZS1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgOTgsIDk4KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxNXB4IHJnYig5MiwgNzIsIDcyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDkyLCA3MiwgNzIpO1xcbn1cXG5cXG4ubmFtZS1jb250ZW50IHtcXG4gICAgZm9udC1zaXplOiA3NXB4O1xcbn1cXG5cXG4ubGFkbGUtaW1hZ2UtcmlnaHQge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgbGVmdDogMzMwcHg7XFxuICAgIGJvdHRvbToxNDBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG59XFxuXFxuLmxhZGxlLWltYWdlLWxlZnQge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IDMzMHB4O1xcbiAgICBib3R0b206MTQwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xcbn1cXG5cXG4jYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmdlbmVyaWMtY29udGFpbmVyIHtcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgICAvKiBqdXN0aWZ5LXNlbGY6IGNlbnRlcjsgKi9cXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMTgsIDE0MCwgMTQwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTIsIDcyLCA3Mik7XFxuICAgIHdpZHRoOiA2MCU7XFxufVxcblxcbi5yZXZpZXctY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgXFxufVxcblxcbi5yZXZpZXctY29udGVudCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDE0MCwgMTQwKTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5MiwgNzIsIDcyKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYig5MiwgNzIsIDcyKTtcXG4gICAgcGFkZGluZzogN3B4O1xcbn1cXG5cXG4uY3VzdG9tZXItaW1hZ2Uge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2IoOTIsIDcyLCA3Mik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5MiwgNzIsIDcyKTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLmN1c3RvbWVyLW5hbWUge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuI3Jldmlldy1jb250ZW50LTEge1xcbiAgICAvKiBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7ICovXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNyZXZpZXctY29udGVudC0yIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxN3B4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jcmV2aWV3LWNvbnRlbnQtMyB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjdXN0b21lci1pbWFnZS0xIHsgXFxuICAgIHdpZHRoOiAyNSU7XFxuIH0gXFxuXFxuI2N1c3RvbWVyLWltYWdlLTIge1xcbiAgICB3aWR0aDogMzAlO1xcbn1cXG5cXG4jY3VzdG9tZXItaW1hZ2UtMyB7XFxuICAgIHdpZHRoOiAyNSU7XFxufVxcblxcbi5ob3Vycy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLmhvdXJzLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMTgsIDE0MCwgMTQwKTtcXG4gICAgcGFkZGluZzogMCAyMCAyMCAyMDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYig5MiwgNzIsIDcyKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDkyLCA3MiwgNzIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcblxcbi8qIE1FTlUgU1RZTElORyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuI21lbnUtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZWFkZXItc2lnbnMtY29udGVudCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5oZWFkZXItc2lnbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTIsIDcyLCA3Mik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIxOCwgMTQwLCAxNDApO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiKDkyLCA3MiwgNzIpO1xcblxcbn1cXG5cXG4jaGVhZGVyLXNpZ24tMSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTdweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JleTsgKi9cXG59XFxuXFxuI2hlYWRlci1zaWduLXJlZnVzZSB7XFxuICAgIGNvbG9yOnJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI2hlYWRlci1zaWduLWFueW9uZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiNoZWFkZXItc2lnbi1rbm93IHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm1lbnUtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE1IDAgNDAgMDtcXG59XFxuXFxuLm1lbnUtdGl0bGUtY29udGVudCB7XFxuICAgIGZvbnQtd2VpZ2h0OjcwMDtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG5cXG4vKiBNZW51IENvbnRlbnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5tZW51LWNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG59XFxuXFxuLm1lbnUtbGlzdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tZW51LWxpc3QtbGVmdCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ubWVudS1saXN0LWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAxNDAsIDE0MCk7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDkyLCA3MiwgNzIpO1xcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcbn1cXG5cXG4ubWVudS1saXN0LXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG5cXG4uc291cC1pbWFnZSB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYig5MiwgNzIsIDcyKTtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcmdiKDkyLCA3MiwgNzIpOyAqL1xcblxcbn1cXG5cXG5cXG4jc291cC1tdWxsaWdhdGF3bnkge1xcbiAgICAvKiB3aWR0aDogMjAwcHg7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbn1cXG5cXG4jc291cC1ibGFjay1iZWFuIHtcXG4gICAgLyogd2lkdGg6IDIwMHB4OyAqL1xcbn1cXG5cXG4jc291cC10b21hdG8tcmljZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG9iamVjdC1wb3NpdGlvbjogMTAwJSA4MCU7XFxufVxcblxcbiNzb3VwLWphbWJhbGF5YSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBvYmplY3QtcG9zaXRpb246IDEwMCUgNzAlO1xcbn1cXG5cXG4jc291cC1mcmVuY2gtb25pb24ge1xcbiAgICBoZWlnaHQ6IDE4MHB4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuI3NvdXAtY2xhbS1iaXNxdWUge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxufVxcblxcblxcbi8qIENvbnRhY3QgU3R5bGluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFjdC1jb250ZW50IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qjs4REFDMkY7O0lBRTNGLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxrQkFBa0I7O0lBRWxCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsV0FBVztJQUNYLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLG1DQUFtQzs7O0lBR25DLFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBOztJQUVJLHdCQUF3QjtJQUN4Qix3Q0FBd0M7SUFDeEMsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsMEJBQTBCO0FBQzlCO0FBQ0E7Ozs7Ozs7Ozs7O0dBV0c7Ozs7Ozs7O0FBUUg7SUFDSSxzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOzs7OztBQUtBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsd0NBQXdDO0lBQ3hDLG1CQUFtQjtJQUNuQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJ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QzlCOzs7QUFHQSw0RUFBNEU7O0FBRTVFO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL21vbnRzZXJyYXQvTW9udHNlcnJhdC1WYXJpYWJsZUZvbnRfd2dodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIHVybCgnLi9hc3NldHMvZm9udHMvbW9udHNlcnJhdC9Nb250c2VycmF0LUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIFxcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbiNjb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcblxcbi5oYW1idXJnZXItbWVudS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIFxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rOyAqL1xcbiAgICBoZWlnaHQ6IDE4MDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDdweDsgKi9cXG4gICAgLyogYm9yZGVyLXN0eWxlOiBzb2xpZDsgKi9cXG4gICAgLyogYm9yZGVyLXdpZHRoOiAxcHg7ICovXFxuICAgIC8qIGJvcmRlci1jb2xvcjogcmdiKDkyLCA3MiwgNzIpOyAqL1xcbiAgICBcXG4gICAgXFxuICAgIGxlZnQ6IDIyJTtcXG4gICAgdG9wOiA3MHB4O1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uaGFtYnVyZ2VyLWltYWdlIHtcXG4gICAgXFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gICAgYm94LXNoYWRvdzogLTFweCAycHggN3B4IHJnYig5MiwgNzIsIDcyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGJvcmRlci1zdHlsZTpzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuXFxuLmhhbWJ1cmdlci1pbWFnZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTIwbXM7XFxufVxcblxcbi5oYW1idXJnZXItaW1hZ2Uuc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCA5OCwgOTgpO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMjBtcztcXG59XFxuLyogXFxuI2hvbWUtaW1hZ2Uuc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCA5OCwgOTgpXFxufVxcblxcbiNtZW51LWltYWdlLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgOTgsIDk4KVxcbn1cXG5cXG4jY29udGFjdC1pbWFnZS5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODIsIDk4LCA5OClcXG59ICovXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuI2NvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDE1cHggcmdiKDkyLCA3MiwgNzIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAzJSA3JSAzJSA3JTtcXG4gICAgbWFyZ2luOiA1MHB4IGNhbGMoMjAlICsgNjBweCkgMCAyMCU7XFxuICAgIG1pbi13aWR0aDogNzAwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuXFxuXFxuXFxuLm5hbWUtY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODIsIDk4LCA5OCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTVweCByZ2IoOTIsIDcyLCA3Mik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5MiwgNzIsIDcyKTtcXG59XFxuXFxuLm5hbWUtY29udGVudCB7XFxuICAgIGZvbnQtc2l6ZTogNzVweDtcXG59XFxuXFxuLmxhZGxlLWltYWdlLXJpZ2h0IHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIGxlZnQ6IDMzMHB4O1xcbiAgICBib3R0b206MTQwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxufVxcblxcbi5sYWRsZS1pbWFnZS1sZWZ0IHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIHJpZ2h0OiAzMzBweDtcXG4gICAgYm90dG9tOjE0MHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXG59XFxuXFxuI2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5nZW5lcmljLWNvbnRhaW5lciB7XFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gICAgLyoganVzdGlmeS1zZWxmOiBjZW50ZXI7ICovXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjE4LCAxNDAsIDE0MCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDkyLCA3MiwgNzIpO1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4ucmV2aWV3LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIFxcbn1cXG5cXG4ucmV2aWV3LWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAxNDAsIDE0MCk7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTIsIDcyLCA3Mik7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2IoOTIsIDcyLCA3Mik7XFxuICAgIHBhZGRpbmc6IDdweDtcXG59XFxuXFxuLmN1c3RvbWVyLWltYWdlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiKDkyLCA3MiwgNzIpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTIsIDcyLCA3Mik7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5jdXN0b21lci1uYW1lIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbiNyZXZpZXctY29udGVudC0xIHtcXG4gICAgLyoganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0OyAqL1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jcmV2aWV3LWNvbnRlbnQtMiB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMTdweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Jldmlldy1jb250ZW50LTMge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY3VzdG9tZXItaW1hZ2UtMSB7IFxcbiAgICB3aWR0aDogMjUlO1xcbiB9IFxcblxcbiNjdXN0b21lci1pbWFnZS0yIHtcXG4gICAgd2lkdGg6IDMwJTtcXG59XFxuXFxuI2N1c3RvbWVyLWltYWdlLTMge1xcbiAgICB3aWR0aDogMjUlO1xcbn1cXG5cXG4uaG91cnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFxufVxcblxcbi5ob3Vycy1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjE4LCAxNDAsIDE0MCk7XFxuICAgIHBhZGRpbmc6IDAgMjAgMjAgMjA7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2IoOTIsIDcyLCA3Mik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5MiwgNzIsIDcyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5cXG4vKiBNRU5VIFNUWUxJTkcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNtZW51LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyLXNpZ25zLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uaGVhZGVyLXNpZ24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDkyLCA3MiwgNzIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMTgsIDE0MCwgMTQwKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYig5MiwgNzIsIDcyKTtcXG5cXG59XFxuXFxuI2hlYWRlci1zaWduLTEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDE3cHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZXk7ICovXFxufVxcblxcbiNoZWFkZXItc2lnbi1yZWZ1c2Uge1xcbiAgICBjb2xvcjpyZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiNoZWFkZXItc2lnbi1hbnlvbmUge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4jaGVhZGVyLXNpZ24ta25vdyB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5tZW51LXRpdGxlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxNSAwIDQwIDA7XFxufVxcblxcbi5tZW51LXRpdGxlLWNvbnRlbnQge1xcbiAgICBmb250LXdlaWdodDo3MDA7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuXFxuLyogTWVudSBDb250ZW50IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ubWVudS1jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxufVxcblxcbi5tZW51LWxpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubWVudS1saXN0LWxlZnQge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLm1lbnUtbGlzdC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMTQwLCAxNDApO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5MiwgNzIsIDcyKTtcXG4gICAgaGVpZ2h0OiA0NTBweDtcXG59XFxuXFxuLm1lbnUtbGlzdC1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuXFxuLnNvdXAtaW1hZ2Uge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2IoOTIsIDcyLCA3Mik7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5MiwgNzIsIDcyKTsgKi9cXG5cXG59XFxuXFxuXFxuI3NvdXAtbXVsbGlnYXRhd255IHtcXG4gICAgLyogd2lkdGg6IDIwMHB4OyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG59XFxuXFxuI3NvdXAtYmxhY2stYmVhbiB7XFxuICAgIC8qIHdpZHRoOiAyMDBweDsgKi9cXG59XFxuXFxuI3NvdXAtdG9tYXRvLXJpY2Uge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBvYmplY3QtcG9zaXRpb246IDEwMCUgODAlO1xcbn1cXG5cXG4jc291cC1qYW1iYWxheWEge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiAxMDAlIDcwJTtcXG59XFxuXFxuI3NvdXAtZnJlbmNoLW9uaW9uIHtcXG4gICAgaGVpZ2h0OiAxODBweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbiNzb3VwLWNsYW0tYmlzcXVlIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbn1cXG5cXG5cXG4vKiBDb250YWN0IFN0eWxpbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRhY3QtY29udGVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDEycHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmltcG9ydCBnZW5lcmF0ZUVsZW1lbnQgZnJvbSBcIi4vdXRpbHMvaGVscGVyc1wiO1xuXG5jb25zdCBjb250YWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmlkID0gXCJjb250YWN0LWNvbnRhaW5lclwiO1xuXG4gICAgLy8gY29uc3QgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBjb250YWN0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNvbnRlbnQnKTtcbiAgICAvLyBjb250YWN0Q29udGVudC5pbm5lckhUTUwgPSBcIkNvbnRhY3Qgc291cD9cIlxuICAgIC8vIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnQpO1xuXG5cbiAgICAvLyBjb25zdCBuZXdFbGVtZW50ID0gZ2VuZXJhdGVFbGVtZW50KCdkaXYnLCAnbmV3RWxlbWVudCcsICduZXdFbGVtZW50LWNsYXNzJyk7XG4gICAgLy8gbmV3RWxlbWVudC5pbm5lckhUTUwgPSBcIkJhbmFuYSBudXQgYmFuYW5hc1wiO1xuICAgIC8vIG5ld0VsZW1lbnQuaW5uZXJIVE1MICs9IFwiPGJyPlVoIG9oIHNwYWdoZXR0aXNcIjtcbiAgICAvLyBuZXdFbGVtZW50LmlubmVySFRNTCArPSBgPGJyPiBUaGlzIGlzIGEgcmVhbGx5IGxvbmcgc3RyaW5nLCBJIHdvbmRlciBpZiBJJ2xsIGF1dG9tYXRpY2FsbHkgZ2V0IHdyYXAgYXJvdW5kIHdpdGggdGhpcyBzdHJpbmcgb3IgaWYgSSdsbCBydW4gb2ZmIHRoZSBwYWdlIGFuZCBvbiB0aGUgYmFja2dyb3VuZCBvZiB0aGUgd2VicGFnZS5gXG4gICAgXG4gICAgLy8gY29uc29sZS5sb2cobmV3RWxlbWVudCk7XG4gICAgLy8gY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcblxuICAgIGNvbnN0IGNvbnRhY3RDb250ZW50ID0gZ2VuZXJhdGVFbGVtZW50KCdkaXYnLCBudWxsLCAnY29udGFjdC1jb250ZW50Jyk7XG4gICAgY29udGFjdENvbnRlbnQuaW5uZXJIVE1MID0gYFlvdSB3YW50IHRvIGNvbnRhY3QgdXM/IE5vIHBob25lIG9yZGVycy4gPGJyPlxuICAgIElmIHlvdSB0cnkgdG8gbWFrZSBhIGN1c3RvbSBvcmRlciBvciBjaGFuZ2UgbXkgc291cCwgdGhlbiBOTyBTT1VQIEZPUiBZT1UgYFxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnQpO1xuXG5cbiAgICByZXR1cm4gY29udGFjdENvbnRhaW5lcjtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0OyIsIlxuLy8gUmVmZXJlbmNlIG1vZHVsZSBjb2RlIGZvciBjcmVhdGluZyBhbmQgZXhwb3J0aW5nIGEgZnVuY3Rpb24gd2l0aCBhIHJldHVybiB2YWx1ZSBmb3IgdXNlIGluIGFub3RoZXIgc2NyaXB0XG4vLyBjb25zdCBteU5hbWUgPSAobmFtZSkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKFwic3VwXCIpO1xuLy8gICAgIHJldHVybiAnSGkhIE15IG5hbWUgaXMgJyArIG5hbWUgKyBcIiFcIjtcbi8vIH1cbi8vIGV4cG9ydCBkZWZhdWx0IG15TmFtZTtcblxuLy8gaW1wb3J0IExvZ28gZnJvbSAnLi9hc3NldHMvbG9nby5qcGcnXG5pbXBvcnQgTGFkbGVJbWFnZSBmcm9tICcuL2Fzc2V0cy9sYWRsZS5wbmcnXG5pbXBvcnQgZ2VuZXJhdGVFbGVtZW50IGZyb20gJy4vdXRpbHMvaGVscGVycyc7XG5cbmltcG9ydCBDdXN0b21lckltYWdlMSBmcm9tICcuL2Fzc2V0cy9jdXN0b21lcjEucG5nJztcbmltcG9ydCBDdXN0b21lckltYWdlMiBmcm9tICcuL2Fzc2V0cy9jdXN0b21lcjIucG5nJztcbmltcG9ydCBDdXN0b21lckltYWdlMyBmcm9tICcuL2Fzc2V0cy9jdXN0b21lcjMucG5nJztcblxuXG5cbmNvbnN0IGxhbmRpbmcgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBsYW5kaW5nQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy8gY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxhbmRpbmdDb250YWluZXJFbGVtZW50LmlkID0gJ2xhbmRpbmdDb250YWluZXJFbGVtZW50JztcbiAgICBsYW5kaW5nQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICAvLyBsYW5kaW5nQ29udGFpbmVyRWxlbWVudC5zdHlsZS50b3AgPSBcIjcwcHhcIjtcbiAgICBsYW5kaW5nQ29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgbGFuZGluZ0NvbnRhaW5lckVsZW1lbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xuXG4gICAgY29uc3QgYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm94Q29udGFpbmVyLmlkID0gXCJib3hcIjtcbiAgICAvLyBib3hDb250YWluZXIuc3R5bGUudG9wID0gXCI3MHB4XCI7XG4gICAgYm94Q29udGFpbmVyLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgbGFuZGluZ0NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoYm94Q29udGFpbmVyKTtcblxuICAgIC8vIGNvbnN0IGxvZ29JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIC8vIGxvZ29JbWFnZS5jbGFzc0xpc3QuYWRkKCdsb2dvLXBpY3R1cmUnKTtcbiAgICAvLyAvLyBsb2dvSW1hZ2Uuc3JjID0gJy4vbG9nby5qcGcnO1xuICAgIC8vIGxvZ29JbWFnZS5zcmMgPSBMb2dvO1xuICAgIC8vIGxvZ29JbWFnZS5hbHQgPSBcIkEgYmx1ZSBhbmQgd2hpdGUgcGFpbnRlZCBzYWlnbiwgc2F5aW5nICdHcmVlayBDb3JuZXIgQ2FmZSdcIjtcbiAgICAvLyBsb2dvSW1hZ2Uuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MHB4XCI7XG4gICAgLy8gYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29JbWFnZSk7XG5cbiAgICBjb25zdCBuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYW1lLWNvbnRhaW5lcicpO1xuICAgIGJveENvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IG5hbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm5hbWUtY29udGVudFwiKTtcbiAgICBuYW1lQ29udGVudC5pbm5lckhUTUwgPSBcIlNvdXAgYW5kIFNvdXAgQWNjZXNzb3JpZXNcIjtcbiAgICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVDb250ZW50KTtcblxuICAgIGNvbnN0IGxhZGxlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsYWRsZUltYWdlLmNsYXNzTGlzdC5hZGQoJ2xhZGxlLWltYWdlLXJpZ2h0Jyk7XG4gICAgbGFkbGVJbWFnZS5zcmMgPSBMYWRsZUltYWdlO1xuICAgIGxhZGxlSW1hZ2UuYWx0ID0gXCJBbiBpbWFnZSBvZiBhIGNhcnRvb24gbGFkbGVcIlxuICAgIG5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobGFkbGVJbWFnZSk7XG5cbiAgICBjb25zdCBsYWRsZUltYWdlTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxhZGxlSW1hZ2VMZWZ0LmNsYXNzTGlzdC5hZGQoJ2xhZGxlLWltYWdlLWxlZnQnKTtcbiAgICBsYWRsZUltYWdlTGVmdC5zcmMgPSBMYWRsZUltYWdlO1xuICAgIGxhZGxlSW1hZ2VMZWZ0LmFsdCA9IFwiQW4gaW1hZ2Ugb2YgYSBjYXJ0b29uIGxhZGxlXCJcbiAgICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhZGxlSW1hZ2VMZWZ0KTtcblxuXG4gICAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgd2VsY29tZS5jbGFzc0xpc3QuYWRkKCdoZWFkTGluZScpO1xuICAgIHdlbGNvbWUuaW5uZXJIVE1MID0gJ1dlbGNvbWUgdG8gdGhlIFNvdXAgYW5kIFNvdXAgQWNjZXNzb3JpZXMnO1xuICAgIGJveENvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcbiAgICBcbiAgICBjb25zdCB0YWdsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0YWdsaW5lLmNsYXNzTGlzdC5hZGQoJ3RhZ2xpbmUnKTtcbiAgICB0YWdsaW5lLmlubmVySFRNTCA9IGBcIldlJ3JlIHN1cGVyLlwiIC0gRm91bmRlciwgWWV2IFwiRmxhemlcIiBLYXNzZW0gPGJyPiA8YnI+YDtcbiAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGFnbGluZSk7XG5cblxuXG4gICAgY29uc3QgcmV2aWV3Q29udGFpbmVyMCA9IGdlbmVyYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgJ2dlbmVyaWMtY29udGFpbmVyJyk7XG4gICAgcmV2aWV3Q29udGFpbmVyMC5pbm5lckhUTUwgPSBgSGVyZSBhcmUgcmV2aWV3IG9mIFNvdXAgYW5kIFNvdXAgQWNjZXNzb3JpZXNgO1xuICAgIGJveENvbnRhaW5lci5hcHBlbmRDaGlsZChyZXZpZXdDb250YWluZXIwKTtcblxuXG5cbiAgICAvLyBGaXJzdCBDdXN0b21lciBSZXZpZXcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbnN0IHJldmlld0NvbnRhaW5lcjEgPSBnZW5lcmF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsICdyZXZpZXctY29udGFpbmVyJyk7XG4gICAgYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHJldmlld0NvbnRhaW5lcjEpO1xuXG4gICAgY29uc3QgcmV2aWV3Q29udGVudDEgPSBnZW5lcmF0ZUVsZW1lbnQoJ2RpdicsICdyZXZpZXctY29udGVudC0xJywgJ3Jldmlldy1jb250ZW50Jyk7XG4gICAgcmV2aWV3Q29udGVudDEuaW5uZXJIVE1MID0gYFwiVGhpcyBndXkgbWFrZXMgdGhlIGJlc3Qgc291cCBpbiB0aGUgY2l0eSwgSmVycnksIHRoZSBiZXN0ISBZb3Uga25vdyB3aGF0IHRoZXkgY2FsbCBoaW0/IFNvdXAgRmxhemkuXCI8YnI+IFxuICAgXCJBbGwgcmlnaHQsIEJhbmlhLCBJJ20gbm90IGxldHRpbmcgeW91IGN1dCBpbiBsaW5lLlwiIDxicj5cbiAgICBcIldoeSBub3Q/XCIgPGJyPlxuICAgIFwiQmVjYXVzZSBpZiBoZSBjYXRjaGVzIHVzLCB3ZSdsbCBuZXZlciBiZSBhYmxlIHRvIGdldCBzb3VwIGFnYWluIVwiYFxuICAgIC8vIHJldmlld0NvbnRlbnQxLmlubmVySFRNTCArPSA7XG4gICAgcmV2aWV3Q29udGFpbmVyMS5hcHBlbmRDaGlsZChyZXZpZXdDb250ZW50MSk7XG5cbiAgICBjb25zdCBjdXN0b21lck5hbWUxID0gZ2VuZXJhdGVFbGVtZW50KCdkaXYnLCAnY3VzdG9tZXItbmFtZS0xJywgJ2N1c3RvbWVyLW5hbWUnKTtcbiAgICBjdXN0b21lck5hbWUxLmlubmVySFRNTCA9IFwiLSBCYW5pYSwgY3VzdG9tZXJcIjtcbiAgICByZXZpZXdDb250ZW50MS5hcHBlbmRDaGlsZChjdXN0b21lck5hbWUxKTtcblxuICAgIGNvbnN0IGN1c3RvbWVySW1hZ2UxID0gZ2VuZXJhdGVFbGVtZW50KCdpbWcnLCAnY3VzdG9tZXItaW1hZ2UtMScsICdjdXN0b21lci1pbWFnZScpO1xuICAgIGN1c3RvbWVySW1hZ2UxLnNyYyA9IEN1c3RvbWVySW1hZ2UxO1xuICAgIHJldmlld0NvbnRhaW5lcjEuYXBwZW5kQ2hpbGQoY3VzdG9tZXJJbWFnZTEpO1xuXG4gICAgLy8gU2Vjb25kIEN1c3RvbWVyIFJldmlldyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgY29uc3QgcmV2aWV3Q29udGFpbmVyMiA9IGdlbmVyYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgJ3Jldmlldy1jb250YWluZXInKTtcbiAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQocmV2aWV3Q29udGFpbmVyMik7XG5cbiAgICBjb25zdCBjdXN0b21lckltYWdlMiA9IGdlbmVyYXRlRWxlbWVudCgnaW1nJywgJ2N1c3RvbWVyLWltYWdlLTInLCAnY3VzdG9tZXItaW1hZ2UnKTtcbiAgICBjdXN0b21lckltYWdlMi5zcmMgPSBDdXN0b21lckltYWdlMjtcbiAgICByZXZpZXdDb250YWluZXIyLmFwcGVuZENoaWxkKGN1c3RvbWVySW1hZ2UyKTtcblxuICAgIGNvbnN0IHJldmlld0NvbnRlbnQyID0gZ2VuZXJhdGVFbGVtZW50KCdkaXYnLCAncmV2aWV3LWNvbnRlbnQtMicsICdyZXZpZXctY29udGVudCcpO1xuICAgIHJldmlld0NvbnRlbnQyLmlubmVySFRNTCA9IGBcIk9oLCBtYW4uIE9oaCEgVGhpcyBpcyBmYW50YXN0aWMuIEhvdyBkb2VzIGhlIGRvIGl0P1wiIDxicj5cbiAgICBcIllvdSBrbm93LCBJIGRvbid0IHNlZSBob3cgeW91IGNhbiBzaXQgdGhlcmUgZWF0aW5nIHRoYXQgYW5kIG5vdCBldmVuIG9mZmVyIG1lIGFueT9cIiA8YnI+XG4gICAgXCJJIGdhdmUgeW91IGEgdGFzdGUuIFdoYXQgZG8geW91IHdhbnQ/XCIgPGJyPlxuICAgIFwiV2h5IGNhbid0IHdlIHNoYXJlP1wiIDxicj5cbiAgICBcIkkgdG9sZCB5b3Ugbm90IHRvIHNheSBhbnl0aGluZy4gWW91IGNhbid0IGdvIGluIHRoZXJlLCBicmF6ZW5seSBmbGF1bnQgdGhlIHJ1bGVzLCBhbmQgdGhlbiB0aGluayBJJ20gZ29ubmEgc2hhcmUgd2l0aCB5b3UhXCIgPGJyPlxuICAgIFwiRG8geW91IGhlYXIgeW91cnNlbGY/XCIgPGJyPlxuICAgIFwiSSdtIHNvcnJ5LiBUaGlzIGlzIHdoYXQgY29tZXMgZnJvbSBsaXZpbmcgdW5kZXIgYSBGbGF6aSByZWdpbWUuXCIgPGJyPlxuICAgIFwiV2VsbCwgSSBnb3R0YSBnbyBiYWNrIHRoZXJlIGFuZCB0cnkgYWdhaW5cIiBgO1xuICAgIHJldmlld0NvbnRhaW5lcjIuYXBwZW5kQ2hpbGQocmV2aWV3Q29udGVudDIpO1xuXG4gICAgY29uc3QgY3VzdG9tZXJOYW1lMiA9IGdlbmVyYXRlRWxlbWVudCgnZGl2JywgJ2N1c3RvbWVyLW5hbWUtMicsICdjdXN0b21lci1uYW1lJyk7XG4gICAgY3VzdG9tZXJOYW1lMi5pbm5lckhUTUwgPSBcIiAtIEppbW15IGFuZCBKb3JnZSwgY3VzdG9tZXJzXCI7XG4gICAgcmV2aWV3Q29udGVudDIuYXBwZW5kQ2hpbGQoY3VzdG9tZXJOYW1lMik7XG5cbiAgICAvLyBUaGlyZCBDdXN0b21lciBSZXZpZXcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbnN0IHJldmlld0NvbnRhaW5lcjMgPSBnZW5lcmF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsICdyZXZpZXctY29udGFpbmVyJyk7XG4gICAgYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHJldmlld0NvbnRhaW5lcjMpO1xuXG4gICAgY29uc3QgcmV2aWV3Q29udGVudDMgPSBnZW5lcmF0ZUVsZW1lbnQoJ2RpdicsICdyZXZpZXctY29udGVudC0zJywgJ3Jldmlldy1jb250ZW50Jyk7XG4gICAgcmV2aWV3Q29udGVudDMuaW5uZXJIVE1MID0gYFwiWW91IGFyZSB0aGUgb25seSBvbmUgd2hvIHVuZGVyc3RhbmRzIG1lLlwiIDxicj5cbiAgICBcIllvdSBzdWZmZXIgZm9yIHlvdXIgc291cCFcIiA8YnI+ICAgIFxuICAgIFwiWWVzLiBUaGF0IGlzIHJpZ2h0LlwiPGJyPlxuICAgIFwiWW91IGRlbWFuZCBwZXJmZWN0aW9uIGZyb20geW91cnNlbGYsIGZyb20geW91ciBzb3VwLlwiIDxicj5cbiAgICBcIkhvdyBjYW4gSSB0b2xlcmF0ZSBhbnkgbGVzcyBmcm9tIG15IGN1c3RvbWVyP1wiPGJyPmBcbiAgICByZXZpZXdDb250YWluZXIzLmFwcGVuZENoaWxkKHJldmlld0NvbnRlbnQzKTtcblxuICAgIGNvbnN0IGN1c3RvbWVyTmFtZTMgPSBnZW5lcmF0ZUVsZW1lbnQoJ2RpdicsICdjdXN0b21lci1uYW1lLTMnLCAnY3VzdG9tZXItbmFtZScpO1xuICAgIGN1c3RvbWVyTmFtZTMuaW5uZXJIVE1MID0gXCItIFlldiwgb3duZXJcIjtcbiAgICByZXZpZXdDb250ZW50My5hcHBlbmRDaGlsZChjdXN0b21lck5hbWUzKTtcblxuICAgIGNvbnN0IGN1c3RvbWVySW1hZ2UzID0gZ2VuZXJhdGVFbGVtZW50KCdpbWcnLCAnY3VzdG9tZXItaW1hZ2UtMycsICdjdXN0b21lci1pbWFnZScpO1xuICAgIGN1c3RvbWVySW1hZ2UzLnNyYyA9IEN1c3RvbWVySW1hZ2UzO1xuICAgIHJldmlld0NvbnRhaW5lcjMuYXBwZW5kQ2hpbGQoY3VzdG9tZXJJbWFnZTMpO1xuXG4gICAgLy8gSG91cnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgY29uc3QgaG91cnNDb250YWluZXIgPSBnZW5lcmF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsICdob3Vycy1jb250YWluZXInKTtcbiAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNDb250YWluZXIpO1xuXG4gICAgY29uc3QgaG91cnNDb250ZW50ID0gZ2VuZXJhdGVFbGVtZW50KCdkaXYnLCBudWxsLCAnaG91cnMtY29udGVudCcpO1xuICAgIGhvdXJzQ29udGVudC5pbm5lckhUTUwgPSBgPGgzPkhPVVJTOjwvaDM+XG4gICAgTU9OLUZSSTogOUFNIC0gNlBNIDxicj5cbiAgICBTQVQtU1VOOiAxMEFNIC0gOFBNYDtcbiAgICBcbiAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc0NvbnRlbnQpO1xuXG5cblxuXG5cblxuXG4gICAgcmV0dXJuIGxhbmRpbmdDb250YWluZXJFbGVtZW50O1xuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbGFuZGluZztcbiIsImltcG9ydCBnZW5lcmF0ZUVsZW1lbnQgZnJvbSBcIi4vdXRpbHMvaGVscGVyc1wiO1xuXG5pbXBvcnQgTXVsbGlnYXRhd255IGZyb20gXCIuL2Fzc2V0cy9zb3VwLW11bGxpZ2F0YXdueS5qcGdcIjtcbmltcG9ydCBCbGFja0JlYW4gZnJvbSBcIi4vYXNzZXRzL3NvdXAtYmxhY2stYmVhbi5qcGdcIjtcbmltcG9ydCBUb21hdG9SaWNlIGZyb20gXCIuL2Fzc2V0cy9zb3VwLXRvbWF0by1yaWNlLmpwZ1wiO1xuXG5pbXBvcnQgSmFtYmFsYXlhIGZyb20gXCIuL2Fzc2V0cy9zb3VwLWphbWJhbGF5YS5qcGdcIjtcbmltcG9ydCBGcmVuY2hPbmlvbiBmcm9tIFwiLi9hc3NldHMvc291cC1mcmVuY2gtb25pb24uanBnXCI7XG5pbXBvcnQgQ2xhbUJpc3F1ZSBmcm9tIFwiLi9hc3NldHMvc291cC1jbGFtLWJpc3F1ZS5qcGdcIjtcblxuXG5cbmNvbnN0IG1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDb250YWluZXIuaWQgPSBcIm1lbnUtY29udGFpbmVyXCI7XG5cblxuLy8gSGVhZGVyIFNpZ25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb25zdCBoZWFkZXJTaWduc0NvbnRhaW5lciA9IGdlbmVyYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgJ2hlYWRlci1zaWducy1jb250YWluZXInKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlclNpZ25zQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGhlYWRlclNpZ25zQ29udGVudCA9IGdlbmVyYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgJ2hlYWRlci1zaWducy1jb250ZW50Jyk7XG4gICAgaGVhZGVyU2lnbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyU2lnbnNDb250ZW50KTtcblxuICAgIGNvbnN0IGhlYWRlclNpZ24xID0gZ2VuZXJhdGVFbGVtZW50KCdkaXYnLCAnaGVhZGVyLXNpZ24tMScsICdoZWFkZXItc2lnbicpO1xuICAgIGhlYWRlclNpZ24xLmlubmVySFRNTCA9IGBXRSA8YnI+XG4gICAgcmVzZXJ2ZSB0aGUgcmlnaHQgPGJyPmA7XG4gICAgY29uc3QgaGVhZGVyU2lnbjFSZWZ1c2UgPSBnZW5lcmF0ZUVsZW1lbnQoJ2RpdicsICdoZWFkZXItc2lnbi1yZWZ1c2UnLCBudWxsKTtcbiAgICBoZWFkZXJTaWduMVJlZnVzZS5pbm5lckhUTUwgPSBgVE8gUkVGVVNFIFNFUlZJQ0UgPGJyPmA7XG4gICAgaGVhZGVyU2lnbjEuYXBwZW5kQ2hpbGQoaGVhZGVyU2lnbjFSZWZ1c2UpO1xuICAgIGNvbnN0IGhlYWRlclNpZ24xQW55b25lID0gZ2VuZXJhdGVFbGVtZW50KCdkaXYnLCAnaGVhZGVyLXNpZ24tYW55b25lJywgbnVsbCk7XG4gICAgaGVhZGVyU2lnbjFBbnlvbmUuaW5uZXJIVE1MID0gYFRPIEFOWU9ORWA7XG4gICAgaGVhZGVyU2lnbjEuYXBwZW5kQ2hpbGQoaGVhZGVyU2lnbjFBbnlvbmUpO1xuXG4gICAgaGVhZGVyU2lnbnNDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlclNpZ24xKTtcblxuICAgIGNvbnN0IGhlYWRlclNpZ24yID0gZ2VuZXJhdGVFbGVtZW50KCdkaXYnLCAnaGVhZGVyLXNpZ24tMicsICdoZWFkZXItc2lnbicpO1xuICAgIGhlYWRlclNpZ24yLmlubmVySFRNTCA9IGBTSU5HTEUgRklMRSBPTkxZIDxicj5cbiAgICBIQVZFIENBU0ggUkVBRFkgPGJyPlxuICAgIC0tLS0tLS0tLS0tLS0tLS0tIDxicj5gO1xuXG4gICAgY29uc3QgaGVhZGVyU2lnbjJLbm93ID0gZ2VuZXJhdGVFbGVtZW50KCdkaXYnLCAnaGVhZGVyLXNpZ24ta25vdycsIG51bGwpO1xuICAgIGhlYWRlclNpZ24yS25vdy5pbm5lckhUTUwgPSBgS05PVyBZT1VSIFNPVVAgPGJyPmA7XG4gICAgaGVhZGVyU2lnbjIuYXBwZW5kQ2hpbGQoaGVhZGVyU2lnbjJLbm93KTtcbiAgICBoZWFkZXJTaWduMi5pbm5lckhUTUwgKz0gYC0tLS0tLS0tLS0tLS0tLS0tYDtcblxuICAgIGhlYWRlclNpZ25zQ29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJTaWduMik7XG5cbi8vIE1lbnUgdGl0bGUgY2FyZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb25zdCBtZW51VGl0bGVDb250YWluZXIgPSBnZW5lcmF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsICdtZW51LXRpdGxlLWNvbnRhaW5lcicpO1xuICAgIFxuICAgIGNvbnN0IG1lbnVUaXRsZUNvbnRlbnQgPSBnZW5lcmF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsICdtZW51LXRpdGxlLWNvbnRlbnQnKTtcbiAgICBtZW51VGl0bGVDb250ZW50LmlubmVySFRNTCA9IGBNRU5VYDtcbiAgICBtZW51VGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRpdGxlQ29udGVudCk7XG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVUaXRsZUNvbnRhaW5lcik7XG5cblxuLy8gTWVudSBDb250ZW50IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gZ2VuZXJhdGVFbGVtZW50KCdkaXYnLCBudWxsLCAnbWVudS1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBtZW51TGlzdENvbnRhaW5lciA9IGdlbmVyYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgJ21lbnUtbGlzdC1jb250YWluZXInKTtcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChtZW51TGlzdENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBtZW51TGlzdExlZnQgPSBnZW5lcmF0ZUVsZW1lbnQoJ2RpdicsICdtZW51LWxpc3QtbGVmdCcsICdtZW51LWxpc3QtbGVmdCcpO1xuICAgIG1lbnVMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVMaXN0TGVmdCk7XG5cbiAgICBjb25zdCBzb3VwTXVsbGlnYXRhd255ID0gZ2VuZXJhdGVFbGVtZW50KCdpbWcnLCAnc291cC1tdWxsaWdhdGF3bnknLCAnc291cC1pbWFnZScpO1xuICAgIHNvdXBNdWxsaWdhdGF3bnkuc3JjID0gTXVsbGlnYXRhd255O1xuICAgIG1lbnVMaXN0TGVmdC5hcHBlbmRDaGlsZChzb3VwTXVsbGlnYXRhd255KTtcblxuICAgIGNvbnN0IHNvdXBCbGFja0JlYW4gPSBnZW5lcmF0ZUVsZW1lbnQoJ2ltZycsICdzb3VwLWJsYWNrLWJlYW4nLCAnc291cC1pbWFnZScpO1xuICAgIHNvdXBCbGFja0JlYW4uc3JjID0gQmxhY2tCZWFuO1xuICAgIG1lbnVMaXN0TGVmdC5hcHBlbmRDaGlsZChzb3VwQmxhY2tCZWFuKTtcblxuICAgIGNvbnN0IHNvdXBUb21hdG9SaWNlID0gZ2VuZXJhdGVFbGVtZW50KCdpbWcnLCAnc291cC10b21hdG8tcmljZScsICdzb3VwLWltYWdlJyk7XG4gICAgc291cFRvbWF0b1JpY2Uuc3JjID0gVG9tYXRvUmljZTtcbiAgICBtZW51TGlzdExlZnQuYXBwZW5kQ2hpbGQoc291cFRvbWF0b1JpY2UpO1xuXG5cbiAgICBcbiAgICBjb25zdCBtZW51TGlzdENvbnRlbnQgPSBnZW5lcmF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsICdtZW51LWxpc3QtY29udGVudCcpO1xuICAgIG1lbnVMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVMaXN0Q29udGVudCk7XG5cbiAgICBtZW51TGlzdENvbnRlbnQuaW5uZXJIVE1MID0gYEhvdCBTb3VwIFxuICAgIDxicj4gPGJyPlxuICAgIE1lZCAxNk9aLiAkMi45OSBcbiAgICA8YnI+IDxicj5cbiAgICBMQVJHRSAzMk9aLiAzLjk5IFxuICAgIDxicj4gPGJyPlxuICAgIE11bGxpZ2F0YXdueSA8YnI+XG4gICAgQ3JhYiBCaXNxdWUgPGJyPlxuICAgIFR1cmtleSBDaGlsaSA8YnI+XG4gICAgSmFtYmFsYXlhICA8YnI+XG4gICAgQmxhY2sgQmVhbiAgPGJyPlxuICAgIENoaWNrZW4gQnJvY2NvbGkgPGJyPiBcbiAgICBDbGFtIEJpc3F1ZSAgPGJyPlxuICAgIFNwbGl0IFBlYSAgPGJyPlxuICAgIEZyZW5jaCBPbmlvbiAgPGJyPlxuICAgIE11c2hyb29tIEJhcmxleSAgPGJyPlxuICAgIFRvbWF0byBSaWNlICA8YnI+XG4gICAgPGJyPiBcbiAgICBBTEwgU0VMRUNUSU9OUyBNQURFIFxuICAgIDxicj5cbiAgICBGUkVTSCBEQUlMWSBcbiAgICA8YnI+ICA8YnI+XG4gICAgIFxuICAgIFxuICAgIE5PIFNVQlNUSVRVVElPTlMgT1IgIFxuICAgIDxicj5cbiAgICBQSE9ORSBPUkRFUlNgO1xuXG5cblxuICAgIGNvbnN0IG1lbnVMaXN0UmlnaHQgPSBnZW5lcmF0ZUVsZW1lbnQoJ2RpdicsICdtZW51LWxpc3QtcmlnaHQnLCAnbWVudS1saXN0LXJpZ2h0Jyk7XG4gICAgbWVudUxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUxpc3RSaWdodCk7XG5cbiAgICBjb25zdCBzb3VwSmFtYmFsYXlhID0gZ2VuZXJhdGVFbGVtZW50KCdpbWcnLCAnc291cC1qYW1iYWxheWEnLCAnc291cC1pbWFnZScpO1xuICAgIHNvdXBKYW1iYWxheWEuc3JjID0gSmFtYmFsYXlhO1xuICAgIG1lbnVMaXN0UmlnaHQuYXBwZW5kQ2hpbGQoc291cEphbWJhbGF5YSk7XG5cbiAgICBjb25zdCBzb3VwRnJlbmNoT25pb24gPSBnZW5lcmF0ZUVsZW1lbnQoJ2ltZycsICdzb3VwLWZyZW5jaC1vbmlvbicsICdzb3VwLWltYWdlJyk7XG4gICAgc291cEZyZW5jaE9uaW9uLnNyYyA9IEZyZW5jaE9uaW9uO1xuICAgIG1lbnVMaXN0UmlnaHQuYXBwZW5kQ2hpbGQoc291cEZyZW5jaE9uaW9uKTtcblxuICAgIGNvbnN0IHNvdXBDbGFtQmlzcXVlID0gZ2VuZXJhdGVFbGVtZW50KCdpbWcnLCAnc291cC1jbGFtLWJpc3F1ZScsICdzb3VwLWltYWdlJyk7XG4gICAgc291cENsYW1CaXNxdWUuc3JjID0gQ2xhbUJpc3F1ZTtcbiAgICBtZW51TGlzdFJpZ2h0LmFwcGVuZENoaWxkKHNvdXBDbGFtQmlzcXVlKTtcblxuXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGVudCk7XG5cblxuXG4gICAgcmV0dXJuIG1lbnVDb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7IiwiXG5jb25zdCBnZW5lcmF0ZUVsZW1lbnQgPSAodHlwZSwgaWQgLCBjbGFzc05hbWUpID0+IHtcblxuICAgIGxldCBlbGVtZW50O1xuXG4gICAgaWYgKCF0eXBlIHx8IHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCBFcnJvcjogZ2VuZXJhdGVFbGVtZW50IGNvdWxkIG5vdCBwYXJzZSBlbGVtZW50OiAke2VsZW1lbnR9YCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblxuICAgIGlmKGlkKSB7XG4gICAgICAgIGVsZW1lbnQuaWQgPSBpZDtcbiAgICB9XG4gICAgaWYoY2xhc3NOYW1lKXtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcblxufVxuXG4vLyBjb25zdCBnZW5lcmF0ZUVsZW1lbnQyID0gKG9iaikgPT4ge1xuXG4vLyAgICAgbGV0IGVsZW1lbnQ7XG5cbi8vICAgICBvYmpbMF07XG5cbi8vICAgICBpZihvYmoudHlwZSAhPT0gc3RyaW5nKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IGdlbmVyYXRlRWxlbWVudCdzIHR5cGUgaXMgbm90IGEgc3RyaW5nISBcIiArIG9iai50eXBlICk7XG4vLyAgICAgICAgIHJldHVybiBcIlwiXG4vLyAgICAgfVxuXG5cbi8vIH1cblxuLy8gbGV0IGJsZXJwID0gZ2VuZXJhdGVFbGVtZW50Mih7dHlwZTonZGl2JywgaWQ6ICdzYW1wbGUnLCB9KVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUVsZW1lbnQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJcbi8vIGltcG9ydCBteU5hbWUgZnJvbSAnLi9sYW5kaW5nLmpzJztcbmltcG9ydCBsYW5kaW5nIGZyb20gJy4vbGFuZGluZy5qcyc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgSG9tZUltYWdlIGZyb20gJy4vYXNzZXRzL2hvbWUucG5nJ1xuaW1wb3J0IE1lbnVJbWFnZSBmcm9tICcuL2Fzc2V0cy9tZW51LnBuZydcbmltcG9ydCBDb250YWN0SW1hZ2UgZnJvbSAnLi9hc3NldHMvY29udGFjdC5wbmcnXG5cblxuXG5cblxuXG5cblxuXG4vLyBjb25zdCBnYW1lQm9hcmQgPSAoKCkgPT4ge1xuXG4vLyAgICAgbGV0IF9nYW1lQm9hcmQgPSBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl07XG5cbi8vICAgICAvLyBSZXR1cm5zIGN1cnJlbnQgZ2FtZUJvYXJkXG4vLyAgICAgY29uc3QgZ2V0SW5mbyA9ICgpID0+IHtcbi8vICAgICAgICAgcmV0dXJuIF9nYW1lQm9hcmQ7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgZ2V0SW5mbyxcbi8vICAgICAgICAgdXBkYXRlR2FtZUJvYXJkLFxuLy8gICAgICAgICByZXNldEdhbWVCb2FyZCxcbi8vICAgICAgICAgbG9nQm9hcmQsIFxuLy8gICAgIH1cbi8vIH0pKCk7XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcblxuICAgIGxldCBfc2FtcGxlID0gXCJ3aGF0J3MgaGFwcGVuaW5nXCI7XG5cbiAgICBjb25zdCBfaGFtYnVyZ2VyTWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IF9ob21lSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBfbWVudUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgX2NvbnRhY3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgY29uc3QgX2NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgX2RyYXdIYW1idXJnZXJNZW51KClcbiAgICAgICAgX2FkZEhhbWJ1cmdlckV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIF9ob21lSW1hZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChsYW5kaW5nKCkpO1xuICAgIH1cblxuXG5cbiAgICBjb25zdCBfZHJhd0hhbWJ1cmdlck1lbnUgPSAoKSA9PiB7XG4gICAgICAgIF9oYW1idXJnZXJNZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hhbWJ1cmdlci1tZW51LWNvbnRhaW5lcicpO1xuICAgICAgICAvLyBfaGFtYnVyZ2VyTWVudUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIkJvbGxvY2tzXCJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQtY29udGFpbmVyJykuaW5zZXJ0QmVmb3JlKF9oYW1idXJnZXJNZW51Q29udGFpbmVyLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIF9ob21lSW1hZ2UuY2xhc3NMaXN0LmFkZCgnaGFtYnVyZ2VyLWltYWdlJyk7XG4gICAgICAgIF9ob21lSW1hZ2UuaWQgPSBcImhvbWUtaW1hZ2VcIlxuICAgICAgICBfaG9tZUltYWdlLnNyYyA9IEhvbWVJbWFnZTtcbiAgICAgICAgX2hvbWVJbWFnZS5hbHQgPSBcIkFuIGltYWdlIG9mIGEgaG91c2UsIGluZGljYXRpbmcgaG9tZVwiO1xuICAgICAgICAvLyBob21lSW1hZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgX2hhbWJ1cmdlck1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoX2hvbWVJbWFnZSk7XG4gICAgICAgIFxuICAgICAgICBfbWVudUltYWdlLmNsYXNzTGlzdC5hZGQoJ2hhbWJ1cmdlci1pbWFnZScpO1xuICAgICAgICBfbWVudUltYWdlLmlkID0gXCJtZW51LWltYWdlXCJcbiAgICAgICAgX21lbnVJbWFnZS5zcmMgPSBNZW51SW1hZ2U7XG4gICAgICAgIF9tZW51SW1hZ2UuYWx0ID0gXCJBbiBpbWFnZSBvZiBhIGZvcmsgYW5kIGtuaWZlLCBpbmRpY2F0aW5nIG1lbnVcIjtcbiAgICAgICAgX2hhbWJ1cmdlck1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoX21lbnVJbWFnZSk7XG4gICAgICAgIFxuICAgICAgICBfY29udGFjdEltYWdlLmNsYXNzTGlzdC5hZGQoJ2hhbWJ1cmdlci1pbWFnZScpO1xuICAgICAgICBfY29udGFjdEltYWdlLmlkID0gXCJjb250YWN0LWltYWdlXCJcbiAgICAgICAgX2NvbnRhY3RJbWFnZS5zcmMgPSBDb250YWN0SW1hZ2U7XG4gICAgICAgIF9jb250YWN0SW1hZ2UuYWx0ID0gXCJBbiBpbWFnZSBvZiBhIHBob25lLCBpbmRpY2F0aW5nIG5hdmlnYXRpb24gdG8gdGhlIENvbnRhY3QgcGFnZVwiO1xuICAgICAgICBfaGFtYnVyZ2VyTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChfY29udGFjdEltYWdlKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgX2FkZEhhbWJ1cmdlckV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBsZXQgaW1hZ2VBcnIgPSBbX2hvbWVJbWFnZSwgX21lbnVJbWFnZSwgX2NvbnRhY3RJbWFnZV07XG4gICAgICAgIGltYWdlQXJyLmZvckVhY2goIGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBfc2V0SW1hZ2VzRGVzZWxlY3RlZCgpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50LmlkKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBzd2l0Y2goZWxlbWVudC5pZCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdob21lLWltYWdlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKF9jb250ZW50LmNoaWxkTm9kZXNbMV0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihfY29udGVudC5jaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRlbnQucmVtb3ZlQ2hpbGQoX2NvbnRlbnQuY2hpbGROb2Rlc1sxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRlbnQuYXBwZW5kQ2hpbGQobGFuZGluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdtZW51LWltYWdlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKF9jb250ZW50LmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGVudC5yZW1vdmVDaGlsZChfY29udGVudC5jaGlsZE5vZGVzWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGVudC5hcHBlbmRDaGlsZChtZW51KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NvbnRhY3QtaW1hZ2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoX2NvbnRlbnQuY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZW50LnJlbW92ZUNoaWxkKF9jb250ZW50LmNoaWxkTm9kZXNbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgX3NldEltYWdlc0Rlc2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgICAgIF9ob21lSW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgX21lbnVJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICBfY29udGFjdEltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SW5mbyA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgZGlzcGxheUNvbnRyb2xsZXJzIGdldEluZm8oKSAnICsgX3NhbXBsZSlcbiAgICAgICAgcmV0dXJuIF9zYW1wbGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdCxcbiAgICAgICAgZ2V0SW5mbyxcbiAgICB9XG5cbn0pKCk7XG5cblxuZGlzcGxheUNvbnRyb2xsZXIuZ2V0SW5mbygpO1xuZGlzcGxheUNvbnRyb2xsZXIuaW5pdCgpO1xuXG5jb25zb2xlLmxvZyhkaXNwbGF5Q29udHJvbGxlcik7XG5cblxuXG5cblxuXG5cblxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChsYW5kaW5nKCkpO1xuXG5cblxuLy8gZnVuY3Rpb24gY29tcG9uZW50KCkge1xuLy8gICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICAvLyBjb25zdCBidG4gPSBcblxuLy8gICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gbXlOYW1lKCdXb25rZXJzJyk7XG4vLyAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaScpO1xuICAgIFxuLy8gICAgIHJldHVybiBlbGVtZW50O1xuLy8gfVxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG5cblxuLy8gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpKTtcblxuXG5cblxuXG5cblxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsYW5kaW5nKCkpO1xuXG5cbi8vIFRPIERPXG4vLyBlc3RhYmxpc2ggdGFiIHN3aXRjaGluZyBmdW5jdGlvbmFsaXR5IG9uIGluZGV4LmpzXG4vLyBSZWJ1aWxkIGxhbmRpbmcgLyBmcm9udCBwYWdlXG4vLyBCdWlsZCBtZW51IHBhZ2Vcbi8vIEJ1aWxkIGNvbnRhY3QgcGFnZVxuLy8gYnVpbGQgQ1NTIHNvIGNvbnRlbnQgY2FuIGp1c3QgYmUgcGx1ZyAmIHBsYXllZFxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==