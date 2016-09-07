var gulp = require('gulp');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var webpack = require('gulp-webpack');
var config = require('../config');
var bootstrap_config = require('../config').bootstrap_scripts;

gulp.task('webpack', function () {
    gulp.src(config.webpack.entry)
        .pipe(webpack(config.webpack))
        .pipe(gulpif(config.js.uglify, uglify()))
        .pipe(gulp.dest(config.js.dest));

    gulp.src(bootstrap_config.src)
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest(bootstrap_config.dest));
});