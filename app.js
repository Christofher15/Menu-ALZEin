const express = require('express');
const path = require('path');
const app = express();
const port = 3010;

// Configura la carpeta estática 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rutas para archivos HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.get('/menu.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/menu.html'));
});

app.get('/home.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://127.0.0.1:${port}/`);
});
