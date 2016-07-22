'use strict';

import profileTileDirective from './profile-tile-directive';
import profileTileController from './profile-tile-controller';

angular.module('profileTileModule', [
    'ui.router',
    'ngResource'
  ])
  .directive('profileTile', profileTileDirective)
  .controller('profileTileCtrl', profileTileController)

export default angular.module('profileTileModule');