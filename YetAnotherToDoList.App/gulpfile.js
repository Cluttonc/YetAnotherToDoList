var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    browserify = require('gulp-browserify'),
    glob = require('glob');

gulp.task('browserify', ['clean'], function () {
    var modules = glob.sync('./Content/Src/JavaScript/Modules/*.js');

    gulp.src(['Content/Src/JavaScript/Modules/*.js'])
        .pipe(
            browserify({
                entries: modules,
                basedir: './',
                debug: false,
                paths: ['./Content/Src/JavaScript/Modules']
            }))
        .pipe(rename('bundle.js'))
        //.pipe(uglify())
    .pipe(gulp.dest('Content/Dist'));
});

gulp.task('clean', function () {
    return del(['build/*.js']);
});

gulp.task('default', function() {
    gulp.watch('./Content/Src/JavaScript/Modules/*.js', ['browserify']);
});