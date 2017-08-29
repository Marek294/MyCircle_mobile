/**
 * Main application file
 */

'use strict';

const express = require('express');
const config = require('./config/environment');
const http = require('http');
const socket = require('socket.io');


// Setup server
var app = express();
var server = http.createServer(app);
require('./config/express').default(app);
require('./routes').default(app);

// Start server
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

setImmediate(startServer);

// Setup socket
var io = socket(server);

io.on('connection', function(socket) {
  console.log('Connection was made ' + socket.id);
  socket.on('ADD_POST', function(data) {
    console.log(data);
    socket.broadcast.emit(`SERVER_NEW_POST:${data.circle_id}`, data);
  });
});

// Expose app
exports = module.exports = app;
