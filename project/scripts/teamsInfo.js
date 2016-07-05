angular.module('TeamsInfo',[])
.component('teamSelector',{
	templateUrl:'../templates/smartSelector.html',
	controller: selectItem
}).component('teamsInformation',{
	template:'<article class=\'teamsData\'><header class=\'tittleTeams\'><h2 class=\'teamsSUB\'>Teams Selector</h2></header><team-selector></team-selector></article>'
}).component('teamInfo',{
	templateUrl:'../templates/dataTeams.html',
	controller: dataTeams
}).component('playersInfo',{
	templateUrl:'../templates/playersInfo.html',
	controller: playersInfo
});

function selectItem($scope,$routeParams,GetDataBase){
	var ctrl=this;
	function conectDataTeams(data){
		ctrl.idLeague=data.id;
		console.log(ctrl.idLeague);
		ctrl.URL='TournamentInfo/TeamsInfo/';
		GetDataBase.get(2,data._links.teams.href).then(function(result){
			ctrl.teams= result.teams;
			for(var i=0; i< ctrl.teams.length;i++){
				var array = ctrl.teams[i]._links.self.href.split('/')
				ctrl.teams[i].id=array[array.length-1];
			}
		}).catch(function(e){
			alert('data is not avaible');
		});

	}
	var routeid=$routeParams.id.split('_');
	var URL=getUrl(routeid[0],'tournament');
	console.log(URL);
	//let UrlData= getApiURL(data.Leagues,$routeParams.id);
	GetDataBase.get(2,URL).then(function(result){
		conectDataTeams(result);	
	});
	
}
function dataTeams($scope,$routeParams,GetDataBase,$element, $attrs){
	let ctrl=this;
	let routeid=$routeParams.id.split('_');
	let URL=getUrl(routeid[1],'team');
	
	Promise.all([GetDataBase.get(2,URL)]).then(function(result){
		ctrl.team=result[0];
	});
}
function playersInfo($scope,$routeParams,GetDataBase,$element, $attrs){

	var ctrl=this;
	let routeid=$routeParams.id.split('_');
	let URL=getUrl(routeid[1],'team');
	
	Promise.all([GetDataBase.get(2,URL),GetDataBase.get(2,URL+'/players')]).then(function(result){
		ctrl.team=result[0];
		console.log(ctrl.team);
		ctrl.numPlayers=result[1].count;
		ctrl.players=result[1].players;
	});	

}


