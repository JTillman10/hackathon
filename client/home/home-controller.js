'use strict';

function HomeCtrl($stateParams, $state, $filter, $log, $rootScope) {
	var vm = this;
    vm.showTiles = true;

    vm.tiles = $rootScope.appliances;
    console.log("HOME TILES: " + vm.tiles);
}

HomeCtrl.$inject = ['$stateParams', '$state', '$filter', '$log', '$rootScope'];

export default HomeCtrl;
