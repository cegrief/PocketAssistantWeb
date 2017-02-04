'use strict';

describe('Corey End To End Tests', function() {

    //This function was created by Gregory Elliot and shared with the team in order to facilitate login.
    //Alternatively, teammates were able to manually login
    it('Signs into google account', function () {
        browser.driver.get('https://accounts.google.com/ServiceLogin?sacu=1&hl=en');

        var email = browser.driver.findElement(by.id('Email'));
        email.sendKeys('teambrown394');

        var signIn= browser.driver.findElement(by.id('next'));
        signIn.click();

        browser.driver.sleep(2000);

        var password = browser.driver.findElement(by.id('Passwd'));
        password.sendKeys('goteambrown394');

        var signInButton = browser.driver.findElement(by.id('signIn'));
        signInButton.click();

        browser.driver.sleep(2000);
    });

    it('Should Edit an events title and color', function () {
        browser.driver.get('http://localhost:8000/app/index.html#/view1');

        element(by.buttonText("Click here to get your Calendar!")).click();
        browser.driver.sleep(2000);

        //pick an event to edit
        var eventsEdit = element.all(by.buttonText('Edit'));
        expect(eventsEdit.count()).toBeGreaterThan(0);

        eventsEdit.get(0).click();

        browser.driver.sleep(2000);

        element(by.model('updateData.summary'))
            .sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"))
            .sendKeys(protractor.Key.BACK_SPACE)
            .sendKeys('Updated');

        element(by.cssContainingText('option', 'Purple')).click();
        element(by.buttonText("Update")).click();
        browser.driver.sleep(2000);

        var afterEdit = element.all(by.css('.event .col-70'));

        afterEdit.filter(function(el, index){
            return el.getText().then(function(text){
                return text === "Updated"
            })
        });

        expect(afterEdit.count()).toBeGreaterThan(0);
        expect(afterEdit.get(0).getText()).toBe("Updated");

    });

    it('Should reset the update screen when clicking clear', function () {

        browser.driver.sleep(2000);
        var eventsEdit = element.all(by.buttonText('Edit'));

        eventsEdit.count().then(function(ocount){
            expect(ocount).toBeGreaterThan(0);
        });

        eventsEdit.get(0).click();

        browser.driver.sleep(2000);

        element(by.model('updateData.summary')).getAttribute('value')
            .then(function(originText){
                console.log(originText);
                element(by.model('updateData.summary')).sendKeys('asdf');
                element(by.cssContainingText('option', 'Yellow')).click();

                element(by.model('updateData.summary')).getAttribute('value')
                    .then(function(Text2){
                        expect(originText).not.toBe(Text2);

                    });

                element(by.buttonText('Clear')).click();

                browser.driver.sleep(2000);

                element(by.model('updateData.summary')).getAttribute('value').then(function(Text3){
                    expect(originText).toBe(Text3);
                })
            });
    });
});