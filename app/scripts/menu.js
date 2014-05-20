(function () {
  'use strict';
  /* global _, foodit */
  foodit.menu = {

    Model: foodit.Model.extend({
      idAttribute: 'restaurantId',
      urlRoot: '/data/menu-',
      url: function () {
        return this.urlRoot + this.id + '.json'
      }
    }),

    ContainerView: foodit.View.extend({
      template: _.template($('#t-menu-container').html()),
      initialize: function () {
        this.menuView = new foodit.menu.MenuView
        this.restaurantSelect = new foodit.restaurants.SelectView
        this.listenTo(this.restaurantSelect, 'change:restaurant', function (restaurantId) {
          var _this = this
          this.menuView.model = new foodit.menu.Model({restaurantId: restaurantId})
          this.menuView.model.fetch({
            error: function () { console.error('failed to fetch menu :(') },
            success: function () { _this.menuView.render() }
          })
        })
      },
      render: function () {
        this.$el.html(this.template())
        this.restaurantSelect.render()
        this.menuView.render()
        this.$el.find('#restaurants-select-group').append(this.restaurantSelect.el)
        this.$el.append(this.menuView.el)
        return this
      }
    }),

    MenuView: foodit.View.extend({
      template: _.template($('#t-menu').html()),
      render: function () {
        this.$el.html(this.template(this.model ? this.model.toJSON() : null))
      }
    })

  }
  foodit.router.route('menu', 'menu', function () {
    this.setView(new foodit.menu.ContainerView)
  })
})()
