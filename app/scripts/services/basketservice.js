'use strict';

/**
 * @ngdoc service
 * @name jstestApp.Basketservice
 * @description
 * # BasketService
 * Service in the jstestApp.
 */
angular.module('jstestApp')
  .factory('BasketService', [function () {

    var basket =  {
                  'count': 0,
                  'prices':[],
                  'total':0
                };

    // var fullBasket = [{'name':'mushy-peas', 'price':'3.00'}];
    var fullBasket = {'count':0,
                      'total':0,
                      'items':[]
                    };

    //var count = 0;  

    function getBasket() {  
      return basket;
    }

    function addToBasket(price) {
      basket.count = basket.count + 1;
      var priceNum = Number(price); 
      basket.prices.push(priceNum);
      return getTotal();
    }

    function getTotal() { 
        basket.total = basket.prices.reduce(function (a,b) {
          return (a + b);
        });
        return basket.total;
    }

    function getFullBasket() {
      return fullBasket;
    }

    function setFullBasket(object) {
      fullBasket.items = object;
      getFullBasketTotal();
    }

    function getFullBasketTotal() {
      var total = 0;
      fullBasket.items.forEach(function (element){
        total += (Number(element.price) * element.quantity);
      });
      fullBasket.total = total;
      return total;
    }

    function addToFullBasket(item) {
      var inArray = false;
      fullBasket.items.forEach(function(element) {
        if (element.name === item.name) {
          element.quantity += 1;
          inArray = true;
        }
      });
      if (inArray === false) {
        item.quantity = 1;
        fullBasket.items.push(item);
      }
      fullBasket.count = fullBasket.count + 1;
      getFullBasketTotal();
    }

    var expandBasket = false;

    var service = {
      getBasket: getBasket,
      addToBasket: addToBasket,
      getFullBasket: getFullBasket,
      addToFullBasket: addToFullBasket,
      setFullBasket: setFullBasket,
      expandBasket: expandBasket
    };

    return service;
  }]);
