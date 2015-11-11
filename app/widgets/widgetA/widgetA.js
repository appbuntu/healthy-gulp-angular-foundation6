
'use strict';

angular.module('WidgetA',[])

.directive('widgetA', [function() {
    function link(scope, elem, attrs) {
        
     scope.value="fx";
  
     scope.clicked = function () {
         if (scope.value === "ok") {
            scope.value = "fx"; 
         } else {
            scope.value = "ok";
         }
         console.log ("Togle clicked value=" + scope.value);

     };
  
    }    
        
    return {
        restrict: 'E',
        templateUrl: 'widgets/widgetA/widgetA.html',
        link: link,
        scope: {
            initvalues : '='
        }
    };
}]);

console.log ("widgetA Loaded");
