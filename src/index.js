import _, { remove } from 'lodash';
import './style.css';
import homepage from './homepage';
import menu from './menu';
import visit from './visit';
import about from './about';
// import Background from './main-page.png';

function navBar() {
  const liMain = document.createElement('li');
  liMain.innerHTML = 'Logo';
  liMain.classList.add('navBarItem');
  // liMain.onclick = homepage; //also gotta remove previous div
  liMain.addEventListener('click', function(){
    removeExistingDivs();
    homepage();
  })
  const liAbout = document.createElement('li');
  liAbout.innerHTML = 'About';
  liAbout.classList.add('navBarItem');
  liAbout.addEventListener('click', function(){
    removeExistingDivs();
    about();
  })
  const liMenu = document.createElement('li');
  liMenu.innerHTML = 'Menu';
  liMenu.classList.add('navBarItem');
  liMenu.addEventListener('click', function(){
    removeExistingDivs();
    menu();
  })
  const liVisit = document.createElement('li');
  liVisit.innerText = 'Visit';
  liVisit.classList.add('navBarItem');
  liVisit.addEventListener('click', function(){
    removeExistingDivs();
    visit();
  })
  const ul = document.createElement('ul');
  ul.classList.add('navBarContainer');
  ul.append(liMain, liAbout, liMenu, liVisit);

  return ul
}
function removeExistingDivs() {
  const onlyDiv = document.getElementsByTagName('div')[0];
  onlyDiv.remove();
}


document.body.appendChild(navBar());
homepage();