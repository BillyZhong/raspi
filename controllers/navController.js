angular.module('raspiApp').controller('navController', ['$scope', '$location', '$route', function($scope, $location, $route){
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