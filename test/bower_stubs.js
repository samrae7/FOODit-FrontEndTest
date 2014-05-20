(function (global) {

  function jQueryStub (selector) {
    // templates
    if (selector.indexOf('#t-') === 0)
      return jQuery('<script type="text/x-underscore-template id="'
      + selector.substring(1)
      + '"></script>"')
    // any other selector
    return jQueryStub.__elements[selector]
  }
  jQueryStub.__elements = {
    '#main': jQuery('<div id="main"></div>')
  }
  sinon.stub(global, '$', jQueryStub)

})(this)