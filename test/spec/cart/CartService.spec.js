describe('CartService', function() {

    var CartService;

    beforeEach(module('cartServices'));

    beforeEach(inject(function (_CartService_) {
        CartService = _CartService_;
    }));

    it('should be defined', function() {
        expect(CartService).toBeDefined();
    });

    it('should add product to cart', function() {
        var product = {name: 'Ruby'};
        var expectedCart = [{product: product, quantity: 2}];
        CartService.addToCart(product);
        CartService.addToCart(product);
        var cart = CartService.getCart();
        expect(angular.equals(expectedCart, cart)).toBeTruthy();
    });

});
