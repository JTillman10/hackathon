'use strict';

import _ from 'lodash';

function ScanCtrl($stateParams, $state, $filter, $log, $rootScope) {
	var vm = this;

    vm.appliances = $rootScope.appliances;
    vm.remove = remove;

    function remove(app) {
        _.remove($rootScope.appliances, {
            name: app.name
        });
    }

}

ScanCtrl.$inject = ['$stateParams', '$state', '$filter', '$log', '$rootScope'];

export default ScanCtrl;
