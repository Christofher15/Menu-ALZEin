document.querySelector('.menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('.main-nav');
    const menuIcon = document.querySelector('.menu-icon');
    
    nav.classList.toggle('active');
    menuIcon.classList.toggle('active');

    if (nav.classList.contains('active')) {
        nav.style.maxHeight = nav.scrollHeight + "px"; 
    } else {
        nav.style.maxHeight = "0"; 
    }
});

window.addEventListener('resize', function() {
    const nav = document.querySelector('.main-nav');
    if (window.innerWidth > 768) {
        nav.style.maxHeight = null; 
        nav.classList.remove('active'); 
    }
});
