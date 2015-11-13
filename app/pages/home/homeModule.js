(function() {
'use strict';

  // list all rependencies within the page + controler if needed
  angular.module('MyHomeModule', ['WidgetA', 'WidgetB'])

  // Injection are added automatically with ng-anotate
 .controller('MyHomeController', function ($scope, $stateParams, $state, $controller) {
 
    // add some usefull code here. Note than Angular2 does not have controler anymore
    // building your code directly within directive could be a good idea. 
 
  });
  
  console.log ("HomeModule Loaded");
})();