'use strict';
import * as _ from 'lodash';

const angular = require('angular');

/*@ngInject*/

// class _Circle {
//   id = '';
//   owner_id = '';
//   name = '';
//   isPublic = '';
// }

export function circleUsersService(circleUsersResource) {
  'ngInject';

  const circleUsers = {
    getAll(id){
      return circleUsersResource.query({id: id}).$promise.then(function (users) {
        return users;
      });
    },
    addUser({
      circleId,
      usernameOrEmail,
      isAdmin
    }){
      return circleUsersResource.addUserToCircle({
        circleId,
        usernameOrEmail,
        isAdmin
      }).$promise;
    },

    deleteUser({
      id,
      userId
    }){
      return circleUsersResource.delete({
        id,
        userId
      }).$promise;
    },

    isAdmin(circleId){
      return circleUsersResource.isAdmin(circleId).$promise;
    },

    leaveCircle(circleId){
      return circleUsersResource.leaveCircle(circleId).$promise;
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
  return circleUsers;
}
