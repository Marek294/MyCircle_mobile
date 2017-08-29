'use strict';

import angular from 'angular';

export default class SignupController {
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
