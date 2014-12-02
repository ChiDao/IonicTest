angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	$scope.getPicture = function(){
		navigator.camera.getPicture(onSuccess, onFail, { 
			quality: 50, 
			destinationType: Camera.DestinationType.FILE_URI,
			sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM	
		}); 

		function onSuccess(imageURI) {
			var image = document.getElementById('myImage');
			image.src = imageURI;
		}

		function onFail(message) {
			alert('Failed because: ' + message);
		}
	}
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
