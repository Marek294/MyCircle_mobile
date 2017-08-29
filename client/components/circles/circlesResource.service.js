/**
 * Created by zajac on 12.06.2017.
 */
'use strict';

export function circlesResource($resource) {
  'ngInject';

  return $resource('/api/circles/:id', {
    id: '@_id'
  }, {
    get: {
      method: 'GET',
      params: {
        id: 'me'
      }
    }
  });
}
