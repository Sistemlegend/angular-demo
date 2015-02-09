(function () {

    var app = angular.module('productDirectives', []);

    app.directive('productData', function() {
        return {
            restric: 'E',
            templateUrl: 'templates/product-data.html',
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
            controller: function() {
                var tab = 1;

                this.selectTab = function(value) {
                    tab = value;
                };

                this.isSelected = function(value) {
                    return tab == value;
                };
            },
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
            controller: function() {
                this.review = {};
                this.product;

                this.addReview = function() {
                    this.product.reviews.push(this.review);
                    this.review = {};
                };
            },
            controllerAs: 'reviewCtrl',
            bindToController: true
        };
    });

})();