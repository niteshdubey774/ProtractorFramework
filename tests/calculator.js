// element -finds a single element
// element.all - finds the multiple elements 
// using of ng-model to find the element 
// elemet(by.model('first')).actions 
// extention for recrding Protractor Recorder
// https://www.protractortest.org/#/api for all locaters


let homepage = require('../pages/homepage');

describe('Demo calculator tests', function () {

    it('addition test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('3');

        homepage.clickGo();

        homepage.verifyResult('7');

        browser.sleep(2000);

    });

    it('subtraction test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('3');
        browser.sleep(5000);
        element(by.model('operator')).element(by.css("option[value='SUBTRACTION']")).click();
        //element(by.css('select[ng-model="operator"]')).click();
        browser.sleep(2000)
        //element(by.css("#operator[value='DIVISION']")).click();
// failing this to see failed status in allure report.
        homepage.clickGo();

        homepage.verifyResult('1');

        browser.sleep(2000);

    });


});