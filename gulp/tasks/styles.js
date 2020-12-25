const gulp = require('gulp')
const sass = require('gulp-sass')
const group_media = require('gulp-group-css-media-queries')
const autoprefixer = require('gulp-autoprefixer')
const clean_css = require('gulp-clean-css')
const rename = require('gulp-rename')


module.exports = function styles(cb) {
    return gulp.src('app/sass/*.scss')
        .pipe(
            sass({
                outputStyle: "expanded"
            })
        )
        .pipe(
            group_media() //группируем media-запросы в один
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 5 versions"],
                cascade: true
            })
        )
        .pipe(gulp.dest('./'))
        .pipe(clean_css())
        // .pipe(
        //     rename({
        //         extname: ".min.css" //переименовываем файл
        //     })
        // )
        .pipe(gulp.dest('./'))
    return cb()
}