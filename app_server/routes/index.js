var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var labsix = require('../controllers/labsix');
var ctrlFood = require('../controllers/food.controllers.js');


router.get('/', ctrlMain.index);
router.get('/page1', labsix.html1);
router.get('/page2', labsix.html2);


// Main page
router
    .route('/')
    .get(ctrlMain.index);

// Testing route 
// router
//     .route('/testing')
//     .get(ctrlMain.testing);

// CRUD actions for food 
router
    .route('/food')
    .get(ctrlFood.foodGetAll)
    .post(ctrlFood.foodAddOne);

router
  .route('/food/:name')
  .put(ctrlFood.foodUpdateOne)
  .delete(ctrlFood.foodDeleteOne)
  .get(ctrlFood.foodGetOne);

module.exports = router;

