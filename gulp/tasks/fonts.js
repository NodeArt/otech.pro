const gulp = require('gulp')

module.exports = function fonts(cb) {
    return gulp.src('app/fonts/*.*')
        .pipe(gulp.dest('fonts/'));
    return cb()
};