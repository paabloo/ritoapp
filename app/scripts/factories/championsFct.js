'use strict';

ritoApp.factory('ChampionsFactory', [
  '$http',
  '$q',
  'EnvironmentService',
  function ($http, $q, Env) {

    var getChampions = function CF_getChampions (champion_id) {
      var champion_params = "";
      if (champion_id) {
        champion_params += "champData=all&"
      } else {
        champion_params += "champData=image&"
      }
      var deferred = $q.defer();
      $http({
        method: 'get',
        url: Env.domainName + '/static-data/' + Env.serverLocalisation + '/v1.2/champion/' + champion_id + '?' + champion_params + 'api_key=' + Env.apiKey,
        cache: true
      })
        .success(function (data, status) {
          deferred.resolve(data);
          return data;
        })
        .error(function (data, status, headers, config) {
          console.error('ChampionsFactory error', data);
          Env.checkErrorStatus(status);
          deferred.reject(status);
          return data;
        })
      return deferred.promise;
    }

    return {
      getChampions: getChampions
    }

}]);
