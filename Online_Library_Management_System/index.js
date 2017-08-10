var express = require('express');
var app = express();

var port = process.env.port ||3000;

app.get('/',function(req,res) {
    res.sendFile(__dirname+'/index.html');
});

app.get('/login.html',function(req,res) {
    res.sendFile(__dirname+'/login.html');
});

app.get('/signUp.html',function(req,res) {
   res.sendFile(__dirname+'/signUp.html');
});

app.listen(port,function(){
    console.log("Listening on port "+port);
});