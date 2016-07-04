angular.module('raspiApp').controller('lightsController', ['$scope', '$window', function($scope, $window){
	$scope.lights = $window.lights;
}]);