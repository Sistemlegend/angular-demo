import angular from 'angular'

var cart = angular.module('cart', []);

import {Cart} from './services/cart'
import {AddToCartController} from './controllers/addToCart'

cart.service('CartService', Cart);

cart.controller('AddToCartController', AddToCartController);
cart.controller('CartController', require('./controllers/getCart'));

cart.directive('addToCartButton', require('./directives/addToCartButton'));

module.exports = cart.name;