/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contactsPage() {
    console.log('contact')
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactsPage);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts */ "./src/contacts.js");
//import homePage from './home';



function loadPage() {
    //Body
    const body = document.querySelector('body');
    //Content
    let content = document.createElement('div');
    content.className = 'content';
    body.appendChild(content);
    //Load Rest of the Page
    content.appendChild(header());
    content.appendChild(mainContent());
    content.appendChild(footer());
}

function header() {
    //Header
    let header = document.createElement('div');
    header.className = 'header';
    
    //Title
    let title = document.createElement('div');
    title.className = 'title'
    title.textContent = 'Waffle Bros'
    header.appendChild(title);
    //Tabs Container
    const tabsContainer = document.createElement('div');
    tabsContainer.className = 'tabs-container';
    //Home
    const home = document.createElement('button');
    home.className = 'tab';
    home.textContent = 'Home';
    tabsContainer.appendChild(home);
    home.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        e.target.className = 'active';
        menu.className = 'tab'
        contact.className = 'tab'
        homePage();
    })
    //Menu
    const menu = document.createElement('button');
    menu.className = 'tab'
    menu.textContent = 'Menu'
    tabsContainer.appendChild(menu);
    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        e.target.className = 'active';
        home.className = 'tab'
        contact.className = 'tab'
        ;(0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
    })
    //Contact
    const contact = document.createElement('button');
    contact.className = 'tab'
    contact.textContent = 'Contact'
    tabsContainer.appendChild(contact);
    contact.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        e.target.className = 'active';
        home.className = 'tab'
        menu.className = 'tab'
        ;(0,_contacts__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })

    header.appendChild(tabsContainer);
    return header
}

function mainContent() {
    const mainContent = document.createElement('div');
    mainContent.classList = 'main';
    //Description
    const description = document.createElement('div');
    description.classList = 'description';
    description.textContent = 'This is the best waffle place in town';
    mainContent.appendChild(description);
    //Image
    const image = document.createElement('img');
    image.src = "img/restaurant.jpg";
    mainContent.appendChild(image);
    
    //
    return mainContent;
}

function footer() {
    const container = document.createElement('div');
    container.classList = 'footer';
    const socialLinks = document.createElement('div');
    socialLinks.classList = 'social-links';
    container.appendChild(socialLinks);
    //Social Links
    const facebook = document.createElement('img');
    facebook.classList = 'svg';
    facebook.src = "svg/facebook.svg";
    socialLinks.appendChild(facebook);
    const insta = document.createElement('img');
    insta.src = "svg/instagram.svg";
    socialLinks.appendChild(insta);
    const twitter = document.createElement('img');
    twitter.src = "svg/twitter.svg";
    socialLinks.appendChild(twitter);
    //Copy Right
    const copyRight = document.createElement('div');
    copyRight.textContent = 'Waffle Bros c 2022. All rights waffled'
    copyRight.classList = 'copy-right'
    container.appendChild(copyRight);
    return container
}

function homePage() {
    console.log('home')
}




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);

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
function menuPage() {
    console.log('menu')
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
console.log('Hello')






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7O0FDSjNCO0FBQzhCO0FBQ1E7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFRO0FBQ2hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQVk7QUFDcEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFLQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ3hIdkI7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7OztVQ0p2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjZCOztBQUU3QixpREFBUTtBQUNSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbnRhY3RzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjb250YWN0c1BhZ2UoKSB7XG4gICAgY29uc29sZS5sb2coJ2NvbnRhY3QnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0c1BhZ2U7IiwiLy9pbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi9ob21lJztcbmltcG9ydCBtZW51UGFnZSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGNvbnRhY3RzUGFnZSBmcm9tICcuL2NvbnRhY3RzJztcblxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gICAgLy9Cb2R5XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAvL0NvbnRlbnRcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gJ2NvbnRlbnQnO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgLy9Mb2FkIFJlc3Qgb2YgdGhlIFBhZ2VcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50KCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xufVxuXG5mdW5jdGlvbiBoZWFkZXIoKSB7XG4gICAgLy9IZWFkZXJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdoZWFkZXInO1xuICAgIFxuICAgIC8vVGl0bGVcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc05hbWUgPSAndGl0bGUnXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnV2FmZmxlIEJyb3MnXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAvL1RhYnMgQ29udGFpbmVyXG4gICAgY29uc3QgdGFic0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhYnNDb250YWluZXIuY2xhc3NOYW1lID0gJ3RhYnMtY29udGFpbmVyJztcbiAgICAvL0hvbWVcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZS5jbGFzc05hbWUgPSAndGFiJztcbiAgICBob21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIHRhYnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9ICdhY3RpdmUnO1xuICAgICAgICBtZW51LmNsYXNzTmFtZSA9ICd0YWInXG4gICAgICAgIGNvbnRhY3QuY2xhc3NOYW1lID0gJ3RhYidcbiAgICAgICAgaG9tZVBhZ2UoKTtcbiAgICB9KVxuICAgIC8vTWVudVxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51LmNsYXNzTmFtZSA9ICd0YWInXG4gICAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51J1xuICAgIHRhYnNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9ICdhY3RpdmUnO1xuICAgICAgICBob21lLmNsYXNzTmFtZSA9ICd0YWInXG4gICAgICAgIGNvbnRhY3QuY2xhc3NOYW1lID0gJ3RhYidcbiAgICAgICAgbWVudVBhZ2UoKTtcbiAgICB9KVxuICAgIC8vQ29udGFjdFxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0LmNsYXNzTmFtZSA9ICd0YWInXG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0J1xuICAgIHRhYnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gICAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9ICdhY3RpdmUnO1xuICAgICAgICBob21lLmNsYXNzTmFtZSA9ICd0YWInXG4gICAgICAgIG1lbnUuY2xhc3NOYW1lID0gJ3RhYidcbiAgICAgICAgY29udGFjdHNQYWdlKCk7XG4gICAgfSlcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0YWJzQ29udGFpbmVyKTtcbiAgICByZXR1cm4gaGVhZGVyXG59XG5cbmZ1bmN0aW9uIG1haW5Db250ZW50KCkge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0ID0gJ21haW4nO1xuICAgIC8vRGVzY3JpcHRpb25cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdCA9ICdkZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnVGhpcyBpcyB0aGUgYmVzdCB3YWZmbGUgcGxhY2UgaW4gdG93bic7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIC8vSW1hZ2VcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlLnNyYyA9IFwiaW1nL3Jlc3RhdXJhbnQuanBnXCI7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIFxuICAgIC8vXG4gICAgcmV0dXJuIG1haW5Db250ZW50O1xufVxuXG5mdW5jdGlvbiBmb290ZXIoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdCA9ICdmb290ZXInO1xuICAgIGNvbnN0IHNvY2lhbExpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc29jaWFsTGlua3MuY2xhc3NMaXN0ID0gJ3NvY2lhbC1saW5rcyc7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNvY2lhbExpbmtzKTtcbiAgICAvL1NvY2lhbCBMaW5rc1xuICAgIGNvbnN0IGZhY2Vib29rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZmFjZWJvb2suY2xhc3NMaXN0ID0gJ3N2Zyc7XG4gICAgZmFjZWJvb2suc3JjID0gXCJzdmcvZmFjZWJvb2suc3ZnXCI7XG4gICAgc29jaWFsTGlua3MuYXBwZW5kQ2hpbGQoZmFjZWJvb2spO1xuICAgIGNvbnN0IGluc3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW5zdGEuc3JjID0gXCJzdmcvaW5zdGFncmFtLnN2Z1wiO1xuICAgIHNvY2lhbExpbmtzLmFwcGVuZENoaWxkKGluc3RhKTtcbiAgICBjb25zdCB0d2l0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdHdpdHRlci5zcmMgPSBcInN2Zy90d2l0dGVyLnN2Z1wiO1xuICAgIHNvY2lhbExpbmtzLmFwcGVuZENoaWxkKHR3aXR0ZXIpO1xuICAgIC8vQ29weSBSaWdodFxuICAgIGNvbnN0IGNvcHlSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvcHlSaWdodC50ZXh0Q29udGVudCA9ICdXYWZmbGUgQnJvcyBjIDIwMjIuIEFsbCByaWdodHMgd2FmZmxlZCdcbiAgICBjb3B5UmlnaHQuY2xhc3NMaXN0ID0gJ2NvcHktcmlnaHQnXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvcHlSaWdodCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lclxufVxuXG5mdW5jdGlvbiBob21lUGFnZSgpIHtcbiAgICBjb25zb2xlLmxvZygnaG9tZScpXG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlOyIsImZ1bmN0aW9uIG1lbnVQYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKCdtZW51Jylcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudVBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSBcIi4vaG9tZVwiXG5cbmxvYWRQYWdlKCk7XG5jb25zb2xlLmxvZygnSGVsbG8nKVxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==