(function () {
    var app = angular.module('store', ['ngMaterial']);

    var gems = [
        {name: 'Ruby', image: '/images/ruby.png', price: 102.95},
        {name: 'Diamond', image: '/images/diamond.png', price: 200},
        {name: 'Emerald', image: '/images/emerald.png', price: 150.5}
    ];

    app.controller('StoreController', function () {

    });
})();