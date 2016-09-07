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
        .pipe(plumber())              // エラー出ても止まらないようにする
        .pipe(sass())               // 実際コンパイルしてるのはここ
        .pipe(concat(config.output))  // 1つのファイルに固める
        .pipe(autoprefixer(config.autoprefixer))  // vendor-prefixつける
        .pipe(gulpif(config.minify, minify()))    // 必要ならminifyする
        .pipe(gulp.dest(config.dest));            // 出力する
});