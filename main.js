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
    console.log('menu')
    const main = document.querySelector('.main');
    const content = document.querySelector('.content');
    main.remove();
    const mainContent = document.createElement('div');
    mainContent.classList = 'main';
    content.appendChild(mainContent);
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
    const content = document.querySelector('.content');
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
        removeFooter();
        homePage();
        content.appendChild(footer());
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
        removeFooter();
        (0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
        content.appendChild(footer());
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
        removeFooter();
        (0,_contacts__WEBPACK_IMPORTED_MODULE_1__["default"])();
        content.appendChild(footer());
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

function removeFooter() {
    const footer = document.querySelector('.footer')
    footer.remove();
}

function homePage() {
    console.log('home')
    const main = document.querySelector('.main');
    const content = document.querySelector('.content');
    main.remove();
    content.appendChild(mainContent());
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
    const main = document.querySelector('.main');
    const content = document.querySelector('.content');
    main.remove();
    const mainContent = document.createElement('div');
    mainContent.classList = 'main';
    content.appendChild(mainContent);

    //Squarewaffles
    //Variables
    const squareWaffles = document.createElement('div');
    const squareWafflesText = document.createElement('h2');
    const image1 = document.createElement('img');
    const squareWafflesImageCredit = document.createElement('p');
    //Content
    squareWafflesText.textContent = 'We have square waffles!'
    image1.src = "img/square-waffles.jpg";
    squareWafflesImageCredit.textContent ='Photo by Slashio Photography on Unsplash';
    //Class Declaration
    squareWaffles.classList = 'waffle-container'
    squareWafflesText.classList = 'waffle-text'
    image1.classList = 'waffle-image'
    squareWafflesImageCredit.classList = 'waffle-credit'
    //Append
    mainContent.appendChild(squareWaffles);
    squareWaffles.appendChild(squareWafflesText);
    squareWaffles.appendChild(image1);
    squareWaffles.appendChild(squareWafflesImageCredit);

    //Roundwaffles
    //Variables
    const roundWaffles = document.createElement('div');
    const roundWafflesText = document.createElement('h2');
    const image2 = document.createElement('img');
    const roundWafflesImageCredit = document.createElement('p');
    //Content
    roundWafflesText.textContent = 'We have round waffles!'
    image2.src = "img/round-waffles.jpg";
    roundWafflesImageCredit.textContent ='Photo by Joyful Captures on Unsplash';
    //Class Declaration
    roundWaffles.classList = 'waffle-container'
    roundWafflesText.classList = 'waffle-text'
    image2.classList = 'waffle-image'
    roundWafflesImageCredit.classList = 'waffle-credit'
    //Append
    mainContent.appendChild(roundWaffles);
    roundWaffles.appendChild(roundWafflesText);
    roundWaffles.appendChild(image2);
    roundWaffles.appendChild(roundWafflesImageCredit);

    //Chocolatewaffles
    //Variables
    const chocolateWaffles = document.createElement('div');
    const chocolateWafflesText = document.createElement('h2');
    const image3 = document.createElement('img');
    const chocolateWafflesImageCredit = document.createElement('p');
    //Content
    chocolateWafflesText.textContent = 'We have chocolate waffles!'
    image3.src = "img/chocolate-waffles.jpg";
    chocolateWafflesImageCredit.textContent ='Photo by Kobby Mendez on Unsplash';
    //Class Declaration
    chocolateWaffles.classList = 'waffle-container'
    chocolateWafflesText.classList = 'waffle-text'
    image3.classList = 'waffle-image'
    chocolateWafflesImageCredit.classList = 'waffle-credit'
    //Append
    mainContent.appendChild(chocolateWaffles);
    chocolateWaffles.appendChild(chocolateWafflesText);
    chocolateWaffles.appendChild(image3);
    chocolateWaffles.appendChild(chocolateWafflesImageCredit);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYM0I7QUFDOEI7QUFDUTs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVE7QUFDaEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQVk7QUFDcEI7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUN2SXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7VUN6RXZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONkI7O0FBRTdCLGlEQUFRO0FBQ1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNvbnRhY3RzUGFnZSgpIHtcbiAgICBjb25zb2xlLmxvZygnY29udGFjdCcpXG4gICAgY29uc29sZS5sb2coJ21lbnUnKVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIG1haW4ucmVtb3ZlKCk7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QgPSAnbWFpbic7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RzUGFnZTsiLCIvL2ltcG9ydCBob21lUGFnZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gJy4vbWVudSc7XG5pbXBvcnQgY29udGFjdHNQYWdlIGZyb20gJy4vY29udGFjdHMnO1xuXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgICAvL0JvZHlcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIC8vQ29udGVudFxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5jbGFzc05hbWUgPSAnY29udGVudCc7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAvL0xvYWQgUmVzdCBvZiB0aGUgUGFnZVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG59XG5cbmZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICAvL0hlYWRlclxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ2hlYWRlcic7XG4gICAgLy9UaXRsZVxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTmFtZSA9ICd0aXRsZSdcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdXYWZmbGUgQnJvcydcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIC8vVGFicyBDb250YWluZXJcbiAgICBjb25zdCB0YWJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFic0NvbnRhaW5lci5jbGFzc05hbWUgPSAndGFicy1jb250YWluZXInO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIC8vSG9tZVxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lLmNsYXNzTmFtZSA9ICd0YWInO1xuICAgIGhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgdGFic0NvbnRhaW5lci5hcHBlbmRDaGlsZChob21lKTtcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NOYW1lID0gJ2FjdGl2ZSc7XG4gICAgICAgIG1lbnUuY2xhc3NOYW1lID0gJ3RhYidcbiAgICAgICAgY29udGFjdC5jbGFzc05hbWUgPSAndGFiJ1xuICAgICAgICByZW1vdmVGb290ZXIoKTtcbiAgICAgICAgaG9tZVBhZ2UoKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG4gICAgfSlcbiAgICAvL01lbnVcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudS5jbGFzc05hbWUgPSAndGFiJ1xuICAgIG1lbnUudGV4dENvbnRlbnQgPSAnTWVudSdcbiAgICB0YWJzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgICAgICBlLnRhcmdldC5jbGFzc05hbWUgPSAnYWN0aXZlJztcbiAgICAgICAgaG9tZS5jbGFzc05hbWUgPSAndGFiJ1xuICAgICAgICBjb250YWN0LmNsYXNzTmFtZSA9ICd0YWInXG4gICAgICAgIHJlbW92ZUZvb3RlcigpO1xuICAgICAgICBtZW51UGFnZSgpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlcigpKTtcbiAgICB9KVxuICAgIC8vQ29udGFjdFxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0LmNsYXNzTmFtZSA9ICd0YWInXG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0J1xuICAgIHRhYnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gICAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9ICdhY3RpdmUnO1xuICAgICAgICBob21lLmNsYXNzTmFtZSA9ICd0YWInXG4gICAgICAgIG1lbnUuY2xhc3NOYW1lID0gJ3RhYidcbiAgICAgICAgcmVtb3ZlRm9vdGVyKCk7XG4gICAgICAgIGNvbnRhY3RzUGFnZSgpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlcigpKTtcbiAgICB9KVxuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRhYnNDb250YWluZXIpO1xuICAgIHJldHVybiBoZWFkZXJcbn1cblxuZnVuY3Rpb24gbWFpbkNvbnRlbnQoKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QgPSAnbWFpbic7XG4gICAgLy9EZXNjcmlwdGlvblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0ID0gJ2Rlc2NyaXB0aW9uJztcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdUaGlzIGlzIHRoZSBiZXN0IHdhZmZsZSBwbGFjZSBpbiB0b3duJztcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgLy9JbWFnZVxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc3JjID0gXCJpbWcvcmVzdGF1cmFudC5qcGdcIjtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgXG4gICAgLy9cbiAgICByZXR1cm4gbWFpbkNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGZvb3RlcigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0ID0gJ2Zvb3Rlcic7XG4gICAgY29uc3Qgc29jaWFsTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzb2NpYWxMaW5rcy5jbGFzc0xpc3QgPSAnc29jaWFsLWxpbmtzJztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc29jaWFsTGlua3MpO1xuICAgIC8vU29jaWFsIExpbmtzXG4gICAgY29uc3QgZmFjZWJvb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBmYWNlYm9vay5jbGFzc0xpc3QgPSAnc3ZnJztcbiAgICBmYWNlYm9vay5zcmMgPSBcInN2Zy9mYWNlYm9vay5zdmdcIjtcbiAgICBzb2NpYWxMaW5rcy5hcHBlbmRDaGlsZChmYWNlYm9vayk7XG4gICAgY29uc3QgaW5zdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbnN0YS5zcmMgPSBcInN2Zy9pbnN0YWdyYW0uc3ZnXCI7XG4gICAgc29jaWFsTGlua3MuYXBwZW5kQ2hpbGQoaW5zdGEpO1xuICAgIGNvbnN0IHR3aXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0d2l0dGVyLnNyYyA9IFwic3ZnL3R3aXR0ZXIuc3ZnXCI7XG4gICAgc29jaWFsTGlua3MuYXBwZW5kQ2hpbGQodHdpdHRlcik7XG4gICAgLy9Db3B5IFJpZ2h0XG4gICAgY29uc3QgY29weVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29weVJpZ2h0LnRleHRDb250ZW50ID0gJ1dhZmZsZSBCcm9zIGMgMjAyMi4gQWxsIHJpZ2h0cyB3YWZmbGVkJ1xuICAgIGNvcHlSaWdodC5jbGFzc0xpc3QgPSAnY29weS1yaWdodCdcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29weVJpZ2h0KTtcbiAgICByZXR1cm4gY29udGFpbmVyXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJylcbiAgICBmb290ZXIucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGhvbWVQYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKCdob21lJylcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBtYWluLnJlbW92ZSgpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQoKSk7XG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlOyIsImZ1bmN0aW9uIG1lbnVQYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKCdtZW51JylcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBtYWluLnJlbW92ZSgpO1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0ID0gJ21haW4nO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuXG4gICAgLy9TcXVhcmV3YWZmbGVzXG4gICAgLy9WYXJpYWJsZXNcbiAgICBjb25zdCBzcXVhcmVXYWZmbGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc3F1YXJlV2FmZmxlc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGltYWdlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IHNxdWFyZVdhZmZsZXNJbWFnZUNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAvL0NvbnRlbnRcbiAgICBzcXVhcmVXYWZmbGVzVGV4dC50ZXh0Q29udGVudCA9ICdXZSBoYXZlIHNxdWFyZSB3YWZmbGVzISdcbiAgICBpbWFnZTEuc3JjID0gXCJpbWcvc3F1YXJlLXdhZmZsZXMuanBnXCI7XG4gICAgc3F1YXJlV2FmZmxlc0ltYWdlQ3JlZGl0LnRleHRDb250ZW50ID0nUGhvdG8gYnkgU2xhc2hpbyBQaG90b2dyYXBoeSBvbiBVbnNwbGFzaCc7XG4gICAgLy9DbGFzcyBEZWNsYXJhdGlvblxuICAgIHNxdWFyZVdhZmZsZXMuY2xhc3NMaXN0ID0gJ3dhZmZsZS1jb250YWluZXInXG4gICAgc3F1YXJlV2FmZmxlc1RleHQuY2xhc3NMaXN0ID0gJ3dhZmZsZS10ZXh0J1xuICAgIGltYWdlMS5jbGFzc0xpc3QgPSAnd2FmZmxlLWltYWdlJ1xuICAgIHNxdWFyZVdhZmZsZXNJbWFnZUNyZWRpdC5jbGFzc0xpc3QgPSAnd2FmZmxlLWNyZWRpdCdcbiAgICAvL0FwcGVuZFxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHNxdWFyZVdhZmZsZXMpO1xuICAgIHNxdWFyZVdhZmZsZXMuYXBwZW5kQ2hpbGQoc3F1YXJlV2FmZmxlc1RleHQpO1xuICAgIHNxdWFyZVdhZmZsZXMuYXBwZW5kQ2hpbGQoaW1hZ2UxKTtcbiAgICBzcXVhcmVXYWZmbGVzLmFwcGVuZENoaWxkKHNxdWFyZVdhZmZsZXNJbWFnZUNyZWRpdCk7XG5cbiAgICAvL1JvdW5kd2FmZmxlc1xuICAgIC8vVmFyaWFibGVzXG4gICAgY29uc3Qgcm91bmRXYWZmbGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgcm91bmRXYWZmbGVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgaW1hZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3Qgcm91bmRXYWZmbGVzSW1hZ2VDcmVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy9Db250ZW50XG4gICAgcm91bmRXYWZmbGVzVGV4dC50ZXh0Q29udGVudCA9ICdXZSBoYXZlIHJvdW5kIHdhZmZsZXMhJ1xuICAgIGltYWdlMi5zcmMgPSBcImltZy9yb3VuZC13YWZmbGVzLmpwZ1wiO1xuICAgIHJvdW5kV2FmZmxlc0ltYWdlQ3JlZGl0LnRleHRDb250ZW50ID0nUGhvdG8gYnkgSm95ZnVsIENhcHR1cmVzIG9uIFVuc3BsYXNoJztcbiAgICAvL0NsYXNzIERlY2xhcmF0aW9uXG4gICAgcm91bmRXYWZmbGVzLmNsYXNzTGlzdCA9ICd3YWZmbGUtY29udGFpbmVyJ1xuICAgIHJvdW5kV2FmZmxlc1RleHQuY2xhc3NMaXN0ID0gJ3dhZmZsZS10ZXh0J1xuICAgIGltYWdlMi5jbGFzc0xpc3QgPSAnd2FmZmxlLWltYWdlJ1xuICAgIHJvdW5kV2FmZmxlc0ltYWdlQ3JlZGl0LmNsYXNzTGlzdCA9ICd3YWZmbGUtY3JlZGl0J1xuICAgIC8vQXBwZW5kXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocm91bmRXYWZmbGVzKTtcbiAgICByb3VuZFdhZmZsZXMuYXBwZW5kQ2hpbGQocm91bmRXYWZmbGVzVGV4dCk7XG4gICAgcm91bmRXYWZmbGVzLmFwcGVuZENoaWxkKGltYWdlMik7XG4gICAgcm91bmRXYWZmbGVzLmFwcGVuZENoaWxkKHJvdW5kV2FmZmxlc0ltYWdlQ3JlZGl0KTtcblxuICAgIC8vQ2hvY29sYXRld2FmZmxlc1xuICAgIC8vVmFyaWFibGVzXG4gICAgY29uc3QgY2hvY29sYXRlV2FmZmxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNob2NvbGF0ZVdhZmZsZXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBpbWFnZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBjaG9jb2xhdGVXYWZmbGVzSW1hZ2VDcmVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy9Db250ZW50XG4gICAgY2hvY29sYXRlV2FmZmxlc1RleHQudGV4dENvbnRlbnQgPSAnV2UgaGF2ZSBjaG9jb2xhdGUgd2FmZmxlcyEnXG4gICAgaW1hZ2UzLnNyYyA9IFwiaW1nL2Nob2NvbGF0ZS13YWZmbGVzLmpwZ1wiO1xuICAgIGNob2NvbGF0ZVdhZmZsZXNJbWFnZUNyZWRpdC50ZXh0Q29udGVudCA9J1Bob3RvIGJ5IEtvYmJ5IE1lbmRleiBvbiBVbnNwbGFzaCc7XG4gICAgLy9DbGFzcyBEZWNsYXJhdGlvblxuICAgIGNob2NvbGF0ZVdhZmZsZXMuY2xhc3NMaXN0ID0gJ3dhZmZsZS1jb250YWluZXInXG4gICAgY2hvY29sYXRlV2FmZmxlc1RleHQuY2xhc3NMaXN0ID0gJ3dhZmZsZS10ZXh0J1xuICAgIGltYWdlMy5jbGFzc0xpc3QgPSAnd2FmZmxlLWltYWdlJ1xuICAgIGNob2NvbGF0ZVdhZmZsZXNJbWFnZUNyZWRpdC5jbGFzc0xpc3QgPSAnd2FmZmxlLWNyZWRpdCdcbiAgICAvL0FwcGVuZFxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNob2NvbGF0ZVdhZmZsZXMpO1xuICAgIGNob2NvbGF0ZVdhZmZsZXMuYXBwZW5kQ2hpbGQoY2hvY29sYXRlV2FmZmxlc1RleHQpO1xuICAgIGNob2NvbGF0ZVdhZmZsZXMuYXBwZW5kQ2hpbGQoaW1hZ2UzKTtcbiAgICBjaG9jb2xhdGVXYWZmbGVzLmFwcGVuZENoaWxkKGNob2NvbGF0ZVdhZmZsZXNJbWFnZUNyZWRpdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVQYWdlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRQYWdlIGZyb20gXCIuL2hvbWVcIlxuXG5sb2FkUGFnZSgpO1xuY29uc29sZS5sb2coJ0hlbGxvJylcblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=