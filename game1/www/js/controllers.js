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
});

// .controller('AccountCtrl', function($scope,$q) {
//     $scope.games = [
//         {
//             name:'保卫萝卜2',
//             iosUrl:'wb2217954495://',
//             appStoreUrl:'https://itunes.apple.com/tw/app/bao-wei-luo-bo/id534453594?l=zh&mt=8',
//             androidPackageName:'com.carrot.carrotfantasy',
//             installed:'checking'
//         },
//         {
//             name:'节奏大师',
//             iosUrl:'tencentrm://',
//             appStoreUrl:'https://itunes.apple.com/cn/app/jie-zou-da-shi/id493901993?mt=8',
//             androidPackageName:'com.tencent.game.rhythmmaster',
//             installed:'checking'
//         },
//         {
//             name:'坑爹游戏2',
//             iosUrl:'tencent100424468://',
//             appStoreUrl:'https://itunes.apple.com/mo/app/shi-shang-zui-keng-die-de-you-xi/id735918392?l=zh&mt=8',
//             androidPackageName:'com.ipeaksoft.pitDadGame2',
//             installed:'checking'
//         },
//         {
//             name:'天天爱消除',
//             iosUrl:'tencent100689805://',
//             appStoreUrl:'https://itunes.apple.com/hk/app/tian-tian-ai-xiao-chu/id654897098?l=zh&mt=8',
//             androidPackageName:'com.tencent.peng',
//             installed:'checking'
//         },
//         {
//             name:'刀塔传奇',
//             iosUrl:'wb1121741102://',
//             appStoreUrl:'https://itunes.apple.com/tw/app/dao-ta-chuan-qi/id893518867?l=zh&mt=8',
//             androidPackageName:'sh.lilith.dgame.s360',
//             installed:'checking'
//         }
//     ];

//     //异步检测应用是否存在函数
//     function asyncCheck(game){
//         var deferred = $q.defer();
//         appAvailability.check(
//             game.iosUrl, // URI Scheme
//             function() {  // Success callback
//                 deferred.resolve("Yes");
//             },
//             function() {  // Error callback
//                 deferred.resolve("No");
//             }
//         );
//         return deferred.promise;
//     }

//     //加入到promises数组
//     var promises=[];
//     for(var key=0;key<$scope.games.length;key++){
//         promises.push(asyncCheck($scope.games[key]));
//     }
    
//     //同步检测应用是否存在
//     $q.all(promises).then(function(infos){
//         for(var key=0;key<infos.length;key++){
//             $scope.games[key].installed = (infos[key]);
//         }
//     });
        
//     //点击应用列表事件处理
//     $scope.checkInstalled = function(key){
//         if($scope.games[key].installed === "Yes"){
//             window.open($scope.games[key].iosUrl, '_system');
//         }
//         else{
//             window.open($scope.games[key].appStoreUrl, '_system');
//         }
//     }
// });
