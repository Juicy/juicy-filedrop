var gulp = require('gulp');
var replace = require('gulp-replace');
var packageJson = require('./package.json');
var bowerJson = require('./bower.json');

gulp.task('propagate-version', function() {
  gulp.src(['./bower.json', './juicy-filedrop.html'])
    .pipe(replace(bowerJson.version, packageJson.version))
    .pipe(gulp.dest('./'));
});
