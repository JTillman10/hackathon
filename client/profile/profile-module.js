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

import ngTemplates from './templates/profile.ngTemplates';

import profileCtrl from './profile-controller';

import profileTile from './profile-tile/profile-tile-module';

import setup from './setup/setup-module';

angular.module('profile', [
  'ui.router',
  'http-auth-interceptor',
  'ngIdle',
  'ngCookies',
  'ui.bootstrap',
  ngTemplates.name,
  profileTile.name,
  setup.name
])
.controller('ProfileCtrl', profileCtrl);

export default angular.module('profile');