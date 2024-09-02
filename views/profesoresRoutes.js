const express = require('express');
const router = express.Router();
const proseforesControllers = require('../controllers/profesoresControllers')

router.get('/', (req, res)=>{
    res.json({msg: proseforesControllers.consultar})
});

router.post('/', (req, res)=>{
    res.json({msg: proseforesControllers.ingresar})
});

router.put('/', (req, res)=>{
    res.json({msg: proseforesControllers.actualizar})
});

router.delete('/', (req, res)=>{
    res.json({msg: proseforesControllers.eliminar})
});

router.route('/:id')
.get(proseforesControllers.consultar)
.put(proseforesControllers.actualizar)
.delete(proseforesControllers.eliminar)

module.exports = router; 