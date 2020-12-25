const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

module.exports = function images(cb) {
    return gulp.src('./src/images/**/*.{jpg,png,svg,gif,ico}')
        .pipe(
            imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                interlaced: true,
                optimizationLevel: 3
            })
        )
        .pipe(gulp.dest('./dist/images'));
}