var express = require('express');
var router = express.Router();

router.use(function(req, res) {
    res.sendFile('index.html', {root: __dirname + '/../public/'});
});

module.exports = router;
