const Clientes = require('../models/Clientes');

const multer = require('multer');
const shortid = require('shortid');

const configa={
    storage: fileStorage = multer.diskStorage({
        destination:(req,file,cb)=> {
            cb(null,__dirname+'../../../API');
        },
        filename: (req,file,cb)=>{
            const extension =file.mimetype.split('/')[1];
            cb(null,`${shortid.generate()}.${extension}`);
          
        }
    })
    }
    const upload = multer(configa).single('IMAGEN');
exports.subirimagen= async (req,res,next)=> {
    
    upload(req,res,function(error){
        
        if(error){
            res.json({mensaje: error})
        
        }
        return next();
        
    })
}
exports.csv = async (req,res,next)=> {

   


    const csv = require('csv-parser')
    const fs = require('fs')
    const results = [];
     
    fs.createReadStream(req.file.filename)
      .pipe(csv(['LINEA_NEGOCIO', 'TELEFONO', 'FECHA_DE_ALTA', 'FECHA_DE_BAJA', 'ESTADO_ABONADO', 'EQUIPO', 'SEGMENTO', 'PLAN_NOMBRE_ACTUAL', 'PLAN_CATEGORIA_ACTUAL', 'TARIFA_BASICA_PLAN_ACTUAL', 'TIPO_DOC_CLIENTE', 'DOCUMENTO', 'NOMBRE_CLIENTE', 'PROVINCIA', 'CANTON', 'CICLO_FACTURACION', 'EMAIL', 'FORMA_PAGO', 'PORTABILIDAD', 'OPERADORA', 'PROCEDENCIA_EQUIPO', 'PROMEDIO']))
      .on('data', (data) => results.push(data))
      .on('end', async() => {
    
            
            try {
                
                var cli =results.map(function(order) {
                    var inf= {"TELEFONO": order.TELEFONO}
                    return inf
                });
                for (let index = 0; index < cli.length; index++) {
                    
                 await Clientes.deleteMany(cli[index]);
                }
           
              for (let index = 0; index < results.length; index++) {
        
                    var cliente = new Clientes(results[index]);
                  
                    await cliente.save(results);
                 }  
                res.json({mensaje: ' un nuevo cliente'});
            } catch (error) {
                console.log(error);
                next();
            }
            
        }
     
    
      
      
      );
     

}


exports.consulta = async (req,res,next)=> {

    try {
        console.log(req.body);
        const clientes =  await Clientes.find(req.body).collation( { locale: 'es', strength: 2 } );
        res.json(clientes);
      
    } catch (error) {
       
        next();
    }
}
