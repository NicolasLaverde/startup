angular.module('MovieCore',['ngRoute']).factory('connectData',['$http', function($http){
	
		var factory = {}; 
		let x;
		factory.edit= function(method, objet){
			if(method==='GET' || typeof method==='undefined'){
				return $http({
					"method":"GET",
					"url":"http://127.0.0.1:8080/data/movies.JSON"
				});
			}else{
			};
			
		}
		return factory;
		
}]);
