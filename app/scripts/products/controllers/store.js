module.exports = function (ProductResource) {

    this.products = [];

    var that = this;
    ProductResource.query().then(
        function (data) {
            that.products = data;
        }
    );

};