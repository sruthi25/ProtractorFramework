var extendedSeleniumActions = require('../../util/ExtendedSeleniumActions');

describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));

  beforeEach(function() {
    browser.get('https://juliemr.github.io/protractor-demo/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');

  });

  it('should add one and two',  async function() {
    extendedSeleniumActions.extendedSendKeys(firstNumber, "first Number", 1, 1000);
    extendedSeleniumActions.extendedSendKeys(secondNumber, "Second Number", 2, 1000);
    extendedSeleniumActions.extendedClick(goButton, "Go Button", 1000);
    browser.sleep(1000);
    expect(latestResult.getText()).toEqual('3');
  });

  it('should add four and six', function() {
    // Fill this in.
    expect(latestResult.getText()).toEqual('10');
  });

  it('should read the value from an input', function() {
    firstNumber.sendKeys(1);
    expect(firstNumber.getAttribute('value')).toEqual('1');
  });
});