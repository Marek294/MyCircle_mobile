'use strict';

describe('Component: showCirclePosts', function() {
  // load the component's module
  beforeEach(module('myCircleApp.showCirclePosts'));

  var showCirclePostsComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    showCirclePostsComponent = $componentController('showCirclePosts', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
