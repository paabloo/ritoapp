'use strict';

ritoApp.service('EnvironmentService', [
    '$state',
  function ($state) {

    // this.whatever - public methods of the function
    this.domainName = 'https://global.api.pvp.net/api/lol';
    this.serverLocalisation = 'eune';
    this.apiKey = '70da3bdb-92c5-4881-b0e0-163d97e74f06';

    this.checkErrorStatus = function ENV_checkErrorStatus (status) {
        if (status === 404) {
            console.info('not found');
            // $state.go('homeState');
        }
    }

}]);
