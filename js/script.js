const burger = document.getElementById('burger')
const nav = document.getElementById('nav-links')

function toggleMenu() {
    burger.classList.toggle('burger_toggle')
    nav.classList.toggle('nav_active')
}

burger.addEventListener('click', toggleMenu)


var btn = $('.btn');

btn.on('click', function() {
  $(this).toggleClass('active not-active');
});

