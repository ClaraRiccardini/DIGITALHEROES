// Require de Express
const express = require("express");

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));


const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json'));
var mainRoutes = require('./routes/mainRoutes');
var heroesRoutes = require('./routes/heroesRoutes');


app.use("/", mainRoutes);
app.use("/heroes", heroesRoutes);

// Ruta Raíz / ➝ Home
app.get('/', (req, res) => {
	res.send('Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.');
});



// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});