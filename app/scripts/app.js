(function () {
    var app = angular.module('store', [
        'ngMaterial',
        'ngResource',
        'ui.router',
        'productServices',
        'productControllers',
        'productDirectives',
        'toolbar'
    ]);

    app.config(function($stateProvider, $urlRouterProvider) {
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

})();