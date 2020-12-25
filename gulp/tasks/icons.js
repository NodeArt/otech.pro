const gulp = require('gulp')
const iconfont = require('gulp-iconfont')
const iconfontCss = require('gulp-iconfont-css')


var fontName = 'Icons';
module.exports = function icons(cb) {
    return gulp.src('./src/images/icons/*.svg')
        .pipe(iconfontCss({
            fontName: fontName,
            targetPath: '../../src/sass/_icons.scss',
            fontPath: '../fonts/'
        }))
        .pipe(iconfont({
            fontName: fontName,
            formats: ['ttf', 'eot', 'svg'],
            normalize: true,
            centerHorizontally: true,
            fontHeight: 1001
        }))
        .pipe(gulp.dest('./src/fonts/'));
}