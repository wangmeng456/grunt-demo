/* global module: true */
module.exports = function(grunt){
  grunt.initConfig({
    eslint:{
      options:{
        eslintrc:'./.eslintrc.json'
      },
      target: ['*.js']
    }
  });//插件构建的具体配置信息

  grunt.loadNpmTasks('grunt-eslint');//加载插件

  grunt.registerTask('default',['eslint']);//构建任务清单
};
