document.addEventListener('DOMContentLoaded', () => {
    function initializeCarousel(carouselId) {
        const carousel = document.getElementById(carouselId);
        if (!carousel) {
            console.error(`Carrusel con ID ${carouselId} no encontrado.`);
            return;
        }

        const slideContainer = carousel.querySelector('.carousel-container');
        const slide = carousel.querySelector('.carousel-slide');
        const images = slide.querySelectorAll('.carousel-item img');

        const prevBtn = carousel.querySelector('.prevBtn');
        const nextBtn = carousel.querySelector('.nextBtn');

        if (!slideContainer || !slide || images.length === 0 || !prevBtn || !nextBtn) {
            console.error(`Elementos necesarios para el carrusel con ID ${carouselId} no encontrados.`);
            return;
        }

        let index = 0;
        const totalSlides = images.length;
        const imageWidth = images[0].clientWidth + 20; 
        slide.style.width = `${imageWidth * totalSlides}px`; 

        function updateCarousel() {
            const offset = -index * imageWidth;
            slide.style.transform = `translateX(${offset}px)`;
            images.forEach((image, i) => {
                image.classList.toggle('active', i === index);
                image.classList.toggle('inactive', i !== index);
            });
        }

        updateCarousel();

        nextBtn.addEventListener('click', () => {
            if (index >= totalSlides - 1) return;
            index++;
            slide.style.transition = "transform 0.5s ease-in-out";
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (index <= 0) return;
            index--;
            slide.style.transition = "transform 0.5s ease-in-out";
            updateCarousel();
        });
    }

    initializeCarousel('carousel1');
    initializeCarousel('carousel2');
    initializeCarousel('carousel3');
    initializeCarousel('carousel4');
});
