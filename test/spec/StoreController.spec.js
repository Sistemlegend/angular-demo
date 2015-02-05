describe('StoreController', function () {

    var storeController;

    beforeEach(module('store'));

    beforeEach(inject(function ($controller) {
        storeController = $controller('StoreController');
    }));


    it('Should be defined', function () {
        expect(storeController).toBeDefined();
    });

    it('product should be defined', function () {
        expect(storeController.product).toBeDefined();
    });

});

