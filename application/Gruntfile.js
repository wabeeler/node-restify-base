module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['src/**/*.js', 'specs/**/*.js'],
      options: {
        globals: {
        }
      }
    },

    karma: {
        unit: {
            configFile: 'karma.conf.js',
            singleRun: true
        }
    },

    wiredep: {
      target: {
        src: 'index.html' // point to your HTML file.
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('test', [
    'jshint',
    'karma'
  ]);

  grunt.registerTask('deps', ['wiredep']);

  grunt.registerTask('default', ['jshint']);

};