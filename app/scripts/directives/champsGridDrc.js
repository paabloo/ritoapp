'use strict';

ritoApp.directive('champsGrid', [
    function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/drcPartials/champsGridDrcTpl.html',
            link: function (scope, element, attrs) {
                console.log('link function');
            }
        }
}]);
