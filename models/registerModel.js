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
    var name  = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var user_type = req.body.user_type;

    // ElasticSearch Expects JSON not Querystring!
var data = JSON.stringify({
  "name" :name,
  "email" :email,
  "password" :password,
  "user_type" :user_type
});

// An object of options to indicate where to post to
var post_options = {
    host: 'ec2-54-89-137-160.compute-1.amazonaws.com',
    port: '9200',
    path: '/foodbuddy/register',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
    }
};

// Set up the request
var post_req = http.request(post_options, function(res) {

    res.on('data', function (chunk) {
        console.log('Response: ' + chunk);
    });
});

return data;
}
