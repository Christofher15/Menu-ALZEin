const express = require('express');
const path = require('path');
const app = express();
const port = 3010;

// Configura la carpeta estática 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rutas para archivos EJS
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.ejs'));
});

app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/menu.ejs'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.ejs'));
});

app.get('/contactanos', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/contactanos.ejs'));
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://127.0.0.1:${port}/`);
});
