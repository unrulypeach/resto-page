export default function homepage() {
  const div = document.createElement('div');
  div.classList.add('homepage');

  const restName = document.createElement('h1');
  restName.classList.add('logoName');
  restName.innerHTML = 'RESTAURANT NAME';

  div.appendChild(restName);

  const btn = document.createElement('button');
  btn.classList.add('menu-btn');
  btn.innerHTML = 'Checkout our seasonal menu';

  div.appendChild(btn);

  document.body.appendChild(div);
};