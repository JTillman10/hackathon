var angular = require('angular');

try {
  var templateModule = angular.module("<%= moduleName %>");
} catch (e) {
  var templateModule = angular.module("<%= moduleName %>", []);
}

templateModule.run(['$templateCache', function($templateCache) {

<%= contents %>

}]);

module.exports = templateModule;
