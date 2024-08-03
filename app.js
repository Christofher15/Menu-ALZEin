const express = require('express');
const path = require('path');
const app = express();
const port = 3010;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.get('/menu.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/menu.html'));
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://127.0.0.1:${port}/`);
});
