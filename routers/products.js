const express = require('express');
const router = express.Router();

// Ejemplo de productos en memoria
const products = [
    { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', price: 100 },
    { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', price: 200 },
    // Más productos...
];

// Función para obtener un producto por su ID
function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}

// Ruta para los detalles del producto
router.get('/detail/:id', (req, res) => {
    const productId = req.params.id;
    const product = getProductById(productId);

    if (product) {
        res.render('productsDetail', { product });
    } else {
        res.status(404).send('Producto no encontrado');
    }
});

module.exports = router;
