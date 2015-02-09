describe('ProductResource', function() {

    var $httpBackend;
    var ProductResource;

    beforeEach(module('productServices'));

    beforeEach(inject(function(_ProductResource_, _$httpBackend_) {
        ProductResource = _ProductResource_;
        $httpBackend = _$httpBackend_;
    }));

    it('should be defined', function() {
        expect(ProductResource).toBeDefined();
    });

    it('should return gems', function() {
        $httpBackend.whenGET('data/gems.json').respond('[{},{}]');
        $httpBackend.expectGET('data/gems.json');
        var gems = [];
        ProductResource.query().then(function(data) {
            gems = data;
        });
        $httpBackend.flush();
        expect(gems.length).toBe(2);
    });

});
