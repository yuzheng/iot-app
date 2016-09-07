// 將 sass(*.scss) 產出 css 並提供最小化

var gulp = require('gulp');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var config = require('../config').css;
var bootstrap_config = require('../config').bootstrap_css;

gulp.task('css', function () {
    gulp.src(config.src)
        .pipe(plumber())
        .pipe(sass())               
        .pipe(concat(config.output))  
        .pipe(autoprefixer(config.autoprefixer))  
        .pipe(gulpif(config.minify, minify()))    
        .pipe(gulp.dest(config.dest));

    gulp.src(bootstrap_config.src)
        .pipe(plumber())
        .pipe(sass.sync({
            outputStyle: 'expanded',
            precision: 10,
            includePaths: ['.']
        }).on('error', sass.logError))         
        .pipe(autoprefixer(bootstrap_config.autoprefixer))  
        .pipe(gulpif(bootstrap_config.minify, minify()))    
        .pipe(gulp.dest(bootstrap_config.dest));           
});