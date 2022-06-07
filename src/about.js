import Earth from './earth.png';

export default function about() {
  const div = document.createElement('div');
  div.classList.add('about');
  
  const babyB = document.createElement('p');
  babyB.classList.add('about-section');
  babyB.innerHTML = 'All natural <br> ingredients &';

  const babyC = document.createElement('p');
  babyC.classList.add('about-section');
  babyC.innerHTML = 'The Best View on <br> earth';

  const earth = new Image(220, 220);
  earth.src = Earth;
  earth.classList.add('about-pic');

  div.append(earth, babyB, babyC,);
  document.body.appendChild(div);
}