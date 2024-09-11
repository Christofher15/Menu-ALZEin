const express = require('express');
const router = express.Router();


// Productos del menú
const products = [
    // Sección Entradas Calientes
    { id: 1, name: 'Borak', description: '5u. empanaditas fritas con relleno de queso árabe, perejil y especias.', price: 3500, image: '/images/borak.webp' },
    { id: 2, name: 'Falafel', description: '6u. bolitas de garbanzo procesado con perejil, morrón y especias árabes.', price: 8650, image: '/images/falafel al plato.avif' },
    { id: 3, name: 'Hoja de Parra', description: '8u. Hojas de parra envueltas rellenas de arroz, carne picada y especias árabes.', price: 8400, image: '/images/hoja de parra.jpg' },
    { id: 4, name: 'Kebbe al Horno', description: 'Masa de trigo burgol con carne compactada relleno de carne picada, cebolla, nueces y especias árabes.', price: 2650, image: '/images/kebbe al horno.jpg' },
    { id: 5, name: 'Kebbe Frito', description: 'Masa de trigo burgol con carne compactada relleno de carne picada, cebolla, nueces y especias árabes.', price: 2650, image: '/images/kebbe frito.avif' },
    { id: 6, name: 'Papas Fritas', description: 'Corte tradicional en bastones con especias de la casa.', price: 3300, image: '/images/papas_fritas_a_la_francesa.jpeg' },
    { id: 7, name: 'Queso a la Parrilla', description: 'Queso árabe asado con aceitunas.', price: 6800, image: '/images/queso a la parrilla.jpg' },

    // Sección Platos Calientes
{ id: 8, name: 'Shawarma de Carne', description: 'Carne, lechuga, tomate y cebolla, mayonesa de ajo y tarator.', price: 10500, image: '/images/shawarma.jpeg' },
{ id: 9, name: 'Shawarma de Carne al Plato', description: 'Carne, lechuga, tomate y cebolla, mayonesa de ajo y tarator.', price: 17900, image: '/images/shawarma_de_carne_al_plato.jpeg' },
{ id: 10, name: 'Shawarma de Pollo', description: 'Pollo, lechuga, tomate y cebolla, mayonesa de ajo.', price: 10500, image: '/images/shawarma_de_pollo.jpeg' },
{ id: 11, name: 'Shawarma de Pollo al Plato', description: 'Pollo, lechuga, tomate y cebolla, mayonesa de ajo y tarator.', price: 17900, image: '/images/shawarma_de_carne_al_plato.jpeg' },
{ id: 12, name: 'Shawarma Mixto', description: 'Carne y pollo, lechuga, tomate y cebolla, mayonesa de ajo y tarator.', price: 10500, image: '/images/shawarma.jpeg' },
{ id: 13, name: 'Shawarma Mixto al Plato', description: 'Carne y pollo, lechuga, tomate y cebolla, mayonesa de ajo y tarator.', price: 17900, image: '/images/shawarma_de_carne_al_plato.jpeg' },
{ id: 14, name: 'Arroz a la persa', description: 'Arroz con pollo, especias arabes, zanahoria, morron, cebolla, pasas de uva, nueces, azafran y curry.', price: 11500, image: '/images/arroz persa.webp' },
{ id: 15, name: 'Shish Kebab', description: 'Carne picada puesta en fierros a la parrilla con papas o ensalada.', price: 17100, image: '/images/shish_kebab.jpeg' },
{ id: 16, name: 'Shish Taouk', description: '2 Brochettes de pollo cortado a cuchillo con papas fritas o ensalada.', price: 17100, image: '/images/shish_kebab_de_carne_picada.jpeg' },
{ id: 17, name: 'Brochette de Lomo', description: '2 brochettes de lomo cortado a cuchillo con papas fritas o ensalada.', price: 20100, image: '/images/brochette_de_pollo.jpeg' },
{ id: 18, name: 'Falafel en Sandwich', description: 'Lechuga, cebolla y tomate, salsa de ajo o hummus y salsa de tarator.', price: 7900, image: '/images/falafel.jpeg' },
{ id: 19, name: 'Carne al Plato', description: 'Carne picada bien condimentada a la parrilla con papas fritas o ensalada.', price: 15980, image: '/images/carne_picada_al_plato_pero_armada_tipo_hamburguesa_compactada_y_cocida.jpeg' },
{ id: 20, name: 'Pollo Crocante', description: '1/2 porción de supremas de pollo condimentado al estilo crispy.', price: 17100, image: '/images/tenders_de_pollo_con_papas_franciscas.jpeg' },
{ id: 21, name: 'Toshka (Pan Rellene con carne)', description: 'Pan árabe relleno con carne picada condimentada y cocinado a la parrilla con papas fritas o ensalada.', price: 15250, image: '/images/toshka.jpg' },

// Sección Platos Fríos/Ensaladas
{ id: 22, name: 'Hummus (Puré de Garbanzo)', description: 'Garbanzo, tahine y especias árabes.', price: 5880, image: '/images/Hummus.jpg' },
{ id: 23, name: 'Mtabal (Puré de Berenjenas)', description: 'Berenjenas ahumadas con tahine, yogurt, ajo y sal.', price: 5880, image: '/images/mtabal.jpg' },
{ id: 24, name: 'Mohammara (Puré de Morrón)', description: 'Morrones ahumados, pan rallado, pimentón en polvo y especias árabes.', price: 5880, image: '/images/mohamara.jpg' },
{ id: 25, name: 'Labane (Yogurt)', description: 'Yogurt árabe firme con aceite de oliva y aceitunas.', price: 5880, image: '/images/labane.webp' },
{ id: 26, name: 'Kishke (Yogurt seco)', description: 'Yogurt árabe con trigo burgol, cebolla picada, sal, ajo, perejil y nueces.', price: 5880, image: '/images/kishke.jpg' },
{ id: 27, name: 'Tabule', description: 'Perejil, tomate, cebolla, trigo, aceite de oliva, sal y sal de limón.', price: 5880, image: '/images/tabule.jpg' },
{ id: 28, name: 'Babaganoush', description: 'Berenjenas ahumadas, tomate, cebolla, perejil y morrones verde y rojo.', price: 5880, image: '/images/babaganoush.jpg' },
{ id: 29, name: 'Belen', description: 'Berenjena y morrón sofrito con nueces y pasas de uva.', price: 10700, image: '/images/ensalada_belen_con_morron_berenjenas_y_nueces.jpeg' },
{ id: 30, name: 'Fattoush', description: 'Lechuga, cebolla, tomate, perejil, pepino, aceitunas, queso árabe, pan frito y aderezo de la casa.', price: 11100, image: '/images/ensalada_fattoush_perejil_tomate_cebolla_aceitunas_queso_en_cubitos_pan_arabe_frito_y_nueces.jpeg' },

// Sección Empanadas
{ id: 31, name: 'Lajmajin (Empanada Abierta)', description: 'Empanada abierta con carne y especias.', price: 1850, image: '/images/empanada abierta.jpg' },
{ id: 32, name: 'Sfija (Empanada Cerrada)', description: 'Empanada cerrada con carne y especias.', price: 1850, image: '/images/emapanda cerrada.webp' },
{ id: 33, name: 'Sojok (carne)', description: 'Empanada con carne muy condimentada.', price: 1850, image: '/images/sojok.png' },
{ id: 34, name: 'Empanada de Queso', description: 'Empanada de queso ricotta y perejil.', price: 1850, image: '/images/empanada queso.jpg' },
{ id: 35, name: 'Empanada de Espinaca', description: 'Empanada de espinaca con cebolla y especias.', price: 1850, image: '/images/emapanda espianca.jpg' },
{ id: 36, name: 'Empanada de Berenjena', description: 'Berenjenas con morrón, cebolla fritos, nueces y especias árabes.', price: 1850, image: '/images/empanadas de berenjena.jpg' },

// Sección Bebidas
{ id: 37, name: 'Coca-Cola Común', description: 'Coca-Cola 500ml.', price: 1900, image: '/images/coca-cola.jpg' },
{ id: 38, name: 'Coca-Cola Cero', description: 'Coca-Cola 500ml.', price: 1900, image: '/images/coca-cola cero.jpeg' },
{ id: 39, name: 'Sprite Común', description: 'Sprite 500ml.', price: 1900, image: '/images/sprite-comun.jpg' },
{ id: 40, name: 'Sprite Cero', description: 'Sprite cero 500ml.', price: 1900, image: '/images/sprite-cero.webp' },
{ id: 41, name: 'Fanta Común', description: 'Fanta 500ml.', price: 1900, image: '/images/fanta.jpeg' },
{ id: 42, name: 'Agua con Gas', description: 'Agua con gas 500ml.', price: 1900, image: '/images/agua con gas.webp' },
{ id: 43, name: 'Agua sin Gas', description: 'Agua sin gas 500ml.', price: 1900, image: '/images/agua sin gas.webp' },
{ id: 44, name: 'Levite Manzana', description: 'Levite de manzana 500ml.', price: 1900, image: '/images/levite-manzana.jpg' },
{ id: 45, name: 'Levite Naranja', description: 'Levite de naranja 500ml.', price: 1900, image: '/images/levite-naranja.jpg' },
{ id: 46, name: 'Levite Pera', description: 'Levite de pera 500ml.', price: 1900, image: '/images/levite-pera.webp' },
{ id: 47, name: 'Levite Pomelo', description: 'Levite pomelo 500ml.', price: 1900, image: '/images/levite-pomelo.webp' },
{ id: 48, name: 'Schweppes Tónica', description: 'Schweppes tónica 500ml.', price: 1900, image: '/images/Schweppes-tonica.webp' },
{ id: 49, name: 'Schweppes Pomelo', description: 'Schweppes pomelo 500ml.', price: 1900, image: '/images/Schweppes-pomelo.webp' },


// Sección para llevar

    // Sección Entradas Calientes
        { id: 50, name: "Borak", description: "5u. empanaditas fritas con relleno de queso árabe, perejil y especias.", price: 3500, image: "/images/borak.webp" },
        { id: 51, name: "Falafel", description: "6u. bolitas de garbanzo procesado con perejil, morrón y especias árabes.", price: 8650, image: "/images/falafel al plato.avif" },
        { id: 52, name: "Hoja de Parra", description: "8u. Hojas de parra envueltas rellenas de arroz, carne picada y especias árabes.", price: 8400, image: "/images/hoja de parra.jpg" },
        { id: 53, name: "Kebbe al Horno", description: "Masa de trigo burgol con carne compactada relleno de carne picada, cebolla, nueces y especias árabes.", price: 2650, image: "/images/kebbe al horno.jpg" },
        { id: 54, name: "Kebbe Frito", description: "Masa de trigo burgol con carne compactada relleno de carne picada, cebolla, nueces y especias árabes.", price: 2650, image: "/images/kebbe frito.avif" },
        { id: 55, name: "Papas Fritas", description: "Corte tradicional en bastones con especias de la casa.", price: 3300, image: "/images/papas_fritas_a_la_francesa.jpeg" },
        { id: 56, name: "Queso a la Parrilla", description: "Queso árabe asado con aceitunas.", price: 6800, image: "/images/queso a la parrilla.jpg" },
    
        // Sección Platos Calientes
        { id: 57, name: "Shawarma de Carne", description: "Carne, lechuga, tomate y cebolla, mayonesa de ajo y tarator.", price: 10500, image: "/images/shawarma.jpeg" },
        { id: 58, name: "Shawarma de Carne al Plato", description: "Carne, lechuga, tomate y cebolla, mayonesa de ajo y tarator.", price: 17900, image: "/images/shawarma_de_carne_al_plato.jpeg" },
        { id: 59, name: "Shawarma de Pollo", description: "Pollo, lechuga, tomate y cebolla, mayonesa de ajo.", price: 10500, image: "/images/shawarma_de_pollo.jpeg" },
        { id: 60, name: "Shawarma de Pollo al Plato", description: "Pollo, lechuga, tomate y cebolla, mayonesa de ajo y tarator.", price: 17900, image: "/images/shawarma_de_carne_al_plato.jpeg" },
        { id: 61, name: "Shawarma Mixto", description: "Carne y pollo, lechuga, tomate y cebolla, mayonesa de ajo y tarator.", price: 10500, image: "/images/shawarma.jpeg" },
        { id: 62, name: "Shawarma Mixto al Plato", description: "Carne y pollo, lechuga, tomate y cebolla, mayonesa de ajo y tarator.", price: 17900, image: "/images/shawarma_de_carne_al_plato.jpeg" },
        { id: 63, name: "Arroz a la persa", description: "Arroz con pollo, especias árabes, zanahoria, morrón, cebolla, pasas de uva, nueces, azafrán y curry.", price: 11500, image: "/images/arroz persa.webp" },
        { id: 64, name: "Shish Kebab", description: "Carne picada puesta en fierros a la parrilla con papas o ensalada.", price: 17100, image: "/images/shish_kebab.jpeg" },
        { id: 65, name: "Shish Taouk", description: "2 Brochettes de pollo cortado a cuchillo con papas fritas o ensalada.", price: 17100, image: "/images/shish_kebab_de_carne_picada.jpeg" },
        { id: 66, name: "Brochette de Lomo", description: "2 brochettes de lomo cortado a cuchillo con papas fritas o ensalada.", price: 20100, image: "/images/brochette_de_pollo.jpeg" },
        { id: 67, name: "Falafel en Sandwich", description: "Lechuga, cebolla y tomate, salsa de ajo o hummus y salsa de tarator.", price: 7900, image: "/images/falafel.jpeg" },
        { id: 68, name: "Carne al Plato", description: "Carne picada bien condimentada a la parrilla con papas fritas o ensalada.", price: 15980, image: "/images/carne_picada_al_plato_pero_armada_tipo_hamburguesa_compactada_y_cocida.jpeg" },
        { id: 69, name: "Pollo Crocante", description: "1/2 porción de supremas de pollo condimentado al estilo crispy.", price: 17100, image: "/images/tenders_de_pollo_con_papas_franciscas.jpeg" },
        { id: 70, name: "Toshka (Pan Relleno con carne)", description: "Pan árabe relleno con carne picada condimentada y cocinado a la parrilla con papas fritas o ensalada.", price: 15250, image: "/images/toshka.jpg" },
    
        // Sección Platos Fríos/Ensaladas
        { id: 71, name: "Hummus (Puré de Garbanzo)", description: "Garbanzo, tahine y especias árabes.", price: 5880, image: "/images/Hummus.jpg" },
        { id: 72, name: "Mtabal (Puré de Berenjenas)", description: "Berenjenas ahumadas con tahine, yogurt, ajo y sal.", price: 5880, image: "/images/mtabal.jpg" },
        { id: 73, name: "Mohammara (Puré de Morrón)", description: "Morrones ahumados, pan rallado, pimentón en polvo y especias árabes.", price: 5880, image: "/images/mohamara.jpg" },
        { id: 74, name: "Labane (Yogurt)", description: "Yogurt árabe firme con aceite de oliva y aceitunas.", price: 5880, image: "/images/labane.webp" },
        { id: 75, name: "Kishke (Yogurt seco)", description: "Yogurt árabe con trigo burgol, cebolla picada, sal, ajo, perejil y nueces.", price: 5880, image: "/images/kishke.jpg" },
        { id: 76, name: "Tabule", description: "Perejil, tomate, cebolla, trigo, aceite de oliva, sal y sal de limón.", price: 5880, image: "/images/tabule.jpg" },
        { id: 77, name: "Babaganoush", description: "Berenjenas ahumadas, tomate, cebolla, perejil y morrones verde y rojo.", price: 5880, image: "/images/babaganoush.jpg" },
        { id: 78, name: "Belen", description: "Berenjena y morrón sofrito con nueces y pasas de uva.", price: 10700, image: "/images/ensalada_belen_con_morron_berenjenas_y_nueces.jpeg" },
        { id: 79, name: "Fattoush", description: "Lechuga, cebolla, tomate, perejil, pepino, aceitunas, queso árabe, pan frito y aderezo de la casa.", price: 11100, image: "/images/ensalada_fattoush_perejil_tomate_cebolla_aceitunas_queso_en_cubitos_pan_arabe_frito_y_nueces.jpeg" },
    
        // Sección Empanadas
        { id: 80, name: "Empanada de Queso", description: "Empanada árabe rellena de queso con perejil y especias.", price: 2500, image: "/images/empanada_queso_arabe_con_perejil.jpeg" },
        { id: 81, name: "Empanada de Carne", description: "Empanada árabe rellena de carne picada, cebolla y especias.", price: 2500, image: "/images/empanada_carne_arabe.jpeg" },
        { id: 82, name: "Empanada de Espinaca", description: "Empanada árabe rellena de espinaca, cebolla, perejil y especias.", price: 2500, image: "/images/empanada_espinaca_con_perejil_cebolla_y_especias_arabes.jpeg" }
    
    ];



// Función para obtener un producto por su ID
function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}

// Función para obtener el índice de un producto por su ID
function getProductIndexById(id) {
    return products.findIndex(product => product.id === parseInt(id));
}

// Ruta para los detalles del producto
router.get('/detail/:id', (req, res) => {
    const productId = req.params.id;
    const productIndex = getProductIndexById(productId);

    if (productIndex !== -1) {
        const product = products[productIndex];
        const previousProduct = products[productIndex - 1] || null;
        const nextProduct = products[productIndex + 1] || null;

        res.render('productsDetail', { product, previousProduct, nextProduct });
    } else {
        res.status(404).send('Producto no encontrado');
    }
});

module.exports = router;