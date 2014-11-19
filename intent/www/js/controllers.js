angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	$scope.callGame1 = function(){
		window.open('gaeaionictestgame1://', '_system');
	};
	$scope.callGame2 = function(){
		window.open('gaeaionictestgame2://', '_system');
	};
	$scope.callGame1Chapter2 = function(){
		window.open('gaeaionictestgame1://?chapter=2', '_system');
	};
	$scope.callGame2Chapter3 = function(){
		window.open('gaeaionictestgame2://?chapter=3', '_system');
	};
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
