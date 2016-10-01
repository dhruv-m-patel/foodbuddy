'use strict';

var app = require('./index');
var http = require('http');
var winston = require('winston');

var server;

/*
 * Create and start HTTP server.
 */

server = http.createServer(app);
server.listen(process.env.PORT || 8000);
server.on('listening...', function () {
  winston.info('FoodBuddy is now accessible on http://localhost:%d', this.address().port);
});
