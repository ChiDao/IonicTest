angular.module('starter.findFriendsCtrl', [])

.controller('FindFriendsCtrl', function($scope, Friends) {
    $scope.friends = Friends.getContactList('freedom', 'phone');

    $scope.selectFriend = function(id){
    	Friends.addFromContactList('freedom', 'phone', id);
    };
})