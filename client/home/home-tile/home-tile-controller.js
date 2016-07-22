'use strict';

function HomeTileCtrl($stateParams, $state, $filter, $log) {
	var vm = this;

	if (vm.score < 33) {
		vm.color = 'danger';
    } else if (vm.score < 66) {
		vm.color = 'warning';
    } else {
		vm.color = 'info';
    }

}

HomeTileCtrl.$inject = ['$stateParams', '$state', '$filter', '$log'];

export default HomeTileCtrl;
