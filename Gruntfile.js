module.exports = function(grunt){
  grunt.initConfig({
    htmlhint:{
      options:{
        htmlhintrc:'./.htmlhintrc'
      },
      src: ['*.html']
    }
  });//插件构建的具体配置信息

  grunt.loadNpmTasks('grunt-htmlhint');//加载插件

  grunt.registerTask('default',['htmlhint']);//构建任务清单
};
