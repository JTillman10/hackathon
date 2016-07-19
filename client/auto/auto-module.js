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

import ngTemplates from './templates/auto.ngTemplates';

angular.module('auto', [
  'ui.router',
  'http-auth-interceptor',
  'ngIdle',
  'ngCookies',
  'ui.bootstrap',
  ngTemplates.name
]);

export default angular.module('auto');