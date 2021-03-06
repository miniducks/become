
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($httpProvider, $routeProvider) {
$httpProvider.interceptors.push(
  function($q, $location) {
  return {
      'responseError':function(rejection){
      if (rejection.status == 401){
          $location.url('/');
      }
      return $q.reject(rejection);
  }
};
});
  $routeProvider
  .when('/',{
      templateUrl: 'assets/partials/index.html',
      controller: 'newMentorController',
      controllerAs: "meep"
  })
  .when('/mentor/signup',{
      templateUrl: 'assets/partials/mentor/signup.html',
      controller: 'newMentorController',
      controllerAs: "meep"
  })
  .when('/mentee/signup',{
      templateUrl: 'assets/partials/mentee/signup.html',
      controller: 'newMenteeController',
      controllerAs: "meep"
  })
  .when('/mentor/platform',{
      templateUrl: 'assets/partials/mentor/platform2.html',
      controller: 'newMenteeController',
      controllerAs: "meep"
    })
    .when('/mentee/platform',{
        templateUrl: 'assets/partials/mentee/platform.html',
        controller: 'newMentorController',
        controllerAs: "meep"
  })
  .when('/login',{
      templateUrl: 'assets/partials/login.html',
      // controller: 'newMentorController',
      // controllerAs: "meep"
  })
  .when('/test',{
      templateUrl: 'assets/partials/test.html',
      controller: 'newMentorController',
      controllerAs: "meep"
  })
  .when('/form',{
      templateUrl: 'assets/partials/form.html',
      controller: 'mentorController',
      controllerAs: "meep"
  })
  .when('/codementor/:id',{
      templateUrl: 'assets/partials/codementor.html',
      controller: 'showController',
      controllerAs: "meep"
  })
    .otherwise({
      redirectTo: '/'
    });
});
