'use strict';

/* jshint -W098 */
angular.module('mean.cooperativa').controller('CooperativaController', ['$scope', 'Global', 'Cooperativa',
  function($scope, Global, Cooperativa) {
    $scope.global = Global;
    $scope.package = {
      name: 'cooperativa'
    };
  }
]);
