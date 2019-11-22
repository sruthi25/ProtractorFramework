module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: [
      'log/*.log',
      'reports/'
    ],

    mkdir: {
      options:{
        mode:766,
        create:[
          'log',
          'reports'
        ]
      },
      target: {
      }
    },

    run_executables: {
      launchReport: {
        cmd: 'Resources/launchReport.bat'
      }
    },


    protractor: {
      options: {
        configFile: "configurations/confLocal.js", // Default config file
        keepAlive: false, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        args: {
          // Arguments passed to the command
        }
      },
      runLocalConf: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
        options: {
          configFile: "configurations/confLocal.js", // Target-specific config file
          args: {} // Target-specific arguments
        }
      },

      runSauceConf: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
        options: {
          configFile: "configurations/confSauceLabs.js", // Target-specific config file
          args: {} // Target-specific arguments
        }
      },
    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-run-executables');

  // Default task(s).
  grunt.registerTask('local', ['clean', 'mkdir','protractor:runLocalConf','run_executables:launchReport']);
  grunt.registerTask('saucelabs', ['clean', 'mkdir','protractor:runSauceConf','run_executables:launchReport']);

};