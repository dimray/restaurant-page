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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./src/hits.js":
/*!*********************!*\
  !*** ./src/hits.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hits\": () => (/* binding */ hits)\n/* harmony export */ });\nconst hits = document.querySelector(\"#hits\");\nconst headerHits = document.createElement(\"h1\");\nheaderHits.textContent = \"Here are a couple of our favourite Kylie hits:\"\nheaderHits.style.textAlign = \"Center\";\n\nconst songs = document.createElement(\"div\");\nsongs.classList.add(\"menu-items\");\n\nconst song1 = document.createElement(\"a\");\nconst song2 = document.createElement(\"a\");\nconst song3 = document.createElement(\"a\");\n\n\nconst song1Link = document.createTextNode(\"I Should Be So Lucky\");\nsong1.appendChild(song1Link);\nsong1.title = \"I Should Be So Lucky\";\nsong1.href = \"https://www.youtube.com/watch?v=3_TvpBwSZDM\";\nsong1.target = \"_blank\";\n\n\nconst song2Link = document.createTextNode(\"Better The Devil You Know\");\nsong2.appendChild(song2Link);\nsong2.tile = \"Better The Devil You Know\";\nsong2.href = \"https://www.youtube.com/watch?v=tto_nmsND_o\";\nsong2.target = \"_blank\";\n\nconst song3Link = document.createTextNode(\"Better The Devil You Know\");\nsong3.appendChild(song3Link);\nsong3.tile = \"Especially For You\";\nsong3.href = \"https://www.youtube.com/watch?v=yalM-2ih7RU\";\nsong3.target = \"_blank\";\n\n\n\nsongs.appendChild(song1);\nsongs.appendChild(song2);\nsongs.appendChild(song3);\n\nhits.appendChild(headerHits);\nhits.appendChild(songs);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/hits.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content\": () => (/* binding */ content)\n/* harmony export */ });\n\nconst content = document.querySelector(\"#content\");\n\nconst header = document.createElement(\"h1\");\nheader.textContent = \"Welcome to the Eggstaurant. We hope you're feeling peckish!\";\nheader.style.textAlign = \"center\";\n\nconst info1 = document.createElement(\"h2\");\ninfo1.textContent = \"Come and try our delicious organic eggs. Freshly laid today Especially For You, by Kylie\";\ninfo1.style.textAlign = \"center\";\n\n\nconst kylie = document.createElement(\"img\");\nkylie.src = \"../src/Kylie_Minogue.jpg\";\nkylie.alt = \"Kylie Minogue\";\nkylie.setAttribute(\"id\", \"Kylie\");\n\ncontent.appendChild(header);\ncontent.appendChild(info1);\ncontent.appendChild(kylie);\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _hits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hits.js */ \"./src/hits.js\");\n\n\n\n\n\n\n\n_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu.style.display = \"none\";\n_hits_js__WEBPACK_IMPORTED_MODULE_3__.hits.style.display = \"none\";\n\nconst homeButton = document.querySelector(\"#home-button\");\nconst menuButton = document.querySelector(\"#menu-button\");\nconst hitsButton = document.querySelector(\"#hits-button\");\n\n\nconst btns = document.querySelectorAll(\".btn\");\n\nbtns.forEach(btn => {\n  btn.addEventListener(\"click\", function (e) {\n    console.log(e);\n    if (e.target.id === \"hits-button\") {\n      _home_js__WEBPACK_IMPORTED_MODULE_1__.content.style.display = \"none\";\n      _menu_js__WEBPACK_IMPORTED_MODULE_2__.menu.style.display = \"none\";\n      _hits_js__WEBPACK_IMPORTED_MODULE_3__.hits.style.display = \"block\";\n      hitsButton.classList.add(\"selected-button\");\n      homeButton.classList.remove(\"selected-button\");\n      menuButton.classList.remove(\"selected-button\");\n\n    } else if (e.target.id === \"menu-button\") {\n      _home_js__WEBPACK_IMPORTED_MODULE_1__.content.style.display = \"none\";\n      _menu_js__WEBPACK_IMPORTED_MODULE_2__.menu.style.display = \"flex\";\n      _hits_js__WEBPACK_IMPORTED_MODULE_3__.hits.style.display = \"none\";\n      hitsButton.classList.remove(\"selected-button\");\n      homeButton.classList.remove(\"selected-button\");\n      menuButton.classList.add(\"selected-button\");\n    } else if (e.target.id === \"home-button\") {\n      _home_js__WEBPACK_IMPORTED_MODULE_1__.content.style.display = \"flex\";\n      _menu_js__WEBPACK_IMPORTED_MODULE_2__.menu.style.display = \"none\";\n      _hits_js__WEBPACK_IMPORTED_MODULE_3__.hits.style.display = \"none\";\n      hitsButton.classList.remove(\"selected-button\");\n      homeButton.classList.add(\"selected-button\");\n      menuButton.classList.remove(\"selected-button\");\n    }\n  });\n});\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = document.querySelector(\"#menu\");\n\nconst header = document.createElement(\"h1\");\nheader.textContent = \"Welcome to the Eggstaurant. We hope you're feeling peckish!\";\nheader.style.textAlign = \"center\";\n\nconst menuItems = document.createElement(\"div\");\nmenuItems.classList.add(\"menu-items\");\n\n\nconst info1 = document.createElement(\"h2\");\nconst info2 = document.createElement(\"h3\");\nconst info3 = document.createElement(\"h3\");\nconst info4 = document.createElement(\"h3\");\nconst info5 = document.createElement(\"h3\");\nconst info6 = document.createElement(\"h3\");\nconst info7 = document.createElement(\"h3\");\n\n\ninfo1.textContent = \"Here is today's menu:\";\ninfo2.textContent = \"Scrambled Egg\";\ninfo3.textContent = \"Soft Boiled Egg\";\ninfo4.textContent = \"Hard Boiled Egg\";\ninfo5.textContent = \"Poached Egg\";\ninfo6.textContent = \"Fried Egg\";\ninfo7.textContent = \"Omelette\";\n\n\n\nconst chicken = document.createElement(\"img\");\nchicken.src = \"../src/chicken.png\";\nchicken.alt = \"Chicken\";\n\n\n\nmenuItems.appendChild(info2);\nmenuItems.appendChild(info2);\nmenuItems.appendChild(info3);\nmenuItems.appendChild(info4);\nmenuItems.appendChild(info5);\nmenuItems.appendChild(info6);\nmenuItems.appendChild(info7);\n\nmenu.appendChild(header);\nmenu.appendChild(info1);\nmenu.appendChild(menuItems);\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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