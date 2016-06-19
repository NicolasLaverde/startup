
angular.module('myApp').config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {

      console.log('care pene');
      $routeProvider
        .when('/all', {
          templateUrl: '../app/getList.html',
          controller:'AllMovies'
	      })
        .when('/all/Movie/:id', {
        	templateUrl: '../app/movie.html',
        	controller: 'SingleMovie'
        })
        .when('/all/Movie/add', {

        });
      $locationProvider.html5Mode(true);
  }]);
