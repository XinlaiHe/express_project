var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express Project' });
});

/* GET main page. */
router.get('/main', function(req, res, next) {
  res.render('main', { name: 'xinlai He', title: "Express Prject" });
});

/* GET more page. */
router.get('/more', function(req, res, next) {
  res.render('more', { more: 'There is nothing more...', title: "Express Prject" });
});

module.exports = router;
