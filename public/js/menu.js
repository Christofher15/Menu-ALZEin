document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.flex = '1 1 45%';
    });

    item.addEventListener('mouseout', () => {
        item.style.flex = '1 1 20%';
    });
});
