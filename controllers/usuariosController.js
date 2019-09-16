
const Usuarios = require('../models/Usuarios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



exports.crear = async (req, res) => {
    const usuario = new Usuarios(req.body);
    usuario.password = await bcrypt.hash(req.body.password, 12);
    try {
        await usuario.save();
        res.json({ mensaje: 'Usuarios creados correctamente' });
    } catch (error) {
        console.log(error);
        res.json({ mensaje: 'Hubo error' });
    }

}

exports.sesion = async (req, res, next) => {
    const { nombre, password } = req.body;
    
    const usuario = await Usuarios.findOne({ nombre });
    if (!usuario) {
        await res.status(404).json({ mensaje: 'Este usuario no existe' });
        next();
    }
    else {
        if (!bcrypt.compareSync(password, usuario.password)) {
            await res.status(401).json({ mensaje: 'Password incorrecto' });
            next();
        }
        else {
            const token = jwt.sign({
                nombre: usuario.nombre,
                id: usuario._id
            },
            'secretkey',
            {
                expiresIn:'6h'
            }
            );
            res.json({token});
        }
    }
}