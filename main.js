/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.boardContainer {
    height: 800px;
    width: 800px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
}

.boardSquare {
    height: 100px;
    width: 100px;
    margin: 0;
    padding: 0;
}

.green {
    background-color: rgb(77, 148, 77);
}

img {
    margin: 0;
    padding: 0;
    height: inherit;
}

line {
    transform-origin: 0px 0px;
    stroke: red;
    stroke-width: 2;
}

.line {
    background-color: red;
    border-bottom: 2px solid red;
    width: 225px;
    position: absolute;
}

.lineContainer {
    position: absolute;
    top: 0;
    left: 0;
    height: 800px;
    width: 800px;
}

:not(svg){
    transform-origin: 0px 0px;
}

svg {
    position: absolute;
    top: 0;
    left: 0;
    height: 800px;
    width: 800px;
}

.tan {
    background-color: rgb(174, 204, 150);
}

`, "",{"version":3,"sources":["webpack://./src/stylesheets/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,qCAAqC;IACrC,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,4BAA4B;IAC5B,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC","sourcesContent":[".boardContainer {\n    height: 800px;\n    width: 800px;\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n}\n\n.boardSquare {\n    height: 100px;\n    width: 100px;\n    margin: 0;\n    padding: 0;\n}\n\n.green {\n    background-color: rgb(77, 148, 77);\n}\n\nimg {\n    margin: 0;\n    padding: 0;\n    height: inherit;\n}\n\nline {\n    transform-origin: 0px 0px;\n    stroke: red;\n    stroke-width: 2;\n}\n\n.line {\n    background-color: red;\n    border-bottom: 2px solid red;\n    width: 225px;\n    position: absolute;\n}\n\n.lineContainer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 800px;\n    width: 800px;\n}\n\n:not(svg){\n    transform-origin: 0px 0px;\n}\n\nsvg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 800px;\n    width: 800px;\n}\n\n.tan {\n    background-color: rgb(174, 204, 150);\n}\n\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/stylesheets/style.css":
/*!***********************************!*\
  !*** ./src/stylesheets/style.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/images/chessKnight.png":
/*!************************************!*\
  !*** ./src/images/chessKnight.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ff7e2d981eddb0bb80d.png";

/***/ }),

/***/ "./src/images/star.png":
/*!*****************************!*\
  !*** ./src/images/star.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c89c15de42c1f29e4bdf.png";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./src/js.ts ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/style.css */ "./src/stylesheets/style.css");
/* harmony import */ var _images_chessKnight_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/chessKnight.png */ "./src/images/chessKnight.png");
/* harmony import */ var _images_star_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/star.png */ "./src/images/star.png");



function buildBoard() {
    var body = document.querySelector('body');
    var boardContainer = document.createElement('div');
    boardContainer.setAttribute('class', 'boardContainer');
    //let svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    /* svg.setAttribute('height', '800px');
    svg.setAttribute('width', '800px'); */
    var lineContainer = document.createElement('div');
    lineContainer.classList.add('lineContainer');
    body.appendChild(boardContainer);
    //body!.appendChild(svg);
    body.appendChild(lineContainer);
    //let boardContainer = document.querySelector('.boardContainer');
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var boardSquare = document.createElement('div');
            var id = j + ',' + i;
            boardSquare.classList.add('boardSquare');
            boardSquare.setAttribute('id', id);
            if (i % 2 === 0) {
                j % 2 === 0 ? boardSquare.classList.add('green') : boardSquare.classList.add('tan');
            }
            else {
                j % 2 === 0 ? boardSquare.classList.add('tan') : boardSquare.classList.add('green');
            }
            boardContainer.appendChild(boardSquare);
        }
    }
    //Section for non-console path details
    document.body.appendChild(document.createElement('h1'));
}
var Node = /** @class */ (function () {
    function Node(pos) {
        this.pos = pos;
        this.left2Up1 = null;
        this.left1Up2 = null;
        this.left2Down1 = null;
        this.left1Down2 = null;
        this.right2Up1 = null;
        this.right1Up2 = null;
        this.right2Down1 = null;
        this.right1Down2 = null;
    }
    return Node;
}());
var Graph = /** @class */ (function () {
    function Graph(position, end) {
        this.visited = [];
        this.root = this.buildGraph(position, end, []);
        this.end = end;
    }
    Graph.prototype.buildGraph = function (start, end, queue) {
        //First check for valid input
        if (!this.isValid(start, end)) {
            console.log("Invalid start or end point");
            return null;
        }
        //Push start onto queue and visited
        var node = new Node(start);
        queue.push(node);
        this.visited.push(node.pos.toString());
        while (queue.length > 0) {
            queue = this.findValidChildren(queue[0], queue[0].pos, end, queue);
            queue = queue.slice(1);
        }
        return node;
    };
    Graph.prototype.findValidChildren = function (node, start, end, queue) {
        //Attach first child onto start if it's a new board position
        var r1u2 = [start[0] + 1, start[1] + 2];
        if (!this.isValid(r1u2, end) || (this.visited.indexOf(r1u2.toString()) !== -1)) {
            node.right1Up2 = null;
        }
        else {
            node.right1Up2 = new Node(r1u2);
            //Push first child onto queue and update visited
            queue.push(node.right1Up2);
            this.visited.push(node.right1Up2.pos.toString());
        }
        //And repeat for all potential children
        var r2u1 = [start[0] + 2, start[1] + 1];
        if (!this.isValid(r2u1, end) || (this.visited.indexOf(r2u1.toString()) !== -1)) {
            node.right2Up1 = null;
        }
        else {
            node.right2Up1 = new Node(r2u1);
            queue.push(node.right2Up1);
            this.visited.push(node.right2Up1.pos.toString());
        }
        var r2d1 = [start[0] + 2, start[1] - 1];
        if (!this.isValid(r2d1, end) || (this.visited.indexOf(r2d1.toString()) !== -1)) {
            node.right2Down1 = null;
        }
        else {
            node.right2Down1 = new Node(r2d1);
            queue.push(node.right2Down1);
            this.visited.push(node.right2Down1.pos.toString());
        }
        var r1d2 = [start[0] + 1, start[1] - 2];
        if (!this.isValid(r1d2, end) || (this.visited.indexOf(r1d2.toString()) !== -1)) {
            node.right1Down2 = null;
        }
        else {
            node.right1Down2 = new Node(r1d2);
            queue.push(node.right1Down2);
            this.visited.push(node.right1Down2.pos.toString());
        }
        var l2d1 = [start[0] - 2, start[1] - 1];
        if (!this.isValid(l2d1, end) || (this.visited.indexOf(l2d1.toString()) !== -1)) {
            node.left2Down1 = null;
        }
        else {
            node.left2Down1 = new Node(l2d1);
            queue.push(node.left2Down1);
            this.visited.push(node.left2Down1.pos.toString());
        }
        var l1d2 = [start[0] - 1, start[1] - 2];
        if (!this.isValid(l1d2, end) || (this.visited.indexOf(l1d2.toString()) !== -1)) {
            node.left1Down2 = null;
        }
        else {
            node.left1Down2 = new Node(l1d2);
            queue.push(node.left1Down2);
            this.visited.push(node.left1Down2.pos.toString());
        }
        var l2u1 = [start[0] - 2, start[1] + 1];
        if (!this.isValid(l2u1, end) || (this.visited.indexOf(l2u1.toString()) !== -1)) {
            node.left2Up1 = null;
        }
        else {
            node.left2Up1 = new Node(l2u1);
            queue.push(node.left2Up1);
            this.visited.push(node.left2Up1.pos.toString());
        }
        var l1u2 = [start[0] - 1, start[1] + 2];
        if (!this.isValid(l1u2, end) || (this.visited.indexOf(l1u2.toString()) !== -1)) {
            node.left1Up2 = null;
        }
        else {
            node.left1Up2 = new Node(l1u2);
            queue.push(node.left1Up2);
            this.visited.push(node.left1Up2.pos.toString());
        }
        return queue;
    };
    Graph.prototype.isValid = function (start, end) {
        return start.length === 2 && end.length === 2 && start[0] <= 7 && start[0] >= 0 && start[1] <= 7 && start[1] >= 0 && end[0] <= 7 && end[0] >= 0 && end[1] <= 7 && end[1] >= 0;
    };
    Graph.prototype.knightMoves = function (node, end, path) {
        path.push(node);
        if (node.pos.toString() == end.toString()) {
            this.printPath(path);
            return path;
        }
        if (node.right1Up2 !== null) {
            this.knightMoves(node.right1Up2, end, path);
        }
        if (node.right2Up1 !== null) {
            this.knightMoves(node.right2Up1, end, path);
        }
        if (node.right2Down1 !== null) {
            this.knightMoves(node.right2Down1, end, path);
        }
        if (node.right1Down2 !== null) {
            this.knightMoves(node.right1Down2, end, path);
        }
        if (node.left1Down2 !== null) {
            this.knightMoves(node.left1Down2, end, path);
        }
        if (node.left2Down1 !== null) {
            this.knightMoves(node.left2Down1, end, path);
        }
        if (node.left2Up1 !== null) {
            this.knightMoves(node.left2Up1, end, path);
        }
        if (node.left1Up2 !== null) {
            this.knightMoves(node.left1Up2, end, path);
        }
        path.pop();
        return path;
    };
    Graph.prototype.printPath = function (path) {
        //For the Console
        var printout = "Path found! ";
        for (var i = 0; i < path.length; i++) {
            printout += '[' + path[i].pos + '] -> ';
        }
        printout += (path.length - 1) + ' moves';
        console.log(printout);
        //For Non-console reading
        document.querySelector('h1').textContent = printout;
        var p = document.createElement('p');
        p.textContent = "Refresh the page to see a new path";
        document.querySelector('h1').appendChild(p);
        //For the visual
        //Place start and end points
        var startSquare = document.getElementById(path[0].pos.toString());
        var endSquare = document.getElementById(path.at(-1).pos.toString());
        var pic = document.createElement('img');
        var star = document.createElement('img');
        pic.setAttribute('src', _images_chessKnight_png__WEBPACK_IMPORTED_MODULE_1__); //'./images/chessKnight.png');
        star.setAttribute('src', _images_star_png__WEBPACK_IMPORTED_MODULE_2__); //'./images/star.png');
        startSquare.appendChild(pic);
        endSquare.appendChild(star);
        //Draw Connecting lines
        //let svg = document.querySelector('svg')!;
        var lineContainer = document.querySelector('.lineContainer');
        for (var i = 0; i < path.length - 1; i++) {
            //Find Center of Square Divs
            var init = document.getElementById(path.at(i).pos.toString());
            var initCentX = init.offsetLeft + init.offsetWidth / 2;
            var initCentY = init.offsetTop + init.offsetHeight / 2;
            //let next = document.getElementById(path.at(i+1).pos);
            //let nextCentX = next.offsetLeft + next.offsetWidth / 2;
            //let nextCentY = next.offsetTop + next.offsetHeight / 2;
            //Draw the line between centers
            /* let line = document.createElementNS('http://www.w3.org/2000/svg','line');
            line.setAttribute('x1', initCentX);
            line.setAttribute('y1', initCentY);
            line.setAttribute('x2', nextCentX);
            line.setAttribute('y2', nextCentY); */
            /* let classToAdd = 'line' + i; */
            var line = document.createElement('div');
            line.classList.add('line');
            line.style.transform += 'translateX(' + (initCentX) + 'px)';
            line.style.transform += 'translateY(' + initCentY + 'px)';
            if (path[i].pos[1] > path[i + 1].pos[1]) {
                //Negetive Degrees
                switch (path[i].pos[0] - path[i + 1].pos[0]) {
                    case -1:
                        line.style.transform += 'rotate(-63deg)';
                        break;
                    case -2:
                        line.style.transform += 'rotate(-27deg)';
                        break;
                    case 1:
                        line.style.transform += 'rotate(-115deg)';
                        break;
                    case 2:
                        line.style.transform += 'rotate(-155deg)';
                        break;
                    default:
                        console.log("Error in Negetive Degrees");
                }
            }
            else {
                //Positive Degrees
                switch (path[i].pos[0] - path[i + 1].pos[0]) {
                    case -1:
                        line.style.transform += 'rotate(63deg)';
                        break;
                    case -2:
                        line.style.transform += 'rotate(27deg)';
                        break;
                    case 1:
                        line.style.transform += 'rotate(115deg)';
                        break;
                    case 2:
                        line.style.transform += 'rotate(155deg)';
                        break;
                    default:
                        console.log("Error in Positive Degrees");
                }
            }
            //line.style.transform = 'rotate(30deg)';
            /* line.setAttribute('left', initCentY+'px');
            line.setAttribute('bottom', nextCentX+'px');
            line.setAttribute('right', nextCentY+'px'); */
            //svg?.appendChild(line);
            lineContainer === null || lineContainer === void 0 ? void 0 : lineContainer.appendChild(line);
        }
        //document.querySelector('body')!.appendChild(svg);
    };
    return Graph;
}());
buildBoard();
//Hard-coded coordinates for testing routes
//const knight = new Graph([0, 0], [3, 3]);
//const knight2 = new Graph([3, 3], [4, 3]);
//knight2.knightMoves(knight2.root, [4, 3], []);
//Knight is random coordinates on refresh
var knight = new Graph([Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)], [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)]);
knight.knightMoves(knight.root, knight.end, []);

})();

/******/ })()
;
//# sourceMappingURL=main.js.map