'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [{
    title: 'Home',
    state: 'main'
  }];
  isCollapsed = true;
  hide = false;

  constructor(Auth, $state, $scope) {
    'ngInject';
    this.$scope = $scope;
    this.$state = $state;
    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;

  }

  $onInit() {
    this.$scope.$on('$stateChangeSuccess', ()=>{
      this.hide = (this.$state.current.name === 'welcome');
    });
  }

  isWelcomePage() {

  }

}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent,
    parent: 'main'
  })
  .name;
