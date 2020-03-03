/* global module: true */
module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options:{
        removeComments:true,
        collapseWhitespace: true
      },
      file:{
        src:'./index.html',
        dest:'dest/index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin')

  grunt.registerTask('default',['htmlmin']);
};

