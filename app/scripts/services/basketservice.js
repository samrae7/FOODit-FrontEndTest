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
                  'meals':[]
                };

    function getBasket() {
      return basket;
    }

    function addToBasket(meal) {
      basket.meals.push(meal);
    }

    var service = {
      getBasket: getBasket,
      addToBasket: addToBasket
    };

    return service;
  }]);
