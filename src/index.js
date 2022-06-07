import _, { remove } from 'lodash';
import './style.css';
import homepage from './homepage';
import menu from './menu';
import visit from './visit';
import about from './about';
import IconInsta from './Instagram_Glyph_Black.svg';
import IconFb from './f_logo_RGB-Black_58.png';
import IconTwit from './LogoBlack.svg';

function navBar() {
  const liMain = document.createElement('li');
  liMain.innerHTML = 'You  X';
  liMain.classList.add('navBarItem');
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

  const liIcons = document.createElement('li');
  liIcons.classList.add('navBarItem');
  //Instagram
  const iconInst = new Image(21, 21);
  iconInst.src = IconInsta;
  iconInst.classList.add('social-media-icon');
  //fb
  const iconFb = new Image(21, 21);
  iconFb.src = IconFb;
  iconFb.classList.add('social-media-icon');
  //twit
  const iconTwit = new Image(21, 21);
  iconTwit.src = IconTwit;
  iconTwit.classList.add('social-media-icon');

  liIcons.append(iconTwit, iconInst, iconFb);

  const ul = document.createElement('ul');
  ul.classList.add('navBarContainer');
  ul.append(liMain, liAbout, liMenu, liVisit, liIcons);

  document.body.appendChild(ul);
}
function removeExistingDivs() {
  const onlyDiv = document.getElementsByTagName('div')[0];
  onlyDiv.remove();
}


navBar();
homepage();

export {removeExistingDivs};