'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var babelify = require('babelify');
var browserSync = require('browser-sync');
var Server = require('karma').Server;
var url = require('url');
var config = require('./build.config');
var proxy = require('proxy-middleware');
var yargs = require('yargs');
var sass = require('gulp-sass');
var filter = require('gulp-filter');
var path = require('path');
var concat = require('gulp-concat');
var del = require('del');
var inject = require('gulp-inject');
var angularFileSort = require('gulp-angular-filesort');
var rev = require('gulp-rev');
var cssRebaseUrls = require('gulp-css-rebase-urls');
var gulpIf = require('gulp-if');
var generateTemplate = require('./gulp/generateTemplate');
config.appStyleFiles = path.join(config.appDir, '**/*.{css,less,scss,styl}');
config.appImageFiles = path.join(config.appDir, 'images/**/*');
config.appFontFiles = path.join(config.appDir, 'fonts/**/*');
config.appScriptFiles = path.join(config.appDir, '**/*.js');
config.unitTestFiles = path.join(config.unitTestDir, '**/*_test.js');

var isProxyActive = yargs.argv.proxy ? true : false;
var isProd = yargs.argv.stage === 'prod';
var diagnostics = yargs.argv.diag ? true : false;

gulp.task('browserSync', function () {
  var middleware = [require('./backend')],
    proxyOptions;
  if (isProxyActive) {
    proxyOptions = url.parse(config.remotePath);
    proxyOptions.route = config.localPath;

    middleware = proxy(proxyOptions);
    console.log('Using proxy address: ' + config.remotePath);
  }

  browserSync.init({
    browser: ['google chrome'],
    server: {
      baseDir: config.buildDir,
      middleware: middleware
    }
  });
});

gulp.task('build-dependencies', ['clean'], function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    debug: true,
    transform: [require('browserify-shim')]
  });

  // b.require() all the 3rd party dependencies here
  b.require('angular');
  b.require('angular-ui-router');
  b.require('angular-http-auth');
  b.require('ng-idle');
  b.require('angular-cookies');
  b.require('angular-resource');
  b.require('angular-ui-grid');
  b.require('angular-ui-mask');
  b.require('angular-ui-bootstrap');
  b.require('angular-animate');
  b.require('angular-cache');
  b.require('lodash');

  return b.bundle()
    .pipe(source('dependencies.js'))
    .pipe(buffer())
    //.pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(gulpIf(isProd, uglify({output:{ascii_only:true}})))
        .on('error', gutil.log)
        .pipe(gulpIf(isProd, rev()))
    //.pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.buildJs));
});

gulp.task('build-app',[
    'clean', 'stage', 'landing-templates',
    'home-templates', 'auto-templates', 'profile-templates'
  ], function () {

  // set up the browserify instance on a task basis
  var b = browserify({
    entries: config.stageDir + '/app.js',
    debug: true,
    bundleExternal: false,
    // defining transforms here will avoid crashing your stream
    transform: [babelify]
  });

  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    //.pipe(sourcemaps.init({loadMaps: true}))
    // Add transformation tasks to the pipeline here.
    .pipe(gulpIf(isProd, uglify()))
    .pipe(gulpIf(isProd, rev()))
    .on('error', gutil.log)
    //.pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.buildJs));
});

gulp.task('images', ['clean'], function () {
  return gulp.src(config.appImageFiles)
    .pipe(gulp.dest(config.buildImages));
});

gulp.task('styles', ['clean', 'bootstrapCss', 'bootstrapJs'], function () {
  var scssFilter = filter('**/*.scss');
  return gulp.src([
      config.appStyleFiles
    ])
    //.pipe(scssFilter)
    .pipe(sass({errLogToConsole: true}))
    .pipe(concat('bundle.css'))
    .pipe(gulpIf(isProd, cssRebaseUrls()))
    .pipe(gulpIf(isProd, rev()))
    .pipe(gulp.dest(config.buildCss));
});

gulp.task('appFonts', ['clean'], function () {
  return gulp.src(config.appFontFiles)
    .pipe(gulp.dest(config.buildFonts));
});

gulp.task('html', ['clean'], function () {
  return gulp.src(['./client/**/*.html', '!./client/**/*.tpl.html'])
    .pipe(gulp.dest(config.buildDir));
});

gulp.task('vendorFonts', ['clean'], function () {
  return gulp.src('./node_modules/**/*.{eot,svg,ttf,woff}')
    .pipe(gulp.dest(config.buildFonts));
});

gulp.task('vendorStyles', ['clean'], function () {
  return gulp.src('./node_modules/**/*.{css,less,scss}')
    .pipe(concat('vendorCss.css'))
    .pipe(gulpIf(isProd, cssRebaseUrls()))
    .pipe(gulpIf(isProd, rev()))
    .pipe(gulp.dest(config.buildCss));
});

gulp.task('bootstrapCss', function() {
  return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest(config.buildCss));
});

gulp.task('bootstrapJs', ['jQuery'], function() {
  return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest(config.buildJs));
});

gulp.task('jQuery', function() {
  return gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest(config.buildJs));
});

gulp.task('stage', ['clean'], function () {
  return gulp.src('./client/**/*.js')
    .pipe(gulp.dest(config.stageDir));
});

gulp.task('landing-templates', ['clean'], generateTemplate(
  config.appDir + '/landing/**/*.tpl.html',
  'landing/',
  'landing.ngTemplates',
  config.stageDir + '/landing/templates'
));

gulp.task('home-templates', ['clean'], generateTemplate(
  config.appDir + '/home/**/*.tpl.html',
  'home/',
  'home.ngTemplates',
  config.stageDir + '/home/templates'
));

gulp.task('auto-templates', ['clean'], generateTemplate(
  config.appDir + '/auto/**/*.tpl.html',
  'auto/',
  'auto.ngTemplates',
  config.stageDir + '/auto/templates'
));

gulp.task('profile-templates', ['clean'], generateTemplate(
  config.appDir + '/profile/**/*.tpl.html',
  'profile/',
  'profile.ngTemplates',
  config.stageDir + '/profile/templates'
));

gulp.task('build', ['build-dependencies', 'build-app', 'html', 'styles', 'vendorStyles', 'appFonts', 'inject', 'images', 'vendorFonts'], function () {
});

gulp.task('watch', function () {
  gulp.watch(['./client/**/*.html', '!./client/**/*.tpl.html'], ['html', 'styles']);
  gulp.watch(['./client/**/*.js', './client/**/*.tpl.html'], ['build-app', 'styles']);
  gulp.watch(['./client/styles/**/*.{css,less,scss,styl}'], ['styles']);
  gulp.watch(config.buildDir + '/**/*', browserSync.reload);
});

gulp.task('inject', ['build-app', 'styles'], function () {
  var jsFilter = filter('**/*.js', {restore: true});

  return gulp.src([config.buildDir + '/*.html'])
    .pipe(inject(gulp.src([
        config.buildCss + '**/*',
        config.buildJs + '**/*'
      ])
      .pipe(jsFilter)
      .pipe(angularFileSort())
      .pipe(jsFilter.restore),
      {
        ignorePath: 'build/client',
        addRootSlash: false
      }
    ))
    .pipe(gulp.dest(config.buildDir));
});

gulp.task('dev', ['build'], function () {
  gulp.start('browserSync');
  gulp.start('watch');
});

gulp.task('unitTest', ['build-app'], function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }).start();

  //new Server({
  //  configFile: __dirname + '/karma.conf.js',
  //  singleRun: true
  //}, function(code) {
  //if (code == 1){
  //    console.log('Unit Test failures, exiting process');
  //  } else {
  //    console.log('Unit Tests passed');
  //  }
  //}, done).start();
});

gulp.task('tdd', ['build-app'], function (done) {
  gulp.watch(['./client/**/*.js'], ['build-app']);

  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('clean', function (cb) {
  if (!isProd) {
    cb();
    return;
  }
  return del(config.outDir, cb);
});

gulp.task('default', ['clean' ,'dev']);
//gulp.task('default', ['clean', 'analyze', 'dev']);

gulp.task('userChange', [], function () {
  gulp.start('browserSync');
  gulp.start('watch');
});
