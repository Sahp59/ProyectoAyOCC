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

controller.editar = (req ,res)=>{
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM alumno WHERE id_alu = ?',[id], (err, alumnos)=>{
            if(err){
                res.json(err);
            }
            res.render('alumnoAdd',{
                data: alumnos[0]
            });
        });
    });
};

controller.update = (req, res)=>{
    const {id} = req.params;
    const newAlumno = req.body;
    req.getConnection((err, conn)=>{
        conn.query('UPDATE alumno SET ? WHERE id_alu = ?',[newAlumno,id],(err, alumno) =>{
            if(err){
                res.json(err);
            }
            res.redirect('/');
        });
    });
};

controller.borrar = (req ,res)=>{
    const id = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM alumno WHERE id_alu=?',[Object.values(id)], (err, alumnos)=>{
            if(err){
                res.json(err);
            }
            res.redirect('/');
        });
    });
};

module.exports = controller;