'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'The subgenerator name'
    });

    this.log('You called the Webui subgenerator with the argument ' + this.name + '.');
  },

  writing: function() {
    // Create the style template
    if (this.options.fixture) {
      var fixture = this.options.fixture;

      this.makeFiles(fixture);

    } else if (this.options.fixtures) {
      this.options.fixtures.split(',').forEach(function(fixture) {
        this.makeFiles(fixture);
      }, this);
    } else {
      var fixture = 'base';

      this.makeFiles(fixture);
    }
  },

  makeFiles: function(fixture) {
    if(fixture === this.name) {
      return;
    }

    this.fs.copyTpl(
      this.templatePath('baseFixture.js'),
      this.destinationPath(`tests/fixtures/components/${this.name}/${fixture}.js`),
      {fixture: fixture}
    );
    this.fs.copyTpl(
      this.templatePath('render.js'),
      this.destinationPath(`tests/unit/components/${this.name}/${fixture}/render.js`),
      {name: this.name, fixture: fixture}
    );
    this.fs.copyTpl(
      this.templatePath('children.js'),
      this.destinationPath(`tests/unit/components/${this.name}/${fixture}/children.js`),
      {name: this.name, fixture: fixture}
    );
    this.fs.copyTpl(
      this.templatePath('callbacks.js'),
      this.destinationPath(`tests/unit/components/${this.name}/${fixture}/callbacks.js`),
      {name: this.name, fixture: fixture}
    );
  }
});
