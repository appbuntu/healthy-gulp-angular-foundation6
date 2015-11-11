
/*
 * This model force class change simply by updating a variable within the
 * private scope of the directive. Might not be the prefered model to change
 * a class, but it a simple way to demonstrate how a template can interact with
 * javascript.
 * 
 * Note: widgetA uses a private widgetA.scss style.
 */

(function() {
'use strict';

angular.module('WidgetA',[])

.directive('widgetA', [function() {
    function mymethods(scope, elem, attrs) {
        
     scope.value="OFF";
  
     scope.clicked = function () {
         if (scope.value === "ON") {
            scope.value = "OFF"; 
         } else {
            scope.value = "ON";
         }
         console.log ("Clicked WidgetA value=" + scope.value);
     };
  
    }    
        
    return {
        restrict: 'E',
        templateUrl: 'widgets/widgetA/widgetA.html',
        link: mymethods,
        scope: {}
    };
}]);

console.log ("widgetA Loaded");
})();
