var express = require('express');
var router = express.Router();

/* GET notes listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a NOTES resource');
});

module.exports = router;
