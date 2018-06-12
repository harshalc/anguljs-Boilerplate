'use strict';

var app=angular.module('myApp', [
  'ui.router',
  'myApp.login',
]);

app.config([ '$locationProvider','$urlRouterProvider','$stateProvider', function( $locationProvider,$urlRouterProvider, $stateProvider) {
 $locationProvider.hashPrefix('!');
 $stateProvider.state('login', {
     url: '/login',
     templateUrl: 'login/login.html',
     controller: 'LoginCtrl',
     controllerAs: 'vm'
   });
  $urlRouterProvider.otherwise('/login');
}]);

angular.module('AppServices',[]).service('AppService',['$http',function($http) {
var service={

}
return service;
}]);
