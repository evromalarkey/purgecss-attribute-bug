'use strict';

import gulp from 'gulp';


function task_styles() {

const less = require('gulp-less');
const purge = require('gulp-purgecss');

return gulp.src(`*.less`)
    .pipe(less())
    .pipe(purge({
  	    content: ['*.html'],
  	    extractors: [
      		{
      		    extractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      		    extensions: ['html']
      		}
  	    ]
  	}))
    .pipe(gulp.dest('./'));
}

gulp.task('styles', task_styles);
