// 搬移靜態網頁(html)

var gulp = require('gulp');
var config = require('../config').copy;

gulp.task('copy', function () {
    gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});