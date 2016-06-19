angular.module('AllList',['ngRoute','MovieCore']).controller('AllMovies',['$scope','connectData',function($scope,connectData){
	
	 $scope.movies={};
	 if(typeof connectData.x!=='undefined' && connectData.x.length>0){

	 	$scope.movies=connectData.x;
	 }
	 else{
	 	edit();
	 }
	 $scope.delete = function(movie){
	 	let index = connectData.x.indexOf(movie);
	 	connectData.x.splice(index,1);
	 	$scope.movies=connectData.x;
	 }
	 
	 function edit(){
		connectData.edit().success(function(data,status,headers,config){	
			$scope.movies=data.movies;
			connectData.x=$scope.movies;
		}).error(function(data,status,headers,config){});
	}
}])
