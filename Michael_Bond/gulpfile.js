//https://medium.freecodecamp.org/how-to-set-up-gulp-sass-using-the-command-line-if-youre-a-beginner-17729f53249

‘use strict’;

var gulp = require(‘gulp’);

var sass = require(‘gulp-sass’);

//compile
gulp.task(‘styles’, function () {
  gulp.src(‘sass/**/*.scss’)
  .pipe(sass().on(‘error’, sass.logError))
  .pipe(gulp.dest(‘./css’));
  });

  //compile and watch
 gulp.task(‘sass:watch’, function() {
  gulp.watch(‘app/scss/app.scss’, [‘sass’]);
 });