/**
 * Created by zajac on 12.06.2017.
 */
'use strict';

import angular from 'angular';

import {
  circlePostsService
} from './circlePosts.service';
import {
  circlePostsResource
} from './circlePostsResource.service';

export default angular.module('myCircleApp.circlePosts', [])
  .factory('circlePostsService', circlePostsService)
  .factory('circlePostsResource', circlePostsResource)
  .name;
