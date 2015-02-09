describe('ReviewController', function () {

    var $rootScope;
    var reviewController;

    beforeEach(module('store'));
    beforeEach(module('templates'));

    beforeEach(inject(function ($compile, _$rootScope_) {
        $rootScope = _$rootScope_;
        $rootScope.product = {reviews: []};
        var element = $compile('<review-form product=product></review-form>')($rootScope);
        $rootScope.$digest();
        reviewController = element.controller('reviewForm');
    }));

    it('Should be defined', function () {
        expect(reviewController).toBeDefined();
    });

    it('Should define review', function() {
        expect(reviewController.review).toBeDefined();
    });

    it('should add review to product', function() {
        reviewController.review.stars = 2;

        reviewController.addReview();

        expect($rootScope.product.reviews.length).toBe(1);
        expect(angular.equals({},reviewController.review)).toBeTruthy();
    });

});