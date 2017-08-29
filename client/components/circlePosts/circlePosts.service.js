'use strict';
import * as _ from 'lodash';

const angular = require('angular');

/*@ngInject*/

class _Circle {
  id = '';
  owner_id = '';
  name = '';
  isPublic = '';
}

export function circlePostsService(circlePostsResource) {
  'ngInject';

  const circlePosts = {
    getAll(id, maxPageItems, page){
      return circlePostsResource.get({id: id, pageSize: maxPageItems, page: page}).$promise.then(function (posts) {
        return posts;
      });
    },
    addPost({
      title,
      content,
      circleId
    }){
      return circlePostsResource.save({
        title,
        content,
        circleId
      }).$promise;
    }

    // addCircle({
    //   name,
    //   isPublic
    // }){
    //   return circlesResource.save({
    //     name,
    //     isPublic
    //   }).$promise;
    // }
  };
  return circlePosts;
}
