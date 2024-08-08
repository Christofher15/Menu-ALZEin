document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        const header = accordion.querySelector('h2');
        const items = accordion.querySelectorAll('.item');

        header.addEventListener('click', () => {
            // Verifica si la sección ya está abierta
            const isActive = header.classList.contains('active');

            // Cierra todas las secciones
            accordions.forEach(acc => {
                acc.querySelector('h2').classList.remove('active');
                const itemContents = acc.querySelectorAll('.item');
                itemContents.forEach(item => {
                    const content = item.querySelector('.content');
                    content.style.maxHeight = null;
                });
            });

            // Si no estaba abierta, abre la sección clickeada
            if (!isActive) {
                header.classList.add('active');
                items.forEach(item => {
                    const content = item.querySelector('.content');
                    content.style.maxHeight = content.scrollHeight + "px";
                });
            }
        });
    });
});
