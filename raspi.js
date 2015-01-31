var express = require('express');
var app = express();
var pathname = "/Users/kimberlizhong/raspi";

app.get('*', function(req,res){
	res.sendFile(pathname + req.path);
});


app.listen(8080);