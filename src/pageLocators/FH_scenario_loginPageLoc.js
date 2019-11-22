

var FHLoginPageLoc = {
    LOGIN_USERNAME: element(by.id('ctl00_cntMainContent_Login1_UserName')),
    LOGIN_PASSWORD: element(by.id('ctl00_cntMainContent_Login1_Password')),
    LOGIN_BUTTON: element(by.id('ctl00_cntMainContent_Login1_LoginButton')),
    CONTINUE_REALTED_LINK: element(by.id('ctl00_cntMainContent_lbContinueRelated')),
    ENTER_POLICY: element(by.xpath('//*[@id="ctl00_cntMainContent_ucmySearch_txtautofromDBP"]')),
    SEARCH_POLICY_BTN: element(by.xpath('//*[@id="ctl00_cntMainContent_ucmySearch_btnSearchPoliciesClick"]')),
    CLICK_ON_RESULT_POLICY_RECORD: element(by.xpath('//*[@id="ctl00_cntMainContent_grdSearchResults"]/tbody/tr[2]/td[1]')),
    PROCESS_CLAIM_LINK: element(by.xpath('//div[@class="PolicyDashboardContent"]/table[2]/tbody/tr[7]/td[1]/*[@id="ctl01_btnClaim"]')),
    CAUSE_OF_DEATH_DRPDWN: element(by.id("mat-select-0")),

    COD_VALUES: element.all(by.css('mat-option')),
    DATE_OF_DEATH: element(by.id('mat-input-0')),
    DATE_OF_BIRTH: element(by.id('mat-input-1')),
    GENERATE_QUOTE_BTN: element(by.css('button[aria-label="generate quote"]>span[class="mat-button-wrapper"]')),
    START_CLAIM_BTN: element(by.xpath('//*[@id="wrapper"]/div/fuse-content/fuse-policy-quote/div/div[2]/fuse-quote-screen-sidenav/div/div/div[3]/div[1]/button'))
    //element(by.css('button[aria-label="Start Claim"]>span[class="mat-button-wrapper"]'))




};





module.exports = FHLoginPageLoc;
