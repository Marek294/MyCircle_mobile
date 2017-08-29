'use strict';
const angular = require('angular');

export class showCirclePostsComponent {

  post = {
    circleId: '',
    title: '',
    content: ''
  };


  /*@ngInject*/
  constructor($state, circlePostsService, $http, circlesService, socket, $rootScope) {
    'ngInject';
    this.message = 'World';
    //this.circleId = $state.params.circleId;
    this.circlePosts = [];
    this.circlePostsService = circlePostsService;
    this.$http = $http;
    this.circlesService = circlesService;
    this.socket = socket;
    this.$rootScope = $rootScope;
    this.MAX_PAGE_ITEMS = 10;
    this.PAGE = 1;
    this.isBusy = false;
  }

  $onInit() {
    //   this.getPosts();
    //   // this.$http.post('/api/circles/user/:circleId/isAdmin', {
    //   //   name: this.newThing
    //   // });
    this.socket.syncPostsUpdates(this.circleId);

    this.$rootScope.$on('SERVER_POST', (event, data)=> {
      this.circlePosts.push(data);
    });
  }

  $onChanges() {
    this.getPosts(this.PAGE);
    // this.socket.syncPostsUpdates(this.circleId);
  }

  $onDestroy() {
    this.socket.unsyncUpdates(this.circleId);
  }

  getPosts(page = 1) {
    if (this.isBusy) return;
    this.isBusy = true;
    this.circlePostsService.getAll(this.circleId, this.MAX_PAGE_ITEMS, page).then((data)=> {
      this.circlePosts.push(...data.posts);
      this.PAGE += 1;
      this.isBusy = false;
      this.remainingPages = data.remainingPages > 0;
      console.log(data);
    });
  }

  emitPost(data) {
    this.socket.sendEmit('ADD_POST', data);
  }


  addPost(form) {
    if (form.$valid) {

      this.circlePostsService.addPost({
        title: this.post.title,
        content: this.post.content,
        circleId: this.circleId
      }).then((data)=> {
        this.emitPost(data);
        this.getPosts();
        this.clearForm(form);
      });
    }
  }

  clearForm(form) {
    this.post = {};
  }

}

export default angular.module('myCircleApp.showCirclePosts', [])
  .component('showCirclePosts', {
    template: require('./showCirclePosts.html'),
    bindings: {circleId: '<'},
    controller: showCirclePostsComponent,
    controllerAs: 'vm'
  })
  .name;
