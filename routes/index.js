const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const usuariosController = require('../controllers/usuariosController');
const auth = require('../middleware/auth');
module.exports = function(){
  

    

    router.post('/clientes/csv',clienteController.subirimagen,clienteController.csv);
    router.post('/prueba',clienteController.consulta);
    
    //Usuarios
    router.post('/crear-cuenta',usuariosController.crear);
    router.post('/iniciar-sesion',usuariosController.sesion);
    return router;
}