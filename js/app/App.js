const app = angular.module('App', ['ui.router', 'ngMaterial']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html'
        })
})