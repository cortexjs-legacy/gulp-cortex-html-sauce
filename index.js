'use strict';
var cpipe = require('cortex-pipe');
var through = require('through2');
var PluginError = require('gulp-util').PluginError;
var fs = require('fs');

module.exports = function(options) {
  return through.obj(function(file, enc, callback) {
    var self = this;
    if (file.isStream()) {
      file.contents = cpipe(file.cwd, {
        stream: file.contents,
        html: file.path
      });

      this.push(file);
      return callback();
    }

    cpipe(file.cwd, {
      content: String(file.contents),
      html: file.path,
      base: options.base
    }, function(err, contents) {
      if (err) {
        this.emit('error', new PluginError("gulp-cortex-pipe", err));
        return callback();
      }

      file.contents = new Buffer(contents);
      self.push(file);
      callback();
    });
  });
};