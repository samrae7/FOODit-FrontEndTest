(function () {
  'use strict';
  /* global _, foodit */
  foodit.main = {

    View: foodit.View.extend({
      template: _.template($('#t-main').html()),
    })

  }
  foodit.router.route('*route', 'main', function () {
    this.setView(new foodit.main.View)
  })
})()
