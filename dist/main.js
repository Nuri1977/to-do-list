/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/class-todo.js":
/*!***********************************!*\
  !*** ./src/modules/class-todo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  constructor(description, arr) {
    this.description = description;
    this.completed = false;
    this.index = arr.length + 1;
  }

}

/***/ }),

/***/ "./src/modules/crud.js":
/*!*****************************!*\
  !*** ./src/modules/crud.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "editTodo": () => (/* binding */ editTodo)
/* harmony export */ });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ "./src/modules/store.js");
/* harmony import */ var _class_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-todo.js */ "./src/modules/class-todo.js");


function addTodo(addInput) {
  if (addInput.value !== '') {
    const todos = _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTodos();
    const newTodo = new _class_todo_js__WEBPACK_IMPORTED_MODULE_1__["default"](addInput.value, todos);
    console.log(newTodo);
    todos.push(newTodo);
    console.log(todos);
    _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].setTodos(todos);
  } else {
    alert('Canot add emty field');
  }
}
function editTodo(todos, editId, inputItem) {
  for (let i = 0; i < todos.length; i += 1) {
    if (todos[i].index === +editId) {
      todos[i].description = inputItem.value.trim();
    }
  }
}

/***/ }),

/***/ "./src/modules/store.js":
/*!******************************!*\
  !*** ./src/modules/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Store)
/* harmony export */ });
const storeTodos = localStorage.getItem('todosStore');
class Store {
  static getTodos = () => {
    if (storeTodos) {
      return JSON.parse(storeTodos);
    }

    return [];
  };
  static setTodos = todos => {
    localStorage.setItem('todosStore', JSON.stringify(todos));
  };
  static updateIndex = todos => {
    todos.forEach((element, index) => {
      element.index = index + 1;
    });
  };
}

/***/ }),

/***/ "./src/modules/update.js":
/*!*******************************!*\
  !*** ./src/modules/update.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateTodo)
/* harmony export */ });
function updateTodo(checkBox, todos, checkId) {
  if (checkBox.classList.contains('checkbox')) {
    if (checkBox.checked === true) {
      for (let i = 0; i < todos.length; i += 1) {
        if (todos[i].index === +checkId) {
          todos[i].completed = true;
          localStorage.setItem('todosStore', JSON.stringify(todos));
        }
      }
    } else {
      for (let i = 0; i < todos.length; i += 1) {
        if (todos[i].index === +checkId) {
          todos[i].completed = false;
          localStorage.setItem('todosStore', JSON.stringify(todos));
        }
      }
    }
  }
}

/***/ }),

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-color: lightgray;\n}\n\n.main {\n  max-width: 400px;\n  margin: 30px auto;\n  text-align: center;\n  padding: 12px;\n}\n\nh1 {\n  padding: 20px;\n  margin-bottom: 30px;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  background-color: snow;\n  box-shadow: 5px 10px 18px #888;\n}\n\n.card-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 40px;\n  padding: 0 12px;\n  border: 1px solid lightgray;\n  font-weight: normal;\n}\n\n.card-ul {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: normal;\n}\n\n.list-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid lightgray;\n  padding: 0 12px;\n  width: 100%;\n  height: 40px;\n}\n\n.todo-item {\n  text-align: left;\n  flex: 1;\n  padding: 0 6px;\n  font-weight: normal;\n}\n\n.input-task {\n  padding: 5px 0;\n  font-size: 14px;\n  border: none;\n  flex: 1;\n}\n\n.input-task1 {\n  padding: 5px;\n  font-size: 16px;\n  border: none;\n  flex: 1;\n}\n\n.input-task:focus,\n.input-task1:focus {\n  outline: none;\n}\n\n.btn-item {\n  padding: 0;\n}\n\n.btn-remove {\n  border: none;\n  cursor: pointer;\n}\n\n.btn {\n  width: 100%;\n  height: 100%;\n  border: none;\n  cursor: pointer;\n}\n\n.fa-trash-alt,\n.fa-sync-alt,\n.fa-plus {\n  cursor: pointer;\n  font-size: 24px;\n  color: #575454;\n}\n\n.textedit {\n  background: honeydew;\n}\n\n.list-item input:checked + input {\n  text-decoration: line-through;\n}\n\n.hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,2BAA2B;EAC3B,eAAe;EACf,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,OAAO;EACP,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,YAAY;EACZ,OAAO;AACT;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,OAAO;AACT;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,eAAe;AACjB;;AAEA;;;EAGE,eAAe;EACf,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf","sourcesContent":["* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-color: lightgray;\n}\n\n.main {\n  max-width: 400px;\n  margin: 30px auto;\n  text-align: center;\n  padding: 12px;\n}\n\nh1 {\n  padding: 20px;\n  margin-bottom: 30px;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  background-color: snow;\n  box-shadow: 5px 10px 18px #888;\n}\n\n.card-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 40px;\n  padding: 0 12px;\n  border: 1px solid lightgray;\n  font-weight: normal;\n}\n\n.card-ul {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: normal;\n}\n\n.list-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid lightgray;\n  padding: 0 12px;\n  width: 100%;\n  height: 40px;\n}\n\n.todo-item {\n  text-align: left;\n  flex: 1;\n  padding: 0 6px;\n  font-weight: normal;\n}\n\n.input-task {\n  padding: 5px 0;\n  font-size: 14px;\n  border: none;\n  flex: 1;\n}\n\n.input-task1 {\n  padding: 5px;\n  font-size: 16px;\n  border: none;\n  flex: 1;\n}\n\n.input-task:focus,\n.input-task1:focus {\n  outline: none;\n}\n\n.btn-item {\n  padding: 0;\n}\n\n.btn-remove {\n  border: none;\n  cursor: pointer;\n}\n\n.btn {\n  width: 100%;\n  height: 100%;\n  border: none;\n  cursor: pointer;\n}\n\n.fa-trash-alt,\n.fa-sync-alt,\n.fa-plus {\n  cursor: pointer;\n  font-size: 24px;\n  color: #575454;\n}\n\n.textedit {\n  background: honeydew;\n}\n\n.list-item input:checked + input {\n  text-decoration: line-through;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/crud.js */ "./src/modules/crud.js");
/* harmony import */ var _modules_update_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/update.js */ "./src/modules/update.js");
/* harmony import */ var _modules_class_todo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/class-todo.js */ "./src/modules/class-todo.js");
/* harmony import */ var _modules_store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/store.js */ "./src/modules/store.js");






const renderList = () => {
  const todoList = document.getElementById('todo-list');
  const todos = _modules_store_js__WEBPACK_IMPORTED_MODULE_4__["default"].getTodos();
  todoList.innerHTML = '';

  for (let i = 0; i < todos.length; i += 1) {
    const content = `
    <li class="list-item" id="list${todos[i].index}" >
      <input id="${todos[i].index}" class="checkbox" type="checkbox" name="vehicle1" ${todos[i].completed ? 'checked' : ''}>
      <input id="${todos[i].index}" class="input-task1" type="text" readonly value="${todos[i].description}"/>
      <button id="${todos[i].index}" class="btn-remove edit">
        <i id="${todos[i].index}" class="fas fa-ellipsis-v edit"></i>
      </button>
      <button id="${todos[i].index}" class="btn-remove delete hidden">
        <i id="${todos[i].index}" class="fas fa-trash-alt delete"></i>
      </button>
    </li>
    `;
    todoList.innerHTML += content;
  }
};

const newTodo = () => {
  const addBtn = document.getElementById('add-btn');
  const addInput = document.getElementById('todo-input');
  addBtn.addEventListener('click', () => {
    (0,_modules_crud_js__WEBPACK_IMPORTED_MODULE_1__.addTodo)(addInput);
    addInput.value = '';
    renderList();
  });
};
/*  EVENT LISTENERS add */

/*
const addBtn = document.getElementById('add-btn');
const addInput = document.getElementById('todo-input');
addBtn.addEventListener('click', () => {
  addTodo(addInput, todos, Todo);
  addInput.value = '';
  localStorage.setItem('todosStore', JSON.stringify(todos));
  renderList();
});

addInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addBtn.click();
  }
});
*/

/*  EVENT LISTENERS remove */

/*
todoList.addEventListener('click', (event) => {
  const listItem = event.target;
  const listId = (listItem.id);
  const deleteId = listId.substring(4);
  const test = listId.startsWith('list');
  if (test === true) {
    listItem.remove();
    todos = todos.filter((element) => element.index !== +deleteId);
    localStorage.setItem('todosStore', JSON.stringify(todos));
    renderList();
  }
});
*/

/*  EVENT LISTENERS edit */

/*
todoList.addEventListener('click', (event) => {
  const inputField = event.target;
  const listItem = (event.path[1]);
  const deleteBtn = listItem.childNodes[7];
  const editBtn = listItem.childNodes[5];
  if (inputField.classList.contains('input-task1')) {
    editBtn.classList.add('hidden');
    deleteBtn.classList.remove('hidden');
    inputField.classList.add('textedit');
    inputField.readOnly = false;
    inputField.focus();
    inputField.setSelectionRange(inputField.value.length, inputField.value.length);
  }
});

todoList.addEventListener('keyup', (event) => {
  const editId = event.target.id;
  const inputItem = event.target;
  editTodo(todos, editId, inputItem);
  localStorage.setItem('todosStore', JSON.stringify(todos));
});

todoList.addEventListener('focusout', (event) => {
  const inputField = event.target;
  const listItem = inputField.parentElement;
  if (inputField.classList.contains('input-task1')) {
    const editBtn = listItem.childNodes[5];
    const deleteBtn = listItem.childNodes[7];
    editBtn.classList.remove('hidden');
    deleteBtn.classList.add('hidden');
    inputField.classList.remove('textedit');
    inputField.readOnly = true;
  }
});
*/

/*  EVENT LISTENERS checkbox */

/*
todoList.addEventListener('input', (event) => {
  const checkBox = event.target;
  const checkId = checkBox.id;
  updateTodo(checkBox, todos, checkId);
});
*/

/*
/*  EVENT LISTENERS remove completed */

/*
const removeCompleted = document.getElementById('remove-completed');
removeCompleted.addEventListener('click', () => {
  todos = todos.filter((element) => element.completed !== true);
  localStorage.setItem('todosStore', JSON.stringify(todos));
  renderList();
});
*/


const initApp = () => {
  renderList();
  newTodo();
};

initApp();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxNQUFNUSxPQUFPLEdBQUcsTUFBTTtBQUNwQlIsRUFBQUEsVUFBVTtBQUNWM0IsRUFBQUEsT0FBTztBQUNSLENBSEQ7O0FBS0FtQyxPQUFPLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWNyb3ZlcnNlLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvY2xhc3MtdG9kby5qcyIsIndlYnBhY2s6Ly9taWNyb3ZlcnNlLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvY3J1ZC5qcyIsIndlYnBhY2s6Ly9taWNyb3ZlcnNlLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vbWljcm92ZXJzZS10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly9taWNyb3ZlcnNlLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9taWNyb3ZlcnNlLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9taWNyb3ZlcnNlLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbWljcm92ZXJzZS10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9taWNyb3ZlcnNlLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21pY3JvdmVyc2UtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL21pY3JvdmVyc2UtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWljcm92ZXJzZS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9taWNyb3ZlcnNlLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbWljcm92ZXJzZS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21pY3JvdmVyc2UtdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWljcm92ZXJzZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9taWNyb3ZlcnNlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9taWNyb3ZlcnNlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWljcm92ZXJzZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21pY3JvdmVyc2UtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBhcnIpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmluZGV4ID0gYXJyLmxlbmd0aCArIDE7XG4gIH1cbn0iLCJpbXBvcnQgU3RvcmUgZnJvbSAnLi9zdG9yZS5qcyc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL2NsYXNzLXRvZG8uanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9kbyhhZGRJbnB1dCkge1xuICBpZiAoYWRkSW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgY29uc3QgdG9kb3MgPSBTdG9yZS5nZXRUb2RvcygpO1xuICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhhZGRJbnB1dC52YWx1ZSwgdG9kb3MpO1xuICAgIGNvbnNvbGUubG9nKG5ld1RvZG8pO1xuICAgIHRvZG9zLnB1c2gobmV3VG9kbyk7XG4gICAgY29uc29sZS5sb2codG9kb3MpO1xuICAgIFN0b3JlLnNldFRvZG9zKHRvZG9zKTtcbiAgfSBlbHNlIHtcbiAgICBhbGVydCgnQ2Fub3QgYWRkIGVtdHkgZmllbGQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRvZG8odG9kb3MsIGVkaXRJZCwgaW5wdXRJdGVtKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodG9kb3NbaV0uaW5kZXggPT09ICtlZGl0SWQpIHtcbiAgICAgIHRvZG9zW2ldLmRlc2NyaXB0aW9uID0gaW5wdXRJdGVtLnZhbHVlLnRyaW0oKTtcbiAgICB9XG4gIH1cbn0iLCJjb25zdCBzdG9yZVRvZG9zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zU3RvcmUnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUge1xuICBzdGF0aWMgZ2V0VG9kb3MgPSAoKSA9PiB7XG4gICAgaWYgKHN0b3JlVG9kb3MpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0b3JlVG9kb3MpO1xuICAgIH0gcmV0dXJuIFtdO1xuICB9O1xuXG4gIHN0YXRpYyBzZXRUb2RvcyA9ICh0b2RvcykgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2Rvc1N0b3JlJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVJbmRleCA9ICh0b2RvcykgPT4ge1xuICAgIHRvZG9zLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBlbGVtZW50LmluZGV4ID0gaW5kZXggKyAxO1xuICAgIH0pO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlVG9kbyhjaGVja0JveCwgdG9kb3MsIGNoZWNrSWQpIHtcbiAgaWYgKGNoZWNrQm94LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tib3gnKSkge1xuICAgIGlmIChjaGVja0JveC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0b2Rvc1tpXS5pbmRleCA9PT0gK2NoZWNrSWQpIHtcbiAgICAgICAgICB0b2Rvc1tpXS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2Rvc1N0b3JlJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0b2Rvc1tpXS5pbmRleCA9PT0gK2NoZWNrSWQpIHtcbiAgICAgICAgICB0b2Rvc1tpXS5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3NTdG9yZScsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5tYWluIHtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBtYXJnaW46IDMwcHggYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbmgxIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHNub3c7XFxuICBib3gtc2hhZG93OiA1cHggMTBweCAxOHB4ICM4ODg7XFxufVxcblxcbi5jYXJkLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBwYWRkaW5nOiAwIDEycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uY2FyZC11bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4ubGlzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgcGFkZGluZzogMCAxMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nOiAwIDZweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5pbnB1dC10YXNrIHtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmlucHV0LXRhc2sxIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5pbnB1dC10YXNrOmZvY3VzLFxcbi5pbnB1dC10YXNrMTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYnRuLWl0ZW0ge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmJ0bi1yZW1vdmUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmEtdHJhc2gtYWx0LFxcbi5mYS1zeW5jLWFsdCxcXG4uZmEtcGx1cyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjb2xvcjogIzU3NTQ1NDtcXG59XFxuXFxuLnRleHRlZGl0IHtcXG4gIGJhY2tncm91bmQ6IGhvbmV5ZGV3O1xcbn1cXG5cXG4ubGlzdC1pdGVtIGlucHV0OmNoZWNrZWQgKyBpbnB1dCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLE9BQU87QUFDVDs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLE9BQU87QUFDVDs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLm1haW4ge1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbjogMzBweCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuaDEge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogc25vdztcXG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDE4cHggIzg4ODtcXG59XFxuXFxuLmNhcmQtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNDBweDtcXG4gIHBhZGRpbmc6IDAgMTJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5jYXJkLXVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5saXN0LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBwYWRkaW5nOiAwIDEycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmc6IDAgNnB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLmlucHV0LXRhc2sge1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uaW5wdXQtdGFzazEge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmlucHV0LXRhc2s6Zm9jdXMsXFxuLmlucHV0LXRhc2sxOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5idG4taXRlbSB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYnRuLXJlbW92ZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYS10cmFzaC1hbHQsXFxuLmZhLXN5bmMtYWx0LFxcbi5mYS1wbHVzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiAjNTc1NDU0O1xcbn1cXG5cXG4udGV4dGVkaXQge1xcbiAgYmFja2dyb3VuZDogaG9uZXlkZXc7XFxufVxcblxcbi5saXN0LWl0ZW0gaW5wdXQ6Y2hlY2tlZCArIGlucHV0IHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgYWRkVG9kbywgZWRpdFRvZG8gfSBmcm9tICcuL21vZHVsZXMvY3J1ZC5qcyc7XG5pbXBvcnQgdXBkYXRlVG9kbyBmcm9tICcuL21vZHVsZXMvdXBkYXRlLmpzJztcbmltcG9ydCBUb2RvIGZyb20gJy4vbW9kdWxlcy9jbGFzcy10b2RvLmpzJztcbmltcG9ydCBTdG9yZSBmcm9tICcuL21vZHVsZXMvc3RvcmUuanMnO1xuXG5jb25zdCByZW5kZXJMaXN0ID0gKCkgPT4ge1xuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWxpc3QnKTtcbiAgY29uc3QgdG9kb3MgPSBTdG9yZS5nZXRUb2RvcygpO1xuXG4gIHRvZG9MaXN0LmlubmVySFRNTCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgY29udGVudCA9IGBcbiAgICA8bGkgY2xhc3M9XCJsaXN0LWl0ZW1cIiBpZD1cImxpc3Qke3RvZG9zW2ldLmluZGV4fVwiID5cbiAgICAgIDxpbnB1dCBpZD1cIiR7dG9kb3NbaV0uaW5kZXh9XCIgY2xhc3M9XCJjaGVja2JveFwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ2ZWhpY2xlMVwiICR7dG9kb3NbaV0uY29tcGxldGVkID8gJ2NoZWNrZWQnIDogJyd9PlxuICAgICAgPGlucHV0IGlkPVwiJHt0b2Rvc1tpXS5pbmRleH1cIiBjbGFzcz1cImlucHV0LXRhc2sxXCIgdHlwZT1cInRleHRcIiByZWFkb25seSB2YWx1ZT1cIiR7dG9kb3NbaV0uZGVzY3JpcHRpb259XCIvPlxuICAgICAgPGJ1dHRvbiBpZD1cIiR7dG9kb3NbaV0uaW5kZXh9XCIgY2xhc3M9XCJidG4tcmVtb3ZlIGVkaXRcIj5cbiAgICAgICAgPGkgaWQ9XCIke3RvZG9zW2ldLmluZGV4fVwiIGNsYXNzPVwiZmFzIGZhLWVsbGlwc2lzLXYgZWRpdFwiPjwvaT5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBpZD1cIiR7dG9kb3NbaV0uaW5kZXh9XCIgY2xhc3M9XCJidG4tcmVtb3ZlIGRlbGV0ZSBoaWRkZW5cIj5cbiAgICAgICAgPGkgaWQ9XCIke3RvZG9zW2ldLmluZGV4fVwiIGNsYXNzPVwiZmFzIGZhLXRyYXNoLWFsdCBkZWxldGVcIj48L2k+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2xpPlxuICAgIGA7XG4gICAgdG9kb0xpc3QuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XG4gIH1cbn07XG5cbmNvbnN0IG5ld1RvZG8gPSAoKSA9PiB7XG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYnRuJyk7XG4gIGNvbnN0IGFkZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8taW5wdXQnKTtcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZFRvZG8oYWRkSW5wdXQpO1xuICAgIGFkZElucHV0LnZhbHVlID0gJyc7XG4gICAgcmVuZGVyTGlzdCgpO1xuICB9KTtcbn07XG5cbi8qICBFVkVOVCBMSVNURU5FUlMgYWRkICovXG4vKlxuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1idG4nKTtcbmNvbnN0IGFkZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8taW5wdXQnKTtcbmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYWRkVG9kbyhhZGRJbnB1dCwgdG9kb3MsIFRvZG8pO1xuICBhZGRJbnB1dC52YWx1ZSA9ICcnO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3NTdG9yZScsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gIHJlbmRlckxpc3QoKTtcbn0pO1xuXG5hZGRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGRCdG4uY2xpY2soKTtcbiAgfVxufSk7XG4qL1xuXG4vKiAgRVZFTlQgTElTVEVORVJTIHJlbW92ZSAqL1xuLypcbnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGxpc3RJdGVtID0gZXZlbnQudGFyZ2V0O1xuICBjb25zdCBsaXN0SWQgPSAobGlzdEl0ZW0uaWQpO1xuICBjb25zdCBkZWxldGVJZCA9IGxpc3RJZC5zdWJzdHJpbmcoNCk7XG4gIGNvbnN0IHRlc3QgPSBsaXN0SWQuc3RhcnRzV2l0aCgnbGlzdCcpO1xuICBpZiAodGVzdCA9PT0gdHJ1ZSkge1xuICAgIGxpc3RJdGVtLnJlbW92ZSgpO1xuICAgIHRvZG9zID0gdG9kb3MuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LmluZGV4ICE9PSArZGVsZXRlSWQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2Rvc1N0b3JlJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgICByZW5kZXJMaXN0KCk7XG4gIH1cbn0pO1xuKi9cblxuLyogIEVWRU5UIExJU1RFTkVSUyBlZGl0ICovXG4vKlxudG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgaW5wdXRGaWVsZCA9IGV2ZW50LnRhcmdldDtcbiAgY29uc3QgbGlzdEl0ZW0gPSAoZXZlbnQucGF0aFsxXSk7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGxpc3RJdGVtLmNoaWxkTm9kZXNbN107XG4gIGNvbnN0IGVkaXRCdG4gPSBsaXN0SXRlbS5jaGlsZE5vZGVzWzVdO1xuICBpZiAoaW5wdXRGaWVsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0LXRhc2sxJykpIHtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoJ3RleHRlZGl0Jyk7XG4gICAgaW5wdXRGaWVsZC5yZWFkT25seSA9IGZhbHNlO1xuICAgIGlucHV0RmllbGQuZm9jdXMoKTtcbiAgICBpbnB1dEZpZWxkLnNldFNlbGVjdGlvblJhbmdlKGlucHV0RmllbGQudmFsdWUubGVuZ3RoLCBpbnB1dEZpZWxkLnZhbHVlLmxlbmd0aCk7XG4gIH1cbn0pO1xuXG50b2RvTGlzdC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICBjb25zdCBlZGl0SWQgPSBldmVudC50YXJnZXQuaWQ7XG4gIGNvbnN0IGlucHV0SXRlbSA9IGV2ZW50LnRhcmdldDtcbiAgZWRpdFRvZG8odG9kb3MsIGVkaXRJZCwgaW5wdXRJdGVtKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zU3RvcmUnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xufSk7XG5cbnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGlucHV0RmllbGQgPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IGxpc3RJdGVtID0gaW5wdXRGaWVsZC5wYXJlbnRFbGVtZW50O1xuICBpZiAoaW5wdXRGaWVsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0LXRhc2sxJykpIHtcbiAgICBjb25zdCBlZGl0QnRuID0gbGlzdEl0ZW0uY2hpbGROb2Rlc1s1XTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBsaXN0SXRlbS5jaGlsZE5vZGVzWzddO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGlucHV0RmllbGQuY2xhc3NMaXN0LnJlbW92ZSgndGV4dGVkaXQnKTtcbiAgICBpbnB1dEZpZWxkLnJlYWRPbmx5ID0gdHJ1ZTtcbiAgfVxufSk7XG4qL1xuXG4vKiAgRVZFTlQgTElTVEVORVJTIGNoZWNrYm94ICovXG4vKlxudG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgY2hlY2tCb3ggPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IGNoZWNrSWQgPSBjaGVja0JveC5pZDtcbiAgdXBkYXRlVG9kbyhjaGVja0JveCwgdG9kb3MsIGNoZWNrSWQpO1xufSk7XG4qL1xuLypcbi8qICBFVkVOVCBMSVNURU5FUlMgcmVtb3ZlIGNvbXBsZXRlZCAqL1xuLypcbmNvbnN0IHJlbW92ZUNvbXBsZXRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmUtY29tcGxldGVkJyk7XG5yZW1vdmVDb21wbGV0ZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRvZG9zID0gdG9kb3MuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LmNvbXBsZXRlZCAhPT0gdHJ1ZSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2Rvc1N0b3JlJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgcmVuZGVyTGlzdCgpO1xufSk7XG4qL1xuY29uc3QgaW5pdEFwcCA9ICgpID0+IHtcbiAgcmVuZGVyTGlzdCgpO1xuICBuZXdUb2RvKCk7XG59O1xuXG5pbml0QXBwKCk7Il0sIm5hbWVzIjpbIlRvZG8iLCJjb25zdHJ1Y3RvciIsImRlc2NyaXB0aW9uIiwiYXJyIiwiY29tcGxldGVkIiwiaW5kZXgiLCJsZW5ndGgiLCJTdG9yZSIsImFkZFRvZG8iLCJhZGRJbnB1dCIsInZhbHVlIiwidG9kb3MiLCJnZXRUb2RvcyIsIm5ld1RvZG8iLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInNldFRvZG9zIiwiYWxlcnQiLCJlZGl0VG9kbyIsImVkaXRJZCIsImlucHV0SXRlbSIsImkiLCJ0cmltIiwic3RvcmVUb2RvcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidXBkYXRlSW5kZXgiLCJmb3JFYWNoIiwiZWxlbWVudCIsInVwZGF0ZVRvZG8iLCJjaGVja0JveCIsImNoZWNrSWQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNoZWNrZWQiLCJyZW5kZXJMaXN0IiwidG9kb0xpc3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiY29udGVudCIsImFkZEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0QXBwIl0sInNvdXJjZVJvb3QiOiIifQ==