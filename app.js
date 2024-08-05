const express = require('express');
const path = require('path');
const app = express();
const port = 3010;

// Configura el motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configura la carpeta estática 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rutas para archivos EJS
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/menu', (req, res) => {
    res.render('menu');
});

app.get('/contactanos', (req, res) => {
    res.render('contactanos');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://127.0.0.1:${port}/`);
});
