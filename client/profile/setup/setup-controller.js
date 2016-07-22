'use strict';

function SetupCtrl($stateParams, $state, $filter, $log) {
	var vm = this;
    vm.showManageTiles = false;

     vm.manageTiles = [
        {
            name: 'Scan',
            state: 'scan',
            image: 'images/Scanner.png'
        },
        {
            name: 'Manually Select',
            state: 'select',
            image: 'images/Wrench.png'
        }
    ];
}

SetupCtrl.$inject = ['$stateParams', '$state', '$filter', '$log'];

export default SetupCtrl;
