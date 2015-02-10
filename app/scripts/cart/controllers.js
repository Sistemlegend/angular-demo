(function() {

    var app = angular.module('cartControllers', ['cartServices']);

    app.controller('AddToCartController', function(CartService) {

        this.product;

        this.addToCart = function() {
            CartService.addToCart(this.product);
        };

    });

    app.controller('CartController', function(CartService) {

        this.getCart = function () {
            return CartService.getCart();
        };

    });

})();
