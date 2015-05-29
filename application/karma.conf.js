module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
 
    files: [
      'specs/*.js'
    ],

    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    browserDisconnectTimeout : 10000, // default 2000
    browserDisconnectTolerance : 1, // default 0
    browserNoActivityTimeout : 20000 //default 10000
  });
};
