const gulp = require('gulp')
const rigger = require('gulp-rigger')
const clean_css = require('gulp-clean-css')
const rename = require('gulp-rename')


module.exports = function css_plugins(cb) {
    return gulp.src('./src/css/all-plugins.css')
        .pipe(rigger())
        .pipe(gulp.dest('./dist'))
        .pipe(clean_css())
        .pipe(
            rename({
                extname: '.min.css'
            })
        )
        .pipe(gulp.dest('./dist'));
}