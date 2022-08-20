var express = require('express');
var router = express.Router();
const turmasController = require('../Controllers/turmasController')

router.get('/', turmasController.turma)



module.exports = router;