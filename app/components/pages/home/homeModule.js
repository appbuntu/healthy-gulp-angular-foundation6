'use strict';

// list all rependencies within the page + controler if needed
angular.module('MyHomeModule', ['WidgetA', 'WidgetB'])
        .controller('MyHomeController', MyHomeController);

// Do not forget to force injection of Minified production version wont work
MyHomeController.$inject = ['$scope', '$stateParams', '$state', '$controller'];
function MyHomeController($scope, $stateParams, $state, $controller) {

  angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));
  console.log ("Init MyHomeController");

}

console.log ("HomeModule Loaded");