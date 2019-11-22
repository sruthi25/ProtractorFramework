var FHLoginPageLoc = require("../pageLocators/FH_scenario_loginPageLoc");
var EC = require('protractor').ExpectedConditions;

var FHLoginPageModule = {

    enterUserName: async function (userName) {
        await FHLoginPageLoc.LOGIN_USERNAME.sendKeys(userName);
    },

    enterPassword: async function (password) {
        await FHLoginPageLoc.LOGIN_PASSWORD.sendKeys(password);
    },
    /*loginToFH:async function(userName, password) {
       this.enterUserName(userName);
       this.enterPassword(password);
       this.clickOnLoginBtn();
   }*/

    clickOnLoginBtn: async function () {
        await FHLoginPageLoc.LOGIN_BUTTON.click();
    },
    clickOnContinueRelatedLink: async function () {
        await FHLoginPageLoc.CONTINUE_REALTED_LINK.click();
    },
    EnterPolicyNumberOnSearchBox: async function (policyNumber) {
        await FHLoginPageLoc.ENTER_POLICY.sendKeys(policyNumber)
    },

    searchPolicyBtnClick: async function () {
        await FHLoginPageLoc.SEARCH_POLICY_BTN.click();
    },

    clickOnPolicyResults: async function () {
        await FHLoginPageLoc.CLICK_ON_RESULT_POLICY_RECORD.click();
    },

    clickOnProcessClaim: async function () {
        await browser.wait(EC.visibilityOf(FHLoginPageLoc.PROCESS_CLAIM_LINK), 30000);
        await browser.wait(EC.elementToBeClickable(FHLoginPageLoc.PROCESS_CLAIM_LINK), 40000);
        FHLoginPageLoc.PROCESS_CLAIM_LINK.click().then(function () {
            console.log(`Clicked on process claim button`);
        }).catch(function (err) {
            console.log(`Process claim button is not clicked - error: ${err}`);
        })
    },

    ClickingOnDrpdwn: async function () {
    browser.waitForAngularEnabled(false);
    await browser.wait(EC.visibilityOf(FHLoginPageLoc.CAUSE_OF_DEATH_DRPDWN), 90000);
    await FHLoginPageLoc.CAUSE_OF_DEATH_DRPDWN.click();
    await  FHLoginPageLoc.COD_VALUES.get(3).click();
    browser.waitForAngularEnabled(true);
    },

    enterDateOfDeath:async function (daysBeforeCurrentDate) {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        
        var yyyy = today.getFullYear();
        if (dd < 10) {
          dd = '0' + dd;
        } 
        if (mm < 10) {
          mm = '0' + mm;
        } 
        var date = (dd-daysBeforeCurrentDate) + '/' + mm + '/' + yyyy;
       await FHLoginPageLoc.DATE_OF_DEATH.sendKeys(date);
    },

    enterDateOfBrith: async function(DOB) {
        await FHLoginPageLoc.DATE_OF_BIRTH.sendKeys(DOB);
    },

    generateQuote: async function() {
       // await browser.executeScript('arguments[0].click()', FHLoginPageLoc.GENERATE_QUOTE_BTN.getWebElement())
        await FHLoginPageLoc.GENERATE_QUOTE_BTN.click();
    },

    clickOnStartClaim: async function() {
        await browser.wait(EC.visibilityOf(FHLoginPageLoc.START_CLAIM_BTN), 10000);
        await browser.wait(EC.elementToBeClickable(FHLoginPageLoc.START_CLAIM_BTN), 10000);
        await FHLoginPageLoc.START_CLAIM_BTN.click().then(function () {
            console.log(`Clicked on start button`);
        }).catch(function (err) {
            console.log(`start is not clicked - error: ${err}`);
        })
    }



};


module.exports = FHLoginPageModule;
