'use strict';
var register = require('../../models/registerModel');
module.exports = function (router) {
  router.get('/', function (req, res) {
    res.send({message: 'Hello World!'});
  });
  router.post('/registration', function (req, res) {
      var response = register.save(req, res)
      res.sendStatus(201);
  });
};
