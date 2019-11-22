var EC = require('protractor').ExpectedConditions;
var BetaTestAgreement = {

     ACEEPT_BTN: Element(by.xpath('//button[@class="mr-16 mat-raised-button indigo-400"]/span[@class="mat-button-wrapper"]')),
     DECLINE_BTN: Element(by.xpath('//button[@class="red mat-raised-button ng-star-inserted"]/span[@class="mat-button-wrapper"]')),
     // alert = ptor.driver.switchTo().alert().then(function(alert) {
     //     alert.accept();
     // }, function(error) {
     //   console.log("np alert")
     // })
     //
     
        
};




module.exports = BetaTestAgreement;