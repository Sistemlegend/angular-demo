'use strict';

var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var $ = require('gulp-load-plugins')();
var server;

gulp.task('connect', ['dist'], function () {
    var serveStatic = require('serve-static');
    var serveIndex = require('serve-index');
    var app = require('connect')()
        .use(require('connect-livereload')({port: 35729}))
        .use(serveStatic('dist'))
        .use(serveIndex('dist'));

    server = require('http').createServer(app)
        .listen(9000)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:9000');
        });
});

gulp.task('serve', ['connect', 'watch'], function () {
    require('opn')('http://localhost:9000');
});

gulp.task('browserify', function () {
    var b = browserify({
        debug: false
    });

    b.add('app/scripts/app.ts');
    b.plugin('tsify', {removeComments: true, target: 'ES5'});

    return b.bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('dist', gulpsync.sync(['clean', 'index', 'templates', 'images', 'data', 'styles', 'browserify']));

gulp.task('clean', function () {
    var del = require('del');
    del(['dist']);
});

gulp.task('index', function () {
    return gulp.src('app/index.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('templates', function () {
    return gulp.src('app/templates/**/*')
        .pipe(gulp.dest('dist/templates/'));
});

gulp.task('images', function () {
    return gulp.src('app/images/**/*')
        .pipe(gulp.dest('dist/images/'));
});

gulp.task('data', function () {
    return gulp.src('app/data/**/*')
        .pipe(gulp.dest('dist/data/'));
});

gulp.task('styles', function () {
    return gulp.src('app/styles/**/*')
        .pipe(gulp.dest('dist/styles/'));
});

gulp.task('watch', ['connect'], function () {
    $.livereload.listen();

    gulp.watch(['app/*.html'], ['index']);
    gulp.watch(['app/templates/**/*.html'], ['templates']);
    gulp.watch(['app/images/**/*'], ['images']);
    gulp.watch(['app/styles/**/*.css'], ['styles']);
    gulp.watch(['app/data/**/*'], ['data']);

    gulp.watch(['app/scripts/**/*.js'], ['browserify']);

    gulp.watch('./dist/**').on('change', $.livereload.changed);
});

// Download and update the selenium driver
gulp.task('webdriver_update', $.protractor.webdriver_update);

gulp.task('test-e2e', ['webdriver_update', 'connect'], function (cb) {
    gulp.src(['test/e2e/*.js']).pipe($.protractor.protractor({
        configFile: 'protractor.conf.js'
    })).on('error', function (e) {
        console.log(e);
        server.close();
    }).on('end', function () {
        server.close();
        cb()
    });
});

gulp.task('test-unit', function () {
    var karma = require('gulp-karma');

    return gulp.src([])
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }));
});

gulp.task('test', ['test-unit', 'test-e2e']);