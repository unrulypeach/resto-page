import App from './appy.png';
import Main from './entree.png';
import Dessert from './dessert.png';

export default function menu() {
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
  appPic.src = App;
  appPic.classList.add('menu-item-photo');

  const mainHead = document.createElement('h2');
  mainHead.classList.add('menu-heading');
  mainHead.innerHTML = 'ENTREE'

  const mainCaption = document.createElement('p');
  mainCaption.classList.add('menu-item');
  mainCaption.innerHTML = `i'm not like other food food`

  const mainPic = new Image(250, 250);
  mainPic.src = Main;
  mainPic.classList.add('menu-item-photo');

  const desHead = document.createElement('h2');
  desHead.classList.add('menu-heading');
  desHead.innerHTML = 'DESSERT'

  const dessertCaption = document.createElement('p');
  dessertCaption.classList.add('menu-item');
  dessertCaption.innerHTML ='finger lickin gud'

  const dessertPic = new Image(250, 250);
  dessertPic.src = Dessert;
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
