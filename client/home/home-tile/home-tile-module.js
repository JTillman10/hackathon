'use strict';

import homeTileDirective from './home-tile-directive';
import homeTileController from './home-tile-controller';

angular.module('homeTileModule', [
    'ui.router',
    'ngResource'
  ])
  .directive('homeTile', homeTileDirective)
  .controller('homeTileCtrl', homeTileController)

export default angular.module('homeTileModule');