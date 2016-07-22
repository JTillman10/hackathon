'use strict';

import applianceController from './appliance-controller';

angular.module('applianceModule', [
    'ui.router',
    'ngResource'
  ])
  .controller('ApplianceCtrl', applianceController)

export default angular.module('applianceModule');