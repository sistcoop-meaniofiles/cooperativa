/*define(['../../../module'], function (module) {
    'use strict';

    module.controller('CajaBovedasCtrl', function($scope, $state, Agencia, Notifications, Dialog){

        $scope.combo = {
            boveda: undefined
        };
        $scope.combo.selected = {
            boveda: undefined
        };
        $scope.loadCombo = function() {
            $scope.combo.boveda = Agencia.$new($scope.view.cajaDB.agencia.id).$getBovedas().$object;
        };
        $scope.loadCombo();

        $scope.addBoveda = function(){
            if(angular.isUndefined($scope.combo.selected.boveda)){
                return;
            }
            if($scope.view.cajaDB.estado == false){
                Notifications.info("Caja inactiva, no se puede actualizar.");
                return;
            }

            if($scope.view.cajaDB.abierto){
                Notifications.warn('Caja abierta, debe cerrarla antes de vincular boveda.');
                return;
            }
            if(angular.isDefined($scope.view.cajaDB.bovedas)){
                for(var i=0; i<$scope.view.cajaDB.bovedas.length; i++){
                    if($scope.view.cajaDB.bovedas[i].id == $scope.combo.selected.boveda.id){
                        Notifications.warn('Boveda ya fue asignada.');
                        return;
                    }
                    if($scope.view.cajaDB.bovedas[i].moneda == $scope.combo.selected.boveda.moneda){
                        Notifications.warn('Boveda con moneda ' + $scope.combo.selected.boveda.moneda + ' ya fue asignada.');
                        return;
                    }
                }
            }

            Dialog.confirm('Vincular', '¿Estas seguro de vincular la caja para la boveda?', function() {
                $scope.view.caja.$addBoveda($scope.combo.selected.boveda).then(
                    function(response){
                        Notifications.success("Boveda vinculada.");

                        if(angular.isDefined($scope.view.caja.bovedas)){
                            $scope.view.caja.bovedas.push($scope.combo.selected.boveda);
                        } else {
                            $scope.view.caja.bovedas = [];
                            $scope.view.caja.bovedas.push($scope.combo.selected.boveda);
                        }

                        $scope.combo.selected.boveda = undefined;

                        $scope.view.cajaDB = angular.copy($scope.view.caja);
                    },
                    function error(error){
                        Notifications.error(error.data.message+".");
                    }
                );
            });
        };

        $scope.removeBoveda = function($index, item){
            if($scope.view.cajaDB.abierto){
                Notifications.warn('Caja abierta, debe cerrarla antes de desvincular boveda.');
                return;
            }
            if(angular.isDefined($scope.view.cajaDB.bovedas)){
                for(var i=0; i<$scope.view.cajaDB.bovedas.length; i++){
                    if($scope.view.cajaDB.bovedas[i].id == item.id){
                        if($scope.view.cajaDB.bovedas[i].saldo != 0){
                            Notifications.warn('Caja tiene saldo diferente de 0.00, no puede desvincularla.');
                            return;
                        }
                    }
                }
            }

            Dialog.confirm('Eliminar', '¿Estas seguro de desvincular la boveda para la caja?. Debes de asegurarte que no existe saldo en caja en la moneda de la boveda para continuar.', function() {
                $scope.view.cajaDB.$desactivarBoveda(item.id).then(
                    function(response){
                        Notifications.success("Boveda desvinculada.");

                        $scope.view.cajaDB.bovedas.splice($index, 1);
                        $scope.view.caja = angular.copy($scope.view.cajaDB);
                    },
                    function error(error){
                        Notifications.error(error.data.message+".");
                    }
                );
            });
        };
    });
});*/