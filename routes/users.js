var express = require('express');
var router = express.Router();
var {list} = require('../mock_data/users')
var MockExample = require('../mock_data/example')
var fs = require('fs')
var hljs = require('highlight.js'); // https://highlightjs.org/

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
})

router.get('/list', function (req, res, next) {
    res.send(list);
});
router.get('/example', function (req, res, next) {
    res.send(new MockExample().getData());
});

module.exports = router;
