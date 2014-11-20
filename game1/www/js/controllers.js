angular.module('starter.controllers', [])

.controller('DashCtrl', function($rootScope, $location, $scope, Chapters) {
	$scope.chapters = Chapters.all();
})

.controller('ChapterDetailCtrl', function($scope, $stateParams, Chapters) {
  $scope.chapter = Chapters.get($stateParams.chapterId);
	$scope.viewVedio = function(){
		window.open('gaeaionictestdemo://gaeamobile.net/IonicTest/community/viewVideo.html?gameId=0&level=' + (parseInt($stateParams.chapterId) + 1), '_system');
	};
	$scope.shareVedio = function(){
		window.open('gaeaionictestdemo://gaeamobile.net/IonicTest/community/shareVideo.html?vedioId=1111&gameId=0&level=' + (parseInt($stateParams.chapterId) + 1), '_system');
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
