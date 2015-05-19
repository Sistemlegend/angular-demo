module.exports = function ($resource) {

    this.query = function () {
        return $resource('data/gems.json').query().$promise;
    };

};