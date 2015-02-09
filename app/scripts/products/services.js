(function () {
    var app = angular.module('productServices', ['ngResource']);

    app.service('ProductResource', function($resource) {

        this.query = function() {
            return $resource('data/gems.json').query().$promise;
        };

    });

})();
