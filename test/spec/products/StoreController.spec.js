describe('StoreController', function () {

    var $rootScope;
    var storeController, deferredData;

    beforeEach(module('products'));

    beforeEach(module(function ($provide) {
        $provide.service('ProductResource', function ($q) {
            this.query = function () {
                deferredData = $q.defer();
                deferredData.resolve([{}, {}]);
                return deferredData.promise;
            };
        });
    }));

    beforeEach(inject(function ($controller, _$rootScope_) {
        $rootScope = _$rootScope_;
        storeController = $controller('StoreController');
    }));

    it('Should be defined', function () {
        expect(storeController).toBeDefined();
    });

    it('products should be defined', function () {
        expect(storeController.products).toBeDefined();
        expect(angular.isArray(storeController.products)).toBeTruthy();
        $rootScope.$digest();
        expect(storeController.products.length).toBe(2);
    });

});