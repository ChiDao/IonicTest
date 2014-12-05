angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	$scope.getPicture = function(){
		navigator.camera.getPicture(onSuccess, onFail, { 
			quality: 50, 
			destinationType: Camera.DestinationType.FILE_URI,
			sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM	
		}); 

		function onSuccess(imageURI) {
			var image = document.getElementById('myImage');
			image.src = imageURI;
			$scope.imageURI = imageURI;
		}

		function onFail(message) {
			alert('Failed because: ' + message);
		}
	},
	$scope.uploadPicture = function(){
		var win = function (r) {
		    console.log("Code = " + r.responseCode);
		    console.log("Response = " + r.response);
		    console.log("Sent = " + r.bytesSent);
		    var returnJson = JSON.parse(r.response);
		    var uploadImage = document.getElementById('uploadImage');
		    uploadImage.src = returnJson['294'];
		};

		var fail = function (error) {
		    alert("An error has occurred: Code = " + JSON.stringify(error));
		    console.log("upload error source " + error.source);
		    console.log("upload error target " + error.target);
		};

		var options = new FileUploadOptions();
		options.fileKey = "file";
		options.fileName = $scope.imageURI.substr($scope.imageURI.lastIndexOf('/') + 1);
		console.log("fileName:" + $scope.imageURI.substr($scope.imageURI.lastIndexOf('/') + 1));
		options.mimeType = "image/jpeg";
		//options.Authorization = "Basic emFra3poYW5nejgyMTE1MzY0"

		var ft = new FileTransfer();
		ft.upload($scope.imageURI, encodeURI("http://42.120.45.236:8485/upload"), win, fail, options);
	}
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
