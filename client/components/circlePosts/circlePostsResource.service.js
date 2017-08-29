/**
 * Created by zajac on 12.06.2017.
 */
'use strict';

export function circlePostsResource($resource) {
  'ngInject';

  return $resource('/api/posts/:id/:pageSize/:page', {
    id: '@_id'
  }
  );
}
