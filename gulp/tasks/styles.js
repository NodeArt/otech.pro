const gulp = require('gulp')
const sass = require('gulp-sass')
const group_media = require('gulp-group-css-media-queries')
const autoprefixer = require('gulp-autoprefixer')
const clean_css = require('gulp-clean-css')
const rename = require('gulp-rename')


module.exports = function styles(cb) {
    return gulp.src('./src/sass/*.scss')
        .pipe(
            sass({
                outputStyle: "expanded"
            })
        )
        .pipe(
            group_media()
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 5 versions"],
                cascade: true
            })
        )
        .pipe(gulp.dest('./dist'))
        .pipe(clean_css())
        .pipe(gulp.dest('./dist'));
}