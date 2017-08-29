'use strict';
const angular = require('angular');

export class circlesListComponent {
  newThing = '';

  /*@ngInject*/
  constructor(circlesService) {
    'ngInject';
    circlesService.getAll().then((circles)=> {
      this.circles = circles;
    });
  }

}

export default angular.module('myCircleApp.circlesList', ['myCircleApp.circles'])
  .component('circlesList', {
    template: require('./circlesList.html'),
    bindings: {message: '<'},
    controller: circlesListComponent,
    controllerAs: 'vm'
  })
  .name;
