angular.module('starter.services.Friends', [])

.factory('Friends', function($resource) {
	var friends = {
		freedom:[
			{
				name: 'zakk',
				phone: '123'
			}	
		],
		zakk:[
			{
				name: 'freedom',
				phone: '789'
			}	
		],
		qian:[
			{				
				name: 'zakk',
				phone: '123'
			}	
		]
	};

	var contactList = {
			freedom:{
				phone:[
					{
						id:0,
						name: 'zyt',
						phone: '123',
						userName: 'zakk'
					},
					{
						id:1,
						name: 'mq',
						phone: '456',
						userName: 'qian'
					}
				]
			},
			zakk:{
				phone:[
					{
						id:0,
						name: 'hfr',
						phone: '789',
						userName: 'freedom'
					},
					{
						id:1,
						name: 'mq',
						phone: '456',
						userName: 'qian'
					}
				]
			},
			qian:{
				phone:[
					{
						id:0,
						name: 'hfr',
						phone: '789',
						userName: 'freedom'
					},
					{
						id:1,
						name: 'zyt',
						phone: '123',
						userName: 'zakk'
					}
				]
			}
		}
	;

	return {
		all: function(user){
			///users/:freedom/friends
			return friends[user];
		},
		// refresh: function(){
		// 	friends = Friends.query({});
		// },
		// get: function(myID){
		// 	myfriends = Friends.query({'userId':myID});
		// 	return myfriends;
		// },
		// new: function(friendName){
		// 	Friends.save({"name": friendName})
		// 		.$promise.then(function(newFriend){
		// 			friends.push(newFriend);
		// 		});
		// },
		// delete: function(friendId){
		// 	Friends.delete({friendId:friendId})
		// 		.$promise.then(function(){
		// 			for (var index in friends){
		// 				if (friends[index]._id == friendId){
		// 					friends.splice(index, 1);
		// 				}
		// 			}
		// 		});
		// },
		
		getContactList: function(user, type){
			//Todo: 检测手机有绑定才显示/users?phoneList=[]
			for (var key in contactList[user][type]){
				for (var friendsKey in friends[user]){
					if (contactList[user][type][key].phone === friends[user][friendsKey].phone){
						console.log(contactList[user][type][key].phone + friends[user][friendsKey].phone);
						contactList[user][type][key].added = true;
					}
				}
				
			}
			return contactList[user][type];
		},
		addFromContactList: function(user, type, id){
			for (var key in contactList[user][type]){
				if (contactList[user][type][key].id == id){
					//POST /users/:freedom/friends
					friends[user].push({_id:1, name: contactList[user][type][key].userName, phone: contactList[user][type][key].phone});
					console.log(JSON.stringify(friends[user]));
					contactList[user][type][key].added = true;
				}
			}
		}
	};
})

;