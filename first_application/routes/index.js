var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var places = [
    { name: 'Home', rating: 10},
    { name: 'Sofi Stadium', rating: 9},
    { name: 'Hawaii', rating: 9},
    { name: 'UK', rating: 8},
    { name: 'Jamaica', rating: 6},
  ];

  // create a name
  var myname = "Antonio Diaz";

  res.render('index', {
    title: "Favorite Places",
    places: places,
    myname: myname
  });
});

module.exports = router;
