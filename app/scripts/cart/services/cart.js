class Cart {

    constructor() {
        this.cart = {};
    }

    addToCart(product) {
        if (angular.isUndefined(this.cart[product.name])) {
            this.cart[product.name] = {product: product, quantity: 0};
        }
        this.cart[product.name].quantity++;
    }

    getCart() {
        var cartContent = [];
        for (var key in this.cart) {
            cartContent.push(this.cart[key]);
        }
        return cartContent;
    }

}

export {Cart}