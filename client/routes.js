'use strict';

function appConfig($urlRouterProvider, $httpProvider, $stateProvider) {
  $urlRouterProvider.otherwise('landing')
  
  $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: 'landing/views/landing.tpl.html'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'home/views/home.tpl.html',
      controller: 'HomeCtrl',
      controllerAs: 'home'
    })
    .state('auto', {
      url: '/auto',
      templateUrl: 'auto/views/auto.tpl.html'
    })
    ;
}

appConfig.$inject = ['$urlRouterProvider', '$httpProvider', '$stateProvider'];

export default appConfig;
