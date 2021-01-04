const gulp = require('gulp')

module.exports = function fonts(cb) {
    return gulp.src('./src/*.webmanifest')
        .pipe(gulp.dest('./dist'));
};