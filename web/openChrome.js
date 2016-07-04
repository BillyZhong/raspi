var open = require('open');
var express = require('express');
var app = express();
var socket = require('socket.io');

var server = app.listen(8888);
var io = socket.listen(server);

io.sockets.on('connection', function(client){
	console.log('Client Connected');
	client.on('chrome', function(data){
		console.log('Opening stuff...');
		open(data);
	});
});

var spawn = require('child_process').spawn,
	localtunnel = spawn('lt', ['--port','8888','--subdomain','chrome']);