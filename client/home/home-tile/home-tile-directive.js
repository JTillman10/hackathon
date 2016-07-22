'use strict';

function homeTile() {
  return {
    scope: {},
    bindToController: {
      name: '=',
      image: '=',
      score: '=',
      status: '='
    },
    restrict: 'E',
    templateUrl: 'home/home-tile/home-tile.tpl.html',
    controller: 'homeTileCtrl',
    controllerAs: 'homeTile',
  };
}

export default homeTile;