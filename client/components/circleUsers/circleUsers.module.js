/**
 * Created by zajac on 12.06.2017.
 */
'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {
  circleUsersService
} from './circleUsers.service';
import {
  circleUsersResource
} from './circleUsersResource.service';

export default angular.module('myCircleApp.circleUsers', [uiRouter])
  .factory('circleUsersService', circleUsersService)
  .factory('circleUsersResource', circleUsersResource)
  .name;
