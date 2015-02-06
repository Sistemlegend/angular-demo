(function () {
    var app = angular.module('store', ['ngMaterial']);

    var gems = [
        {name: 'Ruby', image: '/images/ruby.png', price: 102.95, canPurchase: true, soldOut: true},
        {name: 'Diamond', image: '/images/diamond.png', price: 200, canPurchase: false, soldOut: false},
        {name: 'Emerald', image: '/images/emerald.png', price: 150.5, canPurchase: true, soldOut: false}
    ];

    app.controller('StoreController', function () {

        this.products = gems;

    });
})();