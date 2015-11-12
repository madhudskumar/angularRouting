var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/',{
			templateUrl: '/about.html'
		})
		.when('/page1',{
			templateUrl: '/page1.html'
		})
		.when('/page2',{
			templateUrl: '/page2.html'
		})
});