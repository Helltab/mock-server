var express = require('express');
var router = express.Router();
var {list} = require('../mock_data/users')
var fs = require('fs')
var hljs = require('highlight.js'); // https://highlightjs.org/
var MockExample = require('../mock_data/example')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('mock home');
})
router.get('/doc', function (req, res, next) {
    res.send('<a href="https://github.com/nuysoft/Mock/wiki" target="_blank">mock 官网</a>');
});
router.get('/example', function (req, res, next) {
    res.send(new MockExample().getData());
});


module.exports = router;
