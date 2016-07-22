'use strict';

function ProfileCtrl($stateParams, $state, $filter, $log) {
	var vm = this;
    vm.showProfTiles = true;
    vm.showManageTiles = false;

   vm.profTiles = [
        {
            name: 'Notifications',
            image: 'images/Message.png'
        },
        {
            name: 'Personal Info',
            image: 'images/user.png'
        },
        {
            name: 'Set Up Home',
            image: 'images/House.png',
            state: 'setup'
        }
    ];
}

ProfileCtrl.$inject = ['$stateParams', '$state', '$filter', '$log'];

export default ProfileCtrl;
