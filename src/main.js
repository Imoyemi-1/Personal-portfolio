import Typed from 'typed.js';

const options = {
  strings: [
    'I turn designs into high-quality code',
    'I craft engaging user experiences',
    'I build responsive, modern interfaces',
    'I bring digital visions to life',
    'I create seamless web applications',
    'I develop with passion and precision',
    'I transform ideas into reality',
    'I code with creativity and efficiency',
    'I specialize in front-end development',
    'I deliver pixel-perfect websites',
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true,
};

const typed = new Typed('#typed', options);

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.shapes');
  for (let i = 0; i < 35; i++) {
    const span = document.createElement('span');
    span.style.setProperty('--x', Math.random() * 100); // random X
    span.style.setProperty('--d', Math.random() * 5); // random duration
    span.style.setProperty('--delay', Math.random() * 5);
    span.style.setProperty('--s', Math.random()); // random scale
    container.appendChild(span);
  }
});
