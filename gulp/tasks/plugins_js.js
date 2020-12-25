const gulp = require('gulp')
const plumber = require('gulp-plumber')
const rigger = require('gulp-rigger')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify-es').default
const notify = require('gulp-notify')

module.exports = function js_plugins(cb) {
    return gulp.src('./src/js/all-plugins.js')
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'JS PLUGIN ERROR',
                    message: err.message
                }
            })
        }))
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'JS PLUGIN ERROR',
                    message: err.message
                }
            })
        }))
        .pipe(rigger())
        .pipe(gulp.dest('./dist/js'))
        .pipe(uglify())
        .pipe(
            rename({
                extname: ".min.js"
            })
        )
        .pipe(gulp.dest('./dist/js'));
}