// Define elements
const Hamburger = document.querySelector('.hamburger');
const MobileMenu = document.querySelector('.mobile-nav');

Hamburger.addEventListener('click', function() {
    MobileMenu.classList.toggle('open');
});