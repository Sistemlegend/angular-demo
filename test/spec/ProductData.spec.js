describe('ProductData', function () {

    var $compile, $rootScope;

    beforeEach(module('store'));
    beforeEach(module('templates'));

    beforeEach(inject(function (_$compile_, _$rootScope_, $httpBackend) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $httpBackend.whenGET(/.*/).respond();
    }));

    it('should replace the element with the appropriate content', function () {
        $rootScope.product = {
            name: 'Ruby',
            image: '/images/ruby.png',
            price: 102.95
        };
        var element = $compile("<product-data product=product></product-data>")($rootScope);
        $rootScope.$digest();
        expect(element.find('h3').text()).toBe($rootScope.product.name);
        expect(element.find('h4').text()).toBe('$' + $rootScope.product.price);
    });

});
