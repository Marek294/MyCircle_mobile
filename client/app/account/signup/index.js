'use strict';

import angular from 'angular';
import SignupController from './signup.controller';

export default angular.module('myCircleApp.signup', [])
  .controller('SignupController', SignupController)
  .name;
