(function () {

    var app = angular.module('productDirectives', ['productControllers']);

    app.directive('productHeading', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-heading.html',
            scope: {
                product: '='
            }
        };
    });

    app.directive('productPanels', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-panels.html',
            scope: {
                product: '='
            },
            controller: 'PanelController',
            controllerAs: 'panelCtrl'
        };
    });

    app.directive('productReviews', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-reviews.html',
            scope: {
                product: '='
            }
        };
    });

    app.directive('reviewForm', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/review-form.html',
            replace: true,
            scope: {
                product: '='
            },
            controller: 'ReviewController',
            controllerAs: 'reviewCtrl',
            bindToController: true
        };
    });

})();