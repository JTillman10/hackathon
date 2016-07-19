'use strict';

var outDir = './build';

module.exports = {
  host: 'localhost',
  port: 3000,

  // To avoid cross-domain errors when calling our backend REST services via AJAX,
  // when developing locally, we use a local path as a proxy/alias.
  // Sample local path: http://localhost:9080/aspRest/rest/autocomplete/plans
  // Sample server path: http://newdcd1-dev1.nwie.net/rpws/rest/autocomplete/plans
  //restApiRemotePath: 'http://newdcd3-dev4.nwie.net',
  remotePath: 'http://localhost:9080/hackathon',
  localPath: '/hackathon',
  //serverEnvPath: 'https://newdcd3-dev4.nwie.net/rpws/rest',

  // app directories
  appDir: './client',

  // unit test directories
  unitTestDir: './client',

  outDir: outDir,

  // staging directories
  stageDir: outDir + '/stage-app',

  // build test dir
  buildTestDir: outDir + '/test',

  // build directories
  buildDir: outDir + '/client',
  buildCss: outDir + '/client/css',
  buildFonts: outDir + '/client/fonts',
  buildImages: outDir + '/client/images',
  buildJs: outDir + '/client/js',
  extDir: outDir + '/client/vendor',
  extCss: outDir + '/client/vendor/css',
  extFonts: outDir + '/client/vendor/fonts',
  extJs: outDir + '/client/vendor/js'
};
