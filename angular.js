angular.module('routeApp', ['ngRoute'])
.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider){
		$routeProvider
			.when('/',{
				templateUrl: '/views/login.html'
			})
			.when('/home',{
				templateUrl: '/views/home.html'
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
}])
.controller('navController', ['$scope', '$location', '$route', function($scope, $location, $route){
	$scope.paths = [
		{'name':'home', 'class':''},
		{'name':'about', 'class':''},
		{'name':'lights', 'class':''},
		{'name':'music', 'class':''},
		{'name':'ssh', 'class':''},
		{'name':'chrome', 'class':''}
	];
	$scope.$on('$routeChangeSuccess', function(){
    	if($location.url() == "/"){
    		$scope.show = 0;
    	}
    	else{
    		$scope.show = 1;
    		for(var x = 0; x < $scope.paths.length; x++){
    			if($location.url().substring(1) == $scope.paths[x].name){
    				$scope.paths[x].class = "active";
    			}
    			else{
    				$scope.paths[x].class = "";
    			}
    		}
    	}
 	});
}]);


