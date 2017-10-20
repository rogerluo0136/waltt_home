var express = require('express');
var app = express();
var path = require('path');
var projects = require('./json/projects');

app.use('/vendor', express.static('./bower_components'));
app.use('/assets', express.static('./dist'));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('index', { title: 'Waltt|Home'});
});

app.get('/about', function (req,res){
	res.render('about', { title: 'Waltt|About'});
});

app.get('/projects', function (req,res){
	res.render('projects', {title: 'Waltt|Projects', projects: projects});
});

app.get('/partners', function (req,res){
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
