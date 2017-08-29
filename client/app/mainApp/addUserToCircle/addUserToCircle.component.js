'use strict';
const angular = require('angular');

export class addUserToCircleComponent {
  user = {
    circleId: null,
    usernameOrEmail: '',
    isAdmin: false
  };

  /*@ngInject*/
  constructor(circleUsersService, $state) {
    this.circleUsersService = circleUsersService;
    this.$state = $state;

    this.isAdmin = false;
  }


  $onInit() {
    this.circleId = this.$state.params.circleId;
    this.checkIsAdmin();
  }

  addUser(form) {
    if (form.$valid) {
      this.circleUsersService.addUser({
        circleId: this.circleId,
        usernameOrEmail: this.user.usernameOrEmail,
        isAdmin: this.user.isAdmin
      }).then((log)=> {
        this.$state.go('main.showCirclePost', {circleId:this.circleId}, {reload: true});
      });
    }
  }

  checkIsAdmin() {
    this.circleUsersService.isAdmin({circleId: this.circleId}).then((data)=> {
      if (data.isAdmin === 1) {
        this.isAdmin = true;
      } else {
        this.$state.go('main', {}, {reload: true});
      }
    });
  }
}

export default angular.module('myCircleApp.addUserToCircle', [])
  .component('addUserToCircle', {
    template: require('./addUserToCircle.html'),
    bindings: {circleId: '<'},
    controller: addUserToCircleComponent,
    controllerAs: 'vm'
  })
  .name;
