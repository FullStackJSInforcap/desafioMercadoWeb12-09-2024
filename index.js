const express = require('express');
const hbs = require('hbs');
const productos = require('./data/datos');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/',  (req, res) => {    
    res.render('index', {
        mensajeBienvenida: 'Bienvenido al mercado web, seleccione sus productos',
        productos
    });
});

app.listen(3000, () => {
    console.log('Escuchando por el puerto 3000');
});