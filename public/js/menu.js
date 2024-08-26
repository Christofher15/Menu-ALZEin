document.querySelector('.menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('.main-nav');
    const menuIcon = document.querySelector('.menu-icon');
    
    // Alterna la clase 'active' para mostrar/ocultar el menú
    nav.classList.toggle('active');
    menuIcon.classList.toggle('active');

    // Animación de deslizamiento
    if (nav.classList.contains('active')) {
        nav.style.maxHeight = nav.scrollHeight + "px"; // Expande el menú
    } else {
        nav.style.maxHeight = "0"; // Colapsa el menú
    }
});

// Asegúrate de restablecer la altura máxima al cambiar el tamaño de la ventana
window.addEventListener('resize', function() {
    const nav = document.querySelector('.main-nav');
    if (window.innerWidth > 768) {
        nav.style.maxHeight = null; // Elimina el estilo en pantallas grandes
        nav.classList.remove('active'); // Elimina la clase active si la ventana se expande
    }
});
