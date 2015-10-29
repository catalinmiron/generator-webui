var Component = require('components/<%= name %>.jsx'),
    fixture = require('fixtures/<%= name %>/<%= fixture %>.js');


var TestUtils = require('react/addons').addons.TestUtils,
    $ = require('jquery');


describe('<%- _.capitalize(_.camelCase(name)) %>', function() {
  describe('Render', function() {
    var component, $component, loadChildStub;

    beforeEach(function() {
      loadChildStub = TestHelpers.stubMethod(Component, 'loadChild', null);

      component = TestHelpers.render(Component, fixture, this.container);
      $component = $(component.getDOMNode());
    });

    it('description', function() {
      // body...
    });
  });
});
