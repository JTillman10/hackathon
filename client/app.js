import 'angular';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'angular-resource';
import _ from 'lodash';
import 'angular-cookies';
import routes from './routes';
import landing from './landing/landing-module';
import home from './home/home-module';
import auto from './auto/auto-module';

angular.module('app', [
  'ui.router',
  'ui.bootstrap',
  'ngResource',
  'ngCookies',
  landing.name,
  home.name,
  auto.name
])

.config(routes);
