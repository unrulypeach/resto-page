"use strict";
(self["webpackChunkresto_page"] = self["webpackChunkresto_page"] || []).push([["about"],{

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _earth_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./earth.png */ "./src/earth.png");


function about() {
  const div = document.createElement('div');
  div.classList.add('about');
  
  const babyB = document.createElement('p');
  babyB.classList.add('about-section');
  babyB.innerHTML = 'All natural <br> ingredients &';

  const babyC = document.createElement('p');
  babyC.classList.add('about-section');
  babyC.innerHTML = 'The Best View on <br> earth';

  const earth = new Image(500, 500);
  earth.src = _earth_png__WEBPACK_IMPORTED_MODULE_0__;
  earth.classList.add('about-pic');

  div.append(earth, babyB, babyC,);
  document.body.appendChild(div);
}

/***/ }),

/***/ "./src/earth.png":
/*!***********************!*\
  !*** ./src/earth.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5719b6ead96e3434fd7.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/about.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdDOztBQUVqQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLHVDQUFLO0FBQ25COztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RvLXBhZ2UvLi9zcmMvYWJvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVhcnRoIGZyb20gJy4vZWFydGgucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXQoKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcbiAgXG4gIGNvbnN0IGJhYnlCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBiYWJ5Qi5jbGFzc0xpc3QuYWRkKCdhYm91dC1zZWN0aW9uJyk7XG4gIGJhYnlCLmlubmVySFRNTCA9ICdBbGwgbmF0dXJhbCA8YnI+IGluZ3JlZGllbnRzICYnO1xuXG4gIGNvbnN0IGJhYnlDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBiYWJ5Qy5jbGFzc0xpc3QuYWRkKCdhYm91dC1zZWN0aW9uJyk7XG4gIGJhYnlDLmlubmVySFRNTCA9ICdUaGUgQmVzdCBWaWV3IG9uIDxicj4gZWFydGgnO1xuXG4gIGNvbnN0IGVhcnRoID0gbmV3IEltYWdlKDUwMCwgNTAwKTtcbiAgZWFydGguc3JjID0gRWFydGg7XG4gIGVhcnRoLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXBpYycpO1xuXG4gIGRpdi5hcHBlbmQoZWFydGgsIGJhYnlCLCBiYWJ5QywpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9