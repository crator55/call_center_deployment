const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const usuariosSchema = new Schema({

    nombre: {
        type:String,
        required:'Agrega tu nombre'

    },
    password:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Usuarios',usuariosSchema);