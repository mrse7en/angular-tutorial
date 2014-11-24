'use strict';

/* Services */
var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('phoneCat', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);