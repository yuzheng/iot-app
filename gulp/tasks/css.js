var gulp = require('gulp');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var config = require('../config').css;

gulp.task('css', function () {
    gulp.src(config.src)
        .pipe(plumber())             
        .pipe(sass())               
        .pipe(concat(config.output))  
        .pipe(autoprefixer(config.autoprefixer))  
        .pipe(gulpif(config.minify, minify()))    
        .pipe(gulp.dest(config.dest));           
});