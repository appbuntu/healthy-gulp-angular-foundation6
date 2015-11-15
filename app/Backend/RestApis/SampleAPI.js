/*
 *  Dummy API that return basic JSON objects  
 */

var config = require('../../etc/_Config');

function RestAPI (app) {
'use strict';
    
 app.get('/api/get-date', function (req, res) {
  var now = new Date();   
     if (req.session && !req.session.logged) res.send({type: 'error', app: config.APPNAME, data: 'No Session Cookie'});
     else {
       var date= now.getDate() + '/' + now.getMonth() +'/'+ now.getFullYear() ;
       res.send({type: 'date', data: date});
     }
 });   
 
 app.get('/api/get-time', function (req, res) {
     if (req.session && !req.session.logged) res.send({type: 'error',  app: config.APPNAME, data: 'No Session Cookie'});
     else {
      var time= new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
      res.send({type: 'time', data: time});
     }
 });   

}

module.exports = RestAPI;