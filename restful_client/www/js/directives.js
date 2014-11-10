angular.module('starter.directives',[])
.factory('TimeTracker', function(){
	var dates = [];
	var count = 0;
	
	return {
		set: function(){
			if (dates[0] && new Date() - dates[0] > 3000){
				dates = [];
			}
			dates.push(new Date());
		},
		getFirst: function(){
			return dates[0];
		},
		setCount: function(){
			if (dates[0] && new Date() - dates[0] > 3000){
				count = 0;
			}
			count++;
		},
		getCount: function(){
			return count;
		},
	};
})
.directive('postRepeatDirective', 
  ['TimeTracker', 
  function(TimeTracker) {
    return function(scope, element, attrs) {
      	 TimeTracker.setCount();
      	 TimeTracker.set();
      	 console.log('rendering:' + TimeTracker.getCount() + " spend " + (new Date() - TimeTracker.getFirst()) + 'ms');
    };
  }
]);
