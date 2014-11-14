angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff','video':['���������3��video','���������8��video','ȫ���漣��4��video'] },
    { id: 1, name: 'G.I. Joe','video':['�����˲�3D��3��video','�����˲�3D��8��video','ȫ���漣��4��video','�����˲�3D��9��video'] },
    { id: 2, name: 'Miss Frizzle','video':['ȥ��Ƥ�����3��video','ȥ��Ƥ�����8��video','ȥ��Ƥ�����4��video','ȥ��Ƥ�����11��video'] },
    { id: 3, name: 'Ash Ketchum','video':['�����ʦ��3��video','�����ʦ��8��video','���찮������4��video','���찮������12��video','���찮������23��video','���찮������33��video'] }
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
    {id: 0, name: '��������' , 'level': [1,2,3,4,5,6,7,8,9,10,11,12,13,14]},
    {id: 1, name: 'ȫ���漣' , 'level':[1,2,3]},
    {id: 2, name: '�����˲�3D' ,'level':[1,2,3,4,5]},
    {id: 3, name: 'ȥ��Ƥ����' ,'level':[1,2,3,4]}
  ];
  
   var newGames = [
    {id: 0, name: '��������' },
    {id: 1, name: '����ɳ�' },
    {id: 2, name: '�����ʦ' },
    {id: 3, name: '���찮����' },
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
