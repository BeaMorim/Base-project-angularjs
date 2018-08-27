app.controller('appController', ['$scope', 'AppFactory', function($scope, AppFactory) {

	$scope.getData = function() {
		AppFactory.getData();
	}
}])