
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  framework: 'jasmine2',

  directConnect: true,

  multiCapabilities: [
    {
      browserName: "chrome",
      specs: ['../src/specs/sampleTest.js'],
      name: 'Chrome'
    },
  ],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 500000,
  },

  onPrepare: function () {
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'reports/recent',
      takeScreenShotsOnlyForFailedSpecs: true,
      docTitle: 'Benekiva - Automation Test Report'
    }).getJasmine2Reporter());
  }
};
