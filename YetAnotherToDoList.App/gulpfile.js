var gulp = require('gulp');
var uglify = require('gulp-uglify');
var del = require('del');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');
var glob = require('glob');

gulp.task('browserify', ['clean'], function () {
    var modules = glob.sync('./Content/Src/JavaScript/Modules/*.js');

    //ToDo: Hook in logic for debug/productions
    //Options:
    //1. Have logic in the scripts "partial"
    //2. Idenfity here and tailor output
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