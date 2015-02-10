
(function() {

    var app = angular.module('checkoutControllers', ['cartServices']);

    app.controller('CheckoutController', function(CartService) {

        this.getCart = function () {
            return CartService.getCart();
        };

    });

})();