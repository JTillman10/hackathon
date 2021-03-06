'use strict';

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
import profile from './profile/profile-module';

angular.module('app', [
  'ui.router',
  'ui.bootstrap',
  'ngResource',
  'ngCookies',
  landing.name,
  home.name,
  auto.name,
  profile.name
])
.run(function($rootScope) {
    $rootScope.appliances = [
         {
            name: 'Stove',
            img: 'images/Stove.png',
            score: 100
        },
        {
            name: 'Furnace',
            img: 'images/Furnace.png',
            score: 100
        },
        {
            name: 'Air Conditioner',
            img: 'images/AirConditioner.png',
            score: 75
        },
        {
            name: 'Dishwasher',
            img: 'images/Stove.png',
            score: 90
        },
        {
            name: 'Washer',
            img: 'images/Washer.png',
            score: 22,
            details: [
              {
                contributor: 'Machine age (10 years)',
                recommendation: 'Consider replacement'
              },
              {
                contributor: 'Supply hose failure',
                recommendation: 'Replace with steel braided hose'
              },
              {
                contributor: 'Overflow/backups',
                recommendation: 'Clean drains'
              },      
              {
                contributor: 'Fire hazard',
                recommendation: 'Properly ground appliance'
              }
            ],
            services: [
              {
                service: 'Change circuit',
                date: 'August 4, 2016'
              },
              {
                service: 'Clean drains',
                date: 'January 29, 2009'
              }
            ]
        },
         {
            name: 'Dryer',
            img: 'images/Washer.png',
            score: 46
        },
        {
            name: 'Secruity',
            img: 'images/Lock.png',
            score: 70
        },
        {
            name: 'Refrigerator',
            img: 'images/Refrigerator.png',
            score: 100
        },
        {
            name: 'Fire Alarm',
            img: 'images/Fire.png',
            score: 40
        }
    ];
})
.config(routes);
