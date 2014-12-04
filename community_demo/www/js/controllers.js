angular.module('starter.controllers', ['starter.findFriendsCtrl'])

.controller('GamesCtrl', function($scope,$ionicModal,Games) {
    $scope.games = Games.all();
    $scope.NewGames = Games.all();
    
    $ionicModal.fromTemplateUrl('templates/newGame.html', {
    animation: 'slide-in-up',
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  $scope.findGame = function () {
    $scope.modal.show();
  }
    
  $scope.callGame1 = function(){
		window.open('gaeaionictestgame1://', '_system');
	};
    
  $scope.addGame = function (newGame) {
    $scope.gameName = newGame;
    $scope.level = [];
    console.log($scope.gameName);
    $scope.games.push({id:$scope.games.length,name:$scope.gameName,'level':$scope.level});
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
        $scope.modal.remove();
  });
})

.controller('GameLevelCtrl', function($scope,$stateParams,Games) {
   $scope.game = Games.get($stateParams.gameId);
})

.controller('FriendsCtrl', function($scope,$ionicSideMenuDelegate,Friends, $location, $rootScope, $stateParams) {
    $scope.friends = Friends.all('freedom');
    //$scope.friends = Friends.get($stateParams.userId);

    $scope.findFriends = function(){
      $location.path('/tab/findFriends');
    };
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Users, Videos) {
  //$scope.friend = Friends.get($stateParams.friendId);
  $scope.videos = Videos.all();
  $scope.userId = $stateParams.friendId;
  $scope.friend = Users.getById($scope.userId);
  $scope.callGame1Chapter2 = function(){
		window.open('gaeaionictestgame1://?chapter=2', '_system');
	};
})

.controller('MyCtrl',function($scope, $ionicNavBarDelegate) { 
    $scope.getPreviousTitle  = function() {
        return $ionicNavBarDelegate.getPreviousTitle();
    };   
})
.controller('StageDetailCtrl',function($scope) {   
})

.controller('RankVideoCtrl', function($scope,$stateParams,Games) { 
    $scope.rank =[1,2,3,4,5,6,7,8,9,10  ];   
    $scope.game = Games.get($stateParams.gameId);
    $scope.gameLevel = $stateParams.level;
    $scope.callGame1Chapter2 = function(){
		window.open('gaeaionictestgame1://?chapter=2', '_system');
	};
})

.controller('TopicCtrl', function($scope,$stateParams,Games) { 
    $scope.topics =[1,2,3,4,5,6,7,8,9,10  ];   
    console.log("game:"+$stateParams.gameId);
    $scope.game = Games.get($stateParams.gameId);
    $scope.gameLevel = $stateParams.level;
    $scope.callGame1Chapter2 = function(){
    window.open('gaeaionictestgame1://?chapter=2', '_system');
  };
})

.controller('MyVideoCtrl', function($scope,$ionicModal,Videos) {
    $scope.videos = Videos.all();
    
    $ionicModal.fromTemplateUrl('templates/modal.html', {
    animation: 'slide-in-up',
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function () {
    $scope.modal.show();
  }

  $scope.form = {};

  $scope.addVideo = function (userId) {
    console.log($scope.form.name);
    console.log(userId);
    Videos.new(userId,$scope.form.name);
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
        $scope.modal.remove();
  });
})

.controller('HotVideoCtrl', function($scope) {
    $scope.hot =[1,2,3,4,5,6,7,8,9,10];   
    $scope.callGame1Chapter2 = function(){
		window.open('gaeaionictestgame1://?chapter=2', '_system');
	};
})

.controller('MenuCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
});