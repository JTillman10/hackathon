'use strict';

function ProfileCtrl($stateParams, $state, $filter, $log) {
	var vm = this;
    vm.showProfTiles = true;
    vm.showManageTiles = false;

   vm.profTiles = [
        {
            name: 'Notifications',
            image: 'images/TriangleAlert.png'
        },
        {
            name: 'Personal Info',
            image: ''
        },
        {
            name: 'Set Up Home',
            image: '',
            state: 'setup'
        }
    ];
}

ProfileCtrl.$inject = ['$stateParams', '$state', '$filter', '$log'];

export default ProfileCtrl;
