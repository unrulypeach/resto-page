export default function about() {
  const div = document.createElement('div');
  div.classList.add('about');


  const babyA = document.createElement('p');
  babyA.classList.add('about-section');
  babyA.innerHTML = 'All natural ingredients';
  
  const babyB = document.createElement('p');
  babyB.classList.add('about-section');
  babyB.innerHTML = 'The best chefs';


  const babyC = document.createElement('p');
  babyC.classList.add('about-section');
  babyC.innerHTML = 'Only for amazing people (you)';


  div.append(babyA, babyB, babyC);
  document.body.appendChild(div);
}