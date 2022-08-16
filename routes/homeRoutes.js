var express = require('express');
var router = express.Router();
const homePageController = require('../Controllers/homePageController')

/* GET home page. */
router.get('/', homePageController.homePage)

module.exports = router;
