(function (global) {
  'use strict';
  /* global Backbone */
  global.foodit = {

    Model: Backbone.Model.extend({}),

    Collection: Backbone.Collection.extend({}),

    View: Backbone.View.extend({
      render: function () {
        this.$el.html(this.template())
        return this
      }
    }),

    router: new (Backbone.Router.extend({
      setView: (function () {
        var mainView
        return function (view) {
          if (typeof mainView !== 'undefined') mainView.remove()
          mainView = view
          view.render()
          $('#main').append(view.el)
          return this
        }
      })()
    }))

  }
})(this)