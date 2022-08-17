var express = require('express');
var router = express.Router();
const cursosController = require('../Controllers/cursosController')

router.get('/:idCurso', cursosController.curso)



module.exports = router;
