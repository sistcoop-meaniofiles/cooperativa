'use strict';

/* jshint -W098 */
angular.module('mean.cooperativa').controller('Cooperativa.CrearBovedaController', function ($scope, $state, sucursalSession, agenciaSession, SGCurrency, SGSucursal, SGBoveda, toastr) {

    $scope.view = {
        boveda: SGBoveda.$build()
    };

    //si tiene agencia y sucursal definida
    $scope.view.session = {
        sucursal: sucursalSession,
        agencia: agenciaSession
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

    $scope.loadCombo = function () {
        $scope.combo.moneda = SGCurrency.$search().$object;

        //CARGAR LOS COMBOS CON TODAS LAS SUCURSALES Y AGENCIAS
        /*$scope.combo.sucursal = SGSucursal.$search().$object;
         $scope.$watch('combo.selected.sucursal', function(){
         if(angular.isDefined($scope.combo.selected.sucursal)){
         $scope.combo.agencia = $scope.combo.selected.sucursal.$getAgencias().$object;
         }
         }, true);*/

        //Cargar los combos solo con las sucursales y agencias del usuario que esta en session
        $scope.combo.sucursal = [$scope.view.session.sucursal];
        $scope.combo.agencia = [$scope.view.session.agencia];
    };
    $scope.loadCombo();


    $scope.submit = function () {
        if ($scope.form.$valid) {

            $scope.view.boveda.moneda = $scope.combo.selected.moneda.alphabeticCode;
            $scope.view.boveda.agencia = $scope.combo.selected.agencia.codigo;

            $scope.view.boveda.$save().then(
                function (response) {
                    toastr.success("Boveda creada");
                    $state.go('^.editarBoveda.resumen', {id: response.id});
                },
                function error(error) {
                    toastr.error(error.data.message);
                }
            );
        }
    };

});
