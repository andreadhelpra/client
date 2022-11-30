var {src, dest, series, parallel} = require('gulp');
var useref = require('gulp-useref'),
    gulpIf = require('gulp-if'),
    terser = require('gulp-terser'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');

function build_sources (cb) {
    src('./public/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', terser()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(dest('dist/'));
        return cb();
}

function optimise_images (cb){
    src('src/images/*.+(png|jpg|gif|svg)')
     .pipe(cache(imagemin()))
     .pipe(dest('dist/images/'));
    return cb();
}

function optimise_css_image(cb) {
    src('src/css/background_images/*.+(png|jpg|gif|svg)')
     .pipe(cache(imagemin()))
     .pipe(dest('dist/css/background_images/'));
     return cb();
}

function clear_cache(cb){
    return cache.clearAll(cb);
}

exports.build = parallel(
    build_sources,
    optimise_images,
    optimise_css_image,
);

exports.clear_cache = clear_cache;