(function() {

    var app = angular.module('cartDirectives', ['cartControllers']);

    app.directive('addToCartButton', function() {
        return {
            restrict: 'E',
            template: '<md-button ng-click="addToCartCtrl.addToCart()" ng-show="addToCartCtrl.product.canPurchase" class="md-primary md-raised">Add to Cart</md-button>',
            scope: {
              product: '='
            },
            controller: 'AddToCartController',
            controllerAs: 'addToCartCtrl',
            bindToController: true
        };
    });

})();
