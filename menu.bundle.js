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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdG8tcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XG4gIGNvbnN0IG91dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG91dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgaW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5uZXJEaXYuY2xhc3NMaXN0LmFkZCgnbWVudScpXG5cbiAgY29uc3QgYXBwSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGFwcEhlYWQuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkaW5nJyk7XG4gIGFwcEhlYWQuaW5uZXJIVE1MID0gJ0FQUEVUSVpFUlMnO1xuXG4gIGNvbnN0IGFwcEEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFwcEEuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gIGFwcEEuaW5uZXJIVE1MID0nYXBwZXRpemVyIDEnXG5cbiAgY29uc3QgYXBwQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYXBwQi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgYXBwQi5pbm5lckhUTUwgPSdhcHBldGl6ZXIgMidcblxuICBjb25zdCBtYWluSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIG1haW5IZWFkLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGluZycpO1xuICBtYWluSGVhZC5pbm5lckhUTUwgPSAnRU5UUkVFUydcblxuICBjb25zdCBtYWluQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWFpbkEuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gIG1haW5BLmlubmVySFRNTCA9J2VudHJlZSAxJ1xuXG4gIGNvbnN0IG1haW5CID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtYWluQi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgbWFpbkIuaW5uZXJIVE1MID0nZW50cmVlIDInXG5cbiAgY29uc3QgZGVzSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGRlc0hlYWQuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkaW5nJyk7XG4gIGRlc0hlYWQuaW5uZXJIVE1MID0gJ0RFU1NFUlQnXG5cbiAgY29uc3QgZGVzc2VydEEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc3NlcnRBLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICBkZXNzZXJ0QS5pbm5lckhUTUwgPSdkZXNzZXJ0IDEnXG5cblxuICBpbm5lckRpdi5hcHBlbmQoYXBwSGVhZCwgYXBwQSwgYXBwQiwgbWFpbkhlYWQsIG1haW5BLCBtYWluQiwgZGVzSGVhZCwgZGVzc2VydEEpO1xuICBvdXRlckRpdi5hcHBlbmQoaW5uZXJEaXYpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyRGl2KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==