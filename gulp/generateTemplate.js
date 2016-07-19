'use strict';

var gulp = require('gulp');
var minifyHtml = require("gulp-minify-html");
var ngHtml2Js = require('gulp-ng-html2js');
var concat = require("gulp-concat");
var wrap = require("gulp-wrap");
var gutil = require('gulp-util');
var gulpStripCode = require('gulp-strip-code');
var gulpIf = require('gulp-if');
var yargs = require('yargs');

module.exports = function(glob, prefix, moduleName, destination) {
    return function() {
        return gulp.src(glob)
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true,
            loose: false
        }))
        .pipe(ngHtml2Js({
            template: "    $templateCache.put('<%= template.url %>', '<%= template.escapedContent %>');",
            prefix: prefix
        }))
        .pipe(concat(moduleName + '.js'))
        .pipe(wrap({ src: './gulp/ng-html2js-template.js' }, { moduleName: moduleName }))
        .on('error', gutil.log)
        .pipe(gulp.dest(destination));
    }
};
