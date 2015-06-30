class AddToCartController {

    constructor(CartService) {
        this.CartService = CartService;
    }

    addToCart() {
        this.CartService.addToCart(this.product);
    }

}

export {AddToCartController}