/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    tasks = require("./tasks"),
    mongoose = require('mongoose'),
    osc = require('node-osc'),
    socketio = require('socket.io'),
    _ = require('lodash');


// Get yo' models
// var User = require("./models/user.js"),

var app = express();
var server = require('http').createServer(app);
var io = socketio.listen(server);

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon(__dirname + '/public/favicon.ico'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

var port;
app.configure('development', function(){
  port = 3000;
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  mongoose.connect('mongodb://localhost/<app_name>');
});

app.configure('production', function(){
  port = 80;
  app.use(express.errorHandler());
  // TODO:
  // add production database connection string
  // mongoose.connect('mongodb://localhost/<app_name>');
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('opened');
});

var oscServer = new osc.Server(44100, '0.0.0.0');

io.sockets.on('connection', function(socket) {
  oscServer.on("message", function (msg, rinfo) {
      // console.log("TUIO message:");
      // console.log(msg);
      // console.log(_.first(msg));
      socket.emit(_.first(msg), _.rest(msg));
  });
});



server.listen(port, function(){
});


app.get('/', routes.home);


/*
 * Run background tasks here:
 */

// Run immediately
// tasks.myTask();

// Run periodically
// setInterval(tasks.myTask, 1000 * 60 * 10);
