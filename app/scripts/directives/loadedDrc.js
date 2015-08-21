'use strict';

ritoApp.directive('loadedImage', [
    '$timeout',
    function ($timeout) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {

                element.bind("load" , function (e) {
                    if (this.src !== 'images/loader.gif') {
                        $timeout(function () {
                            element[0].src = "http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/" + scope.chmp.image.full;
                        })
                    }
                });
            }
        }
}]);
