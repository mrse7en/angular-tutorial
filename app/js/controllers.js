'use strict';
/* Controllers */
/*var phonecatApp = angular.module("phonecatApp", []);
phonecatApp.controller("PhoneListCtrl", function($scope){
	$scope.phones = [
		{"modelName":"Nexus 5", "company":"LG", "description":"Google marketing phone with high end spec"},
		{"modelName":"Nexus 6", "company":"AMotorola", "description":"Google marketing phone with high end spec"},
		{"modelName":"iphone 5", "company":"Apple", "description":"Apple marketing phone with high end spec"},
		{"modelName":"iphone 6", "company":"Apple", "description":"Apple marketing phone with high end spec"},
		{"modelName":"LG G2", "company":"LG", "description":"LG marketing phone with high end spec"},
		{"modelName":"LG G3", "company":"LG", "description":"LG marketing phone with high end spec"}
	],
	$scope.listName = "Latest Mobile Phones on market";
	$scope.sortList = "name";
});*/

//XHRs & Dependency Injection

/*var phonecatApp = angular.module("phonecatApp",[]);
phonecatApp.controller("PhoneListCtrl",["$scope","$http" ,function($scope,$http){ // inline method
	$http.get("phones/phones.json").success(function(data){
		$scope.phones = data; //.splice(0, 5) filter list;
		//$scope.phones = data;
	});
	$scope.sortList = "id";
}]);*/

var phonecatControllers = angular.module('phonecatControllers',[]);

/*phonecatControllers.controller("PhoneListCtrl",["$scope","$http", function($scope, $http){
	$http.get("phones/phones.json").success(function(data)
	{
		$scope.phones = data;
	});
	$scope.sortList = "id";
}]);*/
/*
phonecatControllers.controller("PhoneDetailCtrl",["$scope","$routeParams",function($scope,$routeParams){
	$scope.phoneId = $routeParams.phoneId;
}]);*/

// controller with routing

//REST and Custom Services
phonecatControllers.controller("PhoneListCtrl",["$scope","phoneCat", function($scope, phoneCat){
	$scope.phones = phoneCat.query();
	$scope.sortList = "id";
}])

phonecatControllers.controller("PhoneDetailCtrl",["$scope","$routeParams","phoneCat",function($scope, $routeParams, phoneCat){
	/*$http.get("phones/"+$routeParams.phoneId+".json").success(function(data){
		$scope.phones = data;	
		$scope.mainImageUrl = data.images[0];
	});*/
	$scope.phones = phoneCat.get({phoneId : $routeParams.phoneId},function(phones){
		$scope.mainImageUrl = phones.images[0];
	});
	
	$scope.setImage = function(imageUrl) {
		$scope.mainImageUrl = imageUrl;    
	}
}]);