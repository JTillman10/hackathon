'use strict';

import _ from 'lodash';

function ApplianceCtrl($stateParams, $state, $filter, $log, $rootScope) {
	var vm = this;
	vm.name = $stateParams.name;
	vm.app = _.find($rootScope.appliances, function(o) {
        return o.name === vm.name;
	});
	vm.details = vm.app.details;
	vm.services = vm.app.services;
}

ApplianceCtrl.$inject = ['$stateParams', '$state', '$filter', '$log', '$rootScope'];

export default ApplianceCtrl;
