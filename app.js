const express = require('express');
const path = require('path');
const app = express();
const port = 3010;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public')); 

const productsRouter = require('./routers/products');

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

app.use('/', productsRouter); 

app.listen(port, () => {
    console.log(`Servidor corriendo en http://127.0.0.1:${port}/`);
});
