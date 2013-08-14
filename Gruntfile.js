
module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concat: {
      scripts: {
        src:[
          'scripts/shape-shifter.js',
          'scripts/drawing.js',
          'scripts/point.js',
          'scripts/color.js',
          'drawing.js',
          'scripts/ui.js',
          'scripts/ui-tabs.js',
          'scripts/dot.js',
          'scripts/shape-builder.js',
          'scripts/shape.js'
        ],
        dest: 'release/shape-shifter.js'
      }
    },

    watch: {
      scripts: {
        files: ['scripts/*.js'],
        tasks: ['clean:scripts', 'jshint', 'concat']
      },
      css: {
        files: ['styles/*.css'],
        tasks: ['clean:css', 'cssmin']
      }
    },

    clean: {
      scripts: ['release/*.js'],
      css: ['release/*.css']
    },

    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      combine: {
        files: {
          'release/site.min.css': ['styles/*.css']
        }
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'scripts/*.js']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('release', ['clean', 'cssmin', 'jshint', 'concat']);

};
