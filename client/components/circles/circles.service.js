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

export function circlesService(circlesResource) {
  'ngInject';

  const Circles = {
    getAll(){
      return circlesResource.query().$promise.then(function (circles) {
        return circles;
      });
    },
    addCircle({
      name,
      isPublic
    }){
      return circlesResource.save({
        name,
        isPublic
      }).$promise;
    }
  };
  return Circles;
}
