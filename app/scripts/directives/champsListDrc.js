'use strict';

ritoApp.directive('champsList', [
    function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/drcPartials/champsListDrcTpl.html',
            link: function (scope, element, attrs) {
                console.log('link function');
            }
        }
}]);
