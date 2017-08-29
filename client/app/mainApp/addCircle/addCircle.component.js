'use strict';
const angular = require('angular');

export class addCircleComponent {
  circle = {
    name:'',
    isPublic:true
  };

  /*@ngInject*/
  constructor(circlesService, $state) {
    this.message = 'World';
    this.circlesService = circlesService;
    this.$state = $state;
  }

  addCircle(form){
    if(form.$valid){
      this.circlesService.addCircle({
        name: this.circle.name,
        isPublic: this.circle.isPublic
      }).then((log)=> {
        this.$state.go('main', {}, {reload: true});
      });
    }
  }
}

export default angular.module('myCircleApp.addCircle', [])
  .component('addCircle', {
    template: require('./addCircle.html'),
    bindings: { message: '<' },
    controller: addCircleComponent,
    controllerAs:'vm'
  })
  .name;
