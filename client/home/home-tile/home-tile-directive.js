'use strict';

function homeTile() {
  return {
    scope: {},
    bindToController: {
      name: '='
    },
    restrict: 'EA',
    templateUrl: 'home/home-tile/home-tile.tpl.html',
    controller: 'homeTileCtrl',
    controllerAs: 'homeTile',
  };
}

export default homeTile;