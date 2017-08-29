'use strict';

describe('Component: addCircle', function() {
  // load the component's module
  beforeEach(module('myCircleApp.addCircle'));

  var addCircleComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    addCircleComponent = $componentController('addCircle', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
