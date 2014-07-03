# gulp-cortex-html-sauce [![NPM version](https://badge.fury.io/js/gulp-cortex-html-sauce.svg)](http://badge.fury.io/js/gulp-cortex-html-sauce) [![Build Status](https://travis-ci.org/cortexjs/gulp-cortex-html-sauce.svg?branch=master)](https://travis-ci.org/cortexjs/gulp-cortex-html-sauce) [![Dependency Status](https://gemnasium.com/cortexjs/gulp-cortex-html-sauce.svg)](https://gemnasium.com/cortexjs/gulp-cortex-html-sauce)

<!-- description -->

## Install

```bash
$ npm install gulp-cortex-html-sauce --save
```

## Usage

```js
var sauce = require('gulp-cortex-html-sauce);

gulp.src("*.html")
  .pipe(sauce({
      base: './dist' // base dir of output files, if ignores, file.path will be used
  }))
  .pipe(gulp.dest('./dist'))
```

## Licence

MIT
<!-- do not want to make nodeinit to complicated, you can edit this whenever you want. -->
