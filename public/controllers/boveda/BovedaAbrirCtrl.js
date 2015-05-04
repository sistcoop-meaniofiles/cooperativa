/*define(['../../../module'], function (module) {
    'use strict';

    module.controller('BovedaAbrirCtrl', function($scope, $state, Currency, Notifications){

        $scope.loadParams = function(){
            $scope.view.boveda = $scope.params.object;
            $scope.view.boveda.$getDetalle().then(function(response){
                $scope.view.boveda.detalle = response;
                angular.forEach($scope.view.boveda.detalle, function(row){
                    row.getSubTotal = function(){
                        return this.valor * this.cantidad;
                    };
                });
            });
        };
        $scope.loadParams();

        $scope.getTotal = function(){
            var total = 0;
            for(var i = 0; i < $scope.view.boveda.detalle.length; i++) {
                total = total + $scope.view.boveda.detalle[i].getSubTotal();
            }
            return total;
        };

        $scope.abrir = function(){
            if($scope.view.bovedaDB.abierto == true){
                Notifications.warn('Boveda abierta, no se puede abrir nuevamente.');
                return;
            }
            if($scope.view.bovedaDB.estado == false){
                Notifications.info('Boveda inactiva, no se puede abrir.');
                return;
            }

            if ($scope.form.$valid) {
                $scope.view.bovedaDB.$abrir().then(
                    function(response){
                        Notifications.success('Boveda abierta');
                        $scope.view.bovedaDB.abierto = true;
                        $scope.view.boveda = angular.copy($scope.view.bovedaDB);
                        $state.go('^.resumen');
                    },
                    function error(error){
                        Notifications.error(error.data.message+".");
                    }
                );
            }
        };

    });
});*/
