'use strict';

import angular from 'angular';
import LoginController from './login.controller';

export default angular.module('myCircleApp.login', [])
  .controller('LoginController', LoginController)
  .name;
