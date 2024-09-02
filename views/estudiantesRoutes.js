const express = require('express');
const router = express.Router();
const estudiantesControllers = require('../controllers/estudiantesControllers')

router.get('/', estudiantesControllers.consultar);

router.post('/', estudiantesControllers.ingresar);

router.put('/', estudiantesControllers.actualizar);

router.delete('/', estudiantesControllers.eliminar);

router.route('/:id')
    .get(estudiantesControllers.consultar)
    .put(estudiantesControllers.actualizar)
    .delete(estudiantesControllers.eliminar)

module.exports = router; 