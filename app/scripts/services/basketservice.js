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

    var basket = {'count': 0};

    function getBasket() {
      return basket;
    }

    var service = {
      getBasket: getBasket
    };

    return service;
  }]);
