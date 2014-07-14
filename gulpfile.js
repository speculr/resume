var gulp = require('gulp'),
  gutil = require('gulp-util'),
  coffee = require('gulp-coffee');

var coffeeSrcs = ['comp/coffee/*.coffee']

gulp.task('coffee',function(){
  gulp.src(coffeeSrcs)
    .pipe(coffee({bare: true})
      .on('error', gutil.log))
    .pipe(gulp.dest('comp/scripts'))
  gutil.log("meh, I don't know what I'm doing.")

});
