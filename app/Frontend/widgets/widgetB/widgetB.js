
/*
 * Change class through Angular Add/Remove class methods.
 * Note that Element point onto HTML tag element and that searching
 * in the widget for the right element is necessary. This search can
 * use tag,id,class,...
 * 
 * We may search for the element only once at initialisation time and keep
 * the reference within the private scope of the directive.
 * 
 * Note: widgetB uses globalapp.scss style.
 */

(function() {
'use strict';

angular.module('WidgetB',[])

.directive('widgetB', function() {
    function mymethods(scope, elem, attrs) {
    
     scope.button = elem.children('span');
     console.log (scope.button);
        
     scope.clicked = function () {
         if (scope.button.hasClass ("status-ok")) {
            console.log ("Clicked WidgetB value=FX" );
            scope.button.removeClass("status-ok");
            scope.button.addClass("status-fx");
            scope.button.text("Widget-B [OFF]");
         } else {
            console.log ("Clicked WidgetB value=OK" );
            scope.button.removeClass("status-fx");
            scope.button.addClass("status-ok");
             scope.button.text("Widget-B [ON]");
         }
     }; 
    }    
        
    return {
        restrict: 'E',
        templateUrl: 'widgets/widgetB/widgetB.html',
        link: mymethods,
        scope: {
            initvalues : '='
        }
    };
});

console.log ("widgetB Loaded");
})();