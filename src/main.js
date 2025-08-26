import Typed from 'typed.js';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000, // animation duration in ms
  once: false,
});

const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');
const links = document.querySelectorAll('#side-menu a');

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

menuBtn.addEventListener('click', () => {
  sideMenu.classList.remove('translate-x-full');
  sideMenu.classList.add('translate-x-0');
  overlay.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('translate-x-0');
  sideMenu.classList.add('translate-x-full');
  overlay.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
});

overlay.addEventListener('click', () => {
  sideMenu.classList.remove('translate-x-0');
  sideMenu.classList.add('translate-x-full');
  overlay.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    sideMenu.classList.add('translate-x-full');
    overlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  });
});
