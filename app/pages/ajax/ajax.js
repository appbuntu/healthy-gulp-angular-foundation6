/*
 * This sample module implement two directives with a share templates.
 * 
 * Note: 
 *  - while both directives are within the same module each owns a private scope.
 *  - depending on where you place static date they are share or not
 */

(function() {
'use strict';

// simple template can be store directly inside a static variable
var tmpl = '<span class="{{status}}" ng-click="clicked()"> {{info}}: [{{data}}] Elapse:{{elapsed}}s</span>';

// list all rependencies within the page + controler if needed
angular.module('MyAjaxModule', [])

.directive('serverTime', ["$http", "$timeout", function($http, $timeout) {
    
        
    function private_methods(scope, elem, attrs) {
        
    // initial scope at instanciation    
    scope.data    = "Click For Time";
    scope.status  = "FX";
    scope.info    = attrs.info;
    scope.counter = 0;
    scope.elapsed = 0;
    scope.rate    = 250; // increase timer every 250ms
    
    // method call when user click on element
    scope.clicked = function () {

            // send AJAX request to server
            var handler = $http.get('/api/get-time');
            
            handler.success(function(response, errcode, headers, config) {

                // check if response is valid
                if (response.type !== "time") {
                    alert ("Hoops invalid response type " +  response);
                    return;
                }

                scope.data   = response.data;
                scope.status = "OK";
                scope.counter= 0;
            });

            handler.error(function(status, errcode, headers) {
                console.log ("Hoops /api/get-time failed err=" + errcode);
                scope.data = "Server not Responding";
                scope.status = "FX";
            });
        };
        
        scope.count = function() {
            scope.counter ++;
            scope.elapsed = (scope.counter * scope.rate / 1000).toFixed(2);
            $timeout (scope.count, scope.rate);
            
            // when date too old change color
            if (scope.counter > 25) scope.status = "FX";
        };
        
        // init counter timeout
        $timeout (scope.count, scope.rate);

    } // end link  
        
    return {
        restrict: 'E',
        template: tmpl,
        link: private_methods,
        scope: {} // 100% Private Scope
    };
}])

.directive('serverDate', ["$http", "$timeout", function($http, $timeout) {
    
        
    function private_methods(scope, elem, attrs) {
        
    // initial scope at instanciation    
    scope.data    = "Click For Time";
    scope.status  = "FX";
    scope.info    = attrs.info;
    scope.counter = 0;
    scope.elapsed = 0;
    scope.rate    = 1000;  // count every second
    
    // method call when user click on element
    scope.clicked = function () {

            // send AJAX request to server
            var handler = $http.get('/api/get-date');
            
            handler.success(function(response, errcode, headers, config) {

                // check if response is valid
                if (response.type !== "date") {
                    alert ("Hoops invalid response type "+response);
                    return;
                }

                scope.data   = response.data;
                scope.status = "OK";
                scope.counter= 0;
            });

            handler.error(function(status, errcode, headers) {
                console.log ("Hoops /api/get-date failed err=" + errcode);
                scope.data = "Server not Responding";
                scope.status = "FX";
            });
        };
        
        scope.count = function() {
            scope.counter ++;
            scope.elapsed = (scope.counter * scope.rate / 1000).toFixed(2);
            $timeout (scope.count, scope.rate);
            
            // when date too old change color
            if (scope.counter > 15) scope.status = "FX";
        };
        
        // init counter timeout
        $timeout (scope.count, scope.rate);

    } // end link  
        
    return {
        restrict: 'E',
        template: tmpl,
        link: private_methods,
        scope: {} // 100% Private Scope
    };
}]);

console.log ("RestSampleModule Loaded");
})();