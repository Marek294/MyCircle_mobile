/**
 * Created by zajac on 13.06.2017.
 */
export default class MainController {
  awesomeThings = [];
  newThing = '';

  /*@ngInject*/
  constructor($http, $state, $scope, $rootScope, socket) {
    this.$http = $http;

    this.circleId = $state.params.circleId;
    this.$rootScope = $rootScope;
    this.state = $state;
    this.$scope = $scope;
       this.socket = socket;
    //
    //   $scope.$on('$destroy', function() {
    //     socket.unsyncUpdates('thing');
    //   });
    // }
    //
    // $onInit() {
    //   this.$http.get('/api/things')
    //     .then(response => {
    //       this.awesomeThings = response.data;
    //       this.socket.syncUpdates('thing', this.awesomeThings);
    //     });
  }

  $onInit() {
    this.$rootScope.$on('$stateChangeSuccess', ()=> {
      this.circleId = this.state.params.circleId;
    });
    // this.$scope.$watch('this.$state.params.circleId', function () {
    //   console.log('zmiana');
    //   this.circleId = this.$state.params.circleId;
    // }, true);


  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', {
        name: this.newThing
      });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete(`/api/things/${thing._id}`);
  }
}
