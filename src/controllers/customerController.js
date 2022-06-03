const { request } = require("express");

const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM alumno',(err, alumnos)=>{
            if(err){
                res.json(err);
            }
            res.render('alumnos',{
                data: alumnos
            });
        });
    });
};

controller.agregar = (req ,res)=>{
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO alumno set?',[data], (err, alumnos)=>{
            if(err){
                res.json(err);
            }
            res.redirect('/');
        });
    });
};

module.exports = controller;