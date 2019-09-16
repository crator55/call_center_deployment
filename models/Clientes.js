const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientesSchema = new Schema({
LINEA_NEGOCIO:{
    type: String,
    trim: true
},
TELEFONO:{
    type: String,
    trim: true
},
FECHA_DE_ALTA:{
    type: Date

},
FECHA_DE_BAJA:{
    type: Date

},

ESTADO_ABONADO:{
    type: String,
    trim: true
},
EQUIPO:{
    type: String,
    trim: true
},
SEGMENTO:{
    type: String,
    trim: true
},
PLAN_NOMBRE_ACTUAL:{
    type: String,
    trim: true
},
PLAN_CATEGORIA_ACTUAL:{
    type: String,
    trim: true
},
TARIFA_BASICA_PLAN_ACTUAL:{
    type: Number
    
},
TIPO_DOC_CLIENTE:{
    type: String,
    trim: true
},
DOCUMENTO:{
    type: String,
    trim: true
},
NOMBRE_CLIENTE:{
    type: String,
    trim: true
},

PROVINCIA:{
    type: String,
    trim: true
},
CANTON:{
    type: String,
    trim: true
},
CICLO_FACTURACION:{
    type: Number
},
EMAIL:{
    type: String,
    trim: true
},
FORMA_PAGO:{
    type: String,
    trim: true
},
PORTABILIDAD:{
    type: String,
    trim: true
},
OPERADORA:{
    type: String,
    trim: true
},
PROCEDENCIA_EQUIPO:{
    type: String,
    trim: true
},
PROMEDIO:{
    type: Number
   
},
IMAGEN:{
    type: String
   
}
});
module.exports = mongoose.model('clientes',clientesSchema);