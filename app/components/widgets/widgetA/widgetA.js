'use strict';

angular.module('WidgetA',[])

.directive('widgetA', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/widgets/widgetA/widgetA.html'
        };
    }]);

console.log ("widgetA Loaded");