const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
<<<<<<< HEAD
};


let Schema = mongoose.Schema;


let usuarioSchema = new Schema({

=======
}

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
>>>>>>> 14cff6ae53e95db40311fcb615630317fcd12609
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
<<<<<<< HEAD
        type: String,
        unique: true,
=======
        unique: true,
        type: String,
>>>>>>> 14cff6ae53e95db40311fcb615630317fcd12609
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

<<<<<<< HEAD

usuarioSchema.methods.toJSON = function() {

    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });
=======
usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} debe ser único'
});
>>>>>>> 14cff6ae53e95db40311fcb615630317fcd12609

module.exports = mongoose.model('Usuario', usuarioSchema);