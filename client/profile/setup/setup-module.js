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

import setupCtrl from './setup-controller';
import scan from './scan/scan-module';

angular.module('setup', [
  'ui.router',
  'http-auth-interceptor',
  'ngIdle',
  'ngCookies',
  'ui.bootstrap',
  scan.name
])
.controller('SetupCtrl', setupCtrl);

export default angular.module('setup');