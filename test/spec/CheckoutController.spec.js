describe('CheckoutController', function () {

    var checkoutController;
    var cartServiceMock;

    beforeEach(module('checkoutControllers'));

    beforeEach(module(function ($provide) {
        $provide.service('CartService', function () {
            this.getCart = jasmine.createSpy('getCart').and.returnValue([]);
        });
    }));

    beforeEach(inject(function ($controller, _CartService_) {
        checkoutController = $controller('CheckoutController');
        cartServiceMock = _CartService_;
    }));

    it('should be defined', function () {
        expect(checkoutController).toBeDefined();
    });

    it('should call getCart on service', function () {
        var cart = checkoutController.getCart();
        expect(cart).toBeDefined();
        expect(cartServiceMock.getCart).toHaveBeenCalled();
    });

});
