# generator-webui [![Build Status](https://secure.travis-ci.org/catalinmiron/generator-webui.png?branch=master)](https://travis-ci.org/catalinmiron/generator-webui)

> [Yeoman](http://yeoman.io) generator


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-webui from npm, run:

```bash
npm install -g generator-webui
```

Finally, initiate the generator:

Generate fixture `base` for `component_name` for `render.js` `children.js` and `callbacks.js` and unit tests folder and files
```bash
yo webui `component_name`
```

Generate `fixture_name` for `component_name` for `render.js` `children.js` and `callbacks.js` and unit tests folder and files
```bash
yo webui `component_name` --fixture=fixture_name
```

Generate a list of fixtures for `component_name` for `render.js` `children.js` and `callbacks.js` and unit tests folders and files

```bash
yo webui `component_name` --fixtures=fixture_one,fixture_two
```

## License

MIT
