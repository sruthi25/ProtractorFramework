var EC = require('protractor').ExpectedConditions;
browser.waitForAngularEnabled(false);
describe('benekiva website', function () {

  it('title', function () {

    browser.get('https://the-internet.herokuapp.com/windows');
    browser.sleep(10000);

    browser.getAllWindowHandles().then(function (windows) {
      console.log(`no of windows is ${windows.length}`)
      console.log(`no of windows is ${windows[0]}`);
      console.log(`no of windows is ${windows[1]}`);

    });

    element(by.linkText('Click Here')).click();


  });



})