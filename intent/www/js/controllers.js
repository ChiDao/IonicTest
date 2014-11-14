angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	$scope.callGame1 = function(){
		window.OpenApplication("com.gaeamobile.ionictest.game1");
	};
	$scope.callGame2 = function(){
		window.OpenApplication("com.gaeamobile.ionictest.game2");
	};
	$scope.callGame1Chapter2 = function(){
		window.OpenApplication("com.gaeamobile.ionictest.game1", {chapter:'2'});
	};
	$scope.callGame2Chapter3 = function(){
		window.OpenApplication("com.gaeamobile.ionictest.game2", {chapter:'3'});
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
