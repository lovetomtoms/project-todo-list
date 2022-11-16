/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://project-todo-list/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/getTime/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getTime/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getTime)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name getTime\n * @category Timestamp Helpers\n * @summary Get the milliseconds timestamp of the given date.\n *\n * @description\n * Get the milliseconds timestamp of the given date.\n *\n * @param {Date|Number} date - the given date\n * @returns {Number} the timestamp\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Get the timestamp of 29 February 2012 11:45:05.123:\n * const result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))\n * //=> 1330515905123\n */\n\nfunction getTime(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  var timestamp = date.getTime();\n  return timestamp;\n}\n\n//# sourceURL=webpack://project-todo-list/./node_modules/date-fns/esm/getTime/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/getUnixTime/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/getUnixTime/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getUnixTime)\n/* harmony export */ });\n/* harmony import */ var _getTime_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getTime/index.js */ \"./node_modules/date-fns/esm/getTime/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name getUnixTime\n * @category Timestamp Helpers\n * @summary Get the seconds timestamp of the given date.\n *\n * @description\n * Get the seconds timestamp of the given date.\n *\n * @param {Date|Number} date - the given date\n * @returns {Number} the timestamp\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Get the timestamp of 29 February 2012 11:45:05 CET:\n * const result = getUnixTime(new Date(2012, 1, 29, 11, 45, 5))\n * //=> 1330512305\n */\n\nfunction getUnixTime(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return Math.floor((0,_getTime_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate) / 1000);\n}\n\n//# sourceURL=webpack://project-todo-list/./node_modules/date-fns/esm/getUnixTime/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://project-todo-list/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/project.js */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todo.js */ \"./src/modules/todo.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/getUnixTime/index.js\");\n\n\n\n\nconst LOCAL_STORAGE_PROJECTS_KEY = 'todo.project'\nconst LOCAL_STORAGE_PROJECT_ID_KEY = 'todo.selectedProjectId'\nlet projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || []\nlet selectedProjectId = localStorage.getItem(LOCAL_STORAGE_PROJECT_ID_KEY)\n\nconst projectContainer = document.querySelector('[data-project-container]')\nconst projectList = projectContainer.querySelector('[data-project-list]')\nconst projectAddButton = projectContainer.querySelector('[data-project-add-button]')\nconst projectAddInput = projectContainer.querySelector('[data-project-add-input]')\nconst projectDelete = projectContainer.querySelector('[data-project-delete]')\nconst todoContainer = document.querySelector('[data-todo-container]')\nconst projectName = todoContainer.querySelector('[data-project-name]')\nconst todoList = todoContainer.querySelector('[data-todo-list]')\nconst todoAddButton = todoContainer.querySelector('[data-todo-add-button]')\nconst todoAddInput = todoContainer.querySelector('[data-todo-add-input]')\n\nprojectAddButton.addEventListener('click', addProject)\ntodoAddButton.addEventListener('click', addTodo)\nprojectList.addEventListener('click', selectProject)\nprojectDelete.addEventListener('click', deleteProject)\n\nfunction selectProjectTodos() {\n    if(selectedProjectIndex() === undefined) {\n        return []\n    } else {\n        return projects[selectedProjectIndex()].todos\n    }\n}\n\nfunction selectedProjectIndex() {\n    const index = projects.findIndex(project => project.id.toString() === selectedProjectId)\n    // if projects.findIndex return -1\n    if(index !== -1) return index\n}\n\nfunction deleteProject() {\n    if(!selectedProjectId) return\n    projects.splice(selectedProjectIndex(), 1)\n    selectedProjectId = null\n    projectName.innerText = null\n    saveAndRender()\n}\n\nfunction selectProject(e) {\n    selectedProjectId = e.target.dataset.id\n    saveAndRender()\n}\n\nfunction addProject(e) {\n    e.preventDefault()\n    if (projectAddInput.value === '') return\n    projects.push(new _modules_project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]((0,date_fns__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(new Date()), projectAddInput.value))\n    projectAddInput.value = null\n    saveAndRender()\n}\n\nfunction saveAndRender() {\n    localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(projects))\n    localStorage.setItem(LOCAL_STORAGE_PROJECT_ID_KEY, selectedProjectId)\n    renderProjectList()\n    renderTodoList()\n}\n\nfunction clearList(element) {\n    while (element.firstElementChild) {\n        element.removeChild(element.firstElementChild)\n    }\n}\n\nfunction renderProjectList() {\n    clearList(projectList)\n    projects.forEach(project => {\n        const li = document.createElement('li')\n        li.innerText = project.name\n        li.dataset.id = project.id\n        if(li.dataset.id === selectedProjectId) {\n            li.className = 'active-list'\n            projectName.innerText = project.name\n        }\n        projectList.appendChild(li)\n    })\n}\n\nfunction addTodo(e) {\n    e.preventDefault()\n    if(!selectedProjectId) return\n    if (todoAddInput.value === '') return\n    selectProjectTodos().push(new _modules_todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]((0,date_fns__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(new Date()), todoAddInput.value))\n    todoAddInput.value = null\n    saveAndRender()\n}\n\nfunction renderTodoList() {\n    clearList(todoList)\n    if(!selectedProjectId && projects.length) return\n    selectProjectTodos().forEach(task => {\n        const li = document.createElement('li')\n        const input = document.createElement('input')\n        const label = document.createElement('label')\n        input.type = 'checkbox'\n        input.id = task.name\n        label.htmlFor = task.name\n        label.innerText = task.name\n        if(task.completed) {\n            input.checked = true\n        }\n        todoList.appendChild(li)\n        li.appendChild(input)\n        li.appendChild(label)\n    })\n}\n\n// saveAndRender()\n\nrenderProjectList()\nrenderTodoList()\n// localStorage.clear()\n\n//# sourceURL=webpack://project-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(id, name) {\n        this.name = name;\n        this.id = id;\n        this.todos = [];\n    }\n}\n\n//# sourceURL=webpack://project-todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n    constructor(id, name) {\n        this.name = name;\n        // this.id = id;\n        this.completed = false;\n    }\n}\n\n//# sourceURL=webpack://project-todo-list/./src/modules/todo.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;