const db = require('../db/conexion');

class ProfesoresControllers {
    constructor(){}

    consultar(req, res){
        const {id} = req.params
        res.json({msg: `Consulta de profesores desde clase ${id}`})
    }
    consultarDetalles(req, res){
        res.json({msg: 'Consulta de un solo profesores'})
    }
    ingresar(req, res){
        res.json({msg: 'Ingreso de profesores'})
    }
    actualizar(req, res){
        const {id} = req.params
        res.json({msg: `Actualización de profesor con ${id}`})
    }
    eliminar(req, res){
        res.json({msg: 'Eliminación de profesores'})
    }
}

module.exports = new ProfesoresControllers();