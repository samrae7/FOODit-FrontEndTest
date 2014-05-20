(function () {
  'use strict';
  /* global _, foodit */
  foodit.orders = {

    Model: foodit.Model.extend({
      idAttribute: 'orderId',
    }),

    Collection: foodit.Collection.extend({
      urlRoot: '/data/orders-',
      url: function () {
        return this.urlRoot + this.id + '.json'
      }
    }),

    View: foodit.View.extend({
      template: _.template($('#t-orders').html()),
      initialize: function () {
        this.restaurantSelect = new foodit.restaurants.SelectView
      }
    })

  }
  foodit.router.route('orders', 'orders', function () {
    this.setView(new foodit.orders.View)
  })
})()
