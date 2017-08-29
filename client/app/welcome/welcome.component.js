'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './welcome.routes';

export class WelcomeComponent {
  user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  errors = {};
  submitted = false;

  /*@ngInject*/
  constructor(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
    this.showForm = '';
  }

  login(form) {
    this.submitted = true;

    if(form.$valid) {
      this.Auth.login({
        usernameOrEmail: this.user.usernameOrEmail,
        password: this.user.password
      })
        .then(() => {
          // Logged in, redirect to home
          this.$state.go('main');
        })
        .catch(err => {
          this.errors.login = err.message;
        });
    }
  }

  register(form) {
    this.submitted = true;

    if(form.$valid) {
      return this.Auth.createUser({
        username: this.user.username,
        email: this.user.email,
        password: this.user.password,
        confirmPassword: this.user.confirmPassword
      })
        .then(() => {
          // Account created, redirect to home
          this.$state.go('main');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};

          if(err.name) {
            angular.forEach(err.fields, (error, field) => {
              form[field].$setValidity('mongoose', false);
              this.errors[field] = err.message;
            });
          }
        });
    }
  }
}


export default angular.module('myCircleApp.welcome', [uiRouter])
  .config(routes)
  .component('welcome', {
    template: require('./welcome.html'),
    controller: WelcomeComponent,
    controllerAs: 'vm'
  })
  .name;
