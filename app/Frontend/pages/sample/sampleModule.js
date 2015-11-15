(function() {
'use strict';

// list all rependencies within the page + controler if needed
angular.module('MySampleModule', ['WidgetA', 'WidgetB'])
        .controller('MySampleController', MySampleController);

// Do not forget to force injection of Minified production version wont work
MySampleController.$inject = ['$scope', '$stateParams', '$state', '$controller'];
function MySampleController($scope, $stateParams, $state, $controller) {

  angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));
  console.log ("Init MySampleController");

}

console.log ("SampleModule Loaded");
})();