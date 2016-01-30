'use strict';

const express = require('express');
const jwt = require('jwt-simple');
const uuid = require('node-uuid');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

const secret = uuid.v1();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser());

app.use('/', function(req, res, next) {
  let token = req.cookies.authToken;
  req.user = {};
  if(!token) return next();
  try {
    req.user = jwt.decode(token, secret);
  } catch(err) {
    console.error(err);
  }
  next();
});

app.get('/', function(req, res) {
  res.render('chat');
  // res.render('home', {
  //   user: req.user.username || null
  // });
});

app.post('/', function(req, res) {
  let token = jwt.encode(req.body, secret);
  res.cookie('authToken', token, {
    httpOnly: true
  });
  res.redirect('/chat');
});

app.get('/chat', function(req, res) {
  res.end();
});

app.listen(80, () => console.log('server started'));
