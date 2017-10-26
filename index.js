var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var xoauth2 = require("xoauth2"),
	xoauth2gen;

var app = express();

var projects = require('./json/projects');
var partners = require('./json/partners');
var news = require('./json/news');


app.use(bodyParser.urlencoded({ extended: false }));
app.use('/vendor', express.static('./bower_components'));
app.use('/assets', express.static('./dist'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('index', { title: 'Home | Waltt Group'});
});

app.get('/about', function (req, res){
	res.render('about', { title: 'About | Waltt Group'});
});

app.get('/projects', function (req, res){
	res.render('projects', {title: 'Projects | Waltt Group', projects: projects});
});

app.get('/partners', function (req, res){
	res.render('partners', {title: 'Partners | Waltt Group', partners: partners});
});

app.get('/news', function (req, res){
	res.render('news', {title: 'News | Waltt Group', news: news});
});

app.get('/contact', function (req, res){
	res.render('contact', {title: 'Contact | Waltt Group'});
});

app.post('/contact', function (req, res){
	
	var mailOpts, smtpTrans;
  //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
  	smtpTrans = nodemailer.createTransport({
	    service: "Gmail",
	    auth: {
	    	xoauth2: xoauth2.createXOAuth2Generator({
	         user: "rogerluo0136@gmail.com",
	         clientId: "1003751314812-j40caaablgpav7099b18l3iknbqdjer6.apps.googleusercontent.com",
             clientSecret: "rnXpIhQMBVFHvL7k8_ATmZfe",
             refreshToken: "1/Dax7RX9E2Wy5dnStUlrWj8c99py7OD5v1bH0bz1ksHENqQeyDk18O4OTzGbJV4MQ"
	       	})
	    }
  	});

 	mailOpts = {
 	   // from: 'admin@waltt.ca', 
 	   // to: 'lance@waltt.ca',
 	   // subject: req.body.subject,
 	   // text: req.body.message
 	   	from: "rogerluo0136@gmail.com",
 	   	to: "rogerluo0136@gmail.com",
 	   	subject: "hello",
 	   	generateTextFromHTML: true,
  		html: "<b>Hello world</b>"
  	};

  	smtpTrans.sendMail(mailOpts, function (error, response) {
      	//Email not sent
      	if (error) {
          res.render('contact', { title: 'Contact | Waltt Group', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
      	}else {
          res.render('contact', { title: 'Contact | Waltt Group', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
      	}
      	smtpTrans.close();
  	});
});

app.listen('4000', function(){
	console.log('listening on 4000');
});
