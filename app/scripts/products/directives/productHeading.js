module.exports = function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/product-heading.html',
        transclude: true,
        scope: {
            image: '@',
            name: '@',
            price: '@'
        }
    };
};