(function() {

    var app = angular.module('cartControllers', ['cartServices']);

    app.controller('CartController', function(CartService) {

        this.product;

        this.addToCart = function() {
            CartService.addToCart(this.product);
        };

    });

})();
