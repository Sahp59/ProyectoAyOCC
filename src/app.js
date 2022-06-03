const express = require("express");
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//middlewares -> son funciones
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password : 'sahp',
    port: 3306,
    database: 'ProyectoAyOCC'
}, 'single'));

//routes
/

app.listen(app.get("port"), () =>{
    console.log('SERVER ON PORT 3000');
});