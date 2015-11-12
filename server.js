// upload user local preferences if any
try {var env= require('./.noderc');} catch (e) {var env='';}
var RestAPI = require('./devServer/RestAPI');


var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

env.HTTP = env.HTTP || 8080;  // get port from .noderc.js or use default
env.HOST = env.HOST || 'localhost'; 

// chose dev or prod rootdir
var staticdir = 'dist.dev';
if (process.env.MODE) staticdir = process.env.MODE === 'prod' ? 'dist.prod' : 'dist.dev';
else staticdir = env.MODE === 'prod' ? 'dist.prod' : 'dist.dev';

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
//app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
//app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/' + staticdir)); // set the static files location /public/img will be /img for users

// instanciate application REST API backend
new RestAPI (env, app); 

// rewrite requested URL to include Angular hashPrompt
app.get('/*', function(req, res) {res.redirect('/#!' + req.originalUrl);});

// start app ===============================================
app.listen(env.HTTP, env.HOST); 
console.log('Server Listening http://%s:%d (%s)', env.HOST, env.HTTP, staticdir);