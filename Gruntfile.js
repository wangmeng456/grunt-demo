module.exports = function(grunt){
  grunt.initConfig({
    less:{
      compile:{
        files:{'dist/compiled.css':'css/*.less'}
      }
    }
  });//插件构建的具体配置信息

  grunt.loadNpmTasks('grunt-contrib-less');//加载插件

  grunt.registerTask('default',['less:compile']);//构建任务清单
}
