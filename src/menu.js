export default function menu() {
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
