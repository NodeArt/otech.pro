const gulp = require('gulp')

module.exports = function fonts(cb) {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'));
};