var express = require('express');
const Got = require('../controller/index');
var router = express.Router();

router.get('/', Got.main);
module.exports = router;