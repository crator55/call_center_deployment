const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({path:'variables.env'});

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true
});



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const whiteList = [process.env.FRONTEND_URL];
const corsOptions = {
    origin:(origin,callback)=>{
        console.log(origin);
        const existe = whiteList.some(dominio=>dominio===origin);
        if(existe){
            callback(null,true);
        } else {
            callback(new Error('NO permitido por CORS'));
        }
    }
}

app.use(cors(corsOptions));
app.use('/',routes());

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT ||'7000'

app.listen(port,host,()=>{
});