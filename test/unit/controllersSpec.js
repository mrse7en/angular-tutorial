/*describe("PhoneListCtrl",function(){
	beforeEach(module('phonecatApp'));
	it("should create 'phones' models with 6 phones", inject(function($controller){
		var scope = {},
			ctrl = $controller("PhoneListCtrl", {$scope: scope});
			expect(scope.phones.length).toBe(6);
			expect(scope.listName).toBe('Latest Mobile Phones on market');
	}));
});*/

/*describe("test",function(){
	describe("PhoneListCtrl", function(){
		var scope, ctrl;
		beforeEach(module("phonecatApp"));
		beforeEach(inject(function($controller){
			scope = {};
			ctrl = $controller("PhoneListCtrl", {$scope: scope});
		}));
		it("it should create 6 phones", function(){
			expect(scope.phones.length).toBe(6);
		});
		it("it should sorted by name by default", function(){
			expect(scope.sortList).toBe("name");
		});
	});
});*/

describe("Phonecat Controller",function(){
	
	beforeEach(function(){
			this.addMatchers({
				toEqualData: function(expected)
				{
					return angular.equals(this.actual, expected);
				}
			});	
		});
		beforeEach(module("phonecatApp"));
		beforeEach(module('phonecatServices'));
		
	describe("PhoneListCtrl",function(){
		var scope,ctrl,$httpBackend;
		
		
		 // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
  		// This allows us to inject a service but then attach it to a variable
  		// with the same name as the service in order to avoid a name conflict.
		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET("phones/phones.json").
				respond([{name : 'Nexus S'},{name : 'Motorola DROID'}]);
				
			scope = $rootScope.$new();
			ctrl = $controller("PhoneListCtrl", {$scope: scope});
		}));
		
		
		
		it("should display 2 phones from XHR",function(){
			//expect(scope.phones).toBeUndefined();
			expect(scope.phones).toEqualData([]);
			$httpBackend.flush();
			///expect(scope.phones).toEqual([{name: 'Nexus S'},{name: 'Motorola DROID'}]);
			expect(scope.phones).toEqualData([{name: 'Nexus S'},{name: 'Motorola DROID'}]);
		});
		/*it('should set the default value of sortList model', function() {
		  expect(scope.sortList).toBe('id');
		});*/
  
	});
	describe('PhoneDetailCtrl 1', function(){
		var scope, $httpBackend, ctrl,
		nexusPhoneDate = function()
		{
			return {
				name: 'Nexus S'	, 
				images: ['img/phones/nexus-s.0.jpg', 'img/phones/nexus-s.1.jpg', 'img/phones/nexus-s.2.jpg','img/phones/nexus-s.3.jpg']
			}
		};
		beforeEach(module("phonecatApp")) ;
		beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller){
			$httpBackend = _$httpBackend_;
			//$httpBackend.expectGET('phones/nexus-s.json').respond({name: "Nexus S"});
			$httpBackend.expectGET('phones/nexus-s.json').respond(nexusPhoneDate());
			$routeParams.phoneId = 	'nexus-s';
			scope = $rootScope.$new();
			ctrl = $controller("PhoneDetailCtrl",{$scope: scope});
		}));
		
		it('should fetch phone detail', function() {
			//expect(scope.phones).toBeUndefined();
			expect(scope.phones).toEqualData({});
			$httpBackend.flush();
		
			//expect(scope.phones).toEqual({name:'Nexus S'});
			//expect(scope.phones).toEqual(nexusPhoneDate());
			expect(scope.phones).toEqualData(nexusPhoneDate());
			
		  });
	});
	
});