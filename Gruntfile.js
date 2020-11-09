/* global module,require */
module.exports = function (grunt) {
  'use strict'

  var pkg = grunt.file.readJSON('package.json')

  grunt.initConfig({
    pkg: pkg,

    jshint: {
      options: {
        'esversion': 6
      },
      build: [
        'src/index.js',
        'src/ARnft.js',
        'src/utils/Utils.js',
        'src/utils/html/Container.js'
      ]
    }


  })

  grunt.loadNpmTasks('grunt-contrib-jshint')
}
