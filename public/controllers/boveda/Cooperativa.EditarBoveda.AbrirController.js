'use strict';

/* jshint -W098 */
angular.module('mean.cooperativa').controller('Cooperativa.EditarBoveda.AbrirController', function(
    $scope, $state, boveda, SGCurrency, toastr){

    $scope.view = {
        boveda: boveda
    };

    $scope.view.loaded = {
        detalle: []
    };

    $scope.loadDetalle = function(){
        $scope.view.boveda.$getDetalle().then(function(response){
            $scope.view.loaded.detalle = response;
            angular.forEach($scope.view.loaded.detalle, function(row){
                row.getSubTotal = function(){
                    return this.valor * this.cantidad;
                };
            });
        });
    };
    $scope.loadDetalle();

    $scope.getTotal = function(){
        var total = 0;
        for(var i = 0; i < $scope.view.loaded.detalle.length; i++) {
            total = total + $scope.view.loaded.detalle[i].getSubTotal();
        }
        return total;
    };

    $scope.abrir = function(){
        if($scope.view.boveda.abierto === true){
            toastr.warning('Boveda abierta, no se puede abrir nuevamente');
            return;
        }
        if($scope.view.boveda.estado === false){
            toastr.warning('Boveda inactiva, no se puede abrir.');
            return;
        }

        if ($scope.form.$valid) {
            $scope.view.boveda.$abrir().then(
                function(response){
                    toastr.success('Boveda abierta satisfactoriamente');
                    $scope.view.boveda.abierto = true;
                },
                function error(error){
                    toastr.error(error.data.message);
                }
            );
        }
    };

});