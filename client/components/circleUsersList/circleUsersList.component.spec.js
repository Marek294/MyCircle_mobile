'use strict';

describe('Component: circleUsersList', function() {
  // load the component's module
  beforeEach(module('myCircleApp.circleUsersList'));

  var circleUsersListComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    circleUsersListComponent = $componentController('circleUsersList', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
