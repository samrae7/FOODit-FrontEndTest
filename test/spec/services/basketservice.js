'use strict';

describe('Service: BasketService', function () {

  // load the service's module
  beforeEach(module('jstestApp'));

  // instantiate service
  var BasketService;
  beforeEach(inject(function ($injector) {
  BasketService = $injector.get('BasketService');
  }));

  it('should do something', function () {
    expect(!!BasketService).toBe(true);
  });

  it('should add one to the count and add the price to the total', function() {
    // BasketService.basket = {
    //               'count': 2,
    //               'prices':[9.5, 8.5],
    //               'total':18
    //               };
    //console.log('BasketService.basket', BasketService.basket)
    expect(BasketService.addToBasket('8.5')).toBe(8.5);
    expect(BasketService.getBasket().count).toBe(1);
    expect(BasketService.addToBasket('9.5')).toBe(18);
    expect(BasketService.getBasket().count).toBe(2); 

  });

});