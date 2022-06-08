"use strict";
(self["webpackChunkresto_page"] = self["webpackChunkresto_page"] || []).push([["menu"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0c7O0FBRWpCO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHNDQUFHO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHdDQUFJO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RvLXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4vYXBweS5wbmcnO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9lbnRyZWUucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcbiAgY29uc3Qgb3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3V0ZXJEaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcblxuICBjb25zdCBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbm5lckRpdi5jbGFzc0xpc3QuYWRkKCdtZW51JylcblxuICBjb25zdCBhcHBIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgYXBwSGVhZC5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRpbmcnKTtcbiAgYXBwSGVhZC5pbm5lckhUTUwgPSAnQVBQRVRJWkVSUyc7XG5cbiAgY29uc3QgYXBwQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYXBwQS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgYXBwQS5pbm5lckhUTUwgPSdwaGF0IHNocmltcCB3aXRoIHF0My4xNCBnYXJuaXNoZXMnXG5cbiAgY29uc3QgYXBwUGljID0gbmV3IEltYWdlKDI1MCwgMjUwKTtcbiAgYXBwUGljLnNyYyA9IEFwcDtcbiAgYXBwUGljLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1waG90bycpO1xuXG4gIC8vIGNvbnN0IGFwcEIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIC8vIGFwcEIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gIC8vIGFwcEIuaW5uZXJIVE1MID0nYXBwZXRpemVyIDInXG5cbiAgY29uc3QgbWFpbkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBtYWluSGVhZC5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRpbmcnKTtcbiAgbWFpbkhlYWQuaW5uZXJIVE1MID0gJ0VOVFJFRVMnXG5cbiAgY29uc3QgbWFpbkEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1haW5BLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICBtYWluQS5pbm5lckhUTUwgPSBgaSdtIG5vdCBsaWtlIG90aGVyIGZvb2QgZm9vZGBcblxuICBjb25zdCBtYWluUGljID0gbmV3IEltYWdlKDI1MCwgMjUwKTtcbiAgbWFpblBpYy5zcmMgPSBNYWluO1xuICBtYWluUGljLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1waG90bycpO1xuXG4gIC8vIGNvbnN0IG1haW5CID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAvLyBtYWluQi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgLy8gbWFpbkIuaW5uZXJIVE1MID0nZW50cmVlIDInXG5cbiAgY29uc3QgZGVzSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGRlc0hlYWQuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkaW5nJyk7XG4gIGRlc0hlYWQuaW5uZXJIVE1MID0gJ0RFU1NFUlQnXG5cbiAgY29uc3QgZGVzc2VydEEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc3NlcnRBLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICBkZXNzZXJ0QS5pbm5lckhUTUwgPSdkZXNzZXJ0IDEnXG5cblxuICBpbm5lckRpdi5hcHBlbmQoYXBwSGVhZCwgYXBwQSwgYXBwUGljLCBtYWluSGVhZCwgbWFpbkEsIG1haW5QaWMsIGRlc0hlYWQsIGRlc3NlcnRBKTtcbiAgb3V0ZXJEaXYuYXBwZW5kKGlubmVyRGl2KTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlckRpdik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=