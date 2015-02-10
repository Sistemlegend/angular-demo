(function() {

    var app = angular.module('cartDirectives', ['cartControllers']);

    app.directive('addToCartButton', function() {
        return {
            restrict: 'E',
            template: '<md-button ng-click="cartCtrl.addToCart()" ng-show="cartCtrl.product.canPurchase" class="md-primary md-raised">Add to Cart</md-button>',
            scope: {
              product: '='
            },
            controller: 'CartController',
            controllerAs: 'cartCtrl',
            bindToController: true
        };
    });

})();
