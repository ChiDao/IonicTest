angular.module('starter.services', ['ngResource'])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
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

.factory('Messages', function($resource) {
	var Messages = $resource('http://192.168.1.108:9000/api/messages/:messageId', {messageId:'@id'});
	var messages;
	Messages.query({})
		.$promise.then(function(getMessages){
			messages = getMessages;
		});
	
	return {
		all: function(){
			return messages;
		},
		refresh: function(){
			messages = Messages.query({});
		},
		get: function(messageId){
			//无法使用lodash
			for (var index in messages){
				if (messages[index]._id = messageId){
					return messages[index];
				}
			}
		},
		new: function(){
			Messages.save({"title": new Date(),"message":"new Message as " + new Date()})
				.$promise.then(function(newMessage){
					messages.push(newMessage);
				});
		},
		delete: function(messageId){
			Messages.delete({messageId:messageId})
				.$promise.then(function(){
					//无法使用lodash
					for (var index in messages){
						if (messages[index]._id == messageId){
							messages.splice(index, 1);
						}
					}
				});
		}
	};
})
;
;
