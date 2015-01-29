'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var server;

gulp.task('connect', ['bower-import', 'import'], function () {
    var serveStatic = require('serve-static');
    var serveIndex = require('serve-index');
    var app = require('connect')()
        .use(require('connect-livereload')({port: 35729}))
        .use(serveStatic('.tmp'))
        .use(serveStatic('app'))
        // paths to bower_components should be relative to the current file
        // e.g. in app/index.html you should use ../bower_components
        .use('/bower_components', serveStatic('bower_components'))
        .use(serveIndex('app'));

    server = require('http').createServer(app)
        .listen(9000)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:9000');
        });
});

gulp.task('serve', ['connect', 'watch'], function () {
    require('opn')('http://localhost:9000');
});

// inject bower components
gulp.task('bower-import', function () {
    var wiredep = require('wiredep').stream;

    gulp.src('app/*.html')
        .pipe(wiredep())
        .pipe(gulp.dest('app'));

    gulp.src('karma.conf.js')
        .pipe(wiredep())
        .pipe(gulp.dest('./'));
});

// inject custom scripts
gulp.task('import', function () {
    var target = gulp.src('./app/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./app/scripts/*.js', './app/**/*.css'], {read: false}).pipe($.angularFilesort());


    gulp.src('./karma.conf.js')
        .pipe($.inject(gulp.src(['./app/scripts/**/*.js'], {read: false}), {
            starttag: '// inject:js',
            endtag: '// endinject',
            transform: function (filepath, file, i, length) {
                return '\'' + filepath.substr(1) + '\',';
            }
        }))
        .pipe(gulp.dest('./'));

    return target.pipe($.inject(sources, {relative: true}))
        .pipe(gulp.dest('./app'));
});

gulp.task('watch', ['connect'], function () {
    $.livereload.listen();

    var gulpwatch = require('gulp-watch');
    var batch = require('gulp-batch');

    // watch for changes
    gulp.watch([
        'app/*.html',
        '.tmp/styles/**/*.css',
        'app/scripts/**/*.js',
        'app/images/**/*'
    ]).on('change', $.livereload.changed);

    gulp.watch('bower.json', ['bower-import']);

    gulpwatch('app/**/*.js', batch(function () {
        gulp.start('import');
    }));
});

// Download and update the selenium driver
gulp.task('webdriver_update', $.protractor.webdriver_update);

gulp.task('test-e2e', ['webdriver_update', 'connect'], function (cb) {
    gulp.src(['test/e2e/*.js']).pipe($.protractor.protractor({
        configFile: 'protractor.conf.js'
    })).on('error', function (e) {
        console.log(e)
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


