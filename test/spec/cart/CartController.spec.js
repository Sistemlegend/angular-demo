describe('CartController', function() {

    var cartController;
    var cartServiceMock;

    beforeEach(module('cartControllers'));

    beforeEach(module(function ($provide) {
        $provide.service('CartService', function() {
            this.addToCart = jasmine.createSpy('addToCart');
        });
    }));

    beforeEach(inject(function ($controller, _CartService_) {
        cartController = $controller('CartController');
        cartServiceMock = _CartService_;
    }));

    it('should be defined', function() {
        expect(cartController).toBeDefined();
    });

    it('should call addToCart on service', function() {
        cartController.product = {};
        cartController.addToCart();
        expect(cartServiceMock.addToCart).toHaveBeenCalledWith(cartController.product);
    });

});