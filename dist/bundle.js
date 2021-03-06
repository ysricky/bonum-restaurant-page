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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContactContent\": () => (/* binding */ createContactContent)\n/* harmony export */ });\nconst createContactContent = () => {\n  const contactContent = document.createElement('div');\n  const title = document.createElement('h2');\n  const p1 = document.createElement('p');\n  const p2 = document.createElement('p');\n  const followBtn = document.createElement('a');\n\n  title.textContent = 'Our Location:';\n  p1.textContent = 'Bonum Cafe & Resto';\n  p2.textContent =\n    'Villa Grand Tomang Boulevard Ruko R.02 No.15, Periuk, Tangerang, Banten, Indonesia.';\n  followBtn.textContent = 'Follow us on Instagram';\n  followBtn.setAttribute('href', 'https://instagram.com/bonumcafeandresto/');\n  followBtn.setAttribute('target', '_blank');\n\n  contactContent.setAttribute('id', 'contact-content');\n  contactContent.append(title, p1, p2, followBtn);\n\n  return contactContent;\n};\n\n\n\n\n//# sourceURL=webpack://bonum-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter)\n/* harmony export */ });\nconst createFooter = () => {\n  const footer = document.createElement('footer');\n  footer.setAttribute('id', 'footer');\n  footer.textContent = '?? 2021 Bonum Cafe & Resto. All Rights Reserved.';\n\n  return footer;\n};\n\n\n\n\n//# sourceURL=webpack://bonum-restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\nconst createHeader = () => {\n  const header = document.createElement('header');\n  const logo = document.createElement('h1');\n  logo.textContent = 'BONUM.';\n  header.setAttribute('id', 'logo');\n  header.append(logo);\n\n  return header;\n};\n\n\n\n\n//# sourceURL=webpack://bonum-restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHomeContent\": () => (/* binding */ createHomeContent)\n/* harmony export */ });\nconst createHomeContent = () => {\n  const homeContent = document.createElement('div');\n  const title = document.createElement('h2');\n  const p1 = document.createElement('p');\n  const p2 = document.createElement('p');\n  const p3 = document.createElement('p');\n  const p4 = document.createElement('p');\n\n  title.textContent = 'Welcome foodlovers!';\n  p1.textContent = 'Good food and good vibes';\n  p2.textContent = 'Perfect place to satisfy your hunger';\n  p3.textContent = 'Taste the difference';\n  p4.textContent =\n    'You can enjoy our foods from Sunday to Saturday, 11.00pm to 21.00pm';\n\n  homeContent.setAttribute('id', 'home-content');\n  homeContent.append(title, p1, p2, p3, p4);\n\n  return homeContent;\n};\n\n\n\n\n//# sourceURL=webpack://bonum-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.js */ \"./src/navbar.js\");\n/* harmony import */ var _subContentController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subContentController.js */ \"./src/subContentController.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n\n\n\n\n\nconst content = document.querySelector('#content');\n\ncontent.append(\n  (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)(),\n  (0,_navbar_js__WEBPACK_IMPORTED_MODULE_1__.createNav)(),\n  (0,_subContentController_js__WEBPACK_IMPORTED_MODULE_2__.createDefaultContent)(),\n  (0,_footer_js__WEBPACK_IMPORTED_MODULE_3__.createFooter)()\n);\n\ncontent.style.backgroundImage =\n  'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.8) 100%), url(\"./images/background-bonum-page.jpg\")';\n\n(0,_subContentController_js__WEBPACK_IMPORTED_MODULE_2__.navHandler)();\n\n\n//# sourceURL=webpack://bonum-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenuContent\": () => (/* binding */ createMenuContent)\n/* harmony export */ });\nconst createMenuContent = () => {\n  const menuContent = document.createElement('div');\n  menuContent.setAttribute('id', 'menu-content');\n\n  const createMenuInfo = (itemName, itemDescription, itemPrice) => {\n    const menuDiv = document.createElement('div');\n    const name = document.createElement('h3');\n    const description = document.createElement('p');\n    const price = document.createElement('p');\n\n    name.textContent = itemName;\n    description.textContent = itemDescription;\n    price.textContent = itemPrice;\n\n    const getImageUrl = () => {\n      return `./images/${itemName.toLowerCase().split(' ').join('')}.jpg`;\n    };\n\n    menuDiv.classList.add('menu');\n    menuDiv.append(name, description, price);\n    menuDiv.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%), url(${getImageUrl()})`;\n\n    menuContent.append(menuDiv);\n  };\n\n  createMenuInfo(\n    'Nasi Gudeg Yogya',\n    'Made from steamed unripe young jack fruit, served with rice, egg, chicken, and crisp beef skins.',\n    'Rp 25,000'\n  );\n\n  createMenuInfo(\n    'Nasi Liwet Solo',\n    'Steamed rice cooked in coconut milk, served with omelette, stir-fried chayote and shredded chicken.',\n    'Rp 25,000'\n  );\n  createMenuInfo('Iga Bakar', 'Marinated grilled beef ribs.', 'Rp 35,000');\n  createMenuInfo(\n    'Sop Iga',\n    'Soup made from beef ribs, served with boiled tomatoes, leek, and carrots.',\n    'Rp 30,000'\n  );\n  createMenuInfo(\n    'Ayam Betutu Bali',\n    'Richly spiced Balinese poultry dish.',\n    'Rp 25,000'\n  );\n  createMenuInfo(\n    'Lemon Squash',\n    'Sweetened lemon-flavored mixed with carbonated water.',\n    'Rp 15,000'\n  );\n  createMenuInfo(\n    'Passion Fruit Squash',\n    'Juice made from passion fruit mixed with sugar and ice.',\n    'Rp 15,000'\n  );\n  createMenuInfo(\n    'Yakult Mojito',\n    'Flavourful mocktail made from japanese probiotic milk beverage mixed with coconut gel and ice.',\n    'Rp 20,000'\n  );\n  createMenuInfo(\n    'Es Kopi Klepon',\n    'Traditional coffee mixed with molten palm sugar and grated coconut.',\n    'Rp 30,000'\n  );\n  createMenuInfo(\n    'Kopi Susu Gula Aren',\n    'Traditional coffee mixed with milk, and molten palm sugar.',\n    'Rp 18,000'\n  );\n\n  return menuContent;\n};\n\n\n\n\n//# sourceURL=webpack://bonum-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNav\": () => (/* binding */ createNav)\n/* harmony export */ });\nconst createNav = () => {\n  const navArray = ['home', 'menu', 'contact'];\n  const nav = document.createElement('nav');\n  nav.setAttribute('id', 'navbar');\n\n  const createNavElement = (name) => {\n    const div = document.createElement('div');\n    div.setAttribute('id', name);\n    div.classList.add('nav');\n    div.textContent = name;\n    nav.appendChild(div);\n  };\n\n  navArray.forEach((el) => {\n    createNavElement(el);\n  });\n\n  return nav;\n};\n\n\n\n\n//# sourceURL=webpack://bonum-restaurant-page/./src/navbar.js?");

/***/ }),

/***/ "./src/subContentController.js":
/*!*************************************!*\
  !*** ./src/subContentController.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDefaultContent\": () => (/* binding */ createDefaultContent),\n/* harmony export */   \"navHandler\": () => (/* binding */ navHandler)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nconst createDefaultContent = () => {\n  const mainContent = document.createElement('div');\n  mainContent.setAttribute('id', 'main-content');\n\n  mainContent.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHomeContent)());\n\n  return mainContent;\n};\n\nconst navHandler = () => {\n  const mainContent = document.querySelector('#main-content');\n  const navButton = document.querySelectorAll('.nav');\n\n  const removeContent = () => {\n    mainContent.removeChild(mainContent.childNodes[0]);\n  };\n\n  const changeContent = (nav) => {\n    removeContent();\n\n    switch (nav.target.getAttribute('id')) {\n      case 'home':\n        mainContent.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHomeContent)());\n        break;\n      case 'menu':\n        mainContent.append((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenuContent)());\n        break;\n      case 'contact':\n        mainContent.append((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.createContactContent)());\n        break;\n    }\n  };\n\n  navButton.forEach((nav) => {\n    nav.addEventListener('click', changeContent);\n  });\n};\n\n\n\n\n//# sourceURL=webpack://bonum-restaurant-page/./src/subContentController.js?");

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