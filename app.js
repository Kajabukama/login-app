'use strict'
var app = angular.module('loginapp', ['ngRoute']);

app.config($routeProvider){

	$routeProvider
	.when('/',{
		templateUrl: 'templates/tmp.welcome.html'
	})
}