(function () {
    var app = angular.module('store', [
        'ngMaterial',
        'ngResource',
        'ui.router',
        'productServices',
        'productControllers',
        'productDirectives',
        'toolbar',
        'cartDirectives',
        'checkoutControllers'
    ]);

    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('products', {
                url: '/',
                templateUrl: 'templates/products.html'
            })
            .state('checkout', {
                url: '/checkout',
                templateUrl: 'templates/checkout.html'
            });
    });

})();