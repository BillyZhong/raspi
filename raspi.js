var express = require('express');
var app = express();
var socket = require('socket.io');
var pathname = "/Users/kimberlizhong/raspi";

app.get('/angular.js', function(req,res){
	res.sendFile(pathname + '/angular.js');
});
app.get('/socketio.js', function(req,res){
	res.sendFile(pathname + '/socketio.js');
});
app.get('/fonts/*', function(req,res){
	res.sendFile(pathname + req.path);
});
app.get('/images/*', function(req,res){
	res.sendFile(pathname + req.path);
});
app.get('/views/*', function(req,res){
	res.sendFile(pathname + req.path);
});
app.get('/controllers/*', function(req,res){
	res.sendFile(pathname + req.path);
});
app.get('/css/*', function(req,res){
	res.sendFile(pathname + req.path);
});
app.get('/js/*', function(req,res){
	res.sendFile(pathname + req.path);
});
app.get('*', function(req,res){
	res.sendFile(pathname + '/index.html');
});

var server = app.listen(8080);
var io = socket.listen(server);

var lights = 0;

io.sockets.on('connection', function(client){
	console.log('Client connected');
	var verified;
	client.on('login', function(user, password){
		console.log('Login Attempt:');
		console.log('User: ' + user);
		console.log('Password: ' + password);
		if(user == "root" && password == "root"){
			verified = 1;
		}
		else{
			verified = 0;
		}
		client.emit('verification', verified);
	});

	client.on('lights', function(){
		if(verified == 1){
			if(lights == 0){
				console.log('Lights are on');
				lights = 1;
			}
			else{
				console.log('Lights are off');
				lights = 0;
			}
		}
	});
});