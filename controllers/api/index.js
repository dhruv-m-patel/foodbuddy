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

  router.post('/signin', function(req, res) {
    var users = [
      {
        "user_id": "dpatel",
        "password": "1234",
        "email": "dpatel@gasbuddy.com",
        "user_type": "individual"
      },
      {
        "user_id": "kpatel",
        "password": "1234",
        "email": "kpatel@gasbuddy.com",
        "user_type": "individual"
      },
      {
        "user_id": "manaligaikwad15@gmail.com",
        "password": "1234",
        "email": "manaligaikwad15@gmail.com",
        "user_type": "individual"
      },
      {
        "user_id": "mprasher",
        "password": "1234",
        "email": "mprasher@gasbuddy.com",
        "user_type": "individual"
      },
      {
        "user_id": "unitedwayofregina",
        "password": "1234",
        "email": "unitedwayofregina@mailinator.com",
        "user_type": "organization"
      }
    ];

    var email = req.body.email;
    var password = req.body.password;

    var user = users.find(user => user.email == email && user.password == password);
    if(!user) {
      res.sendStatus(404);
      return;
    }
    res.status(200).json({ user: user});
  });

};
