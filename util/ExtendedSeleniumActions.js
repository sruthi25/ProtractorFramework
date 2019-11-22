var EC = require('protractor').ExpectedConditions;
const log4js = require('log4js');
log4js.configure({
  appenders: { log: { type: 'file', filename: 'log/logfile.log' } },
  categories: { default: { appenders: ['log'], level: 'info' } }
});

const logger = log4js.getLogger('log');

var sendKeysDebug=['Element Should be an input filed','Check input box is enabled'];

var extendedSeleniumActions  = {

  /*
   * Waits for Element until visible on page and presence in DOM
   * @param {string} locator ex: element(by.id());
   * @param {string} description of the element
   * @param {integer} timeout in milliseconds
   */
  waitForVisibilityOfElement: async function(locator, desc, timeout) {
    try {
      await browser.wait(EC.visibilityOf(locator), timeout, `Element '${desc}' not visible. Waited for Element for '${timeout / 1000}' sec.`);
    } catch(err){
      logger.info(`${err}`);
    }
  },

  /*
 * Waits for Element until presence in DOM, doesnt check for visibility
 * @param {string} locator ex: element(by.id());
 * @param {string} description of the element
 * @param {integer} timeout in milliseconds
 */
  waitForPresenceOfElement: async function(locator, desc, timeout) {
    try {
      await browser.wait(EC.presenceOf(locator), timeout, `Element '${desc}' not present. Waited for Element for '${timeout / 1000}' sec.`);
    } catch(err){
      logger.info(`${err}`);
    }
  },

  /*
* Waits for Element until presence in DOM, doesnt check for visibility
* @param {string} text to compare in title
* @param {string} description of the element
* @param {integer} timeout in milliseconds
*/
  waitUntilTitleContains : async function(text, desc, timeout) {
    try {
      let currentTitle = await browser.getTitle();
      await browser.wait(EC.titleContains(text), timeout, `'${currentTitle}' doesnt contain text '${desc}' In it. Waited for '${timeout / 1000}' sec.`);
    }
    catch(err){
      logger.info(`${err}`);
    }
  },

  /*
* Waits for element until the element property changes to clickable
* @param {string} locator ex: element(by.id());
* @param {string} description of the element
* @param {integer} timeout in milliseconds
*/
  waitUntilClickable : async function(locator, desc, timeout) {
    try {
      await extendedSeleniumActions.waitForVisibilityOfElement(locator, desc, timeout);
      await browser.wait(EC.elementToBeClickable(locator), timeout, `Element '${desc}' is not clickable (or) present. Waited for '${timeout / 1000}' sec.`);
    } catch(err){
      logger.info(`${err}`);
    }
  },

  /*
* Clicks on the element. Checks clickable and visible before click action
* @param {string} locator ex: element(by.id());
* @param {string} description of the element
* @param {integer} timeout in milliseconds
*/
  extendedClick : async function(locator, desc, timeout) {
    try {
      await extendedSeleniumActions.waitUntilClickable(locator, desc, timeout);
      this.setHighlight(locator);
      locator.click().then(function () {
        logger.info(`Clicked on element '${desc}'`);
      }).catch(function (error) {
        logger.info(`Unable to click on element ${desc}. ERROR: ${error}`);
      })
    } catch(err){
      logger.info(`${err}`);
    }
  },

  /*
* Enters the text into the provided element
* @param {string} locator ex: element(by.id());
* @param {string} description of the element
* @param {string} text to enter into the input field
* @param {integer} timeout in milliseconds
*/
  extendedSendKeys: async function(locator, desc, textToEnter, timeout) {
    try {
      await extendedSeleniumActions.waitUntilClickable(locator, desc, timeout);
      this.setHighlight(locator);
      locator.sendKeys(textToEnter).then(function () {
        logger.info(`Entered text '${textToEnter}' in element '${desc}'`);
      }).catch(function (error) {
        logger.info(`Unable to enter text in element ${desc}. Debug points:\n ${sendKeysDebug} \n Error ${error}`);
        throw error;
      });
    } catch(err){
      logger.info(`${err}`);
      logger.info(`Unable to enter text in element ${desc}. Debug points:\n ${sendKeysDebug} \n Error ${error}`);
    }
  },


  /*
* Enters the text into the provided element
* @param {integer} index is the window index. 0 for parent, 1 for second, 2 for third
* @param {string} description of the element
*/
  extendedSwitchToWindow : async function(index, desc) {
    try {
      browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[index]).then(function () {
          logger.info(`Switched to window ${desc} which is of index ${index}`);
        });
      }).catch(function (error) {
        logger.info(`Unable to switch to window. Error: ${error}`);
        throw error;
      });
    } catch(err){
      logger.info(`${err}`);
      logger.info(`Unable to switch to window. Error: ${error}`)
    }
  },

  /**
   * @Function setHighlight
   * @Description  Function Highlights on current working element or locator
   * @param elementtohighlight - element to be highlighted
   */
  setHighlight : function (elementtohighlight) {
    var attribValue = "border:3px solid red;";
    var getattrib = elementtohighlight.getAttribute("style");
    browser.executeScript("arguments[0].setAttribute('style', arguments[1]);", elementtohighlight, attribValue).then(function(){
      browser.sleep(100);
    },function(error){
      errorMessage = "unable to highlight - "+elementtohighlight;
      logger.error(error.stack);
      err_stack=error.stack;
      throw errorMessage;
    });
    browser.executeScript("arguments[0].setAttribute('style', arguments[1]);", elementtohighlight, getattrib);
  },

};

module.exports = extendedSeleniumActions;
