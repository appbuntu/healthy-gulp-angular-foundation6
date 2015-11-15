var config  = require('../etc/_Config');
var RestAPI = require('./RestApis/_all');
var fs      = require('fs');

var express        = require('express');
var session        = require('express-session');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// instanciate express HTTP server
var app = express();

 // create a session cookie to protect API
 app.use(session({secret:config.SECRET, resave: false, saveUninitialized:false}));

// instanciate REST API before set session flag to clean
new RestAPI (app); 

// chose dev or prod rootdir
var staticdir = 'dist.dev';
if (process.env.MODE) staticdir = process.env.MODE === 'prod' ? 'dist.prod' : 'dist.dev';
else staticdir = config.MODE === 'prod' ? 'dist.prod' : 'dist.dev';

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT

// Fake loggin when user request '/' page.
function setSession (req, res, next) {
    if (req.originalUrl === "/") req.session.logged=true;
    next();
}

var rootdir= __dirname + '/../../' + staticdir;
 if (!fs.existsSync (rootdir)) {
    console.log ("### HOOPS Rootdir not found rootdir=%s\n", rootdir);
    process.exit ();
}

// set the static files location /public/img will be /img for users
app.use(setSession, express.static(rootdir)); 

// rewrite requested URL to include Angular hashPrompt and set session flag for RestAPI
app.get('/*', function(req, res) {
    console.log ("Page redirected to Angular hashed path %s", '/#!' + req.originalUrl);
    res.redirect('/#!' + req.originalUrl);
});

// start app ===============================================
app.listen(config.PORT, config.HOST); 
console.log('Server Listening http://%s:%d (rootdir=%s)', config.HOST, config.PORT, rootdir);