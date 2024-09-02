const db = require('../db/conexion');

class EstudiantesControllers {
    constructor(){}

    consultar(req, res){
        const {id} = req.params
        res.json({msg: `Consulta de estudiantes desde clase ${id}`})
    }
    consultarDetalles(req, res){
        res.json({msg: 'Consulta de un solo estudiantes'})
    }
    ingresar(req, res){
        res.json({msg: 'Ingreso de estudiantes'})
    }
    actualizar(req, res){
        const {id} = req.params
        res.json({msg: `Actualización de estudiante con ${id}`})
    }
    eliminar(req, res){
        res.json({msg: 'Eliminación de estudiantes'})
    }
}

module.exports = new EstudiantesControllers();