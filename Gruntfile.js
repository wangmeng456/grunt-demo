module.exports = function(grunt){
  grunt.initConfig({
    csslint:{
      options:{
        csslintrc:'./.csslintrc'
      },
      src: ['*.css']
    }
  });//插件构建的具体配置信息

  grunt.loadNpmTasks('grunt-contrib-csslint');//加载插件

  grunt.registerTask('default',['csslint']);//构建任务清单
};
