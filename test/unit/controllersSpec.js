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
	
	describe("PhoneListCtrl",function(){
		var scope,ctrl,$httpBackend;
		beforeEach(module("phonecatApp")) ;
		
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
			expect(scope.phones).toBeUndefined();
			$httpBackend.flush();
			expect(scope.phones).toEqual([{name: 'Nexus S'},
                               {name: 'Motorola DROID'}]);
		});
		it('should set the default value of sortList model', function() {
		  expect(scope.sortList).toBe('age');
		});
  
	});
	describe('PhoneDetailCtrl', function(){
		var scope, $httpBackend, ctrl;
		beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller){
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('phones/nexus-s.json').respond({name: "Nexus S"});
			
			$routeParams.phoneId = 	'nexus-s';
			scope = $rootScope.$new();
			ctrl = $controller("PhoneDetailCtrl",{$scope: scope})
		}));
		
		it('should fetch phone detail', function() {
			expect(scope.phones).toBeUndefined();
			$httpBackend.flush();
		
			expect(scope.phones).toEqual({name:'Nexus S'});
		  });
	});
	
});