module.exports = function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var formName = attrs.name;
            element.on('submit', function () {
                scope[formName].$setPristine();
                scope[formName].$setUntouched();
            });
        }
    };
};