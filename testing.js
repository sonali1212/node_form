var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.set('view engine','ejs');
app.set('views','./views');

app.get('/form',function(req,res){
	//res.sendFile(__dirname + '/form.html');
	res.render('form');
});
app.post('/form',function(req,res){
	var user = {
		user_name: req.body.user_name,
		user_organisation: req.body.user_organisation       
	}
	res.render('result', {data:user});
});

app.listen(8080);
console.log("hii sonali");