describe('CartController', function () {

    var cartController;
    var cartServiceMock;

    beforeEach(module('cart'));

    beforeEach(module(function ($provide) {
        $provide.service('CartService', function () {
            this.getCart = jasmine.createSpy('getCart').and.returnValue([]);
        });
    }));

    beforeEach(inject(function ($controller, _CartService_) {
        cartController = $controller('CartController');
        cartServiceMock = _CartService_;
    }));

    it('should be defined', function () {
        expect(cartController).toBeDefined();
    });

    it('should call getCart on service', function () {
        var cart = cartController.getCart();
        expect(cart).toBeDefined();
        expect(cartServiceMock.getCart).toHaveBeenCalled();
    });

});
