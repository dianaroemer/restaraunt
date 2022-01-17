/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/landing.js":
/*!************************!*\
  !*** ./src/landing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/logo.jpg */ "./src/assets/logo.jpg");

// Reference module code for creating and exporting a function with a return value for use in another script
// const myName = (name) => {
//     console.log("sup");
//     return 'Hi! My name is ' + name + "!";
// }
// export default myName;




const landing = () => {

    const landingContainerElement = document.createElement('div');

    // const content = document.createElement('div');
    landingContainerElement.id = 'landingContainerElement';
    landingContainerElement.style.position = "relative";
    landingContainerElement.style.top = "70px";
    landingContainerElement.style.display = "flex";
    landingContainerElement.style.justifyContent = "center";

    const boxContainer = document.createElement('div');
    boxContainer.id = "box";
    // boxContainer.style.top = "70px";
    boxContainer.style.textAlign = "center";
    landingContainerElement.appendChild(boxContainer);

    const logoImage = document.createElement('img');
    logoImage.classList.add('logo-picture');
    // logoImage.src = './logo.jpg';
    logoImage.src = _assets_logo_jpg__WEBPACK_IMPORTED_MODULE_0__;
    logoImage.alt = "A blue and white painted saign, saying 'Greek Corner Cafe'";
    logoImage.style.borderRadius = "50px";
    boxContainer.appendChild(logoImage);

    const welcome = document.createElement('h2');
    welcome.classList.add('headLine');
    welcome.innerHTML = 'Welcome to the Greek Corner Cafe!';
    boxContainer.appendChild(welcome);
    
    const tagline = document.createElement('h3');
    tagline.classList.add('tagline');
    tagline.innerHTML = `Man, this shit's the best in town.`;
    boxContainer.appendChild(tagline);

    const enterButton = document.createElement('button');
    enterButton.classList.add('enterButton');
    enterButton.innerText = "Enter";
    enterButton.style.fontSize = "18px";
    enterButton.style.marginTop = "3px";
    enterButton.style.padding = "6px";
    enterButton.style.borderRadius = "5px";
    enterButton.style.boxShadow = "0px 2px 6px gray";
    boxContainer.appendChild(enterButton);


    return landingContainerElement;

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (landing);


/***/ }),

/***/ "./src/assets/logo.jpg":
/*!*****************************!*\
  !*** ./src/assets/logo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "79b151c8266b335a7aee.jpg";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _landing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.js */ "./src/landing.js");
console.log("Bollocks");


// import myName from './landing.js';

// import Logo from './assets/logo.jpg';



// function component() {
//     const element = document.createElement('div');
//     // const btn = 

//     element.innerHTML = myName('Wonkers');
//     element.classList.add('hi');
    
//     return element;
// }
// document.body.appendChild(component());


// document.body.removeChild(document.getElementById('content'));

document.getElementById('content').appendChild((0,_landing_js__WEBPACK_IMPORTED_MODULE_0__["default"])());

// document.body.appendChild(landing());




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVvQzs7O0FBR3BDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2Q0FBSTtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7OztBQUdBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5RHZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7QUNmQTs7O0FBR0E7QUFDbUM7QUFDbkM7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSwrQ0FBK0MsdURBQU87O0FBRXREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGFyYXVudC8uL3NyYy9sYW5kaW5nLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhcmF1bnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXJhdW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXJhdW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gUmVmZXJlbmNlIG1vZHVsZSBjb2RlIGZvciBjcmVhdGluZyBhbmQgZXhwb3J0aW5nIGEgZnVuY3Rpb24gd2l0aCBhIHJldHVybiB2YWx1ZSBmb3IgdXNlIGluIGFub3RoZXIgc2NyaXB0XG4vLyBjb25zdCBteU5hbWUgPSAobmFtZSkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKFwic3VwXCIpO1xuLy8gICAgIHJldHVybiAnSGkhIE15IG5hbWUgaXMgJyArIG5hbWUgKyBcIiFcIjtcbi8vIH1cbi8vIGV4cG9ydCBkZWZhdWx0IG15TmFtZTtcblxuaW1wb3J0IExvZ28gZnJvbSAnLi9hc3NldHMvbG9nby5qcGcnXG5cblxuY29uc3QgbGFuZGluZyA9ICgpID0+IHtcblxuICAgIGNvbnN0IGxhbmRpbmdDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvLyBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGFuZGluZ0NvbnRhaW5lckVsZW1lbnQuaWQgPSAnbGFuZGluZ0NvbnRhaW5lckVsZW1lbnQnO1xuICAgIGxhbmRpbmdDb250YWluZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIGxhbmRpbmdDb250YWluZXJFbGVtZW50LnN0eWxlLnRvcCA9IFwiNzBweFwiO1xuICAgIGxhbmRpbmdDb250YWluZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBsYW5kaW5nQ29udGFpbmVyRWxlbWVudC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG5cbiAgICBjb25zdCBib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3hDb250YWluZXIuaWQgPSBcImJveFwiO1xuICAgIC8vIGJveENvbnRhaW5lci5zdHlsZS50b3AgPSBcIjcwcHhcIjtcbiAgICBib3hDb250YWluZXIuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBsYW5kaW5nQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChib3hDb250YWluZXIpO1xuXG4gICAgY29uc3QgbG9nb0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbG9nb0ltYWdlLmNsYXNzTGlzdC5hZGQoJ2xvZ28tcGljdHVyZScpO1xuICAgIC8vIGxvZ29JbWFnZS5zcmMgPSAnLi9sb2dvLmpwZyc7XG4gICAgbG9nb0ltYWdlLnNyYyA9IExvZ287XG4gICAgbG9nb0ltYWdlLmFsdCA9IFwiQSBibHVlIGFuZCB3aGl0ZSBwYWludGVkIHNhaWduLCBzYXlpbmcgJ0dyZWVrIENvcm5lciBDYWZlJ1wiO1xuICAgIGxvZ29JbWFnZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjUwcHhcIjtcbiAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQobG9nb0ltYWdlKTtcblxuICAgIGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHdlbGNvbWUuY2xhc3NMaXN0LmFkZCgnaGVhZExpbmUnKTtcbiAgICB3ZWxjb21lLmlubmVySFRNTCA9ICdXZWxjb21lIHRvIHRoZSBHcmVlayBDb3JuZXIgQ2FmZSEnO1xuICAgIGJveENvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcbiAgICBcbiAgICBjb25zdCB0YWdsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0YWdsaW5lLmNsYXNzTGlzdC5hZGQoJ3RhZ2xpbmUnKTtcbiAgICB0YWdsaW5lLmlubmVySFRNTCA9IGBNYW4sIHRoaXMgc2hpdCdzIHRoZSBiZXN0IGluIHRvd24uYDtcbiAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGFnbGluZSk7XG5cbiAgICBjb25zdCBlbnRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVudGVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VudGVyQnV0dG9uJyk7XG4gICAgZW50ZXJCdXR0b24uaW5uZXJUZXh0ID0gXCJFbnRlclwiO1xuICAgIGVudGVyQnV0dG9uLnN0eWxlLmZvbnRTaXplID0gXCIxOHB4XCI7XG4gICAgZW50ZXJCdXR0b24uc3R5bGUubWFyZ2luVG9wID0gXCIzcHhcIjtcbiAgICBlbnRlckJ1dHRvbi5zdHlsZS5wYWRkaW5nID0gXCI2cHhcIjtcbiAgICBlbnRlckJ1dHRvbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweFwiO1xuICAgIGVudGVyQnV0dG9uLnN0eWxlLmJveFNoYWRvdyA9IFwiMHB4IDJweCA2cHggZ3JheVwiO1xuICAgIGJveENvbnRhaW5lci5hcHBlbmRDaGlsZChlbnRlckJ1dHRvbik7XG5cblxuICAgIHJldHVybiBsYW5kaW5nQ29udGFpbmVyRWxlbWVudDtcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGxhbmRpbmc7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJjb25zb2xlLmxvZyhcIkJvbGxvY2tzXCIpO1xuXG5cbi8vIGltcG9ydCBteU5hbWUgZnJvbSAnLi9sYW5kaW5nLmpzJztcbmltcG9ydCBsYW5kaW5nIGZyb20gJy4vbGFuZGluZy5qcyc7XG4vLyBpbXBvcnQgTG9nbyBmcm9tICcuL2Fzc2V0cy9sb2dvLmpwZyc7XG5cblxuXG4vLyBmdW5jdGlvbiBjb21wb25lbnQoKSB7XG4vLyAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIC8vIGNvbnN0IGJ0biA9IFxuXG4vLyAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBteU5hbWUoJ1dvbmtlcnMnKTtcbi8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpJyk7XG4gICAgXG4vLyAgICAgcmV0dXJuIGVsZW1lbnQ7XG4vLyB9XG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcblxuXG4vLyBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGxhbmRpbmcoKSk7XG5cbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGFuZGluZygpKTtcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==