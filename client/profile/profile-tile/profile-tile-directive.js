'use strict';

function profileTile() {
  return {
    scope: {},
    bindToController: {
      name: '=',
      state: '='
    },
    restrict: 'E',
    templateUrl: 'profile/profile-tile/profile-tile.tpl.html',
    controller: 'profileTileCtrl',
    controllerAs: 'profileTile',
  };
}

export default profileTile;