const express = require('express');
const path = require('path');
const app = express();
const port = 3010;

// Configura el motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configura la carpeta estática 'public'
app.use(express.static('public')); 

// Importa las rutas de productos
const productsRouter = require('./routers/products');

// Rutas para archivos EJS
app.get('/', (req, res) => {
    res.render('home'); 
});

app.get('/products', (req, res) => {
    res.render('products');
});

app.get('/contactanos', (req, res) => {
    res.render('contactanos'); 
});

app.get('/delivery', (req, res) => {
    res.render('delivery'); 
});

app.get('/maps', (req, res) => {
    res.render('maps'); 
});

// Configura las rutas de productos
app.use('/', productsRouter); 

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://127.0.0.1:${port}/`);
});
