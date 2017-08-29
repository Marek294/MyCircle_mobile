'use strict';
const angular = require('angular');

export class circleUsersListComponent {
  /*@ngInject*/
  constructor(circleUsersService, $scope, $state) {
    'ngInject';
    const vm = this;
    this.isAdmin = false;
    this.$scope = $scope;
    this.$state = $state;
    this.circleUsersService = circleUsersService;
  }

  $onChanges() {
    if (this.circleId) {
      this.getUsers();
      this.checkIsAdmin(this.circleId);
    }
  }

  checkIsAdmin(circleId) {
    this.circleUsersService.isAdmin({circleId: circleId}).then((data)=> {
      if (data.isAdmin === 1) {
        this.isAdmin = true;
      }
    });
  }

  getUsers() {
    this.circleUsersService.getAll(this.circleId).then((users)=> {
      this.users = users;
    });
  }

  deleteUser(userId) {
    this.circleUsersService.deleteUser({
      id: this.circleId,
      userId: userId
    }).then((data)=> {
      if (data) {
        this.getUsers();
      }
    });
  }

  leaveCircle() {
    this.circleUsersService.leaveCircle({
      circleId: this.circleId
    }).then((data)=>{
      if (data.success) this.$state.go('main', {}, {reload: true});
    });
  }

}


export default angular.module('myCircleApp.circleUsersList', ['myCircleApp.circleUsers'])
  .component('circleUsersList', {
    template: require('./circleUsersList.html'),
    bindings: {circleId: '<'},
    controller: circleUsersListComponent,
    controllerAs: 'vm'
  })
  .name;
