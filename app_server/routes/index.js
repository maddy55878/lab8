var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var labsix = require('../controllers/labsix');

router.get('/', ctrlMain.index);
router.get('/page1', labsix.html1);
router.get('/page2', labsix.html2);

module.exports = router;
