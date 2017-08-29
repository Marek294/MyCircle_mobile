'use strict';

describe('Service: circles', function() {
  // load the service's module
  beforeEach(module('myCircleApp.circles'));

  // instantiate service
  var circles;
  beforeEach(inject(function(_circles_) {
    circles = _circles_;
  }));

  it('should do something', function() {
    expect(!!circles).toBe(true);
  });
});

