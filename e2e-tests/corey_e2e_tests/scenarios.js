'use strict';


/**
 * [selectWindow Focus the browser to the index window. Implementation by http://stackoverflow.com/questions/21700162/protractor-e2e-testing-error-object-object-object-has-no-method-getwindowha]
 * @param  {[Object]} index [Is the index of the window. E.g., 0=browser, 1=FBpopup]
 * @return {[!webdriver.promise.Promise.<void>]}       [Promise resolved when the index window is focused.]
 */
selectWindow = function (index) {

    // wait for handels[index] to exists
    browser.driver.wait(function() {
        return browser.driver.getAllWindowHandles().then(function (handles) {
            /**
             * Assume that handles.length >= 1 and index >=0.
             * So when i call selectWindow(index) i return
             * true if handles contains that window.
             */
            if(handles.length > index) {
                return true;
            }
        });
    });
    // here i know that the requested window exists

    // switch to the window
    return browser.driver.getAllWindowHandles().then(function (handles) {
        return browser.driver.switchTo().window(handles[index]);
    });
};

describe('Corey End To End Tests', function() {

    beforeEach(function() {
        browser.driver.ignoreSynchronization = true;
    });



    it('should focus on the gauth window', function(){
        browser.driver.get('http://localhost:8000/app/');
        element(by.buttonText("Click here to get your Calendar!")).click();
        element(by.buttonText("Click here to get your Calendar!")).click();
        //selectWindow(1)

        browser.driver.sleep(1000);

        browser.driver.sleep(8000);



    });
});