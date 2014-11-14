angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff','video':['刀塔传奇第3关video','刀塔传奇第8关video','全民奇迹第4关video'] },
    { id: 1, name: 'G.I. Joe','video':['天龙八部3D第3关video','天龙八部3D第8关video','全民奇迹第4关video','天龙八部3D第9关video'] },
    { id: 2, name: 'Miss Frizzle','video':['去吧皮卡丘第3关video','去吧皮卡丘第8关video','去吧皮卡丘第4关video','去吧皮卡丘第11关video'] },
    { id: 3, name: 'Ash Ketchum','video':['节奏大师第3关video','节奏大师第8关video','天天爱消除第4关video','天天爱消除第12关video','天天爱消除第23关video','天天爱消除第33关video'] }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})
.factory('Games', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var games = [
    {id: 0, name: '刀塔传奇' , 'level': [1,2,3,4,5,6,7,8,9,10,11,12,13,14]},
    {id: 1, name: '全民奇迹' , 'level':[1,2,3]},
    {id: 2, name: '天龙八部3D' ,'level':[1,2,3,4,5]},
    {id: 3, name: '去吧皮卡丘' ,'level':[1,2,3,4]}
  ];
  
   var newGames = [
    {id: 0, name: '我是死神' },
    {id: 1, name: '天天飞车' },
    {id: 2, name: '节奏大师' },
    {id: 3, name: '天天爱消除' },
  ];

  return {
    all: function() {
      return games;
    },
    get:function(gameId) {
      return games[gameId];
    },
    other: function() {
      return newGames;
    }
  }
})
;
