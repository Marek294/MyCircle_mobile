/**
 * Created by zajac on 12.06.2017.
 */
'use strict';

import angular from 'angular';

import {
  circlesService
} from './circles.service';
import {
  circlesResource
} from './circlesResource.service';

export default angular.module('myCircleApp.circles', [])
  .factory('circlesService', circlesService)
  .factory('circlesResource', circlesResource)
  .name;
