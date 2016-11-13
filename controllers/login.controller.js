'use strict'
let loginController = function($scope,$http){
	let baseurl = 'http://localhost/'
	let loginInfo = {
		"email" : $scope.email,
		"password" : $scope.password
	}
}

app.controller('loginController', loginController);