'use strict';

/* jshint -W098 */
angular.module('mean.cooperativa').controller('Cooperativa.CrearBovedaController', function(
    $scope, $state, SGCurrency, SGSucursal, toastr){

    $scope.view = {
        boveda: undefined
    };

    $scope.combo = {
        sucursal: undefined,
        agencia: undefined,
        moneda: undefined
    };
    $scope.combo.selected = {
        sucursal: undefined,
        agencia: undefined,
        moneda: undefined
    };

    $scope.loadCombo = function(){
        $scope.combo.moneda = SGCurrency.$search().$object;
        $scope.combo.sucursal = SGSucursal.$search().$object;
        $scope.$watch('combo.selected.sucursal', function(){
            if(angular.isDefined($scope.combo.selected.sucursal)){
                $scope.combo.agencia = $scope.combo.selected.sucursal.$getAgencias().$object;
            }
        }, true);
    };
    $scope.loadCombo();


    $scope.submit = function(){
        if($scope.form.$valid){
            $scope.view.boveda.moneda = $scope.combo.selected.moneda.code;
            Agencia.$new($scope.combo.selected.agencia.id).$addBoveda($scope.view.boveda).then(
                function(response){
                    Notifications.success("Boveda creada");
                    $state.go('^.^.editarBoveda.resumen', {id: response.id});
                },
                function error(error){
                    Notifications.error(error.data.message+".");
                }
            );
        } else {
            $scope.form.$setSubmitted();
        }
    };

});
