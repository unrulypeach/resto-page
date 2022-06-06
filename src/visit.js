export default function visit() {
  const div = document.createElement('div');
  div.classList.add('visit');

  const visitHeading = document.createElement('h1');
  visitHeading.classList.add('visit-header');
  visitHeading.innerHTML = 'This is us!';

  const address = document.createElement('p');
  address.classList.add('address');
  address.innerHTML = ' 001 EVEREST MT. <br> 000-0001'

  const image = document.createElement('div');

  div.append(visitHeading, address);
  document.body.appendChild(div);
}