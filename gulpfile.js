const gulp = require('gulp')

const styles = require('./gulp/tasks/styles')
const html = require('./gulp/tasks/html')
const manifest = require('./gulp/tasks/manifest')
const images = require('./gulp/tasks/images')
const script = require('./gulp/tasks/script')
const fonts = require('./gulp/tasks/fonts')
const icons = require('./gulp/tasks/icons')
const css_plugins = require('./gulp/tasks/plugins_css')
const js_plugins = require('./gulp/tasks/plugins_js')



const browsersync = require('browser-sync').create()

const clean = require('gulp-clean')

const cleanImage = () => {
    return gulp.src('images/**.{jpg,png,svg,gif,ico}', {
        read: false
    })
        .pipe(clean())
}

const cleanScript = () => {
    return gulp.src('js/main.js', {
        read: false
    })
        .pipe(clean())
}

const cleanJS_plugin = () => {
    return gulp.src('js/all-plugins.js', {
        read: false
    })
        .pipe(clean())
}

const watch = () => {
    gulp.watch('./src/*.html', html).on('change', browsersync.reload)
    gulp.watch('./src/*.webmanifest', manifest).on('change', browsersync.reload)
    gulp.watch('./src/sass/**/*.scss', styles).on('change', browsersync.reload)
    gulp.watch('./src/js/**/*.js', script)
    gulp.watch('./src/images/**/*.{jpg,png,svg,gif,ico}', images)
}


module.exports.styles = gulp.series(styles)
module.exports.images = gulp.series(cleanImage, gulp.parallel(images))
module.exports.script = gulp.series(cleanScript, gulp.parallel(script))
module.exports.jsplugins = gulp.series(cleanJS_plugin, gulp.parallel(js_plugins))
module.exports.fonts = gulp.series(fonts)
module.exports.icons = gulp.series(icons)
module.exports.cssplugins = gulp.series(css_plugins)
module.exports.html = gulp.series(html)
module.exports.manifest = gulp.series(manifest)


module.exports.watch = gulp.series(
    gulp.parallel(icons, fonts, styles, images, script, css_plugins, js_plugins, html, manifest),
    gulp.parallel(watch)
)

module.exports.build = gulp.series(
    gulp.parallel(icons, fonts, styles, images, script, css_plugins, js_plugins, html, manifest)
)