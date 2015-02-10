(function() {
    var app = angular.module('toolbar', []);

    app.directive('aboutButton', function() {
        return {
            restrict: 'E',
            template: '<md-button ng-click="aboutCtrl.showDialog()">About</md-button>',
            controller: function($mdDialog) {
                this.showDialog  = function(ev) {
                    $mdDialog.show({
                        templateUrl: 'templates/about-dialog.html',
                        targetEvent: ev,
                        controller: function($scope) {
                            $scope.hide = function() {
                                $mdDialog.hide();
                            };
                        }
                    });
                };
            },
            controllerAs: 'aboutCtrl'
        };
    });
})();
