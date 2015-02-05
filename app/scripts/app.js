(function () {
    var app = angular.module('store', ['ngMaterial']);

    var gem = {name: 'Azurite', image: '/images/azurite.png', price: 2.95};

    app.controller('StoreController', function () {

        this.product = gem;

    });
})();