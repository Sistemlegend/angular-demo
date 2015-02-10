describe('ReviewController', function () {

    var reviewController;

    beforeEach(module('productControllers'));

    beforeEach(inject(function ($controller) {
        reviewController = $controller('ReviewController');
    }));

    it('Should be defined', function () {
        expect(reviewController).toBeDefined();
    });

    it('Should define review', function() {
        expect(reviewController.review).toBeDefined();
    });

    it('should add review to product', function() {
        reviewController.review.stars = 2;
        reviewController.product = {reviews: []};

        reviewController.addReview();

        expect(reviewController.product.reviews.length).toBe(1);
        expect(angular.equals({},reviewController.review)).toBeTruthy();
    });

});