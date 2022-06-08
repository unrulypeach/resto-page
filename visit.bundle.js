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
/* harmony import */ var _dessert_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dessert.png */ "./src/dessert.png");




function menu() {
  const outerDiv = document.createElement('div');
  outerDiv.classList.add('menu-container');

  const innerDiv = document.createElement('div');
  innerDiv.classList.add('menu')

  const appHead = document.createElement('h2');
  appHead.classList.add('menu-heading');
  appHead.innerHTML = 'APPETIZER';

  const appCaption = document.createElement('p');
  appCaption.classList.add('menu-item');
  appCaption.innerHTML ='ooooh whats that?'

  const appPic = new Image(250, 250);
  appPic.src = _appy_png__WEBPACK_IMPORTED_MODULE_0__;
  appPic.classList.add('menu-item-photo');

  const mainHead = document.createElement('h2');
  mainHead.classList.add('menu-heading');
  mainHead.innerHTML = 'ENTREE'

  const mainCaption = document.createElement('p');
  mainCaption.classList.add('menu-item');
  mainCaption.innerHTML = `i'm not like other food food`

  const mainPic = new Image(250, 250);
  mainPic.src = _entree_png__WEBPACK_IMPORTED_MODULE_1__;
  mainPic.classList.add('menu-item-photo');

  const desHead = document.createElement('h2');
  desHead.classList.add('menu-heading');
  desHead.innerHTML = 'DESSERT'

  const dessertCaption = document.createElement('p');
  dessertCaption.classList.add('menu-item');
  dessertCaption.innerHTML ='finger lickin gud'

  const dessertPic = new Image(250, 250);
  dessertPic.src = _dessert_png__WEBPACK_IMPORTED_MODULE_2__;
  dessertPic.classList.add('menu-item-photo')

  const appSec = document.createElement('div');
  appSec.classList.add('menu-section');
  appSec.append(appHead, appPic, appCaption);

  const mainSec = document.createElement('div');
  mainSec.classList.add('menu-section');
  mainSec.append(mainHead, mainPic, mainCaption);

  const desSec = document.createElement('div');
  desSec.classList.add('menu-section');
  desSec.append(desHead, dessertPic, dessertCaption);

  innerDiv.append( appSec, mainSec, desSec);
  outerDiv.append(innerDiv)
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

/***/ "./src/dessert.png":
/*!*************************!*\
  !*** ./src/dessert.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29978619aba3ab26a2fd.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRztBQUNJOztBQUVyQjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxzQ0FBRztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHdDQUFJO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIseUNBQU87QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0by1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICcuL2FwcHkucG5nJztcbmltcG9ydCBNYWluIGZyb20gJy4vZW50cmVlLnBuZyc7XG5pbXBvcnQgRGVzc2VydCBmcm9tICcuL2Rlc3NlcnQucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcbiAgY29uc3Qgb3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3V0ZXJEaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcblxuICBjb25zdCBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbm5lckRpdi5jbGFzc0xpc3QuYWRkKCdtZW51JylcblxuICBjb25zdCBhcHBIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgYXBwSGVhZC5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRpbmcnKTtcbiAgYXBwSGVhZC5pbm5lckhUTUwgPSAnQVBQRVRJWkVSJztcblxuICBjb25zdCBhcHBDYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBhcHBDYXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICBhcHBDYXB0aW9uLmlubmVySFRNTCA9J29vb29oIHdoYXRzIHRoYXQ/J1xuXG4gIGNvbnN0IGFwcFBpYyA9IG5ldyBJbWFnZSgyNTAsIDI1MCk7XG4gIGFwcFBpYy5zcmMgPSBBcHA7XG4gIGFwcFBpYy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tcGhvdG8nKTtcblxuICBjb25zdCBtYWluSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIG1haW5IZWFkLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGluZycpO1xuICBtYWluSGVhZC5pbm5lckhUTUwgPSAnRU5UUkVFJ1xuXG4gIGNvbnN0IG1haW5DYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtYWluQ2FwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgbWFpbkNhcHRpb24uaW5uZXJIVE1MID0gYGknbSBub3QgbGlrZSBvdGhlciBmb29kIGZvb2RgXG5cbiAgY29uc3QgbWFpblBpYyA9IG5ldyBJbWFnZSgyNTAsIDI1MCk7XG4gIG1haW5QaWMuc3JjID0gTWFpbjtcbiAgbWFpblBpYy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tcGhvdG8nKTtcblxuICBjb25zdCBkZXNIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgZGVzSGVhZC5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRpbmcnKTtcbiAgZGVzSGVhZC5pbm5lckhUTUwgPSAnREVTU0VSVCdcblxuICBjb25zdCBkZXNzZXJ0Q2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzc2VydENhcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gIGRlc3NlcnRDYXB0aW9uLmlubmVySFRNTCA9J2ZpbmdlciBsaWNraW4gZ3VkJ1xuXG4gIGNvbnN0IGRlc3NlcnRQaWMgPSBuZXcgSW1hZ2UoMjUwLCAyNTApO1xuICBkZXNzZXJ0UGljLnNyYyA9IERlc3NlcnQ7XG4gIGRlc3NlcnRQaWMuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXBob3RvJylcblxuICBjb25zdCBhcHBTZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYXBwU2VjLmNsYXNzTGlzdC5hZGQoJ21lbnUtc2VjdGlvbicpO1xuICBhcHBTZWMuYXBwZW5kKGFwcEhlYWQsIGFwcFBpYywgYXBwQ2FwdGlvbik7XG5cbiAgY29uc3QgbWFpblNlYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluU2VjLmNsYXNzTGlzdC5hZGQoJ21lbnUtc2VjdGlvbicpO1xuICBtYWluU2VjLmFwcGVuZChtYWluSGVhZCwgbWFpblBpYywgbWFpbkNhcHRpb24pO1xuXG4gIGNvbnN0IGRlc1NlYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNTZWMuY2xhc3NMaXN0LmFkZCgnbWVudS1zZWN0aW9uJyk7XG4gIGRlc1NlYy5hcHBlbmQoZGVzSGVhZCwgZGVzc2VydFBpYywgZGVzc2VydENhcHRpb24pO1xuXG4gIGlubmVyRGl2LmFwcGVuZCggYXBwU2VjLCBtYWluU2VjLCBkZXNTZWMpO1xuICBvdXRlckRpdi5hcHBlbmQoaW5uZXJEaXYpXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXJEaXYpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9