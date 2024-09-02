const db = require('../db/conexion');

class CursosControllers {
    constructor(){}

    consultar(req, res){
        const {id} = req.params
        res.json({msg: `Consulta de cursos desde clase ${id}`})
    }
    consultarDetalles(req, res){
        res.json({msg: 'Consulta de un solo cursos'})
    }
    ingresar(req, res){
        res.json({msg: 'Ingreso de cursos'})
    }
    actualizar(req, res){
        const {id} = req.params
        res.json({msg: `Actualización de estudiante con ${id}`})
    }
    eliminar(req, res){
        res.json({msg: 'Eliminación de cursos'})
    }
}

module.exports = new CursosControllers();