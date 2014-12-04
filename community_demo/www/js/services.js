angular.module('starter.services', ['ngResource'])

/**
 * A simple example service that returns some data.
 */

.factory('Users', function($resource) {
	var Users = $resource('http://192.168.1.235:9000/api/users/:userId', {userId:'@id'});
	var users; 
	Users.query({})
		.$promise.then(function(getUsers){
			users = getUsers;
		}); 
	    
	return {
		all: function(){ 
			return users;
		},
		refresh: function(){
			users = Users.query({}); 
		},
		get: function(userName){
			for (var index in users){
				if (users[index].name == userName){
					return users[index];
				} 
			}
		},
		getById: function(userId){
			for (var index in users){
				console.log("BBB" + userId);
				if (users[index]._id == userId){
						console.log(users[index].name);
					return users[index];
				} 
			}
		},
		delete: function(userId){
			Users.delete({userId:userId})
				.$promise.then(function(){
					for (var index in users){
						if (users[index]._id == userId){
							users.splice(index, 1);
						}
					}
				});
		}
	};
})

.factory('Games', function($resource) {
	var Games = $resource('http://192.168.1.235:9000/api/games/:gameId', {gameId:'@id'});
	var games;
	Games.query({})
		.$promise.then(function(getGames){
			games = getGames;
		});	
	
	return {
		all: function(){	
	//		games = Games.query({});	
      		return games;
    	},
		refresh: function(){
			games = Games.query({});
		},
		get: function(gid){	
			games = Games.get({gameId:gid});	
			return games;
		},
		new: function(gameName){
			Games.save({"name": gameName})
				.$promise.then(function(newGame){
					games.push(newGame);
				});
		},
		delete: function(gameId){
			Games.delete({gameId:gameId})
				.$promise.then(function(){
					for (var index in games){
						if (games[index]._id == gameId){
							games.splice(index, 1);
						}
					}
				});
		}
	};
})
.factory('Stages', function($resource) {
	var Stages = $resource('http://192.168.1.235:9000/api/stages/:stageId', {stageId:'@id'});
	var stages;
	Stages.query({})
		.$promise.then(function(getStages){
			stages = getStages;
		});
	
	return {
		all: function(){
			return stages;
		},
		refresh: function(){
			stages = Stages.query({});
		},
		get: function(stageId){
			for (var index in stages){
				if (stages[index]._id = stageId){
					return stages[index];
				}
			}
		},
		new: function(stageName){
			Stages.save({"name": stageName})
				.$promise.then(function(newStage){
					stages.push(newStage);
				});
		},
		delete: function(stageId){
			Stages.delete({stageId:stageId})
				.$promise.then(function(){
					for (var index in stages){
						if (stages[index]._id == stageId){
							stages.splice(index, 1);
						}
					}
				});
		}
	};
})

.factory('Friends', function($resource) {
	var Friends = $resource('http://192.168.1.235:9000/api/friends/:userId', {userId:'@userId'});
	var myfriends = [];
	var friends ;
	Friends.query({}).$promise.then(function(getFriends){
			friends = getFriends;
		});

	return {
		all: function(){
			return friends;
		},
		refresh: function(){
			friends = Friends.query({});
		},
		get: function(myID){
			myfriends = Friends.query({'userId':myID});
			return myfriends;
		},
		new: function(friendName){
			Friends.save({"name": friendName})
				.$promise.then(function(newFriend){
					friends.push(newFriend);
				});
		},
		delete: function(friendId){
			Friends.delete({friendId:friendId})
				.$promise.then(function(){
					for (var index in friends){
						if (friends[index]._id == friendId){
							friends.splice(index, 1);
						}
					}
				});
		}
	};
})

/*
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
*/


.factory('Videos', function($resource) {
	var Videos = $resource('http://192.168.1.235:9000/api/videos/:videoId', {videoId:'@id'});
	var videos;
	Videos.query({})
		.$promise.then(function(getVideos){
			videos = getVideos;
		});
	
	return {
		all: function(){
			return videos;
		},
		refresh: function(){
			videos = Videos.query({});
		},
		get: function(videoId){
			for (var index in videos){
				if (videos[index]._id == videoId){
					return videos[index];
				}
			}
		},
		new: function(uId,videoName){
			Videos.save({userId:uId ,name:videoName})
				.$promise.then(function(newVideo){
					videos.push(newVideo);
				});
		},
		delete: function(videoId){
			Videos.delete({videoId:videoId})
				.$promise.then(function(){
					for (var index in videos){
						if (videos[index]._id == videoId){
							videos.splice(index, 1);
						}
					}
				});
		}
	};
})
;
