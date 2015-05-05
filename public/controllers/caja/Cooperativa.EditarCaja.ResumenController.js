'use strict';

/* jshint -W098 */
angular.module('mean.cooperativa').controller('Cooperativa.EditarCaja.ResumenController',
    function($scope, caja, SGAgencia){

        $scope.view = {
            caja: caja
        };

        $scope.view.loaded = {
            agencia: undefined
        };

        $scope.loadAgencia = function(){
            $scope.view.loaded.agencia = SGAgencia.$findByCodigo($scope.view.caja.agencia).$object;
        };
        $scope.loadAgencia();

    });