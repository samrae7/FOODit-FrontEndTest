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

    var basket = {'count':0,
                      'total':0,
                      'items':[]
                    };

    function getBasket() {
      return basket;
    }

    function setBasket(items) {
      basket.items = items;
      basket.count = getBasketCount(items);
      getBasketTotal();
    }

    function getBasketCount(items) {
      var count = 0;
      items.forEach(function(element){
        count += element.quantity;
      });
      return count;
    }

    function getBasketTotal() {
      var total = 0;
      basket.items.forEach(function (element){
        total += (Number(element.price) * element.quantity);
      });
      basket.total = total;
      return total;
    }

    function addToBasket(item) {
      var inArray = false;
      basket.items.forEach(function(element) {
        if (element.name === item.name) {
          element.quantity += 1;
          inArray = true;
        }
      });
      if (inArray === false) {
        item.quantity = 1;
        basket.items.push(item);
      }
      basket.count = basket.count + 1;
      getBasketTotal();
    }

    var expandBasket = false;

    var service = {
      getBasket: getBasket,
      addToBasket: addToBasket,
      setBasket: setBasket,
      expandBasket: expandBasket
    };

    return service;
  }]);
