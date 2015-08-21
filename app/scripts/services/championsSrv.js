'use strict';

ritoApp.service('ChampionsService', [
  '$q',
  'ChampionsFactory',
  function ($q, ChampionsFactory) {

    var remapData = function CS_remapData (argument) {
      var temp = [];
      var dataArray = [];
      for (var key in argument.data) {
        temp.push(key);
      }
      temp = temp.sort();
      for (key = 0;key < temp.length;key++) {
        var obj = argument.data[temp[key]];
        dataArray.push(obj)
      }
      return dataArray;
    }

    var getChampionsData = function CS_getChampionsData (champion_id) {
      var deferred = $q.defer();
      ChampionsFactory.getChampions(champion_id)
        .then(function (data) {
          data.data = remapData(data);
          deferred.resolve(data);
          return deferred;
        }, function (reason) {
          deferred.reject(reason)
        })
      return deferred.promise;
    }

    return {
      getChampionsData: getChampionsData
    }
}]);
