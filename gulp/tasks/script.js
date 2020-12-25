const gulp = require('gulp')
const terser =  require('gulp-terser')
const rename = require('gulp-rename')

module.exports = function script(cb) {
    return gulp.src('app/js/main.js')
        // .pipe(terser())
        .pipe(gulp.dest('js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('js'))
    return cb()
}