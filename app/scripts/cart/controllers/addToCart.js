module.exports = function (CartService) {

    this.product;

    this.addToCart = function () {
        CartService.addToCart(this.product);
    };

};