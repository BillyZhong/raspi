if(process.argv[2] == "turn off the lights"){
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
else if(process.argv[2] == "turn on the lights"){
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
else{
	console.log("Sorry, \'" + process.argv[2] + "\' is not a command");
}