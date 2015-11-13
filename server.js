// upload user local preferences if any
config = require('./etc/_Config');

var RestAPI = require('./devServer/RestAPI');
var session = require('express-session');

var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

 // create a session cookie to protect API
 app.use(session({secret:config.SECRET, resave: false, saveUninitialized:false}));

// instanciate REST API before set session flag to clean
new RestAPI (config, app); 

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
};

// set the static files location /public/img will be /img for users
app.use(setSession, express.static(__dirname + '/' + staticdir)); 

// rewrite requested URL to include Angular hashPrompt and set session flag for RestAPI
app.get('/*', function(req, res) {
    console.log ("Page redirected to Angular hashed path %s", '/#!' + req.originalUrl);
    res.redirect('/#!' + req.originalUrl);
});

// start app ===============================================
app.listen(config.PORT, config.HOST); 
console.log('Server Listening http://%s:%d (rootdir=%s)', config.HOST, config.PORT, __dirname + '/' + staticdir);