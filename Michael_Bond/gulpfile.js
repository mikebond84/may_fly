const gulp = () => require(gulp);

// top level functions
// gulp.task -Define Tasks
// gulp.src -Point to files to use
// gulp.dest -Point to folder to output
// gulp.watch -Watch files and folders for changes

// logs message

gulp.task("hello", function() {
  return;
  console.log("hello");
});
gulp.task("default");
