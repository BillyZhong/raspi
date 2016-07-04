var express = require('express');
var app = express();

app.get('/?', function(req, res){
	if(req.query.light == "1"){
		res.send("Light On");
		console.log("Light On");
		console.log("From IP: " + req.ip);
		console.log();
		
		var spawn = require('child_process').spawn,
			heyu = spawn('heyu', ['-v', 'fon', 'K1']);
		
		heyu.stdout.on('data', function(data){
			console.log("Heyu STDOUT: " + data);
		});
		
		heyu.stderr.on('data', function(data){
			console.log("Heyu STDERR: " + data);
		});

		heyu.on('close', function(code){
			console.log("Heyu process ended with code: " + code);
		});
	}
	else if(req.query.light == "0"){
		res.send("Light Off");
		console.log("Light Off");
		console.log("From IP: " + req.ip);
		console.log();

		var spawn = require('child_process').spawn,
			heyu = spawn('heyu', ['-v', 'foff', 'K1']);

		heyu.stdout.on('data', function(data){
			console.log("Heyu STDOUT: " + data);
		});
		
		heyu.stderr.on('data', function(data){
			console.log("Heyu STDERR: " + data);
		});

		heyu.on('close', function(code){
			console.log("Heyu process ended with code: " + code);
		});
	}

	if(req.query.gpiolight == "1"){
		res.send("GPIO Light On");
		console.log("GPIO Light On");
		console.log("From IP: " + req.ip);
		console.log();

		var spawn = require('child_process').spawn,
			python = spawn('sudo', ['python', 'lightpy.py', '1']);
		
		python.stdout.on('data', function(data){
			console.log("Python STDOUT: " + data);
		});

		python.stderr.on('data', function(data){
			console.log("Python STDERR: " + data);
		});

		python.on('close', function(code){
			console.log("Python process ended with code: " + code);
		});
	}
	else if(!req.query.gpiolight == "0"){
		res.send("GPIO Light Off");
		console.log("GPIO Light Off");
		console.log("From IP: " + req.ip);
		console.log();

		var spawn = require('child_process').spawn,
			python = spawn('sudo', ['python', 'lightpy.py', '0']);
		
		python.stdout.on('data', function(data){
			console.log("Python StdOUT: " + data);
		});

		python.stderr.on('data', function(data){
			console.log("Python StdErr: " + data);
		});

		python.on('close', function(code){
			console.log("Python process ended with code: " + code);
		});
	}
});

app.listen(8080);
