angular.module('starter.AccountCtrl', [])

.controller('AccountCtrl', function($scope,$q,$state) {
    $scope.games = [
        {
            name:'保卫萝卜2',
            gameId:'5475797910fa1a2d032173e8',
            iosUrl:'wb2217954495://',
            downloadUrl:'https://itunes.apple.com/tw/app/bao-wei-luo-bo/id534453594?l=zh&mt=8',
            installed:'checking'
        },
        {
            name:'节奏大师',
            gameId:'547578d810fa1a2d032173e4',
            iosUrl:'tencentrm://',
            downloadUrl:'https://itunes.apple.com/cn/app/jie-zou-da-shi/id493901993?mt=8',
            installed:'checking'
        },
        {
            name:'坑爹游戏2',
            gameId:'547579c110fa1a2d032173ea',
            iosUrl:'tencent100424468://',
            downloadUrl:'https://itunes.apple.com/mo/app/shi-shang-zui-keng-die-de-you-xi/id735918392?l=zh&mt=8',
            installed:'checking'
        },
        {
            name:'天天爱消除',
            gameId:'5475790e10fa1a2d032173e5',
            iosUrl:'tencent100689805://',
            downloadUrl:'https://itunes.apple.com/hk/app/tian-tian-ai-xiao-chu/id654897098?l=zh&mt=8',
            installed:'checking'
        },
        {
            name:'刀塔传奇',
            gameId:'547579a110fa1a2d032173e9',
            iosUrl:'wb1121741102://',
            downloadUrl:'https://itunes.apple.com/tw/app/dao-ta-chuan-qi/id893518867?l=zh&mt=8',
            installed:'checking'
        }
    ];

    //异步检测应用是否存在函数
    function asyncCheck(game){
        var deferred = $q.defer();
        appAvailability.check(
            game.iosUrl, // URI Scheme
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
            $state.go('tab.game-level',{gameId:$scope.games[key].gameId});
           // window.open($scope.games[key].iosUrl, '_system');
        }
        else{
            window.open($scope.games[key].downloadUrl, '_system');
        }
    }
});