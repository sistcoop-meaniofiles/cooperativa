'use strict';

/* jshint -W098 */
angular.module('mean.cooperativa').controller('Cooperativa.EditarCaja.CerrarController',
    function($scope, $state, $filter, Notifications){

        $scope.config = {
            checkbox: {
                cantidad: true
            }
        };

        $scope.loadParams = function(){
            $scope.view.caja.$getDetalle().then(function(response){
                angular.forEach(response, function(row){
                    angular.forEach(row.detalleHistorial, function(subRow){
                        subRow.getSubTotal = function(){
                            return this.valor * this.cantidad;
                        };
                    });

                    row.getTotal = function(){
                        var total = 0;
                        angular.forEach(this.detalleHistorial, function(subRow){
                            total = total + subRow.getSubTotal();
                        });
                        return total;
                    };
                });
                $scope.view.caja.detalle = angular.copy(response);
            });
        };
        $scope.loadParams();

        $scope.cerrar = function(){

            if($scope.view.cajaDB.estado == false){
                Notifications.info("Caja inactiva, no se puede actualizar.");
                return;
            }

            //verificar boveda abierta
            if($scope.view.cajaDB.abierto == false){
                Notifications.warn('Caja cerrada, no se puede cerrar nuevamente.');
                return;
            }
            //verificando bovedas abiertas
            for(var i=0; i<$scope.view.caja.detalle.length; i++){
                if($scope.view.caja.detalle[i].boveda.abierto != true){
                    Notifications.warn($scope.view.caja.detalle[i].boveda.denominacion + ' debe estar abierta.');
                    return;
                }
            }
            //cuadrando caja
            for(var i=0; i<$scope.view.caja.detalle.length; i++){
                if($scope.view.caja.detalle[i].boveda.saldo != $scope.view.caja.detalle[i].getTotal()){
                    Notifications.warn('Saldo no coincide, ' + $scope.view.caja.detalle[i].boveda.denominacion + ' debe tener un total de: ' + $filter('currency')($scope.view.caja.detalle[i].boveda.saldo, '', 2));
                    return;
                }
            }

            if ($scope.form.$valid) {
                $scope.view.cajaDB.$cerrar($scope.view.caja.detalle).then(
                    function(response){
                        Notifications.success('Caja cerrada');
                        $scope.view.cajaDB.abierto = false;
                        $scope.view.caja = angular.copy($scope.view.cajaDB);
                        $state.go('^.resumen');
                    },
                    function error(error){
                        Notifications.error(error.data.message+".");
                    }
                );
            }
        };

    });