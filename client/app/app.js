'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import ngInfiniteScroll from 'ng-infinite-scroll';


import 'angular-socket-io';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import 'angular-validation-match';

import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import _Circles from '../components/circles/circles.module';
import _CirclePosts from '../components/circlePosts/circlePosts.module';
import _CircleUsers from '../components/circleUsers/circleUsers.module';
import account from './account';
import admin from './admin';
import circlesList from '../components/circlesList/circlesList.component';
import circleUsersList from '../components/circleUsersList/circleUsersList.component';
import welcome from './welcome/welcome.component';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './mainApp';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';

import './app.scss';


angular.module('myCircleApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io', uiRouter, _CirclePosts, ngInfiniteScroll,
  uiBootstrap, _Auth, account, admin, welcome, 'validation.match', navbar, footer, main, constants, _Circles, circlesList, circleUsersList, _CircleUsers,
  socket, util
])
  .config(routeConfig)
  .run(function ($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedIn(function (loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['myCircleApp'], {
      strictDi: true
    });
  });
