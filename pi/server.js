var express = require('express');
var app = express();

app.get('/?', function(request, response){
	response.writeHead(200);
	response.write(request.query.message);
	response.end();
});

app.listen(8080);