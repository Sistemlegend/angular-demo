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
        reviewController.addReview(product);
        expect(product.reviews.length).toBe(1);
    });

});