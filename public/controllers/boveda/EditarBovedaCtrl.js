/*define(['../../../module'], function (module) {
    'use strict';

    module.controller('EditarBovedaCtrl', function($scope, $state, Notifications, Dialog){

        $scope.view = {
            boveda: undefined,
            bovedaDB: undefined
        };

        $scope.view.loaded = {
            cajas: undefined
        };

        $scope.loadParams = function(){
            $scope.view.boveda = $scope.params.object;
            $scope.view.bovedaDB = angular.copy($scope.params.object);

            $scope.view.loaded.cajas = $scope.view.boveda.$getCajas().$object;
        };
        $scope.loadParams();

        $scope.submit = function(){
            if ($scope.form.$valid) {

                if($scope.view.boveda.estado == false){
                    Notifications.info("Boveda inactiva, no se puede actualizar.");
                    return;
                }

                $scope.view.boveda.$save().then(
                    function(response){
                        Notifications.success("Boveda actualizada");
                        $scope.view.bovedaDB = angular.copy($scope.view.boveda);
                    },
                    function error(error){
                        Notifications.error(error.data.message+".");
                    }
                );
            }
        };

        $scope.desactivar = function(){

            if($scope.view.bovedaDB.estado == false){
                Notifications.info("Boveda inactiva, no se puede actualizar.");
                return;
            }

            Dialog.confirmDelete($scope.view.bovedaDB.denominacion, 'boveda', function() {
                $scope.blockControl();
                $scope.view.bovedaDB.$desactivar().then(
                    function(response){
                        Notifications.success("Boveda desactivada");
                        $state.go('^.^.buscarBoveda');
                    },
                    function error(error){
                        Notifications.error(error.data.message+".");
                    }
                );
            });
        };

    });
});*/

