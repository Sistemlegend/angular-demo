///<reference path="../../../app/typings/angularjs/angular.d.ts"/>

declare var require:any;

import QueryProduct = require('./services/queryProduct')

var products = angular.module('products',[require('angular-resource')]);

products.service('ProductResource', ['$resource', QueryProduct]);

products.controller('StoreController', require('./controllers/store'));
products.controller('PanelController', require('./controllers/tab'));
products.controller('ReviewController', require('./controllers/review'));

products.directive('productHeading', require('./directives/productHeading'));
products.directive('productPanels', require('./directives/productPanels'));
products.directive('productReviews', require('./directives/productReviews'));
products.directive('reviewForm', require('./directives/reviewForm'));
products.directive('resetOnSubmit', require('./directives/resetOnSubmit'));

export var name = products.name;