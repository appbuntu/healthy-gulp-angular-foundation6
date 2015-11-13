(function() {
  'use strict';

  angular.module('@@APPNAME@@', [ // Warning: Appname should fit with gulpfile.js & index.html
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations',
    
    // Application Components
    'MyHomeModule',
    'MySampleModule',
    'MyAjaxModule'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/home');

    $locationProvider.html5Mode(true).hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

console.log ("@@APPNAME@@ Loaded");
})();
