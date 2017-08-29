'use strict';

export default function routes($stateProvider, $urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.when('/', '/circle');

  $stateProvider.state('main', {
    url: '/',
    template: require('./main/main.html'),
    controller: 'MainController',
    controllerAs: 'vm',
    authenticate: 'user'
  })
    .state('main.addCircle', {
      url: 'addCircle',
      template: '<add-circle></add-circle>',
      authenticate: 'user'
    })
    .state('main.showCirclePost', {
      url: 'circle?&circleId',
      template: '<show-circle-posts circle-id="vm.circleId"></show-circle-posts>',
      authenticate: 'user'
    })
    .state('main.addUserToCircle', {
      url: 'addUserToCircle?&circleId',
      template: '<add-user-to-circle></add-user-to-circle>',
      authenticate: 'user'
    });;
}
