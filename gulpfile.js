const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//copilacao

function style() {
    
    //achar .scss
    return gulp.src('./scss/**/*.scss')
    //compilar em .css
    .pipe(sass())
    //guardar css
    .pipe(gulp.dest('./css'))
    //att p/ todos browser
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload)
}

exports.style = style;
exports.watch = watch;
