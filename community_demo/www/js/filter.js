angular.module('starter.filter', [])
.filter('urlEncode', function() {  
    return function(input) {  
        return encodeURIComponent(input);  
    };  
});  