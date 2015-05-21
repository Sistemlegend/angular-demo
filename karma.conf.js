module.exports = function (config) {
    config.set({

        basePath: '',

        files: [
            'app/scripts/app.js',

            'node_modules/angular-mocks/angular-mocks.js',

            // Tests
            'test/spec/**/*.js',

            // Templates
            'app/templates/*.html'
        ],

        autoWatch: false,

        frameworks: ['jasmine', 'browserify'],

        browserify: {
            debug: true,
            transform: [
                'babelify'
            ]
        },

        browsers: [
            'Chrome'
        ],

        plugins: [
            'karma-jasmine',
            'karma-browserify',
            'karma-chrome-launcher',
            'karma-ng-html2js-preprocessor'
        ],

        reporters: ['progress'],

        preprocessors: {
            'app/scripts/**/*.js': ['browserify'],
            'app/templates/*.html': ['ng-html2js']
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: 'app/',
            moduleName: 'templates'
        },

        singleRun: true

    });
};
