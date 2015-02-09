(function () {
    var app = angular.module('store', ['ngMaterial']);

    var gems = [
        {
            name: 'Ruby',
            image: '/images/ruby.png',
            price: 102.95,
            description: 'The reddest ruby in the World!',
            specifications: 'None yet',
            reviews: 'None yet',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Diamond',
            image: '/images/diamond.png',
            price: 200,
            description: 'Diamonds are girls best friends.',
            specifications: 'None yet',
            reviews: 'None yet',
            canPurchase: false,
            soldOut: false
        },
        {
            name: 'Emerald',
            image: '/images/emerald.png',
            price: 150.5,
            description: 'Holy crap on a cracker, this emerald is ginormous!',
            specifications: 'None yet',
            reviews: 'None yet',
            canPurchase: true,
            soldOut: false
        }
    ];

    app.controller('StoreController', function () {

        this.products = gems;

    });

    app.controller('PanelController', function() {

        var tab = 1;

        this.selectTab = function(value) {
            tab = value;
        };

        this.isSelected = function(value) {
            return tab == value;
        };

    });
})();