angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	$scope.items = Array();
	for (i = 0; i < 1000; i++){
		$scope.items.push(i);
	}
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

//.controller('AccountCtrl', function($scope) {
//})

.controller('MessagesCtrl', function($scope, Messages) {
	$scope.messages = Messages.all();
	
	$scope.deleteMessage = function(messageId){
		alert("delete: " + messageId);
		Messages.delete(messageId);
	};
	
	$scope.newMessage = function(){
		Messages.new();
	};
	
	$scope.toggleShowDelete = function(){
		$scope.showDelete = !$scope.showDelete;
	};
})

.controller('MessageDetailCtrl', function($scope, $stateParams, Messages) {
    $scope.message = Messages.get($stateParams.messageId);
})
;
