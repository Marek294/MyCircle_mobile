'use strict';

describe('Component: circlesList', function() {
  // load the component's module
  beforeEach(module('myCircleApp.circlesList'));

  var circlesListComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    circlesListComponent = $componentController('circlesList', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
