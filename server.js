'use strict';

var app = require('./index');
var http = require('http');


var server;

/*
 * Create and start HTTP server.
 */

server = http.createServer(app);
server.listen(process.env.PORT || 8000);
server.on('Listening', function () {
    console.log('FoodBuddy is now accessible on http://localhost:%d', this.address().port);
});
