
angular.module('SingleMovie',['ngRoute','MovieCore']).controller('SingleMovie',['$scope','$routeParams','connectData',function($scope,$routeParams,connectData){
	$scope.movie;
	if(connectData.x.length>0){		
		if(typeof $routeParams.id!=='undefined'){

			if($routeParams.id==='add'){
				let aux =connectData.x[connectData.x.length-1].id;
				$scope.movie={
					"id": ++aux,
					"tittle": "",
					"country" : "",
					"date": "",
					"runningTime": "",
					"language":"",
					"clasification":""
				}
			}else{
				var o = getElement($routeParams.id);
				if(o.length>0){
					$scope.movie=o[0];	

				}
				else{
					console.log('error');
				}
			}
		}

	}
	$scope.update=function(){
		if($routeParams.id==='add'){
			console.log($scope.movie);
			connectData.x.push($scope.movie);
			alert('Your movie has been add');
		}
		else{
	  		alert('Your movie has been changed!!!');
  		}


	}
	function getElement(id){
		var result = [];
  		connectData.x.forEach(function(o){
  			if (o.id == id) result.push(o);

  		});
  		return result;
	}

}]);
