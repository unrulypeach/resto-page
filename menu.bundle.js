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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNHO0FBQ0k7O0FBRXJCO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHNDQUFHO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isd0NBQUk7QUFDcEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix5Q0FBTztBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RvLXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4vYXBweS5wbmcnO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9lbnRyZWUucG5nJztcbmltcG9ydCBEZXNzZXJ0IGZyb20gJy4vZGVzc2VydC5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xuICBjb25zdCBvdXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdXRlckRpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGlubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlubmVyRGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUnKVxuXG4gIGNvbnN0IGFwcEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBhcHBIZWFkLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGluZycpO1xuICBhcHBIZWFkLmlubmVySFRNTCA9ICdBUFBFVElaRVInO1xuXG4gIGNvbnN0IGFwcENhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFwcENhcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gIGFwcENhcHRpb24uaW5uZXJIVE1MID0nb29vb2ggd2hhdHMgdGhhdD8nXG5cbiAgY29uc3QgYXBwUGljID0gbmV3IEltYWdlKDI1MCwgMjUwKTtcbiAgYXBwUGljLnNyYyA9IEFwcDtcbiAgYXBwUGljLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1waG90bycpO1xuXG4gIGNvbnN0IG1haW5IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgbWFpbkhlYWQuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkaW5nJyk7XG4gIG1haW5IZWFkLmlubmVySFRNTCA9ICdFTlRSRUUnXG5cbiAgY29uc3QgbWFpbkNhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1haW5DYXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICBtYWluQ2FwdGlvbi5pbm5lckhUTUwgPSBgaSdtIG5vdCBsaWtlIG90aGVyIGZvb2QgZm9vZGBcblxuICBjb25zdCBtYWluUGljID0gbmV3IEltYWdlKDI1MCwgMjUwKTtcbiAgbWFpblBpYy5zcmMgPSBNYWluO1xuICBtYWluUGljLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1waG90bycpO1xuXG4gIGNvbnN0IGRlc0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBkZXNIZWFkLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGluZycpO1xuICBkZXNIZWFkLmlubmVySFRNTCA9ICdERVNTRVJUJ1xuXG4gIGNvbnN0IGRlc3NlcnRDYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNzZXJ0Q2FwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgZGVzc2VydENhcHRpb24uaW5uZXJIVE1MID0nZmluZ2VyIGxpY2tpbiBndWQnXG5cbiAgY29uc3QgZGVzc2VydFBpYyA9IG5ldyBJbWFnZSgyNTAsIDI1MCk7XG4gIGRlc3NlcnRQaWMuc3JjID0gRGVzc2VydDtcbiAgZGVzc2VydFBpYy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tcGhvdG8nKVxuXG4gIGNvbnN0IGFwcFNlYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhcHBTZWMuY2xhc3NMaXN0LmFkZCgnbWVudS1zZWN0aW9uJyk7XG4gIGFwcFNlYy5hcHBlbmQoYXBwSGVhZCwgYXBwUGljLCBhcHBDYXB0aW9uKTtcblxuICBjb25zdCBtYWluU2VjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5TZWMuY2xhc3NMaXN0LmFkZCgnbWVudS1zZWN0aW9uJyk7XG4gIG1haW5TZWMuYXBwZW5kKG1haW5IZWFkLCBtYWluUGljLCBtYWluQ2FwdGlvbik7XG5cbiAgY29uc3QgZGVzU2VjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc1NlYy5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24nKTtcbiAgZGVzU2VjLmFwcGVuZChkZXNIZWFkLCBkZXNzZXJ0UGljLCBkZXNzZXJ0Q2FwdGlvbik7XG5cbiAgaW5uZXJEaXYuYXBwZW5kKCBhcHBTZWMsIG1haW5TZWMsIGRlc1NlYyk7XG4gIG91dGVyRGl2LmFwcGVuZChpbm5lckRpdilcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlckRpdik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=