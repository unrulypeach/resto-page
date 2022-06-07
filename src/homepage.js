import menu from "./menu";
import { removeExistingDivs } from "./index.js";
import FoodPic from './main-page-food-photo-with-shadow.png';

export default function homepage() {
  const div = document.createElement('div');
  div.classList.add('homepage');

  const restName = document.createElement('h1');
  restName.classList.add('logoName');
  restName.innerHTML = 'you  X';

  const foodPic = new Image(350, 350);
  foodPic.src = FoodPic;
  foodPic.classList.add('homepage-photo');

  div.appendChild(foodPic);
  div.appendChild(restName);

  const btn = document.createElement('button');
  btn.classList.add('menu-btn');
  btn.innerHTML = 'Checkout our seasonal menu';
  btn.addEventListener('click', function(){
    removeExistingDivs();
    menu();
  })

  div.appendChild(btn);

  document.body.appendChild(div);
};