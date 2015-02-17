(function () {

    var app = angular.module('productControllers', ['productServices']);

    app.controller('StoreController', function (ProductResource) {

        this.products = [];

        var that = this;
        ProductResource.query().then(
            function(data) {
                that.products = data;
            }
        );

    });

    app.controller('PanelController', function () {
        var tab = 1;

        this.selectTab = function (value) {
            tab = value;
        };

        this.isSelected = function (value) {
            return tab == value;
        };
    });

    app.controller('ReviewController', function () {
        this.review = {};
        this.product;

        this.addReview = function () {
            this.product.reviews.push(this.review);
            this.review = {stars: 1};
        };
    });

})();