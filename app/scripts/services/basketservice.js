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

    var basket = {
                  'count': 0,
                  'prices':[],
                  'total':0
                };

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
        return basket.total
    }

    var service = {
      getBasket: getBasket,
      addToBasket: addToBasket,
      //getTotal: getTotal,
      //basket: basket
    };

    return service;
  }]);
