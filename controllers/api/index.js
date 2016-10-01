'use strict';

var register = require('../../models/registerModel');
var foodpost = require('../../models/foodPostModel');

module.exports = function (router) {

  router.get('/', function (req, res) {
    res.send({message: 'Hello World!'});
  });

  router.post('/registration', function (req, res) {
      var response = register.save(req, res)
      res.sendStatus(201);
  });

  router.post('/foodpost', function (req, res) {
      var response = foodpost.save(req, res)
      res.sendStatus(201);
  });

};
