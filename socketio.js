var socket = io.connect('http://localhost:8080');
var socketChrome = io.connect('http://chrome.localtunnel.me');
var verified;
var loggedIn = 0;
var user;

function login(){
	if(loggedIn == 0){
		user = document.getElementById('user').value;
		socket.emit('login', document.getElementById('user').value, document.getElementById('password').value);
		socket.on('verification', function(data){
			verified = data;
		});
		loggedIn = 1;
	}
}

function lightsToggle(){
	socket.emit('lights');
}

function openChrome(){
	socketChrome.emit('chrome', document.getElementById('openURL').value);
}