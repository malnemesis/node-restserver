const express = require('express');

const bcrypt = require('bcryptjs');
<<<<<<< HEAD
const _ = require('underscore');

const Usuario = require('../models/usuario');
const { verificaToken, verificaAdmin_Role } = require('../middlewares/autenticacion');

const app = express();

app.get('/usuario', verificaToken, (req, res) => {

    let desde = req.query.desde || 0;
    desde = Number(desde);

=======

const _ = require('underscore');

const Usuario = require('../models/usuario');

const app = express();

app.get('/usuario', function(req, res) {

    let desde = req.query.desde || 0;
    desde = Number(desde);
>>>>>>> 14cff6ae53e95db40311fcb615630317fcd12609
    let limite = req.query.limite || 5;
    limite = Number(limite);

    Usuario.find({ estado: true }, 'nombre email role estado google img')
        .skip(desde)
        .limit(limite)
        .exec((err, usuarios) => {
<<<<<<< HEAD

            if (err) {
                return res.status(400).json({
=======
            if (err) {
                res.status(400).json({
>>>>>>> 14cff6ae53e95db40311fcb615630317fcd12609
                    ok: false,
                    err
                });
            }
<<<<<<< HEAD

            Usuario.countDocuments({ estado: true }, (err, conteo) => {

=======
            Usuario.count({ estado: true }, (err, conteo) => {
>>>>>>> 14cff6ae53e95db40311fcb615630317fcd12609
                res.json({
                    ok: true,
                    usuarios,
                    cuantos: conteo
                });
<<<<<<< HEAD

            });

        });

});

app.post('/usuario', [verificaToken, verificaAdmin_Role], function(req, res) {

=======
            });
        });
});

app.post('/usuario', function(req, res) {
>>>>>>> 14cff6ae53e95db40311fcb615630317fcd12609
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

    usuario.save((err, usuarioDB) => {
<<<<<<< HEAD

        if (err) {
            return res.status(400).json({
=======
        if (err) {
            res.status(400).json({
>>>>>>> 14cff6ae53e95db40311fcb615630317fcd12609
                ok: false,
                err
            });
        }

<<<<<<< HEAD
=======
        // usuarioDB.password = null;

>>>>>>> 14cff6ae53e95db40311fcb615630317fcd12609
        res.json({
            ok: true,
            usuario: usuarioDB
        });
<<<<<<< HEAD

    });

});

app.put('/usuario/:id', [verificaToken, verificaAdmin_Role], function(req, res) {

    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado']);

    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
=======
    });
});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado']);


    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, usuarioDB) => {
        if (err) {
            res.status(400).json({
>>>>>>> 14cff6ae53e95db40311fcb615630317fcd12609
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        });
<<<<<<< HEAD

    })

});

app.delete('/usuario/:id', [verificaToken, verificaAdmin_Role], function(req, res) {

    let id = req.params.id;

    // Usuario.findByIdAndRemove(id, (err, usuarioBorrado) => {

    let cambiaEstado = {
        estado: false
    };

    Usuario.findByIdAndUpdate(id, cambiaEstado, { new: true }, (err, usuarioBorrado) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };

        if (!usuarioBorrado) {
            return res.status(400).json({
=======
    })


});
app.delete('/usuario/:id', function(req, res) {
    let id = req.params.id;
    // Usuario.findByIdAndRemove(id, (err, usuarioBorrado) => {
    let cambiaEstado = {
        estado: false
    };
    Usuario.findByIdAndUpdate(id, cambiaEstado, { new: true }, (err, usuarioBorrado) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }
        if (!usuarioBorrado) {
            res.status(400).json({
>>>>>>> 14cff6ae53e95db40311fcb615630317fcd12609
                ok: false,
                err: {
                    message: 'Usuario no encontrado'
                }
            });
        }

        res.json({
            ok: true,
            usuario: usuarioBorrado
        });
<<<<<<< HEAD

    });

=======
    })
>>>>>>> 14cff6ae53e95db40311fcb615630317fcd12609
});

module.exports = app;