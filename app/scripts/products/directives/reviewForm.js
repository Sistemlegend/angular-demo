module.exports = function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/review-form.html',
        replace: true,
        scope: {
            product: '='
        },
        controller: 'ReviewController',
        controllerAs: 'reviewCtrl',
        bindToController: true
    };
};
