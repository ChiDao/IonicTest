// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.AccountCtrl','starter.services','starter.filter','restangular'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://42.120.45.236:8485');

    // add a response intereceptor
    RestangularProvider.addResponseInterceptor(function(data, operation) {
      var extractedData;
      var json = JSON.stringify(data);
      console.log("json1:"+json);
      // .. to look for getList operations
      if (operation === "getList") {
        // .. and handle the data and meta 
       extractedData = data.slice;
       var json = JSON.stringify(data.slice);
       console.log("json2:"+json);
 //       extractedData.meta = data.data.meta;
      } else {
        var json = JSON.stringify(data);
       console.log("json3:"+json);
        extractedData = data;
      }
      return extractedData;
    });

})

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.style("standard").position("bottom");
  
  $ionicConfigProvider.views.transition("ios");
  
  $ionicConfigProvider.navBar.alignTitle("center").positionPrimaryButtons('left').positionSecondaryButtons('right');
  
  $ionicConfigProvider.backButton.previousTitleText('true');
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.games', {
      url: '/games',
      views: {
        'tab-games': {
          templateUrl: 'templates/tab-games.html',
          controller: 'AccountCtrl'
        }
      }
    })
    .state('tab.game-level', {
      url: '/game/:gameId/:gameName/:gameTag',
      views: {
        'tab-games': {
          templateUrl: 'templates/game-level.html',
          controller: 'GameLevelCtrl'
        }
      }
    })
    .state('tab.stage-detail', {
      url: '/game/:gameName/:stage',
      views: {
        'tab-games': {
          templateUrl: 'templates/stage-detail.html',
          controller: 'StageDetailCtrl'
        }
      }
    })
    .state('tab.topic', {
      url: '/game/stage/topics/:gameName/:posts',
      views: {
        'tab-games': {
          templateUrl: 'templates/topic.html',
          controller: 'TopicCtrl'
        }
      }
    })
    .state('tab.friends', {
      url: '/:userId/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

//    .state('friend-detail', {
//      url: '/friend/:friendId',
//      templateUrl: 'templates/friend-detail.html',
//      controller: 'FriendDetailCtrl'
//    })

    .state('tab.myVideo', {
      url: '/myVideo',
      views: {
        'tab-myVideo': {
          templateUrl: 'templates/tab-myVideo.html',
          controller: 'MyVideoCtrl'
        }
      }
    })
    
    .state('tab.hotVideo', {
      url: '/hotVideo',
      views: {
        'tab-hotVideo': {
          templateUrl: 'templates/tab-hotVideo.html',
          controller: 'HotVideoCtrl'
        }
      }
    })

    .state('tab.findFriends', {
      url: '/findFriends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/find-friends.html',
          controller: 'FindFriendsCtrl'
        }
      }
    })
    
    .state('login', {
      url: "/login",
      templateUrl: "templates/login.html"
    })
;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

})

.controller("MainController", ['$rootScope', '$location', '$scope', '$ionicModal', 'Videos', 'Users','$state','Restangular',function($rootScope, $location, $scope,$ionicModal,Videos,Users,$state,Restangular) {
    $scope.login = function(tel,name){
      console.log("login"+name +tel);
  //    $scope.user = Users.get(username);
 //     if($scope.user._id != ''){
         var Login = Restangular.all('login');
          Login.post({tel:tel,name:name}).then(function(user){
             var user = user; 
             $rootScope.game = user.discover;
             Restangular.oneUrl('me',user.me).get().then(function(userInfo){
                $rootScope.me = userInfo;
                
                $state.go("tab.games");
             })
         //    var json = JSON.stringify(user);            
        });         
          
 //     }
    }   


     $scope.jumpToChapter = function(url) {
    	var parsedUrl = purl(url);
    	var Page = parsedUrl.attr('file');
    	console.log("Page:" + Page);
    	var gameId = parsedUrl.param('gameId');
    	var level = parsedUrl.param('level');    	
    	console.log("JumpToShare:" + gameId);
    	if(Page=="shareVideo.html"){
    	    $location.path('/tab/myVideo');
    	    $scope.videos = Videos.all();
    	    $ionicModal.fromTemplateUrl('templates/modal.html', {
                animation: 'slide-in-up',
                scope: $scope
              }).then(function (modal) {
                $scope.modal = modal;
                $scope.modal.show(); 
              });           
            $scope.form = {};
            $scope.addVideo = function () {
                console.log($scope.form.name);
                $scope.videos.push({name: $scope.form.name});
                $scope.modal.hide();
            };     	  
            $scope.$on('$destroy', function() {
                $scope.modal.remove();
            });  
    	}else if(Page == "viewVideo.html"){
    	    if (!isNaN(gameId) && !isNaN(level)){
        	    $location.path('/tab/game/' + gameId +'/' + level);        	    
            }
            else{
        	    $location.path('/tab/games');
            }
        }
        $rootScope.$apply();
    }

}])

function handleOpenURL(url) {
    var body = document.getElementsByTagName("body")[0];
    var mainController = angular.element(body).scope();
    mainController.jumpToChapter(url);
};
