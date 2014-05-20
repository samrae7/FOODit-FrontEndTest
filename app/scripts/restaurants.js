(function () {
  'use strict';
  /* global _, foodit */
  foodit.restaurants = {

    ids: [
      'bbqgrill',
      'butlersthaicafe',
      'jashanexquisiteindianfood',
      'newchinaexpress'
    ],

    SelectView: foodit.View.extend({
      template: _.template($('#t-restaurants-select').html()),
      events: {
        'change #restaurants-select': function (event) {
          this.trigger('change:restaurant', event.target.value)
        }
      },
      render: function () {
        this.$el.html(this.template({restaurants: foodit.restaurants.ids}))
      }
    })

  }
})()