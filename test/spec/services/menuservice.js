'use strict';

describe('Service: MenuService', function () {

  // load the service's module
  beforeEach(module('jstestApp'));

  // instantiate service
  var MenuService, $httpBackend;
  beforeEach(inject(function ($injector) {
	$httpBackend          = $injector.get('$httpBackend');
	MenuService = $injector.get('MenuService');
  }));

  afterEach(function() {
	$httpBackend.verifyNoOutstandingExpectation();
	$httpBackend.verifyNoOutstandingRequest();
  });

  it('should do something', function () {
    expect(!!MenuService).toBe(true);
  });

  it('should load the menu json', function() {
	var menuData = {'resultCount': 2, 'offset': 0, 'pageSize': 20, 'meals': [
	  { id: '123' },
	  { id: '456' }
	]
	};
	$httpBackend.whenGET(/\/data\/menu.json?.*/).respond(function(/* method, url */) {
	  return [200, menuData];
	});
	MenuService.get().success(function (data) {
	  expect(data.resultCount).toBe(menuData.resultCount);
	  expect(data.meals.length).toBe(menuData.meals.length);
	  expect(data.meals[0].id).toBe(menuData.meals[0].id);
	});
	$httpBackend.flush();
  });

});
