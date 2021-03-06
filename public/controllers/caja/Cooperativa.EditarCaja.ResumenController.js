'use strict';

/* jshint -W098 */
angular.module('mean.cooperativa').controller('Cooperativa.EditarCaja.ResumenController',
    function($scope, caja, SGAgencia){

        $scope.view = {
            caja: caja
        };

        $scope.view.loaded = {
            agencia: undefined,
            bovedaCajas: [],
            trabajadorCajas: []
        };

        $scope.loadAgencia = function(){
            $scope.view.loaded.agencia = SGAgencia.$findByCodigo($scope.view.caja.agencia).$object;
        };
        $scope.loadAgencia();

        $scope.loadBovedaCajas = function(){
            $scope.view.loaded.bovedaCajas = $scope.view.caja.$getBovedaCajas().$object;
        };
        $scope.loadBovedaCajas();

        $scope.loadTrabajadorCajas = function(){
            $scope.view.loaded.trabajadorCajas = $scope.view.caja.$getTrabajadorCajas().$object;
        };
        $scope.loadTrabajadorCajas();

    });