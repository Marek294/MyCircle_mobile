import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';
import MainController from './main/main.controller';

import addCircle from './addCircle/addCircle.component';
import addUserToCircle from './addUserToCircle/addUserToCircle.component';
import showCirclePosts from './showCirclePosts/showCirclePosts.component';

// export class MainController {
//   awesomeThings = [];
//   newThing = '';
//
//   /*@ngInject*/
//   constructor($http) {
//      this.$http = $http;
//
//
//   //   this.socket = socket;
//   //
//   //   $scope.$on('$destroy', function() {
//   //     socket.unsyncUpdates('thing');
//   //   });
//   // }
//   //
//   // $onInit() {
//   //   this.$http.get('/api/things')
//   //     .then(response => {
//   //       this.awesomeThings = response.data;
//   //       this.socket.syncUpdates('thing', this.awesomeThings);
//   //     });
//   }
//
//   addThing() {
//     if(this.newThing) {
//       this.$http.post('/api/things', {
//         name: this.newThing
//       });
//       this.newThing = '';
//     }
//   }
//
//   deleteThing(thing) {
//     this.$http.delete(`/api/things/${thing._id}`);
//   }
// }

// export default angular.module('myCircleApp.main', [uiRouter])
//   .config(routing)
//   .component('main', {
//     template: require('./main.html'),
//     controller: MainController
//   })
//   .name;

export default angular.module('myCircleApp.main', [uiRouter, addCircle, showCirclePosts, addUserToCircle])
  .config(routing)
  .controller('MainController', MainController)
  .name;
