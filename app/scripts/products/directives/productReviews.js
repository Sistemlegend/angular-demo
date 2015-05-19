module.exports = function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/product-reviews.html',
        scope: {
            product: '='
        }
    };
};