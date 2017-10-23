var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon')
var projects = require('./json/projects');
var partners = require('./json/partners');
var news = require('./json/news');

app.use(favicon(__dirname + '/app/images/favicon.png'));

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
	res.render('partners', {title: 'Waltt|Partners', partners: partners});
});

app.get('/news', function (req,res){
	res.render('news', {title: 'Waltt|News', news: news});
});

app.get('/contact', function (req,res){
	res.render('contact', {title: 'Waltt|Contact'});
});

app.listen('4000', function(){
	console.log('listening on 4000');
});
