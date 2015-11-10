'use strict';

angular.module('WidgetB',[])

.directive('widgetB', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/widgets/widgetB/widgetB.html'
        };
    }]);

console.log ("WidgetB Loaded");