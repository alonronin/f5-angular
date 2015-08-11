var express = require('express');
var router = express.Router();
var grid = require('./grid1.json');

router.get('/grid1', function(req, res){
    res.json(grid)
});

router.post('/grid1', function(req, res){
    var item = req.body;

    grid.push(req.body);

    res.json(item);
});

module.exports = router;
