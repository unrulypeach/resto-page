"use strict";
(self["webpackChunkresto_page"] = self["webpackChunkresto_page"] || []).push([["visit"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _appy_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appy.png */ "./src/appy.png");
/* harmony import */ var _entree_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entree.png */ "./src/entree.png");



function menu() {
  const outerDiv = document.createElement('div');
  outerDiv.classList.add('menu-container');

  const innerDiv = document.createElement('div');
  innerDiv.classList.add('menu')

  const appHead = document.createElement('h2');
  appHead.classList.add('menu-heading');
  appHead.innerHTML = 'APPETIZERS';

  const appA = document.createElement('p');
  appA.classList.add('menu-item');
  appA.innerHTML ='phat shrimp with qt3.14 garnishes'

  const appPic = new Image(250, 250);
  appPic.src = _appy_png__WEBPACK_IMPORTED_MODULE_0__;
  appPic.classList.add('menu-item-photo');

  // const appB = document.createElement('p');
  // appB.classList.add('menu-item');
  // appB.innerHTML ='appetizer 2'

  const mainHead = document.createElement('h2');
  mainHead.classList.add('menu-heading');
  mainHead.innerHTML = 'ENTREES'

  const mainA = document.createElement('p');
  mainA.classList.add('menu-item');
  mainA.innerHTML = `i'm not like other food food`

  const mainPic = new Image(250, 250);
  mainPic.src = _entree_png__WEBPACK_IMPORTED_MODULE_1__;
  mainPic.classList.add('menu-item-photo');

  // const mainB = document.createElement('p');
  // mainB.classList.add('menu-item');
  // mainB.innerHTML ='entree 2'

  const desHead = document.createElement('h2');
  desHead.classList.add('menu-heading');
  desHead.innerHTML = 'DESSERT'

  const dessertA = document.createElement('p');
  dessertA.classList.add('menu-item');
  dessertA.innerHTML ='dessert 1'


  innerDiv.append(appHead, appA, appPic, mainHead, mainA, mainPic, desHead, dessertA);
  outerDiv.append(innerDiv);
  document.body.appendChild(outerDiv);
}


/***/ }),

/***/ "./src/appy.png":
/*!**********************!*\
  !*** ./src/appy.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cd746bcb7ee70a11445.png";

/***/ }),

/***/ "./src/entree.png":
/*!************************!*\
  !*** ./src/entree.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4e7cee0dc24cb110499.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNHOztBQUVqQjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxzQ0FBRztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQix3Q0FBSTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0by1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICcuL2FwcHkucG5nJztcbmltcG9ydCBNYWluIGZyb20gJy4vZW50cmVlLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XG4gIGNvbnN0IG91dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG91dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgaW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5uZXJEaXYuY2xhc3NMaXN0LmFkZCgnbWVudScpXG5cbiAgY29uc3QgYXBwSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGFwcEhlYWQuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkaW5nJyk7XG4gIGFwcEhlYWQuaW5uZXJIVE1MID0gJ0FQUEVUSVpFUlMnO1xuXG4gIGNvbnN0IGFwcEEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFwcEEuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gIGFwcEEuaW5uZXJIVE1MID0ncGhhdCBzaHJpbXAgd2l0aCBxdDMuMTQgZ2FybmlzaGVzJ1xuXG4gIGNvbnN0IGFwcFBpYyA9IG5ldyBJbWFnZSgyNTAsIDI1MCk7XG4gIGFwcFBpYy5zcmMgPSBBcHA7XG4gIGFwcFBpYy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tcGhvdG8nKTtcblxuICAvLyBjb25zdCBhcHBCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAvLyBhcHBCLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAvLyBhcHBCLmlubmVySFRNTCA9J2FwcGV0aXplciAyJ1xuXG4gIGNvbnN0IG1haW5IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgbWFpbkhlYWQuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkaW5nJyk7XG4gIG1haW5IZWFkLmlubmVySFRNTCA9ICdFTlRSRUVTJ1xuXG4gIGNvbnN0IG1haW5BID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtYWluQS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgbWFpbkEuaW5uZXJIVE1MID0gYGknbSBub3QgbGlrZSBvdGhlciBmb29kIGZvb2RgXG5cbiAgY29uc3QgbWFpblBpYyA9IG5ldyBJbWFnZSgyNTAsIDI1MCk7XG4gIG1haW5QaWMuc3JjID0gTWFpbjtcbiAgbWFpblBpYy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tcGhvdG8nKTtcblxuICAvLyBjb25zdCBtYWluQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgLy8gbWFpbkIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gIC8vIG1haW5CLmlubmVySFRNTCA9J2VudHJlZSAyJ1xuXG4gIGNvbnN0IGRlc0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBkZXNIZWFkLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGluZycpO1xuICBkZXNIZWFkLmlubmVySFRNTCA9ICdERVNTRVJUJ1xuXG4gIGNvbnN0IGRlc3NlcnRBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNzZXJ0QS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgZGVzc2VydEEuaW5uZXJIVE1MID0nZGVzc2VydCAxJ1xuXG5cbiAgaW5uZXJEaXYuYXBwZW5kKGFwcEhlYWQsIGFwcEEsIGFwcFBpYywgbWFpbkhlYWQsIG1haW5BLCBtYWluUGljLCBkZXNIZWFkLCBkZXNzZXJ0QSk7XG4gIG91dGVyRGl2LmFwcGVuZChpbm5lckRpdik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXJEaXYpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9