'use strict';

var register = require('../../models/registerModel');
var foodpost = require('../../models/foodPostModel');
var httpRequest = require('http_request');

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

  router.get('/wall', function(req, res) {

    // httpRequest.get('http://ec2-54-89-137-160.compute-1.amazonaws.com:9200/foodbuddy/foodpost/_search').then(function(response) {
    //
    //   if(response.getCode() == 200) {
    //     var data = response.getBody();
    //     res.status(200).json(data);
    //   }
    //   else {
    //     res.sendStatus(500);
    //   }
    // });

    var data = [{
      "took": 1,
      "timed_out": false,
      "_shards": {
        "total": 1,
        "successful": 1,
        "failed": 0
      },
      "hits": {
        "total": 4,
        "max_score": 1,
        "hits": [
          {
            "_index": "foodbuddy",
            "_type": "foodpost",
            "_id": "AVeBv60JDj89B3Xo3C9_",
            "_score": 1,
            "_source": {
              "title": "Senior Grocery Order Program",
              "user_id": "test_id",
              "user_name": "Family Service Regina",
              "food_types": "packed_food",
              "pickup_address": "200-1440 Broadway Ave, Regina",
              "is_drop_off": false,
              "expire_time": "2016-10-05 12:10:10",
              "promised": false,
              "description": "Provides a groceries shopping/delivery service for older adults with no other resources. Prescription delivery may also be available with grocery orders."
            }
          },
          {
            "_index": "foodbuddy",
            "_type": "foodpost",
            "_id": "AVeBwmWFDj89B3Xo3C-A",
            "_score": 1,
            "_source": {
              "title": "Al Ritchie Family Wellness Centre: Community Kitchens and Family Cooking",
              "user_id": "test_id",
              "user_name": "Al Ritchie Community Association",
              "food_types": "cooked_food",
              "pickup_address": "2250 Lindsay St, Regina",
              "is_drop_off": false,
              "expire_time": "2016-10-15 10:00:00",
              "promised": false,
              "description": "The Community Kitchens program brings together participants to construct a meal plan on a budget. The group meets to discuss what kinds of meals they want to make and go through flyers to determine where the food should come from. On the day of the Community Kitchen the participants work together to create meals that they can take home for their families."
            }
          },
          {
            "_index": "foodbuddy",
            "_type": "foodpost",
            "_id": "AVeBxqQ8Dj89B3Xo3C-C",
            "_score": 1,
            "_source": {
              "title": "Community Gardens",
              "user_id": "test_id",
              "user_name": "Al Ritchie Community Association",
              "food_types": "cooked_food",
              "pickup_address": "2250 Lindsay St, Regina",
              "is_drop_off": false,
              "expire_time": "2016-10-25 10:00:00",
              "promised": false,
              "description": "Offers 24 community garden plots. Located in Al Ritchie East near Cornwall School and in Al Ritchie West near St. Augustine School. A Community Garden Committee oversees the management and maintenance of the garden and works closely with the Outreach worker as well."
            }
          },
          {
            "_index": "foodbuddy",
            "_type": "foodpost",
            "_id": "AVeBye_nDj89B3Xo3C-D",
            "_score": 1,
            "_source": {
              "title": "Senior's Potluck Lunch ",
              "user_id": "test_id",
              "user_name": "Regina Qu'Appelle Regional Health Authority",
              "food_types": "cooked_food",
              "pickup_address": "325 Victoria Ave, Regina",
              "is_drop_off": false,
              "expire_time": "2016-10-25 12:00:00",
              "promised": false,
              "description": "A group of older adults in the Al Ritchie area meet once a month for a potluck lunch. New members are always welcome."
            }
          }
        ]
      }
    }];
    return res.status(200).json(data);

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
