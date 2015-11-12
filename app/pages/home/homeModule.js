(function() {
'use strict';

// list all rependencies within the page + controler if needed
angular.module('MyHomeModule', ['WidgetA', 'WidgetB'])

  .controller('MyHomeController', function ($scope, $stateParams, $state, $controller) {
    angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));
    console.log ("Init MyHomeController");
    }
  );
  console.log ("HomeModule Loaded");
})();