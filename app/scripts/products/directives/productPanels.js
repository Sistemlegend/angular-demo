module.exports = function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/product-panels.html',
        scope: {
            product: '='
        },
        controller: 'PanelController',
        controllerAs: 'panelCtrl'
    };
};