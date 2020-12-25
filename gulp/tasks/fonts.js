const gulp = require('gulp')

module.exports = function fonts(cb) {
    return gulp.src('./src/fonts/*.*')
        .pipe(gulp.dest('./dist/fonts/'));
};