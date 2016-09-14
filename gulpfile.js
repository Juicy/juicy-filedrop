var gulp = require('gulp');
var replace = require('gulp-replace');
var pjson = require('./package.json');

gulp.task('propagate-version', function() {
  gulp.src(['./bower.json'])
    .pipe(replace(/"version": "\d+\.\d+\.\d+"/, '"version": "' + pjson.version + '"'))
    .pipe(gulp.dest('./'));

  gulp.src(['./juicy-filedrop.html'])
    .pipe(replace(/version: \d+\.\d+\.\d+/, 'version: ' + pjson.version))
    .pipe(gulp.dest('./'));
});
