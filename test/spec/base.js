/* global foodit, sinon, describe, it, beforeEach, afterEach */
/* jshint expr: true */
(function () {
  'use strict';

  describe('View', function () {
    describe('::render', function () {
      it('sets @el.innerHTML to the return value of @template()', function () {
        var innerHTML = 'inner<b>HTML</b>'
          , view = new foodit.View({})
        view.template = function () {
          return innerHTML
        }
        view.render()
        view.el.innerHTML.should.equal(innerHTML)
      })
    })
  })

  describe('router', function () {
    describe('::setView', function () {
      var view
        , renderStub
      beforeEach(function () {
        view = new foodit.View
        renderStub = sinon.stub(view, 'render', function () {})
      })
      it('removes the previous view', function () {
        var removeSpy = sinon.spy(view, 'remove')
          , view2 = new foodit.View
        sinon.stub(view2, 'render', function () {})
        foodit.router.setView(view)
        foodit.router.setView(view2)
        removeSpy.calledOnce.should.be.true
      })
      it('renders the view passed', function () {
        foodit.router.setView(view)
        renderStub.calledOnce.should.be.true
      })
      it('appends the view.el to #main', function () {
        foodit.router.setView(view)
        $.__elements['#main'].children().length.should.equal(1)
        $.__elements['#main'].children()[0].should.equal(view.el)
      })
      afterEach(function () {
        $.__elements['#main'].empty()
      })
    })
  })

})()
