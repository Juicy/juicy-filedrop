var gulp = require('gulp');
var replace = require('gulp-replace');
var spawn = require('child_process').spawnSync;

gulp.task('propagate-version', function() {
  var next = require('./package.json');

  //current working directory already have a new version number after `npm version`
  //old version number is available in git history, let's take it
  var git = spawn('git', ['show', 'HEAD:./package.json']);
  var out = git.stdout.toString()
  var old = JSON.parse(out);

  gulp.src(['./juicy-filedrop.html'])
    .pipe(replace(old.version, next.version))
    .pipe(gulp.dest('./'));
});
