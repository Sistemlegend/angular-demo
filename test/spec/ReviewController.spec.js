describe('ReviewController', function () {

    var reviewController;

    beforeEach(module('store'));

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
        var product = {reviews: []};
        reviewController.review.stars = 2;

        reviewController.addReview(product);

        expect(product.reviews.length).toBe(1);
        expect(angular.equals({},reviewController.review)).toBeTruthy();
    });

});