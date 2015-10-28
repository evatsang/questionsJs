// Karma configuration
// Generated on Sat Jul 11 2015 07:07:04 GMT+0800 (HKT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'js/lib/jquery.min.js',
      'js/lib/angular.min.js',
      'js/lib/*.js',
      'js/*.js',
      'js/**/*.js',

      'test/unit/*.js'
    ],


    // list of files to exclude
    exclude: [
	'C:/questionsJs/test/unit/filterTest.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'js/*.js': 'coverage',
      'js/controllers/*.js': 'coverage',
      'js/filters/*.js': 'coverage',
      'js/directives/*.js': 'coverage'
    },


     coverageReporter: {
        type : 'html',
        dir : 'coverage/'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-chrome-launcher',
//      'karma-firefox-launcher',
    ],

    //
    client: {
      captureConsole: true,
      mocha: {
        bail: true
      }
    }
  })
}
