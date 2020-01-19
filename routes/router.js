var express = require('express');
var router = express.Router();

var adminRouter = require('./adminrouter');

router.use('/users', adminRouter);

module.exports = router;
