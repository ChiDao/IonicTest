angular.module('starter.controllers', [])

.controller('DashCtrl', function($rootScope, $location, $scope, Chapters) {
	$scope.chapters = Chapters.all();
	$scope.getChapter = function(){
		window.GetIntent(function(chapter){
			$location.path('/tab/chapters/' + chapter);
			$rootScope.$apply();
		});
	};
})

.controller('ChapterDetailCtrl', function($scope, $stateParams, Chapters) {
  $scope.chapter = Chapters.get($stateParams.chapterId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
