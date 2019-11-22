
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
  framework: 'jasmine2',

  sauceUser:'Sruthi25',
  sauceKey: 'ff04aef7-531f-4a36-8895-68b4023d2342',
  sauceSeleniumAddress:'ondemand.saucelabs.com:443/wd/hub',


  multiCapabilities: [
    {
      browserName: "chrome",
      specs: ['../src/specs/BKV-363_FH-TC-06.js'],
      platform: 'Windows 10',
      version: '78.0',
      name: 'Chrome'

    },
    {
      browserName: "safari",
      specs: ['../src/specs/BKV-363_FH-TC-06.js'],
      platform: 'macOS 10.14',
      version: '12.0',
      name: 'Safari'

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
