



const burger = document.querySelector('#burger');
const navLinks = document.querySelector('#nav-links');

function toggleNav() {
  burger.classList.toggle('active');
  navLinks.classList.toggle('nav_active');
}

burger.addEventListener('click', toggleNav);
