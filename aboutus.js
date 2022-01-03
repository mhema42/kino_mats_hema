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

/***/ "./src/js/pages/aboutus.js":
/*!*********************************!*\
  !*** ./src/js/pages/aboutus.js ***!
  \*********************************/
/***/ (() => {

eval("\r\n\r\nconst activeAndHide = () => {\r\n  [...document.getElementsByClassName(\"menu-text\")].map(x => x.classList.remove(\"menu-active\"));\r\n  [...document.getElementsByClassName(\"about-us-item\")].map(x => x.classList.add(\"about-us-hide\"));\r\n}\r\n\r\ndocument.querySelector(\".menu-history\").addEventListener(\"click\", () => {\r\n  activeAndHide(); \r\n  document.querySelector(\".menu-history\").classList.add(\"menu-active\");\r\n  document.querySelector(\".about-us-history\").classList.remove(\"about-us-hide\");\r\n}); \r\n\r\ndocument.querySelector(\".menu-policy\").addEventListener(\"click\", () => {\r\n  activeAndHide(); \r\n  document.querySelector(\".menu-policy\").classList.add(\"menu-active\");\r\n  document.querySelector(\".about-us-policy\").classList.remove(\"about-us-hide\");\r\n}); \r\n\r\ndocument.querySelector(\".menu-accessibility\").addEventListener(\"click\", () => {\r\n  activeAndHide(); \r\n  document.querySelector(\".menu-accessibility\").classList.add(\"menu-active\");\r\n  document.querySelector(\".about-us-accessibility\").classList.remove(\"about-us-hide\");\r\n}); \r\n\r\ndocument.querySelector(\".menu-faq\").addEventListener(\"click\", () => {\r\n  activeAndHide(); \r\n  document.querySelector(\".menu-faq\").classList.add(\"menu-active\");\r\n  document.querySelector(\".about-us-faq\").classList.remove(\"about-us-hide\");\r\n}); \r\n\r\n\r\n\n\n//# sourceURL=webpack://kino-ytterhogdal/./src/js/pages/aboutus.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/pages/aboutus.js"]();
/******/ 	
/******/ })()
;