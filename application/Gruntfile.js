module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
        }
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

  grunt.registerTask('deps', ['wiredep']);

  grunt.registerTask('default', ['jshint']);

};