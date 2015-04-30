'use strict';

angular.module('mean.cooperativa').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('cooperativa example page', {
      url: '/cooperativa/example',
      templateUrl: 'cooperativa/views/index.html'
    });
  }
]);
