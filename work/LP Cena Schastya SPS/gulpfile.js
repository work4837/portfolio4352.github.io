var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('scss', function() {
    return gulp.src(['app/scss/style.scss', 'app/scss/libs.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
        browsers: ['last 8 versions', 'ie >= 8', 'Firefox >= 12', 'iOS >= 7', 'Android >= 4']
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('css-libs', function() {
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick.css'
    ])
    .pipe(concat('libs.scss'))
    .pipe(gulp.dest('app/scss/'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function() {
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function() {
    return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('js-libs', function() {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('clean', async function() {
    del.sync('dist')
});

gulp.task('export', function() {
    let buildHtml = gulp.src('app/**/*.html')
        .pipe(gulp.dest('dist'))

    let buildCss = gulp.src('app/css/**/*.css')
        .pipe(gulp.dest('dist/css'))

    let buildJs = gulp.src('app/js/**/*.js')
        .pipe(gulp.dest('dist/js'))

    let buildFonts = gulp.src('app/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'))

    let buildImg = gulp.src('app/img/**/*.*')
        .pipe(gulp.dest('dist/img'))
});

gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))
    gulp.watch('app/*.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('js'))
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('build', gulp.series('clean', 'export'))

gulp.task('default', gulp.parallel('build', 'css-libs', 'js-libs', 'scss', 'browser-sync', 'watch'))