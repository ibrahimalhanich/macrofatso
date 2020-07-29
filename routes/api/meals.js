var express = require('express');
var router = express.Router();
var mealsCtrl = require('../../controllers/meals');

router.get('/', mealsCtrl.viewMeal);


module.exports = router;