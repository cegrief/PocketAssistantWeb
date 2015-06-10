'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

//describe('my app', function() {

  /*browser.get('index.html');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });*/


describe('Gregory End To End Tests', function() {

    beforeEach(function() {
	browser.driver.ignoreSynchronization = true;
    });



    it('should add an event to the calendar at 2:00 PM', function() {
	browser.driver.get('http://localhost:8000/app/index.html#/view1');
	element(by.buttonText("Click here to get your Calendar!")).click();
	element(by.buttonText("Click here to get your Calendar!")).click();
	//browser.driver.sleep(1000);
	//browser.driver.executeScript("(window.open('https://accounts.google.com/ServiceLogin?*'))");
	//browser.driver.sleep(1000);
	//browser.driver.findElement(by.id('Email')).sendKeys("teambrown394");
	//browser.driver.sleep(3000);

	//browser.driver.get("(window.open('https://accounts.google.com/ServiceLogin?*'))");

	browser.driver.sleep(1000);
	
	browser.driver.sleep(8000);

	element(by.buttonText("Add")).click();

	element(by.model("updateData.summary")).sendKeys("Test Event");

	var currDate = new Date(Date.now());
	var day = ("0" + currDate.getDate()).slice(-2);
	var month = ("0" + (currDate.getMonth() + 1)).slice(-2);

	var start = "2015-" + month + "-" + day + "T14:00:00-05:00";
	var end = "2015-" + month + "-" + day + "T15:00:00-05:00";
	
	//var start = "" + month + "-" + day + "-2015-\t02-00PM";
	//var end = "" + month + "-" + day + "-2015-\t03-00PM";
	
	element(by.model("updateData.start.dateTime")).sendKeys(start);
	element(by.model("updateData.end.dateTime")).sendKeys(end);
	
	element(by.buttonText("Add Event")).click();



	/*element.all(by.repeater('ev in events')).get(0).then(function(args) {
	    expect(args.getText()).toContain('Test Event');
	    });*/		
    });

    it('should remove the event that was added at 2:00 PM', function() {
	browser.driver.get('http://localhost:8000/app/index.html#/view1');
	element(by.buttonText("Click here to get your Calendar!")).click();
	//element(by.buttonText("Click here to get your Calendar!")).click();
	browser.sleep(5000);
	element(by.buttonText("Edit Test Event")).click();
	browser.driver.sleep(1000);
	element(by.buttonText("Delete")).click();
	browser.driver.sleep();
    });

});


    /*describe('view2', function() {

      beforeEach(function() {
      browser.get('index.html#/view2');
      });


      it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
      toMatch(/partial for view 2/);
      });

      });*/
//});
