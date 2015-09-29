var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.render('index');
});

module.exports = router;
