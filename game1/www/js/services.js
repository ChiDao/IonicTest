angular.module('starter.services', [])

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
.factory('Chapters', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chapters = [
    { id: 0, name: 'chapter a' },
    { id: 1, name: 'chapter b' },
    { id: 2, name: 'chapter c' },
    { id: 3, name: 'chapter d' }
  ];

  return {
    all: function() {
      return chapters;
    },
    get: function(chapterId) {
      // Simple index lookup
      return chapters[chapterId];
    }
  }
});



