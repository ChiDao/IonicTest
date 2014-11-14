angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	//window.GetIntent('chapter', function(chapter){
	//alert(chapter);
	//});
	$scope.callGame2 = function(){
		window.GetIntent("com.gaeamobile.ionictest.game2");
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
