'use strict';

function HomeCtrl($stateParams, $state, $filter, $log, $rootScope) {
	var vm = this;
    vm.showTiles = true;

    vm.tiles = $rootScope.appliances;
}

HomeCtrl.$inject = ['$stateParams', '$state', '$filter', '$log', '$rootScope'];

export default HomeCtrl;
