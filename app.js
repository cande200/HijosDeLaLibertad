document.addEventListener('DOMContentLoaded', () => {
    const colors = document.querySelectorAll('.color');

    // Cambio de imagen al seleccionar color
    colors.forEach(color => {
        color.addEventListener('click', function() {
            const newImage = this.getAttribute('data-image');
            const product = this.closest('.product');
            const img = product.querySelector('.product-image');
            img.src = newImage; // Cambia la imagen del producto
        });
    });
});

    // Toggle menu visibility on mobile
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Funcionalidad del buscador
    const searchForm = document.getElementById('searchForm');
    const buscador = document.getElementById('buscador');
    const products = document.querySelectorAll('.product');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = buscador.value.toLowerCase();

        products.forEach(product => {
            const title = product.querySelector('h2').textContent.toLowerCase();
            // Muestra el producto si el título incluye el término de búsqueda
            product.style.display = title.includes(searchTerm) ? '' : 'none';
        });
    });