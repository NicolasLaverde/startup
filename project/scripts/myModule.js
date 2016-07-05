let module= angular.module('MyApp',['ngRoute','TournamentGroups','TeamsInfo','Fixtures']);
module.factory('GetDataBase',['$http','$q', function($http,$q){
	let factory={};
	let params;
	factory.get= function(op,url){
		let deferred= $q.defer();
		switch(op){
		case 1:
			params = {"method": "GET","url":url};
			break;
		case 2:
			params = {
				"method": "GET","url":url,
				"headers":{
					"X-Auth-Token":"68dc9ab0ba374ad1a571cd8e07b5c647"
				}
			}
			break;
			default : break;
		}
			$http(params).success(function(d){
				deferred.resolve(d);
			});
		return deferred.promise;
		}
	return factory;
}]);

module.controller('MyController',['$scope','GetDataBase',function($scope,MyFactory){
	/*if(typeof localStorage.getItem('name') === 'undefined'){$scope.name='';}
	else{$scope.name=localStorage.getItem('name');}	
	$scope.save= function save(){MyFactory.data.people.push({'User': $scope.user, 'Password': $scope.password});localStorage.setItem('data',JSON.stringify(MyFactory.data));
	}*/

}]);

module.controller('TournamentInfo', ['$scope','GetDataBase','$routeParams',function($scope,GetDataBase,$routeParams){
	/*Assign values to show info tournament in visual layer, receives an URL data API*/
	function infoTournament(URL){
		GetDataBase.get(2,URL).then(function(data2){
			return data2;
		}).then(function(data){
			$scope.caption =data.caption;
			$scope.lastUpdated = new Date(data.lastUpdated);
			$scope.numberOfGames =data.numberOfGames;
			$scope.numberOfTeams =data.numberOfTeams;
			$scope.year = data.year;
			$scope.URL=$routeParams.id;
		});
			
	}
	/* gets data from a JSON call data.JSON, It's a local data that contain names of images, folder names of images , routes to access to the remote API and Text to show in the visual layer*/
	getLocalData(GetDataBase).then(function(imagesData){
		var datesTournaments = getApiURL(imagesData.Leagues,$routeParams.id);
		imagesEfects(datesTournaments.array);
		infoTournament(datesTournaments.URLAPI)	
	});
	
}]);

function getLocalData(GetDataBase){
	return GetDataBase.get(1,'http://127.0.0.1:8080/data/data.JSON');
}

