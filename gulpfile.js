var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task('propagate-version', function() {
  var next = require('./package.json');

  gulp.src(['./juicy-filedrop.html'])
    .pipe(replace(/version: (.*)/, 'version: ' + next.version))
    .pipe(gulp.dest('./'));
});
