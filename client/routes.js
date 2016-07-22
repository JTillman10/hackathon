'use strict';

function appConfig($urlRouterProvider, $httpProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/')
  
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
    .state('home.appliance', {
      url: '/{name}',
      templateUrl: 'home/appliance/views/appliance.tpl.html',
      controller: 'ApplianceCtrl',
      controllerAs: 'appliance'
    })
    .state('auto', {
      url: '/auto',
      templateUrl: 'auto/views/auto.tpl.html'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'profile/views/profile.tpl.html',
      controller: 'ProfileCtrl',
      controllerAs: 'profile'
    })
    .state('setup', {
      url: '/profile/setup',
      templateUrl: 'profile/setup/views/setup-home.tpl.html',
      controller: 'SetupCtrl',
      controllerAs: 'setup'
    })
    .state('scan', {
      url: '/profile/scan',
      templateUrl: 'profile/setup/scan/scan.tpl.html',
      controller: 'ScanCtrl',
      controllerAs: 'scan'
    })
    .state('select', {
      url: '/profile/select',
      templateUrl: 'profile/setup/views/select.tpl.html'
    })
    ;
}

appConfig.$inject = ['$urlRouterProvider', '$httpProvider', '$stateProvider'];

export default appConfig;
