angular.module('starter.controllers', [])

.controller('GamesCtrl', function($scope,$ionicModal,Games) {
    $scope.games = Games.all();
    $scope.NewGames = Games.other();
    
    $ionicModal.fromTemplateUrl('templates/newGame.html', {
    animation: 'slide-in-up',
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  $scope.findGame = function () {
    $scope.modal.show();
  }

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

.controller('FriendsCtrl', function($scope,$ionicSideMenuDelegate,Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('MyCtrl',function($scope, $ionicNavBarDelegate) {    
})

.controller('RankVideoCtrl', function($scope,$stateParams,Games) { 
    $scope.rank =[1,2,3,4,5,6,7,8,9,10  ];   
    $scope.game = Games.get($stateParams.gameId);
    $scope.gameLevel = $stateParams.level;
})

.controller('MyVideoCtrl', function($scope,$ionicModal) {
    $scope.videos = [
        {name:'刀塔传奇第1关'},
        {name:'刀塔传奇第2关'},
        {name:'刀塔传奇第3关'},
        {name:'刀塔传奇第4关'},
            ] 
    
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

  $scope.addVideo = function () {
    console.log($scope.form.name);
    $scope.videos.push({name: $scope.form.name});
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
        $scope.modal.remove();
  });
})

.controller('HotVideoCtrl', function($scope) {
    $scope.hot =[1,2,3,4,5,6,7,8,9,10];   
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