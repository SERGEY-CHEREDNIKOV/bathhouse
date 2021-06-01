"use strict";

const { src, dest } = require("gulp");
const gulp = require("gulp");
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const removeComments = require('gulp-strip-css-comments');
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const rigger = require("gulp-rigger");
const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const del = require("del");
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const browsersync = require("browser-sync").create();

/* Paths */
let path = {
    build: {
        html: "build/",
        js: "build/js/",
        library: "build/js/libraries/",
        css: "build/css/",
        images: "build/images/",
        webP: "build/images/webp/",
        fonts: "build/fonts/"
    },
    src: {
        html: "source/*.html",
        js: "source/js/*.js",
        library: "source/js/libraries/*.js",
        css: "source/scss/style.scss",
        images: "source/images/**/*.{jpg,png,svg,gif,ico}",
        webP: "source/images/**/*.{jpg,png}",
        fonts: "source/fonts/*.{woff,woff2}"
    },
    watch: {
        html: "source/**/*.html",
        js: "source/js/**/*.js",
        library: "source/js/libraries/*.js",
        css: "source/scss/**/*.scss",
        images: "source/images/**/*.{jpg,png,svg,gif,ico}",
        webP: "source/images/**/*.{jpg,png}",
        fonts: "source/fonts/*.{woff,woff2}",
    },
    clean: "./build"
}

/* Tasks */
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./build/"
        },
        port: 3000
    });
    done()
}

function browserSyncReload(done) {
    browsersync.reload();
    done()
}

function html() {
    return src(path.src.html, { base: "source/" })
        .pipe(plumber())
        .pipe(posthtml([include()]))
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream());
}

function libraries() {
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
    ])
        .pipe(concat('_normalize.scss'))
        .pipe(gulp.dest('source/scss/'))
        .pipe(browsersync.stream());
}

function css() {
    return src(path.src.css, { base: "source/scss/" })
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssbeautify())
        .pipe(dest(path.build.css))
        .pipe(cssnano({
            zindex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(removeComments())
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream());
}


function js() {
    return src(path.src.js, { base: './source/js/' })
        .pipe(plumber())
        .pipe(babel({
            presets: ["@babel/preset-env"]
        }))
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min",
            extname: ".js"
        }))
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream());
}

function library() {
    return src(path.src.library)
        .pipe(dest(path.build.library));
}

function images() {
    return src(path.src.images)
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 65, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(dest(path.build.images));
}

function webP() {
    return src(path.src.webP)
        .pipe(webp({ quality: 50 }))
        .pipe(dest(path.build.webP));
}

function fonts() {
    return src(path.src.fonts)
        .pipe(dest(path.build.fonts));
}

function clean() {
    return del(path.clean);
}

function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.library], library);
    gulp.watch([path.watch.images], images);
    gulp.watch([path.watch.webP], webP);
    gulp.watch([path.watch.fonts], fonts);
}

const build = gulp.series(clean, gulp.parallel(html, css, js, library, images, webP, fonts));
const watch = gulp.parallel(build, watchFiles, browserSync, browserSyncReload);

/* Exports Tasks */
exports.html = html;
exports.libraries = libraries;
exports.css = css;
exports.js = js;
exports.library = library;
exports.images = images;
exports.webP = webP;
exports.fonts = fonts;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;
