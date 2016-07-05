angular.module('MyApp').config(['$routeProvider','$locationProvider',
	function($routeProvider,$locationProvider){
		$routeProvider
		.when('/TournamentInfo/:id',{
			templateUrl: '../templates/TournamentInfo.html',
			controller:	'TournamentInfo'	
		})
		.when('/TournamentInfo/groups/424',{
			templateUrl: '../templates/EUROGroups.html',
			controller: 'EuroGroups'
		})
		.when('/TournamentInfo/groups/405',{
			templateUrl: '../templates/EUROGroups.html',
			controller: 'EuroGroups'
		})
		.when('/TournamentInfo/groups/:id',{
			templateUrl: '../templates/EPFLGroups.html',
			controller: 'EPFLGroups'
		})
		.when('/TournamentInfo/teams/:id',{
			template : '<teams-information> </teams-information>',
			 controller : ''
		}).when('/TournamentInfo/fixtures/:id',{
			templateUrl: '../templates/fixtures.html',
			controller: 'bridgeFixtures'
		}).when('/TournamentInfo/fixturesTeam/:id',{
			templateUrl: '../templates/fixturesTeam.html',
			controller: 'ShowFixtures'
		}).when('/TournamentInfo/TeamsInfo/:id',{
			template:'<section class=\'teamsData\'><header class=\'tittleTeams\'><h2 class=\'teamsSUB\'>Teams Selector</h2></header><team-selector></team-selector><team-info></team-info></section>'
		}).otherwise({
			template:'<div class="initalContent"><span class="mainImage" ><img class="zlatanImage" src="..\/images\/otherImages\/zlatan.jpg" /></span></div>'
		});
		$locationProvider.html5Mode(true);
}]);

// get the URL api of current tournament request
function getApiURL(data, route){
	console.log(data);
	console.log(route);
	for(let i=0; i<data.length;i++){
		if(data[i].id.toLowerCase().indexOf(route.toLowerCase()) >-1){
			return data[i];
		}
	}
}
function getUrl(route,option){
	var i;
	console.log(route);
	console.log(option);
	switch(option){
		case 'team':
			i= 'http://api.football-data.org/v1/teams/';
		break;
		case 'tournament':
			console.log('entro a esta parte');
			i= 'http://api.football-data.org/v1/soccerseasons/';
		break;
	}
	return i+route;
}
