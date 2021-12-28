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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/loadJson.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n//You can use this to try if the fetch functions are working, we can remove it when we are adding the rendering function. \r\n\r\n\r\n(async () => {\r\n    const jData = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/loadJson.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\r\n    const movie = await jData.loadCurrentMovies(); \r\n    console.log(movie[0].title);  \r\n    console.log(movie[0].posterUrl);    \r\n\r\n    const jData2 = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/loadJson.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\r\n    const movie2 = await jData2.loadUpcomingMovies(); \r\n    console.log(movie2[0].title);  \r\n    console.log(movie2[0].posterUrl);  \r\n\r\n})(); \r\n\r\n\r\n    \n\n//# sourceURL=webpack://kino-ytterhogdal/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;