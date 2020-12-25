const gulp = require('gulp')
// const del = require('del')
// const dist = require('gulp-npm-dist')

// const html = require('./gulp/tasks/html')
const styles = require('./gulp/tasks/styles')
const images = require('./gulp/tasks/images')
const script = require('./gulp/tasks/script')
const fonts = require('./gulp/tasks/fonts')
const icons = require('./gulp/tasks/icons')
const css_plugins = require('./gulp/tasks/plugins_css')
const js_plugins = require('./gulp/tasks/plugins_js')



const browsersync = require('browser-sync').create()

// const browserSync = () => {
//     browsersync.init({
//         server: {
//             baseDir: './style.css'
//         },
//         port: 63342,
//         notify: true
//     })
// }

const clean = require('gulp-clean')
// const cleanBuild = () => {
//     return gulp.src('build', {
//         read: false
//     })
//         .pipe(clean())
// }

// const cleanImage = () => {
//     return gulp.src('build/images', {
//         read: false
//     })
//         .pipe(clean())
// }
//
// const cleanScript = () => {
//     return gulp.src('build/js/main.js', {
//         read: false
//     })
//         .pipe(clean())
// }
//
// const cleanJS_plugin = () => {
//     return gulp.src('build/js/all-plugins.js', {
//         read: false
//     })
//         .pipe(clean())
// }

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
    gulp.watch('app/sass/**/*.scss', styles).on('change', browsersync.reload)
    gulp.watch('app/js/**/*.js', script)
    gulp.watch('app/images/**/*.{jpg,png,svg,gif,ico}', images)
}


module.exports.styles = gulp.series(styles)
module.exports.images = gulp.series(cleanImage, gulp.parallel(images))
module.exports.script = gulp.series(cleanScript, gulp.parallel(script))
module.exports.jsplugins = gulp.series(cleanJS_plugin, gulp.parallel(js_plugins))
module.exports.fonts = gulp.series(fonts)
module.exports.icons = gulp.series(icons)
module.exports.cssplugins = gulp.series(css_plugins)


module.exports.start = gulp.series(
    gulp.parallel(icons, fonts, styles, images, script, css_plugins, js_plugins),
    gulp.parallel(watch)
) // запускаем gulp start и файлы скомпиленные выгружаются в build



// module.exports.css = gulp.series(
//     cleanBuild,
//     gulp.parallel(styles),
//     gulp.parallel(watch, browserSync)
// )

// module.exports.script = gulp.series(
//     cleanBuild,
//     gulp.parallel(script),
//     gulp.parallel(watch, browserSync)
// )

// module.exports.icons = gulp.series(
//     cleanBuild,
//     gulp.parallel(icons),
//     gulp.parallel(watch, browserSync)
// )

// module.exports.images = gulp.series(
//     cleanBuild,
//     gulp.parallel(images),
//     gulp.parallel(watch, browserSync)
// )