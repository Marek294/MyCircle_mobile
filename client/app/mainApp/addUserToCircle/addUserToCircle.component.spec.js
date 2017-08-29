'use strict';

describe('Component: addCircle', function() {
  // load the component's module
  beforeEach(module('myCircleApp.addUserToCircle'));

  var addUserToCircle;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    addCircleComponent = $componentController('addCircle', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
