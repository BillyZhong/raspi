angular.module('raspiApp').controller('homeController', ['$scope','$window', function($scope, $window){
	$scope.user = $window.user;
}]);