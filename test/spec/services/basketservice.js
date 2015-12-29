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
     BasketService.setBasket([{'name':'baked beans', 'price':'8.00','quantity':1}]);
    BasketService.addToBasket({'name':'baked beans', 'price':'8.00'});
    expect(BasketService.getBasket().count).toBe(2);
    expect(BasketService.getBasket().total).toBe(16.00); 

  });

  it('should return an empty array when the basket is called and no items have been added to the Full Basket', function() {
      expect(BasketService.getBasket().items).toEqual([]);
  });

  it('should set the value of the full basket', function() {
    BasketService.setBasket([{'chips':'0.99'}]);
    expect(BasketService.getBasket().items).toEqual([{'chips':'0.99'}]);
  });


  it('should add an item to the basket', function() {
    BasketService.addToBasket({'name':'pizza', 'price':'3.00'});
    //console.log(BasketService.getBasket());
    expect(BasketService.getBasket().items).toEqual([{'name':'pizza', 'price':'3.00', 'quantity':1}]);
  });


  it('should return the basket after an item has been added', function() {
    BasketService.setBasket([{'name':'chips', 'price':'0.99', 'quantity':1}]);
    BasketService.addToBasket({'name':'pizza', 'price':'3.00'});
    expect(BasketService.getBasket().items).toEqual([{'name':'chips', 'price':'0.99', 'quantity':1},{'name':'pizza', 'price':'3.00', 'quantity':1}]);
  });

  it('should add one to the basket count when an item is added to the basket and the basket started as empty', function() {
    BasketService.addToBasket({'name':'pizza','price':'3.00'});
    expect(BasketService.getBasket().count).toBe(1);
  });

  it('should work out the total when the basket is set', function() {
    BasketService.setBasket([{'name':'chips','price':'1.00', 'quantity':1},{'name':'nachos','price':'2.00','quantity':2}]);
    expect(BasketService.getBasket().total).toBe(5.00);
  });

  it('should work out the total when an item is added to the basket', function() {
    BasketService.setBasket([{'name':'chips','price':'1.00','quantity':1},{'name':'nachos','price':'2.00', quantity:1}]);
     BasketService.addToBasket({'name':'pizza','price':'4.00'});
    expect(BasketService.getBasket().total).toBe(7.00);
  });

  it ('should work out the quantity of each item in the basket', function() {
     BasketService.setBasket([{'name':'chips','price':'1.00','quantity':1},{'name':'nachos','price':'2.00', quantity:1}]);
     BasketService.addToBasket({'name':'chips','price':'1.00'});
    expect(BasketService.getBasket().items[0].quantity).toBe(2);  
  }); 

  it('should work out the total when some items are in the basket multiple times', function() {
    BasketService.setBasket([{'name':'chips','price':'1.00','quantity':1},{'name':'nachos','price':'2.00', quantity:1}]);
     BasketService.addToBasket({'name':'chips','price':'1.00'});
    expect(BasketService.getBasket().total).toBe(4.00);
  });

});