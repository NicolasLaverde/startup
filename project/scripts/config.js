//let module= angular.module('MyApp',['ngRoute']);
angular.module('MyApp').config(['$routeProvider','$locationProvider',
	function($routeProvider,$locationProvider){
		console.log($routeProvider);
		$routeProvider
		.when('/TournamentInfo/:id',{
			templateUrl: '../templates/TournamentData.html',
			controller:	'TournamentData'	
		})
		.when('/TournamentInfo/groups/:id',{
			templateUrl: '../templates/EuroGroups.html',
			controller: 'EuroGroups'
		});
		$locationProvider.html5Mode(true);
}])
