var angular = require('angular');

var app = angular.module('store', [
    require('angular-material'),
    require('angular-resource'),
    require('angular-ui-router'),
    require('./products'),
    require('./toolbar/directives'),
    require('./cart')
]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('products', {
            url: '/',
            templateUrl: 'templates/products.html'
        })
        .state('cart', {
            url: '/cart',
            templateUrl: 'templates/cart.html'
        });
});
