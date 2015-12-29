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
     BasketService.setFullBasket([{'name':'baked beans', 'price':'8.00','quantity':1}]);
    BasketService.addToFullBasket({'name':'baked beans', 'price':'8.00'});
    expect(BasketService.getFullBasket().count).toBe(2);
    expect(BasketService.getFullBasket().total).toBe(16.00); 

  });

  it('should return an empty array when the fullBasket is called and no items have been added to the Full Basket', function() {
      expect(BasketService.getFullBasket().items).toEqual([]);
  });

  it('should set the value of the full basket', function() {
    BasketService.setFullBasket([{'chips':'0.99'}]);
    expect(BasketService.getFullBasket().items).toEqual([{'chips':'0.99'}]);
  });


  it('should add an item to the fullBasket', function() {
    BasketService.addToFullBasket({'name':'pizza', 'price':'3.00'});
    //console.log(BasketService.getFullBasket());
    expect(BasketService.getFullBasket().items).toEqual([{'name':'pizza', 'price':'3.00', 'quantity':1}]);
  });


  it('should return the fullBasket after an item has been added', function() {
    BasketService.setFullBasket([{'name':'chips', 'price':'0.99', 'quantity':1}]);
    BasketService.addToFullBasket({'name':'pizza', 'price':'3.00'});
    expect(BasketService.getFullBasket().items).toEqual([{'name':'chips', 'price':'0.99', 'quantity':1},{'name':'pizza', 'price':'3.00', 'quantity':1}]);
  });

  it('should add one to the fullBasket count when an item is added to the fullBasket and the fullBasket started as empty', function() {
    BasketService.addToFullBasket({'name':'pizza','price':'3.00'});
    expect(BasketService.getFullBasket().count).toBe(1);
  });

  it('should work out the total when the fullBasket is set', function() {
    BasketService.setFullBasket([{'name':'chips','price':'1.00', 'quantity':1},{'name':'nachos','price':'2.00','quantity':2}]);
    expect(BasketService.getFullBasket().total).toBe(5.00);
  });

  it('should work out the total when an item is added to the fullBasket', function() {
    BasketService.setFullBasket([{'name':'chips','price':'1.00','quantity':1},{'name':'nachos','price':'2.00', quantity:1}]);
     BasketService.addToFullBasket({'name':'pizza','price':'4.00'});
    expect(BasketService.getFullBasket().total).toBe(7.00);
  });

  it ('should work out the quantity of each item in the fullBasket', function() {
     BasketService.setFullBasket([{'name':'chips','price':'1.00','quantity':1},{'name':'nachos','price':'2.00', quantity:1}]);
     BasketService.addToFullBasket({'name':'chips','price':'1.00'});
    expect(BasketService.getFullBasket().items[0].quantity).toBe(2);  
  }); 

  it('should work out the total when some items are in the basket multiple times', function() {
    BasketService.setFullBasket([{'name':'chips','price':'1.00','quantity':1},{'name':'nachos','price':'2.00', quantity:1}]);
     BasketService.addToFullBasket({'name':'chips','price':'1.00'});
    expect(BasketService.getFullBasket().total).toBe(4.00);
  });

});