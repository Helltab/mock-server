var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function (req, res, next) {
    res.send("<h1>home</h1>");
});

module.exports = router;
