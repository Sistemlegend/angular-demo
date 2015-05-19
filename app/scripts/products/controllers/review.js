module.exports = function () {
    this.review = {};
    this.product;

    this.addReview = function () {
        this.product.reviews.push(this.review);
        this.review = {stars: 1};
    };
};