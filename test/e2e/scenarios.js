'use strict';

/*describe("phoneCat App",function(){
	describe("phone list view", function(){
		beforeEach(function(){
			browser.get("app/index.html");
		});
		var phoneList = element.all(by.repeater("phone in phones")),
			//phoneClmName = element.all(by.repeater("phone in phones")).column("phone.company"),
				query = element(by.model("query"));
		it("should filter the phone list as a user types into the search box", function(){
			
				expect(phoneList.count()).toBe(6);
				query.sendKeys('nexus');
				expect(phoneList.count()).toBe(2);
				query.clear();
				query.sendKeys("LG");
				expect(phoneList.count()).toBe(3);
				query.clear();
				query.sendKeys("iphone");
				expect(phoneList.count()).toBe(2);
		});
		it("should display the current filter value in the title bar", function(){
			query.clear();
			expect(browser.getTitle()).toMatch(/\s*$/);	
			query.sendKeys("nexus");
			expect(browser.getTitle()).toMatch(/nexus$/);
		});
		it("should sort through dropdown",function(){
			var phoneNameColumn = element.all(by.repeater('phone in phones').column('phone.company'));
  			var query = element(by.model('query'));

			function getNames()
			{
				return phoneNameColumn.map(function(elm){
					return elm.getText();	
				});
			}
		
		query.sendKeys("dell");
		expect(getNames()).toEqual([
			"LG","AMotorola"
		]);
		element(by.model("sortList")).element(by.css("option[value='id']")).click();
		expect(getNames()).toEqual([
			"AMotorola","LG"
		]);
		});
	});
});*/

//links and images testing
describe("phone Cat Application",function(){
	describe("Phone List view",function(){
		
		beforeEach(function(){
			browser.get("app/index.html");
		});
		it("should render phone specific links", function(){
			var query = element(by.model("query"));
			query.sendKeys("nexus");
			element.all(by.css(".phones li a")).first().click();
			browser.getLocationAbsUrl().then(function(url){
				expect(url.split("#")[1]).toBe("/phones/nexus-s");
			});
		});
	});
	describe("Phone List view", function(){
		beforeEach(function(){
			browser.get("app/index.html#/phones");
		});
	});
	describe('Phone detail view', function() {
	  beforeEach(function() {
		browser.get('app/index.html#/phones/nexus-s');
	  });
	
		var phoneList = element.all(by.repeater("img in phones.images"))
	  it('should display placeholder page with phoneId', function() {
		expect(element(by.binding('phones.name')).getText()).toBe('Nexus S');
		expect(phoneList.count()).toBe(4);
	  });
	  it("should display first img as main img", function(){
		 expect(element(by.css('img.phone')).getAttribute('src')).toMatch('/img\/phones\/nexus-s.0.jpg/')	  
	  });
	  it("should swap main img if thumbnail img is clicked",function(){
			element(by.css(".phone-thumbs li:nth-child(3) img")).click();
			expect(element(by.css('img.phone')).getAttribute('src')).toMatch('/img\/phones\/nexus-s.2.jpg/');
			
			element(by.css(".phone-thumbs li:nth-child(1) img")).click();
			expect(element(by.css('img.phone')).getAttribute('src')).toMatch('/img\/phones\/nexus-s.0.jpg/');
			
		});
	});
});
// routing and multiple views

