var express = require('express');
var app = express();
var path = require('path');

app.use('/vendor', express.static('./bower_components'));
app.use('/assets', express.static('./dist'));
//app.use(express.static())
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
  res.render('index', { title: 'Home'});
});

app.get('/team', function (req, res) {
  res.render('team', { title: 'blah' });
});

app.get('/about', function (req,res){
	res.send('about page');
});

app.get('/projects', function (req,res){
	res.send('projects page');
});

app.get('/partner', function (req,res){
	res.send('partner page');
});

app.get('/news', function (req,res){
	res.send('news page');
});

app.get('/contact', function (req,res){
	res.send('contact page');
});

app.listen('4000', function(){
	console.log('listening on 4000');
});
