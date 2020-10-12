var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser')
var passport = require("passport");

var register = require('./routes/register');
var login = require('./routes/login');
var jwt = require('./routes/jwt-verify');
var mail = require('./routes/email');
var google = require('./routes/google');
var app = express();

// app.use(cors({ origin: '*' }));
app.use(
  cors({
    origin: "http://localhost:3001",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
  })
);

var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/craftzy');
  
mongoose.connect('mongodb+srv://craftzy:'+  encodeURIComponent("100%A10dence") + '@craftzy-dev-cuksf.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', function (err) {
    console.log(err)
});
db.once('open', function () {
    console.log('mongodb connected!!')
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/api/register', register);
app.use('/api/user', login);
app.use('/api/verify', jwt);
app.use('/api/send', mail);
app.use('/api/google', google);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
