require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

<<<<<<< HEAD
=======

>>>>>>> 14cff6ae53e95db40311fcb615630317fcd12609
const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

<<<<<<< HEAD
// Configuración global de rutas
app.use(require('./routes/index'));

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');

});


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
=======

app.use(require('./routes/usuario'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});

mongoose.set('useCreateIndex', true);

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
>>>>>>> 14cff6ae53e95db40311fcb615630317fcd12609
});