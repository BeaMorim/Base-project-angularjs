app.factory('AppFactory', ['$http', function($http) {

	_getData = function() {
		$http({
			method: 'GET',
			url: '/someUrl'
		})
		.then(response => {})
		.catch(err => {});
	}

	return {
		getData: _getData
	}
}])