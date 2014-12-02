angular.module('starter.AccountCtrl', [])

.controller('AccountCtrl', function($scope,$q) {
    $scope.games = [
        {
            name:'保卫萝卜2',
            androidPackageName:'com.carrot.iceworld',
            downloadUrl:'http://shouji.baidu.com/game/item?docid=7114889&from=as&f=search_app_保卫萝卜2%40listsp_1_title%401%40header_game_input',
            installed:'checking'
        },
        {
            name:'节奏大师',
            androidPackageName:'com.tencent.game.rhythmmaster',
            downloadUrl:'http://shouji.baidu.com/game/item?docid=7151854&from=as&f=search_app_节奏大师%40listsp_1_title%401%40header_game_input',
            installed:'checking'
        },
        {
            name:'坑爹游戏2',
            androidPackageName:'com.ipeaksoft.pitDadGame2',
            downloadUrl:'http://shouji.baidu.com/game/item?docid=6125151&from=as&f=search_app_坑爹游戏2%40listsp_1_title%401%40header_game_input',
            installed:'checking'
        },
        {
            name:'天天爱消除',
            androidPackageName:'com.tencent.peng',
            downloadUrl:'http://shouji.baidu.com/game/item?docid=7214515&from=as&f=search_app_天天爱消除%40listsp_1_title%401%40header_app_input',
            installed:'checking'
        },
        {
            name:'刀塔传奇',
            androidPackageName:'sh.lilith.dgame.DK',
            downloadUrl:'http://shouji.baidu.com/game/item?docid=7265483&from=as&f=search_app_刀塔传奇%40listsp_1_title%401%40header_game_input',
            installed:'checking'
        }
    ];

    //异步检测应用是否存在函数
    function asyncCheck(game){
        var deferred = $q.defer();
        appAvailability.check(
            game.androidPackageName, // URI Scheme
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
            window.OpenApplication($scope.games[key].androidPackageName);
        }
        else{
            window.open($scope.games[key].downloadUrl, '_system');
        }
    }
});