const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

module.exports = function images(cb) {
    return gulp.src('app/images/**/*.{jpg,png,svg,gif,ico}')
        .pipe(
            imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                interlaced: true,
                optimizationLevel: 3 // 0 to 7
            })
        )
        .pipe(gulp.dest('images'))
    return cb()
}