(function () {
    var app = angular.module('store', ['ngMaterial']);

    var gems = [
        {
            name: 'Ruby',
            image: '/images/ruby.png',
            price: 102.95,
            description: 'The reddest ruby in the World!',
            specifications: 'None yet',
            canPurchase: true,
            soldOut: false,
            reviews: [
                {
                    stars: 5,
                    body: 'I love this product!',
                    author: 'pigna@esteco.com'
                },
                {
                    stars: 1,
                    body: 'This product sucks.',
                    author: 'miotto@esteco.com'
                }
            ]
        },
        {
            name: 'Diamond',
            image: '/images/diamond.png',
            price: 200,
            description: 'Diamonds are girls best friends.',
            specifications: 'None yet',
            canPurchase: false,
            soldOut: false,
            reviews: [
                {
                    stars: 5,
                    body: 'Cannot live without diamonds!',
                    author: 'ricco@esteco.com'
                }
            ]
        },
        {
            name: 'Emerald',
            image: '/images/emerald.png',
            price: 150.5,
            description: 'Holy crap on a cracker, this emerald is ginormous!',
            specifications: 'None yet',
            canPurchase: true,
            soldOut: false,
            reviews: [
                {
                    stars: 3,
                    body: 'Meh...',
                    author: 'segatto@esteco.com'
                },
                {
                    stars: 2,
                    body: 'It\'s tiny!',
                    author: 'piove@esteco.com'
                }
            ]
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

    app.controller('ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
            product.reviews.push(this.review);
        };
    });
})();