/**
 * Created by zajac on 12.06.2017.
 */
'use strict';

export function circleUsersResource($resource) {
  'ngInject';

  return $resource('/api/circles/user/:id/:userId', {
    id: '@_id'
  }, {
    get: {
      method: 'GET',
      params: {
        id: '@_id'
      }
    },
    isAdmin: {
      method: 'GET',
      params: {
        circleId: '@_circleId'
      },
      url: '/api/circles/user/:circleId/isAdmin'
    },
    leaveCircle: {
      method: 'GET',
      params: {
        circleId: '@_circleId'
      },
      url: '/api/circles/user/leave/:circleId'
    },
    addUserToCircle:{
      method:'POST',
      url: '/api/circles/user/add',
      params:{
        user: '@_user'
      }
    }
    // addUserToCircle: {
    //   method: 'POST',
    //   url:'/api/circles/user'
    // }
  });
}
