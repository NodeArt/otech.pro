const gulp = require('gulp')
const terser =  require('gulp-terser')
const rename = require('gulp-rename')

module.exports = function script(cb) {
    return gulp.src('./src/js/main.js')
        ///.pipe(terser())
        .pipe(gulp.dest('./dist/js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/js'));
}