'use strict';

function ScanCtrl($stateParams, $state, $filter, $log, $rootScope) {
	var vm = this;

    vm.appliances = $rootScope.appliances;

}

ScanCtrl.$inject = ['$stateParams', '$state', '$filter', '$log', '$rootScope'];

export default ScanCtrl;
