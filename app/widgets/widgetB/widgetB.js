
'use strict';

angular.module('WidgetB',[])

.directive('widgetB', [function() {
        return {
            restrict: 'E',
            templateUrl: 'widgets/widgetB/widgetB.html'
        };
    }]);

console.log ("WidgetB Loaded");
