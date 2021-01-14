var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.json(['respond with a resource',"this and that "]);
});

module.exports = router;
