const jwt = require('jsonwebtoken');
module.exports = (req,res,next)=>{
    const authHeeader = req.get('Authorization');
    console.log(authHeeader);
    if(!authHeeader){
        const error = new Error('No autenticado, no hay JWT');
        error.statusCode = 401;
        throw error;
    }
    const token = authHeeader.split('')[1];
    let revisarToken;
    try {
        revisarToken = jwt.verify(token,'secretkey');

    } catch (error) {
        error.statusCode= 500;
        throw error;
    }
    if(!revisarToken){
        const error = new Error('NO autenticado');
        error.statusCode= 401;
        throw error;
    }
    next();
}