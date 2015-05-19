var cart = require('angular').module('cart', []);

cart.service('CartService', require('./services/cart'));

cart.controller('AddToCartController', require('./controllers/addToCart'));
cart.controller('CartController', require('./controllers/getCart'));

cart.directive('addToCartButton', require('./directives/addToCartButton'));

module.exports = cart.name;