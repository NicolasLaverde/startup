angular.module('TournamentGroups',[]).controller('EPFLGroups',['$scope','$routeParams','GetDataBase',
	function($scope, $routeParams,GetDataBase){

	$scope.getPosition=function(index){
		if(index<=2){
			return {championsClasif: true}
		}
		else if(index==3){
			return {preChampionsClasif: true}	
		}
		else if(index>3 && index<=5){
			return {EuropeanLeagueCLasific:true}
		}
		else if(index>=17){
			return { Descense:true}
		}
		else{
			return {nonClasific: true}	
		}
	}
	

	function createTableLeagues(link){
		GetDataBase.get(2,link._links.leagueTable.href).then(function(infoTable){
			console.log(infoTable);
			$scope.subTit=$routeParams.id;
			$scope.teams=infoTable.standing;
			console.log($scope.teams);
		});
	}
	GetDataBase.get(1,'http://127.0.0.1:8080/data/data.JSON').then(function(data){
		$scope.subTit;
		var datesTournaments = getApiURL(data.Leagues,$routeParams.id);
		GetDataBase.get(2,datesTournaments.URLAPI).then(function(link){
			console.log(link);
			createTableLeagues(link);
		});
	});

}])
.controller('EuroGroups',['$scope','$routeParams','GetDataBase','$location',
	function($scope, $routeParams,GetDataBase,$location){

		function getGroupsTournament(data,groups){
			GetDataBase.get(2,data.URLAPI).then(function(link){
				GetDataBase.get(2,link._links.leagueTable.href).then(function(infoTable){
					$scope.Teamgroups=[];
					for(var i=0;i<groups.length;i++){
						$scope.Teamgroups[i]=infoTable.standings[groups[i]];
						
					}
				})
			});
		}
		GetDataBase.get(1,'http://127.0.0.1:8080/data/data.JSON').then(function(data){	
			console.log($location.$$url);
			let letterGroups;
			let nameService;
			if($location.$$url.indexOf('424')>-1){
				letterGroups=['A','B','C','D','E','F'];	;
				nameService='424';
				$scope.subTit='Euro ChampionsShip 2016';
			}
			else{
				letterGroups=['A','B','C','D','E','F','G','H'];	;
				nameService='405';	
				$scope.subTit='Champions League 2016';
			}
			var datesTournaments = getApiURL(data.Leagues,nameService);
			getGroupsTournament(datesTournaments,letterGroups);
		});
}]);

