const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('serials', { title: 'Serials', login: req.user ? req.user.login : undefined });
});

module.exports = router;
