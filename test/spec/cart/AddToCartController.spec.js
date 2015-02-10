describe('AddToCartController', function() {

    var addToCartController;
    var cartServiceMock;

    beforeEach(module('cartControllers'));

    beforeEach(module(function ($provide) {
        $provide.service('CartService', function() {
            this.addToCart = jasmine.createSpy('addToCart');
        });
    }));

    beforeEach(inject(function ($controller, _CartService_) {
        addToCartController = $controller('AddToCartController');
        cartServiceMock = _CartService_;
    }));

    it('should be defined', function() {
        expect(addToCartController).toBeDefined();
    });

    it('should call addToCart on service', function() {
        addToCartController.product = {};
        addToCartController.addToCart();
        expect(cartServiceMock.addToCart).toHaveBeenCalledWith(addToCartController.product);
    });

});