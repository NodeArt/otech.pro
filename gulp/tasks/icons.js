const gulp = require('gulp')
const iconfont = require('gulp-iconfont')
const iconfontCss = require('gulp-iconfont-css')


var fontName = 'Icons';
module.exports = function icons(cb) {
    return gulp.src('app/images/icons/*.svg')
        .pipe(iconfontCss({
            fontName: fontName,
            targetPath: '../../app/sass/_icons.scss',
            fontPath: '../fonts/'
        }))
        .pipe(iconfont({
            fontName: fontName,
            formats: ['ttf', 'eot', 'svg'],
            normalize: true,
            centerHorizontally: true,
            fontHeight: 1001
        }))
        .pipe(gulp.dest('app/fonts/'));
    return cb()
}