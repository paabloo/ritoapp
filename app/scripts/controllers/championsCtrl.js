'use strict';

/* First login controller responsible for searching sources */

ritoApp.controller('ChampionsController', [
  '$scope',
  '$timeout',
  'ChampionsService',
  function ($scope, $timeout, ChampionsService) {

    $scope.champ = {};
    $scope.loadingFinished = true;
    $scope.showContent = false;
    $scope.champNameFilter = '';
    $scope.displayMode = {
      grid: false,
      list: true
    }

    $scope.checkInput = function CSC_checkInput () {
      // console.log($scope.champNameFilter);
    }

    $scope.checkForReturnKey = function CSC_checkForReturnKey (keyUpEvent) {
      if (keyUpEvent.keyCode === 13) {
        $scope.getChampionsList($scope.champion_id);
      }
    };

    $scope.changeImage = function CSC_changeImage (imgId, imgName) {
      angular.element('#' + imgId).attr('src', 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/' + imgName);
    }

    $scope.getChampionsList = function CSC_getChampionsList (champion_id) {
      //TODO check if integer
      if (champion_id === undefined) {
        champion_id = '';
      }
      $scope.loadingFinished = false;
      ChampionsService.getChampionsData(champion_id)
        .then(function (data) {
          $scope.champ = data;
          $scope.loadingFinished = true;
          showContentDelay();
        }, function (reason) {
          $scope.loadingFinished = true;
        });
    }

    $scope.changeDisplayMode = function CC_changeDisplayMode (mode) {
      for (var key in $scope.displayMode) {
        $scope.displayMode[key] = false;
      }
      $scope.displayMode[mode] = true;
    }

    var showContentDelay = function CC_showContentDelay () {
      $timeout(function () {
        $scope.showContent = true;
      }, 1000);
    }

    $scope.getChampionsList('');

}])
