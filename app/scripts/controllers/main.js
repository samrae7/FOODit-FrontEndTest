'use strict';

/**
 * @ngdoc function
 * @name jstestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jstestApp
 */
angular.module('jstestApp')
  .controller('MainCtrl', ['$scope', 'MenuService', function ($scope, MenuService) {
  	$scope.menu = {};
      MenuService.get('/data/menu.json').success(function(data) {
  	  $scope.menu = data;
  	});

    $scope.filterBy = 'charcoal cheese chicken grilled high-protein lamb pasta peanut pork seafood snack spicy starter sweet vegetarian'.split(' ');

    $scope.filterTags = function (tags) {
      return tags.filter(function(tag) {
        return $scope.filterBy.indexOf(tag) !== -1;
      });
    };
    $scope.basket = {'count':7};
  }
]);
