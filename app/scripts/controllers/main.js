'use strict';

/**
 * @ngdoc function
 * @name jstestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jstestApp
 */
angular.module('jstestApp')
  .controller('MainCtrl', ['$scope', 'MenuService','BasketService', function ($scope, MenuService, BasketService) {
  	$scope.menu = {};
      MenuService.get('/data/menu.json').success(function(data) {
  	  $scope.menu = data;
  	});

    $scope.fullBasket = BasketService.getFullBasket();
    $scope.addToFullBasket = BasketService.addToFullBasket;
    $scope.expandBasket = BasketService.expandBasket;
    $scope.setFullBasket = BasketService.setFullBasket;
  }
]);
