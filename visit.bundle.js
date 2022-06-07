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
  appA.innerHTML ='appetizer 1'

  const appB = document.createElement('p');
  appB.classList.add('menu-item');
  appB.innerHTML ='appetizer 2'

  const mainHead = document.createElement('h2');
  mainHead.classList.add('menu-heading');
  mainHead.innerHTML = 'ENTREES'

  const mainA = document.createElement('p');
  mainA.classList.add('menu-item');
  mainA.innerHTML ='entree 1'

  const mainB = document.createElement('p');
  mainB.classList.add('menu-item');
  mainB.innerHTML ='entree 2'

  const desHead = document.createElement('h2');
  desHead.classList.add('menu-heading');
  desHead.innerHTML = 'DESSERT'

  const dessertA = document.createElement('p');
  dessertA.classList.add('menu-item');
  dessertA.innerHTML ='dessert 1'


  innerDiv.append(appHead, appA, appB, mainHead, mainA, mainB, desHead, dessertA);
  outerDiv.append(innerDiv);
  document.body.appendChild(outerDiv);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RvLXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xuICBjb25zdCBvdXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdXRlckRpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGlubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlubmVyRGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUnKVxuXG4gIGNvbnN0IGFwcEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBhcHBIZWFkLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGluZycpO1xuICBhcHBIZWFkLmlubmVySFRNTCA9ICdBUFBFVElaRVJTJztcblxuICBjb25zdCBhcHBBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBhcHBBLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICBhcHBBLmlubmVySFRNTCA9J2FwcGV0aXplciAxJ1xuXG4gIGNvbnN0IGFwcEIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFwcEIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gIGFwcEIuaW5uZXJIVE1MID0nYXBwZXRpemVyIDInXG5cbiAgY29uc3QgbWFpbkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBtYWluSGVhZC5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRpbmcnKTtcbiAgbWFpbkhlYWQuaW5uZXJIVE1MID0gJ0VOVFJFRVMnXG5cbiAgY29uc3QgbWFpbkEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1haW5BLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICBtYWluQS5pbm5lckhUTUwgPSdlbnRyZWUgMSdcblxuICBjb25zdCBtYWluQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWFpbkIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gIG1haW5CLmlubmVySFRNTCA9J2VudHJlZSAyJ1xuXG4gIGNvbnN0IGRlc0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBkZXNIZWFkLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGluZycpO1xuICBkZXNIZWFkLmlubmVySFRNTCA9ICdERVNTRVJUJ1xuXG4gIGNvbnN0IGRlc3NlcnRBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNzZXJ0QS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgZGVzc2VydEEuaW5uZXJIVE1MID0nZGVzc2VydCAxJ1xuXG5cbiAgaW5uZXJEaXYuYXBwZW5kKGFwcEhlYWQsIGFwcEEsIGFwcEIsIG1haW5IZWFkLCBtYWluQSwgbWFpbkIsIGRlc0hlYWQsIGRlc3NlcnRBKTtcbiAgb3V0ZXJEaXYuYXBwZW5kKGlubmVyRGl2KTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlckRpdik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=