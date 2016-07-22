/**
 * @ngdoc object
 * @name plan
 * @description
 *
 */

'use strict';

import 'angular';
import 'angular-ui-router';
import 'angular-http-auth';
import 'ng-idle';
import 'angular-cookies';

import ngTemplates from './templates/home.ngTemplates';
import homeCtrl from './home-controller';
import homeTile from './home-tile/home-tile-module';
import appliance from './appliance/appliance-module';

import homeService from './services/home-service';

angular.module('home', [
  'ui.router',
  'http-auth-interceptor',
  'ngIdle',
  'ngCookies',
  'ui.bootstrap',
  ngTemplates.name,
  homeTile.name,
  appliance.name
])
.service('HomeService', homeService)
.controller('HomeCtrl', homeCtrl);

export default angular.module('home');
