'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('jstestApp'));

  var MainCtrl,
	scope,
	MenuService,
  BasketService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
	MenuService = $injector.get('MenuService');
  BasketService = $injector.get('BasketService');
	var success = function(func) {
	  return func({resultCount: 1});
	};
	spyOn(MenuService, 'get').and.returnValue({success: success});
  // spyOn(BasketService, 'getBasket').and.callThrough();//.and.returnValue({success: success});
  spyOn(BasketService, 'getBasket').and.returnValue({'baked beans':1.00});
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));


  it('should call the menu service to retrieve a list of meals', function () {
	expect(MenuService.get).toHaveBeenCalled();
	expect(scope.menu.resultCount).toBe(1);
  });

  it('should call the basket service to retrieve the basket data', function () {
  expect(BasketService.getBasket).toHaveBeenCalled();
  expect(scope.basket).toEqual({'baked beans':1.00});
  }); 

});
