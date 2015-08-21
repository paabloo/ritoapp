'use strict';

/* First login controller responsible for searching sources */

ritoApp.controller('ChampionController', [
  '$scope',
  '$timeout',
  'ChampionsService',
  '$stateParams',
  function ($scope, $timeout, ChampionsService, $stateParams) {

    $scope.loadingFinished = true;
    $scope.showContent = false;
    $scope.champion_id = $stateParams.championId;
    $scope.champion = {};

    $scope.getChampionDetails = function CC_getChampionDetails (champion_id) {
      //TODO check if integer
      if (champion_id === undefined) {
        champion_id = '';
      }
      $scope.loadingFinished = false;
      ChampionsService.getChampionsData(champion_id)
        .then(function (data) {
          $scope.champion = data;
          $scope.loadingFinished = true;
          $scope.showContentWithDelay();
          console.log(data);
        }, function (reason) {
          console.log(reason);
          $scope.loadingFinished = true;
          $scope.showContent = true;
        });
    }

    $scope.showContentWithDelay = function CC_showContentWithDelay () {
      $timeout(function () {
        $scope.showContent = true;
      }, 500);
    }

    $scope.getChampionDetails($scope.champion_id);

}])
