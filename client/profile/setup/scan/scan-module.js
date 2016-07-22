'use strict';

import scanController from './scan-controller';

angular.module('scanModule', [
    'ui.router',
    'ngResource'
  ])
  .controller('ScanCtrl', scanController);

export default angular.module('scanModule');