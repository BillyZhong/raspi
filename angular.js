angular.module('raspiApp', ['ngRoute'])
.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider){
		$routeProvider
			.when('/',{
				templateUrl: '/views/login.html'
			})
			.when('/home',{
				templateUrl: '/views/home.html',
				controller : 'homeController'
			})
			.when('/about',{
				templateUrl: '/views/about.html'
			})
			.when('/lights',{
				templateUrl: '/views/lights.html'
			})
			.when('/music',{
				templateUrl: '/views/music.html'
			})
			.when('/ssh',{
				templateUrl: '/views/ssh.html'
			})
			.when('/chrome',{
				templateUrl: '/views/chrome.html'
			})
			.otherwise({
				redirectTo: '/'
			})
	$locationProvider.html5Mode(true);
}]);


