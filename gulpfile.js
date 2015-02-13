'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var server;

gulp.task('connect', ['import'], function () {
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

gulp.task('karma-imports', function () {
    var fs = require('fs');
    var mainBowerFiles = require('main-bower-files');
    var sources = gulp.src(['./app/scripts/*.js'], {read: false}).pipe($.angularFilesort());

    if (fs.existsSync('bower_components')) {
        return gulp.src('karma.conf.js')
            .pipe($.inject(gulp.src(mainBowerFiles({filter: '**/*.js'}), {read: false}), {
                starttag: '// bower:js',
                endtag: '// endbower',
                transform: function (filepath, file, i, length) {
                    return '\'' + filepath.substr(1) + '\',';
                }
            }))
            .pipe($.inject(sources, {
                starttag: '// inject:js',
                endtag: '// endinject',
                transform: function (filepath, file, i, length) {
                    return '\'' + filepath.substr(1) + '\',';
                }
            }))
            .pipe(gulp.dest('./'));
    } else {
        return gulp.src('karma.conf.js')
            .pipe($.inject(sources, {
                starttag: '// inject:js',
                endtag: '// endinject',
                transform: function (filepath, file, i, length) {
                    return '\'' + filepath.substr(1) + '\',';
                }
            }))
            .pipe(gulp.dest('./'));
    }
});

gulp.task('import', ['index-imports', 'karma-imports']);

gulp.task('index-imports', function () {
    var fs = require('fs');
    var mainBowerFiles = require('main-bower-files');
    var sources = gulp.src(['./app/scripts/*.js'], {read: false}).pipe($.angularFilesort());

    if (fs.existsSync('bower_components')) {
        return gulp.src('app/index.html')
            .pipe($.inject(gulp.src(mainBowerFiles({filter: '**/*.js'}), {read: false}), {
                starttag: '<!-- bower:js -->',
                endtag: '<!-- endbower -->'
            }))
            .pipe($.inject(gulp.src(mainBowerFiles({filter: '**/*.css'}), {read: false}), {
                starttag: '<!-- bower:css -->',
                endtag: '<!-- endbower -->'
            }))
            .pipe($.inject(sources, {relative: true}))
            .pipe(gulp.dest('./app'));
    } else {
        return gulp.src('app/index.html')
            .pipe($.inject(sources, {relative: true}))
            .pipe(gulp.dest('./app'));
    }
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

    gulp.watch('bower.json', ['import']);

    gulpwatch('app/**/*.js', batch(function () {
        gulp.start('import');
    }));
});