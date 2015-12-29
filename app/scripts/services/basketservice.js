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

    var fullBasket = {'count':0,
                      'total':0,
                      'items':[]
                    };

    function getFullBasket() {
      return fullBasket;
    }

    function setFullBasket(items) {
      fullBasket.items = items;
      fullBasket.count = getFullBasketCount(items);
      getFullBasketTotal();
    }

    function getFullBasketCount(items) {
      var count = 0;
      items.forEach(function(element){
        count += element.quantity;
      })
      return count;
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
      getFullBasket: getFullBasket,
      addToFullBasket: addToFullBasket,
      setFullBasket: setFullBasket,
      expandBasket: expandBasket
    };

    return service;
  }]);
