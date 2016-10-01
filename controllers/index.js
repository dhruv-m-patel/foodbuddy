'use strict';


module.exports = function (router) {
  router.get('/', function (req, res) {
    res.render('index');
  });

  router.get('/login', function (req, res) {
    res.render('index');
  });

  router.get('/wall', function (req, res) {
    res.render('wall');
  });
};
