/*define(['../../../module'], function (module) {
    'use strict';

    var buscarCajaCtrl = function($scope, $state, Agencia){

        $scope.combo = {
            sucursal: undefined,
            agencia: undefined
        };
        $scope.combo.selected = {
            sucursal: undefined,
            agencia: undefined
        };

        $scope.filterOptions = {
            filterText: undefined,
            offset: 0,
            limit: 10
        };
        $scope.gridOptions = {
            data: [],
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            multiSelect: false,
            columnDefs: [
                {field: 'denominacion', displayName: 'Denominacion'},
                {field: 'abierto', displayName: 'Abierto', cellFilter: 'si_no: "Abierto"'},
                {field: 'estadoMovimiento', displayName: 'Movimiento', cellFilter: 'si_no: "Congelado"'},
                {field: 'estado', displayName: 'Estado', cellFilter: 'si_no: "Activo"'},
                {
                    name: 'edit',
                    displayName: 'Edit',
                    cellTemplate: '<div style="text-align: center; padding-top: 5px;"><button type="button" ng-click="grid.appScope.gridActions.edit(row.entity)" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-edit"></span>Editar</button></div>'
                }
            ]
        };
        $scope.gridActions = {
            edit: function(row){
                $state.go('^.editarCaja.resumen', {id: row.id});
            }
        };
        $scope.nuevo = function(){
            $state.go('^.crearCaja.datosPrincipales');
        };
        $scope.search = function(){
            if($scope.combo.selected.sucursal && $scope.combo.selected.agencia){
                $scope.gridOptions.data = Agencia.$new($scope.combo.selected.agencia.id).$getCajas($scope.filterOptions).$object;
            }
        };

    };

    module.controller('BuscarCajaCtrl_Admin', function($injector, $scope, Sucursal){
        $injector.invoke(buscarCajaCtrl, this, {$scope: $scope});

        $scope.loadCombo = function(){
            $scope.combo.sucursal = Sucursal.$search().$object;
        };
        $scope.loadCombo();

        $scope.$watch('combo.selected.sucursal', function(){
            if(angular.isDefined($scope.combo.selected.sucursal)){
                $scope.combo.agencia = $scope.combo.selected.sucursal.$getAgencias().$object;
            }
        }, true);
    }).controller('BuscarCajaCtrl_Gerentegeneral', function($injector, $scope, Sucursal){
        $injector.invoke(buscarCajaCtrl, this, {$scope: $scope});

        $scope.loadCombo = function(){
            $scope.combo.sucursal = Sucursal.$search().$object;
        };
        $scope.loadCombo();

        $scope.$watch('combo.selected.sucursal', function(){
            if(angular.isDefined($scope.combo.selected.sucursal)){
                $scope.combo.agencia = $scope.combo.selected.sucursal.$getAgencias().$object;
            }
        }, true);
    }).controller('BuscarCajaCtrl_Administradorgeneral', function($injector, $rootScope, $scope, Sucursal, sucursal){
        $injector.invoke(buscarCajaCtrl, this, {$scope: $scope});

        $scope.loadCombo = function(){
            $scope.combo.sucursal = [];
            $scope.combo.sucursal[0] = angular.extend(sucursal, Sucursal.$new(sucursal.id));
            $scope.combo.selected.sucursal = $scope.combo.sucursal[0];
        };
        $scope.loadCombo();

        $scope.$watch('combo.selected.sucursal', function(){
            if(angular.isDefined($scope.combo.selected.sucursal)){
                $scope.combo.agencia = $scope.combo.selected.sucursal.$getAgencias().$object;
            }
        }, true);
    }).controller('BuscarCajaCtrl_Administrador', function($injector, $rootScope, $scope, Sucursal, Agencia, sucursal, agencia){
        $injector.invoke(buscarCajaCtrl, this, {$scope: $scope});

        $scope.loadCombo = function(){
            $scope.combo.sucursal = [];
            $scope.combo.sucursal[0] = angular.extend(sucursal, Sucursal.$new(sucursal.id));
            $scope.combo.selected.sucursal = $scope.combo.sucursal[0];

            $scope.combo.agencia = [];
            $scope.combo.agencia[0] = angular.extend(agencia, Agencia.$new(agencia.id));
            $scope.combo.selected.agencia = $scope.combo.sucursal[0];
        };
        $scope.loadCombo();
    }).controller('BuscarCajaCtrl_Jefecaja', function($injector, $rootScope, $scope, Sucursal, Agencia, sucursal, agencia){
        $injector.invoke(buscarCajaCtrl, this, {$scope: $scope});

        $scope.loadCombo = function(){
            $scope.combo.sucursal = [];
            $scope.combo.sucursal[0] = angular.extend(sucursal, Sucursal.$new(sucursal.id));
            $scope.combo.selected.sucursal = $scope.combo.sucursal[0];

            $scope.combo.agencia = [];
            $scope.combo.agencia[0] = angular.extend(agencia, Agencia.$new(agencia.id));
            $scope.combo.selected.agencia = $scope.combo.sucursal[0];
        };
        $scope.loadCombo();
    });

    module.controller('BuscarCajaFromAgenciaCtrl', function($scope, $state){

        $scope.filterOptions = {
            filterText: undefined,
            offset: 0,
            limit: 10
        };
        $scope.gridOptions = {
            data: [],
            enableRowSelection: false,
            enableRowHeaderSelection: false,
            multiSelect: false,
            columnDefs: [
                {field: 'denominacion', displayName: 'Denominacion'},
                {field: 'abierto', displayName: 'Abierto', cellFilter: 'si_no: "Abierto"'},
                {field: 'estadoMovimiento', displayName: 'Movimiento', cellFilter: 'si_no: "Congelado"'},
                {field: 'estado', displayName: 'Estado', cellFilter: 'si_no: "Activo"'},
                {
                    name: 'edit',
                    displayName: 'Edit',
                    cellTemplate: '<div style="text-align: center; padding-top: 5px;"><button type="button" ng-click="grid.appScope.gridActions.edit(row.entity)" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-edit"></span>Editar</button></div>'
                }
            ]
        };
        $scope.gridActions = {
            edit: function(row){
                $state.go('^.^.editarCaja.resumen', {id: row.id});
            }
        };
        $scope.nuevo = function(){
            $state.go('^.crearCaja.datosPrincipales');
        };
        $scope.search = function(){
            $scope.gridOptions.data = $scope.view.agenciaDB.$getCajas().$object;
        };
        $scope.search();

    });
});*/