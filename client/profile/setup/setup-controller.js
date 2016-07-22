'use strict';

function SetupCtrl($stateParams, $state, $filter, $log) {
	var vm = this;
    vm.showManageTiles = false;

     vm.manageTiles = [
        {
            name: 'Scan',
            state: 'scan'
        },
        {
            name: 'Manually Select',
            state: 'select'
        }
    ];
}

SetupCtrl.$inject = ['$stateParams', '$state', '$filter', '$log'];

export default SetupCtrl;
