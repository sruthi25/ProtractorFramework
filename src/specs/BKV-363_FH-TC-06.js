
var FHLoginPage = require('../pageModules/FH_scenario_LoginPage');

describe('BKV-363@F user quote a claim for contract F or bank', function () {


  it(' veryfying contract', function () { 
    browser.waitForAngularEnabled(false);
    browser.get('https://web.catalyst.myhomesteaders.com/UIS/Login.aspx?ReturnUrl=%2fUIS%2fLoginMessage.aspx');
    FHLoginPage.enterUserName("00391");
    FHLoginPage.enterPassword("tester1");
    FHLoginPage.clickOnLoginBtn();
    FHLoginPage.clickOnContinueRelatedLink();
    FHLoginPage.EnterPolicyNumberOnSearchBox("0003203592");
    FHLoginPage.searchPolicyBtnClick();
    FHLoginPage.clickOnPolicyResults();
    FHLoginPage.clickOnProcessClaim();
    browser.sleep(10000);
    browser.getAllWindowHandles().then(function (handles) {
      var parentWindow = handles[0];
      var childWindow = handles[1];
      console.log(parentWindow);
      console.log(childWindow);
      browser.switchTo().window(childWindow);
    });
  });

  browser.waitForAngularEnabled(true);

  it(' veryfying protractor page', function () {
    FHLoginPage.ClickingOnDrpdwn();
    FHLoginPage.enterDateOfDeath(10);
    FHLoginPage.enterDateOfBrith('12/02/1955');
    FHLoginPage.generateQuote();
    FHLoginPage.clickOnStartClaim();
  
  });

  it(' Sign docs', function () {
    console.log('3rd it block');
    browser.sleep(15000);
    browser.getAllWindowHandles().then(function (handles) {
      var thirdWindow = handles[2]
      console.log(thirdWindow);
      //console.log( handles[1]);
      //console.log( handles[2]);
      //browser.switchTo().window(thirdWindow);
    });

    //element.all(by.css('image[class="draw2d_shape_basic_Image"]')).get(2).sendKeys("jubgjdshbvhv");

    //browser.sleep(5000);

  });

});




