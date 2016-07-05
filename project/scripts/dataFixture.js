
function DataFixture($scope,$routeParams,GetDataBase,$element, $attrs){
	var ctrl = this;
	console.log(ctrl);
}		

function listAllMatches($scope,$routeParams,GetDataBase,$element, $attrs){
	let paramsteamUrl= $routeParams.id.split('_');
	let UrlTournament = getUrl(paramsteamUrl[0],'tournament');
	let UrlTeams= UrlTournament+'/teams';
	let UrlTeam= getUrl(paramsteamUrl[1],'team');
	var ctrl=this;
	ctrl.matches=[];
	ctrl.teams=[];
	function getInfo(data){
		let UrlFixtures = UrlTournament+'/fixtures';
		ctrl.team=data[0];
		ctrl.teams=data[1].teams;
		GetDataBase.get(2,UrlFixtures).then(function(result){
			ctrl.matches= result.fixtures;
		});
	}
	Promise.all([GetDataBase.get(2,UrlTeam),GetDataBase.get(2,UrlTeams)]).then(function(result){
		getInfo(result);
	});
	ctrl.search = function(item){
	    if (item.homeTeamName===ctrl.team.name || item.awayTeamName===ctrl.team.name){

	        return true;
	    }
    return false;
 };

}
function TeamImageLogo($scope,$routeParams,GetDataBase,$element, $attrs){
	var ctrl = this;
	console.log(ctrl);
	getTeamsUrl();
	function getTeamsUrl(){
		ctrl.teamLink;
		for(var i=0;i<ctrl.allteams.length;i++){
			if(ctrl.matchdata.team=== ctrl.allteams[i].name){
				ctrl.teamLink=ctrl.allteams[i].crestUrl;
				break;
			}		
		}
	}

}
function FormateDate($scope,$routeParams,GetDataBase,$element, $attrs){
	var ctrl=this;

	ctrl.dateGame = new Date(ctrl.date.datematch);
}
function SmartSelector($scope,$routeParams,$location,GetDataBase,$element, $attrs){
	var ctrl=this;
	ctrl.teams=[];

	ctrl.teamName='All';
	ctrl.URL='/TournamentInfo/fixturesTeam/';

	function getInfo(data){
		ctrl.idLeague=data.id;
		GetDataBase.get(2,data._links.teams.href).then(function(LinkTeams){
			ctrl.teams=LinkTeams.teams;
			for(var i=0; i< ctrl.teams.length;i++){
				var array = ctrl.teams[i]._links.self.href.split('/')
				ctrl.teams[i].id=array[array.length-1];
			}

		});
	}
	Promise.all([getLocalData(GetDataBase)]).then(function(data){
		let UrlData= getApiURL(data[0].Leagues,$routeParams.id);
		Promise.all([GetDataBase.get(2,UrlData.URLAPI)]).then(function(result){
			getInfo(result[0]);
		});
	});


	ctrl.teamid = function(teamid){
		ctrl.teamName=teamid;
	}

	console.log(ctrl);
	
}

angular.module('Fixtures',[]).component('fixturesTeams', {
  	template:'<section ><list-all-matches></list-all-matches></section>',
  	controller:DataFixture

}).controller('bridgeFixtures',['$scope','$routeParams','GetDataBase',function($scope,$routeParams,GetDataBase){
	var ctrl = this;
  	
}]).controller('ShowFixtures',['$scope','$routeParams','GetDataBase',function($scope,$routeParams,GetDataBase){
	var ctrl = this;
  	
}]).component('smartSelector',{
	templateUrl: '../templates/smartSelector.html',
	controller: SmartSelector
}).component('listAllMatches',{
	templateUrl: '../templates/matchResults.html',
	controller:listAllMatches
	
}).component('imageLogo',{
	template:'<img class="logoTeams" ng-src="{{$ctrl.teamLink}}"/>',
	controller: TeamImageLogo,
	bindings:
	{
		matchdata:'=',
		allteams:'=',
		matches:'='
	}
}).component('dateFormated',{
	template:'{{$ctrl.dateGame.toString()}}',
	controller: FormateDate,
	bindings:
	{
		date:'<'
	}
});