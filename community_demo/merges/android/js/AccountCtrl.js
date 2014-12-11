angular.module('starter.AccountCtrl', ['restangular'])


.controller('AccountCtrl', function($scope,$q,$state,$rootScope,Restangular) {
    /*
    $scope.games = [
        {
            name:'保卫萝卜2',
            gameId:'5475797910fa1a2d032173e8',
            androidPackageName:'com.carrot.iceworld',
            downloadUrl:'http://shouji.baidu.com/game/item?docid=7114889&from=as&f=search_app_保卫萝卜2%40listsp_1_title%401%40header_game_input',
            installed:'checking'
        },
        {
            name:'节奏大师',
            gameId:'547578d810fa1a2d032173e4',
            androidPackageName:'com.tencent.game.rhythmmaster',
            downloadUrl:'http://shouji.baidu.com/game/item?docid=7151854&from=as&f=search_app_节奏大师%40listsp_1_title%401%40header_game_input',
            installed:'checking'
        },
        {
            name:'坑爹游戏2',
            gameId:'547579c110fa1a2d032173ea',
            androidPackageName:'com.ipeaksoft.pitDadGame2',
            downloadUrl:'http://shouji.baidu.com/game/item?docid=6125151&from=as&f=search_app_坑爹游戏2%40listsp_1_title%401%40header_game_input',
            installed:'checking'
        },
        {
            name:'天天爱消除',
            gameId:'5475790e10fa1a2d032173e5',
            androidPackageName:'com.tencent.peng',
            downloadUrl:'http://shouji.baidu.com/game/item?docid=7214515&from=as&f=search_app_天天爱消除%40listsp_1_title%401%40header_app_input',
            installed:'checking'
        },
        {
            name:'刀塔传奇',
            gameId:'547579a110fa1a2d032173e9',
            androidPackageName:'sh.lilith.dgame.DK',
            downloadUrl:'http://shouji.baidu.com/game/item?docid=7265483&from=as&f=search_app_刀塔传奇%40listsp_1_title%401%40header_game_input',
            installed:'checking'
        }
    ];
*/

Restangular.allUrl('Games',$rootScope.game + '?_last').getList().then(function(games){
      $scope.games  = games;  

    //异步检测应用是否存在函数
    function asyncCheck(game){
        var deferred = $q.defer();
        appAvailability.check(
            game.androidName, // URI Scheme
            function() {  // Success callback
                deferred.resolve("Yes");
            },
            function() {  // Error callback
                deferred.resolve("No");
            }
        );
        return deferred.promise;
    }

    //加入到promises数组
    var promises=[];
    for(var key=0;key<$scope.games.length;key++){
        promises.push(asyncCheck($scope.games[key]));
    }
    
    //同步检测应用是否存在
    $q.all(promises).then(function(infos){
        for(var key=0;key<infos.length;key++){
            $scope.games[key].installed = (infos[key]);
        }
    });
        
    //点击应用列表事件处理
    $scope.checkInstalled = function(key){
        if($scope.games[key].installed === "Yes"){
            $state.go('tab.game-level',{gameId:$scope.games[key]['_id'],gameName:$scope.games[key]['name'],gameTag:encodeURIComponent($scope.games[key]['tags'])});
            // window.OpenApplication($scope.games[key].androidPackageName);
        }
        else{
            window.open($scope.games[key].androidUrl, '_system');
        }
    }
     });
});
