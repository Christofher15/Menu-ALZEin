// /js/menu.js
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const menuIcon = document.querySelector('.menu-icon');

    menuToggle.addEventListener('click', function () {
        mainNav.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });
});
