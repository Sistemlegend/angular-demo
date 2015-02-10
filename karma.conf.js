module.exports = function (config) {
    config.set({

        basePath: '',

        files: [
            // External Libraries
            // bower:js
            'bower_components/angular/angular.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-aria/angular-aria.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-material/angular-material.js',
            // endbower

            'bower_components/angular-mocks/angular-mocks.js',

            // inject:js
            'app/scripts/toolbar/directives.js',
            'app/scripts/products/services.js',
            'app/scripts/products/directives.js',
            'app/scripts/products/controllers.js',
            'app/scripts/cart/services.js',
            'app/scripts/cart/directives.js',
            'app/scripts/cart/controllers.js',
            'app/scripts/app.js',
            // endinject

            // Tests
            'test/spec/**/*.js',

            // Templates
            'app/templates/*.html'
        ],

        autoWatch: false,

        frameworks: ['jasmine'],

        browsers: [
            'Chrome'
        ],

        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-ng-html2js-preprocessor'
        ],

        reporters: ['progress'],

        preprocessors: {
            'app/templates/*.html': ['ng-html2js']
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: 'app/',
            moduleName: 'templates'
        },

        singleRun: true

    });
};
