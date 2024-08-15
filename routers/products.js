const express = require('express');
const router = express.Router();

// Productos del menú
const products = [
    // Sección Entradas Calientes
    { id: 1, name: 'Borak', description: '6 empanaditas fritas con relleno de queso árabe, perejil y especias.', price: 8000, image: '/images/borak.jpg' },
    { id: 2, name: 'Falafel', description: '6 bolitas de garbanzo procesado con perejil, morrón y especias árabes.', price: 8000, image: '/images/falafel.jpg' },
    { id: 3, name: 'Hoja de Parra', description: 'Hojas de parra envueltas rellenas de arroz, carne picada y especias árabes.', price: 8000, image: '/images/hoja_parra.jpg' },
    { id: 4, name: 'Kebbe al Horno', description: 'Masa de trigo burgol con carne compactada relleno de carne picada, cebolla, nueces y especias árabes.', price: 8000, image: '/images/kebbe_horno.jpg' },
    { id: 5, name: 'Kebbe Frito', description: 'Masa de trigo burgol con carne compactada relleno de carne picada, cebolla, nueces y especias árabes.', price: 8000, image: '/images/kebbe_frito.jpg' },
    { id: 6, name: 'Papas Fritas', description: 'Corte tradicional en bastones con especias de la casa.', price: 8000, image: '/images/papas_fritas.jpg' },
    { id: 7, name: 'Queso a la Parrilla', description: 'Queso árabe asado con aceitunas.', price: 8000, image: '/images/queso_parrilla.jpg' },

    // Sección Platos Calientes
    { id: 8, name: 'Shawarma de Carne', description: 'Carne, lechuga, tomate y cebolla, mayonesa de ajo y tarator.', price: 15000, image: '/images/shawarma_carne.jpg' },
    { id: 9, name: 'Shawarma de Carne al Plato', description: 'Carne, lechuga, tomate y cebolla, mayonesa de ajo y tarator.', price: 15000, image: '/images/shawarma_carne_plato.jpg' },
    { id: 10, name: 'Shawarma de Pollo', description: 'Pollo, lechuga, tomate y cebolla, mayonesa de ajo.', price: 15000, image: '/images/shawarma_pollo.jpg' },
    { id: 11, name: 'Shawarma de Pollo al Plato', description: 'Pollo, lechuga, tomate y cebolla, mayonesa de ajo y tarator.', price: 15000, image: '/images/shawarma_pollo_plato.jpg' },
    { id: 12, name: 'Shawarma Mixto', description: 'Carne y pollo, lechuga, tomate y cebolla, mayonesa de ajo y tarator.', price: 15000, image: '/images/shawarma_mixto.jpg' },
    { id: 13, name: 'Shawarma Mixto al Plato', description: 'Carne y pollo, lechuga, tomate y cebolla, mayonesa de ajo y tarator.', price: 15000, image: '/images/shawarma_mixto_plato.jpg' },
    { id: 14, name: 'Shish Kebab', description: 'Carne picada puesta en fierros a la parrilla con papas o ensalada.', price: 15000, image: '/images/shish_kebab.jpg' },
    { id: 15, name: 'Shish Taouk', description: 'Brochettes de pollo cortado a cuchillo con papas fritas o ensalada.', price: 15000, image: '/images/shish_taouk.jpg' },
    { id: 16, name: 'Lomo', description: '2 brochettes de lomo cortado a cuchillo con papas fritas o ensalada.', price: 15000, image: '/images/lomo.jpg' },
    { id: 17, name: 'Falafel en Sandwich', description: 'Lechuga, cebolla y tomate, salsa de ajo o hummus y salsa de tarator.', price: 15000, image: '/images/falafel_sandwich.jpg' },
    { id: 18, name: 'Carne al Plato', description: 'Carne picada bien condimentada a la parrilla con papas fritas o ensalada.', price: 15000, image: '/images/carne_plato.jpg' },
    { id: 19, name: 'Pollo Crocante', description: '1/2 porción de supremas de pollo condimentado al estilo crispy.', price: 15000, image: '/images/pollo_crocante.jpg' },
    { id: 20, name: 'Toshka', description: 'Pan árabe relleno con carne picada condimentada y cocinado a la parrilla con papas fritas o ensalada.', price: 15000, image: '/images/toshka.jpg' },

    // Sección Platos Fríos/Ensaladas
    { id: 21, name: 'Hummus', description: 'Garbanzo, tahine y especias árabes.', price: 10000, image: '/images/hummus.jpg' },
    { id: 22, name: 'Mtabal (Puré de Berenjenas)', description: 'Berenjenas ahumadas con tahine, yogurt, ajo y sal.', price: 10000, image: '/images/mtabal.jpg' },
    { id: 23, name: 'Mohammara (Puré de Morrón)', description: 'Morrones ahumados, pan rallado, pimentón en polvo y especias árabes.', price: 10000, image: '/images/mohammara.jpg' },
    { id: 24, name: 'Labane (Yogurt)', description: 'Yogurt árabe firme con aceite de oliva y aceitunas.', price: 10000, image: '/images/labane.jpg' },
    { id: 25, name: 'Kishke', description: 'Yogurt árabe con trigo burgol, cebolla picada, sal, ajo, perejil y nueces.', price: 10000, image: '/images/kishke.jpg' },
    { id: 26, name: 'Tabule', description: 'Perejil, tomate, cebolla, trigo, aceite de oliva, sal y sal de limón.', price: 10000, image: '/images/tabule.jpg' },
    { id: 27, name: 'Babaganoush', description: 'Berenjenas ahumadas, tomate, cebolla, perejil y morrones verde y rojo.', price: 10000, image: '/images/babaganoush.jpg' },
    { id: 28, name: 'Belen', description: 'Berenjena y morrón sofrito con nueces y pasas de uva.', price: 10000, image: '/images/belen.jpg' },
    { id: 29, name: 'Fattoush', description: 'Lechuga, cebolla, tomate, perejil, pepino, aceitunas, queso árabe, pan frito y aderezo de la casa.', price: 10000, image: '/images/fattoush.jpg' },

    // Sección Empanadas
    { id: 30, name: 'Empanada Abierta', description: 'Empanada abierta con carne y especias.', price: 5000, image: '/images/empanada_abierta.jpg' },
    { id: 31, name: 'Empanada Cerrada', description: 'Empanada cerrada con carne y especias.', price: 5000, image: '/images/empanada_cerrada.jpg' },
    { id: 32, name: 'Sojok', description: 'Empanada con carne muy condimentada.', price: 5000, image: '/images/sojok.jpg' },
    { id: 33, name: 'Empanada de Queso', description: 'Empanada de queso ricotta y perejil.', price: 5000, image: '/images/empanada_queso.jpg' },
    { id: 34, name: 'Empanada de Espinaca', description: 'Empanada de espinaca con cebolla y especias.', price: 5000, image: '/images/empanada_espinaca.jpg' },
    { id: 35, name: 'Empanada de Berenjena', description: 'Berenjenas con morrón, cebolla fritos, nueces y especias árabes.', price: 5000, image: '/images/empanada_berenjena.jpg' },

    // Sección Bebidas
    { id: 36, name: 'Coca-Cola Común', description: 'Coca-Cola 500ml.', price: 3000, image: '/images/coca_cola.jpg' },
    { id: 37, name: 'Coca-Cola Cero', description: 'Coca-Cola 500ml.', price: 3000, image: '/images/coca_cola_cero.jpg' },
    { id: 38, name: 'Sprite Común', description: 'Sprite 500ml.', price: 3000, image: '/images/sprite.jpg' },
    { id: 39, name: 'Sprite Cero', description: 'Sprite cero 500ml.', price: 3000, image: '/images/sprite_cero.jpg' },
    { id: 40, name: 'Fanta Común', description: 'Fanta 500ml.', price: 3000, image: '/images/fanta.jpg' },
    { id: 41, name: 'Agua con Gas', description: 'Agua con gas 500ml.', price: 3000, image: '/images/agua_con_gas.jpg' },
    { id: 42, name: 'Agua sin Gas', description: 'Agua sin gas 500ml.', price: 3000, image: '/images/agua_sin_gas.jpg' },
    { id: 43, name: 'Levite Manzana', description: 'Levite de manzana 500ml.', price: 3000, image: '/images/levite_manzana.jpg' },
    { id: 44, name: 'Levite Naranja', description: 'Levite de naranja 500ml.', price: 3000, image: '/images/levite_naranja.jpg' },
    { id: 45, name: 'Levite Pera', description: 'Levite de pera 500ml.', price: 3000, image: '/images/levite_pera.jpg' },
    { id: 46, name: 'Levite Pomelo', description: 'Levite pomelo 500ml.', price: 3000, image: '/images/levite_pomelo.jpg' },
    { id: 47, name: 'Schweppes Tónica', description: 'Schweppes tónica 500ml.', price: 3000, image: '/images/schweppes_tonica.jpg' },
    { id: 48, name: 'Schweppes Pomelo', description: 'Schweppes pomelo 500ml.', price: 3000, image: '/images/schweppes_pomelo.jpg' },
    { id: 49, name: 'Schweppes Citrus', description: 'Schweppes citrus 500ml.', price: 3000, image: '/images/schweppes_citrus.jpg' },

    // Sección Postres
    { id: 50, name: 'Mhalabia', description: 'Pudín de leche con sabor a agua de rosas.', price: 5000, image: '/images/mhalabia.jpg' },
    { id: 51, name: 'Knafeh', description: 'Postre tradicional árabe con queso y pasta de filo.', price: 5000, image: '/images/knafeh.jpg' },
    { id: 52, name: 'Baklava', description: 'Postre tradicional árabe con nueces y miel.', price: 5000, image: '/images/baklava.jpg' },
    { id: 53, name: 'Riz bi Laban', description: 'Arroz con leche, canela y esencia de rosas.', price: 5000, image: '/images/riz_bi_laban.jpg' },
    { id: 54, name: 'Atayef', description: 'Crepas rellenas de nueces y miel.', price: 5000, image: '/images/atayef.jpg' }
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
        console.log(product.image); // Verifica la URL de la imagen aquí
        res.render('productsDetail', { product });
    } else {
        res.status(404).send('Producto no encontrado');
    }
})

module.exports = router;
