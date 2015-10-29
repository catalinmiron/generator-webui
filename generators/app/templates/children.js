var Component = require('components/<%= name %>.jsx'),
    fixture = require('fixtures/<%= name %>/<%= fixture %>.js');


var TestUtils = require('react/addons').addons.TestUtils;


describe('<%- _.capitalize(_.camelCase(name)) %>', function() {
  describe('Children', function() {
    var component;

    beforeEach(function() {
      TestHelpers.stubMethod(Component, 'render', null);

      component = TestHelpers.render(Component, fixture, this.container);
    });

    describe('child_name', function() {
      var props;

      beforeEach(function() {
        props = TestHelpers.getChildProps(component, 'child_name');
      });

      it('description', function() {
        // body...
      });
    });

  });
});
