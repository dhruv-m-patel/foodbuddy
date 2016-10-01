'use strict';

var kraken = require('kraken-js');
var nconf = require('nconf')
var http = require('http');

var elasticsearch = require('elasticsearch');
 // var client = new elasticsearch.Client({
 //   host: 'ec2-54-89-137-160.compute-1.amazonaws.com:9200',
 //   log: 'trace'
 // });

 var client = new elasticsearch.Client({
   host: 'ec2-54-89-137-160.compute-1.amazonaws.com:9200',//nconf.get('ES_URL'),// kraken.get('env:ES_URL'),
   log: 'trace'
 });

module.exports.save = function (req, res){
    var title  = req.body.title;
    var user_id  = req.body.user_id;
    var user_name  = req.body.user_name;
    var food_types = req.body.food_types;
    var pickup_address = req.body.pickup_address;
    var is_drop_off = req.body.drop_off;
    var expire_time = req.body.expire_time;
    var description = req.body.description;


    // ElasticSearch Expects JSON not Querystring!
var data = JSON.stringify({
  "title" :title,
  "user_id":user_id,
  "user_name":user_name,
  "food_types" :food_types,
  "pickup_address" :pickup_address,
  "is_drop_off" :is_drop_off,
  "expire_time" :expire_time,
  "description" :description
});

// An object of options to indicate where to post to
var post_options = {
    host: 'ec2-54-89-137-160.compute-1.amazonaws.com',
    port: '9200',
    path: '/foodbuddy/foodpost',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
    }
};

var response =null;
// Set up the request
var post_req = http.request(post_options, function(res) {

    res.on('data', function (chunk) {
        response = chunk;
        console.log('Response: ' + chunk);
    });
});

post_req.write(data);
post_req.end();

return response;
}
