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
                  'total':0,
                  'hide':true
                };

    function getBasket() {  
      return basket;
    }

    function addToBasket(price) {
      basket.count = basket.count + 1;
      var priceNum = Number(price); 
      basket.prices.push(priceNum);
      console.log(basket.prices);
      getTotal();
      console.log('total',basket.total);
    }

    function getTotal() { 
        basket.total = basket.prices.reduce(function (a,b) {
          return (a + b);
        });
    }

    var service = {
      getBasket: getBasket,
      addToBasket: addToBasket,
      getTotal: getTotal
    };

    return service;
  }]);
