function moveCarousel(direction, carouselId) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.querySelectorAll('.carousel-item');
    const itemWidth = items[0].clientWidth;
    const currentTransform = getComputedStyle(carousel).transform;
    let currentX = currentTransform !== 'none' ? parseInt(currentTransform.split(',')[4]) : 0;

    let newX = currentX - direction * itemWidth;

    if (newX < -itemWidth * (items.length - 1)) {
        newX = 0; 
    } else if (newX > 0) {
        newX = -itemWidth * (items.length - 1); 
    }

    carousel.style.transform = `translateX(${newX}px)`;

    items.forEach(item => item.classList.remove('active'));
    const activeIndex = Math.abs(newX / itemWidth);
    items[activeIndex].classList.add('active');
}
