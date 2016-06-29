let dataInfo;
let module= angular.module('MyApp',['ngRoute']);
module.factory('MyFactory',['$http','$q', function($http,$q){
	let factory={};
	factory.x;
	factory.datas= [];
	/*if(!localStorage.getItem('data')){
		factory.data={'Person':[]};
	}
	else{
		factory.data=JSON.parse(localStorage.getItem('data'));
	}*/
	factory.get= function(op,url){

		if(op===1){
			return $http({
				"method": "GET",
				"url":url
				
			});
		}
		else{
			return $http({
				"method": "GET",
				"url":url,
				"headers":{
					"X-Auth-Token":"68dc9ab0ba374ad1a571cd8e07b5c647"
				}
			});
		}
	}
	return factory;
}]);

module.factory('getRoute',function(){
	let routeFactory={};

	routeFactory.URL;
	
	routeFactory.folder;

	return routeFactory;
});


module.controller('MyController',['$scope','MyFactory',function($scope,MyFactory){
	/*if(typeof localStorage.getItem('name') === 'undefined'){
		$scope.name='';
	}
	else{
		console.log(MyFactory.data.people);
		$scope.name=localStorage.getItem('name');
	}
	
	$scope.save= function save(){
		MyFactory.data.people.push({'User': $scope.user, 'Password': $scope.password});
		localStorage.setItem('data',JSON.stringify(MyFactory.data));

	}*/

}]);
module.controller('LoginController',function($scope){

});
module.controller('TournamentData', ['$scope','$routeParams','getRoute',function($scope,$routeParams,getRoute){

}])	;

module.controller('TournamentInfo', ['$scope','$element','$attrs','MyFactory','getRoute','$routeParams',function($scope,
	$element,$attrs,MyFactory,getRoute,$routeParams){

	MyFactory.get(1,'http://127.0.0.1:8080/data/data.JSON').success(function(imagesData){
		
		for(var i=0; i<imagesData.Images.length;i++){
			if(imagesData.Images[i].name.toLowerCase().indexOf($routeParams.id.toLowerCase()) >-1){
				getRoute.URL=imagesData.Images[i].URLDATA;
				getRoute.folder=imagesData.Images[i].name;
				break;	
			}
		}
		$scope.data=[];
		$scope.data= MyFactory.get(1,'http://127.0.0.1:8080/data/data.JSON');
		callImagesEfect($scope.data,getRoute.folder);

		
		MyFactory.get(2,getRoute.URL).success(function(data){
			$scope.caption =data.caption;
			$scope.lastUpdated = data.lastUpdated;
			$scope.numberOfGames =data.numberOfGames;
			$scope.numberOfTeams =data.numberOfTeams;
			$scope.year = data.year;
		});
	})

	
}]);
module.component('tournamentData',{
	templateUrl: '../templates/TournamentInfo.html',
	controller: 'TournamentInfo',
	bindings:{
		idRoute:'<'
	}

})
module.controller('EuroGroups',['$scope','$routeParams','MyFactory','getRoute',function($scope, $routeParams,MyFactory,getRoute){

	MyFactory.get(1,'http://127.0.0.1:8080/data/data.JSON').success(function(data){
		for(var i=0; i<data.Images.length;i++){
			if(data.Images[i].name.toLowerCase().indexOf($routeParams.id.toLowerCase()) >-1){
				getRoute.URL=data.Images[i].URLDATA;
				console.log(data.Images[i].name.toLowerCase());
				break;	
			}
		}
		MyFactory.get(2,getRoute.URL).success(function(dataLink){
			MyFactory.get(2,dataLink._links.leagueTable.href).success(function(infoTable){
				//let table = document.querySelector('.tableGroups');

				let groups=['A','B','C','D','E','F'];
				for(var k=0; k< groups.length;k++){
					let table = document.createElement('table');
					table.className='tableGroups';
					console.log(table);
					//console.log(JSON.stringify(infoTable.standings));
					
					let teamsReorder=[];
					console.log(infoTable);

					console.log(infoTable.standings[groups[0]][0]);
					let headers=infoTable.standings[groups[0]][0];
					table.innerHTML='<thead > <tr class=\'headerRow\'>  <td class=\'headerPosTD\'>Pos </td> <td class=\'headerTeamTd\'>Team </td> <td class=\'headerTd\' > M </td> <td class=\'headerTd\'> Goals </td> <td class=\'headerTd\'>'
					+ ' GoalsA </td> <td class=\'headerTd\'> Dif-G </td> <td class=\'headerTd\'> Pts </td>  </tr> </thead>';
					table.innerHTML+='<tbody>';
					
						for(let n=0;n<4;n++){
							let team = infoTable.standings[groups[k]][n];
							console.log(team);
							table.innerHTML+='<tr>  <td>' + team.rank +'</td> <td> ' + team.team + '</td> <td> ' + team.playedGames+ '</td>'
							 + '<td> '+ team.goals + '</td> <td> ' +team.goalsAgainst +'</td> <td> '+ team.goalDifference+ '</td> <td>' 
							 + team.points + '</td> <td></td></tr><tbody>';

						}
					
						document.querySelector('.GroupsContainer').appendChild(table);
				}
				
			})
			
			
		})

	});

}]);