module.exports = function () {

    var cart = {};

    this.addToCart = function (product) {
        if (angular.isUndefined(cart[product.name])) {
            cart[product.name] = {product: product, quantity: 0};
        }
        cart[product.name].quantity++;
    };

    this.getCart = function () {
        var cartContent = [];
        for (var key in cart) {
            cartContent.push(cart[key]);
        }
        return cartContent;
    };

};
