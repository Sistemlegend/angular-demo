module.exports = function (config) {
    config.set({

        basePath: '',

        files: [
            // External Libraries
            // bower:js
            'bower_components/angular/angular.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-aria/angular-aria.js',
            'bower_components/angular-material/angular-material.js',
            // endbower

            'bower_components/angular-mocks/angular-mocks.js',

            // inject:js
            'app/scripts/app.js',
            // endinject

            // Tests
            'test/spec/**/*.js'
        ],

        autoWatch: false,

        frameworks: ['jasmine'],

        browsers: [
            'Chrome'
        ],

        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher'
        ],

        reporters: ['progress'],

        singleRun: true

    });
};
