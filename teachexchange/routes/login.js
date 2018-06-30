var express = require('express');
var router = express.Router();

/* GET loign page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Teacher Exchange' });
});

module.exports = router;
