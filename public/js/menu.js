document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
    const theta = 360 / 5; 

    function rotateCarousel(carouselId, direction) {
        const carousel = document.getElementById(carouselId);
        const items = carousel.querySelectorAll('.carousel-item');
        let currentItem = parseInt(carousel.getAttribute('data-current-item')) || 0;
        const totalItems = items.length;

        currentItem = (currentItem + direction + totalItems) % totalItems;
        carousel.setAttribute('data-current-item', currentItem);

        const angle = theta * currentItem * -1;
        items.forEach((item, index) => {
            const itemAngle = theta * index + angle;
            item.style.transform = `rotateY(${itemAngle}deg) translateZ(300px)`;
        });
    }

    document.querySelectorAll('.next-button').forEach(button => {
        button.addEventListener('click', () => {
            const carouselId = button.getAttribute('data-carousel');
            rotateCarousel(carouselId, 1);
        });
    });

    document.querySelectorAll('.prev-button').forEach(button => {
        button.addEventListener('click', () => {
            const carouselId = button.getAttribute('data-carousel');
            rotateCarousel(carouselId, -1);
        });
    });

    carousels.forEach(carousel => {
        carousel.setAttribute('data-current-item', 0);
        rotateCarousel(carousel.id, 0);
    });
});
