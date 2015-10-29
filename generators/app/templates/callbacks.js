var Component = require('components/<%= name %>.jsx'),
    fixture = require('fixtures/<%= name %>/<%= fixture %>.js');


var TestUtils = require('react/addons').addons.TestUtils,
    $ = require('jquery');


describe('<%- _.capitalize(_.camelCase(name)) %>', function() {
  describe('Callbacks', function() {
    var component;

    beforeEach(function() {
      TestHelpers.stubMethod(Component, 'render', null);

      component = TestHelpers.render(Component, fixture, this.container);
    });

    it('description', function() {
      // body...
    });
  });
});
