/*define(['../../../module'], function (module) {
    'use strict';

    var crearCajaCtrl = function($scope, $state, Agencia, Notifications){

        $scope.view = {
            caja: undefined
        };

        $scope.combo = {
            sucursal: undefined,
            agencia: undefined,
            boveda: undefined
        };
        $scope.combo.selected = {
            sucursal: undefined,
            agencia: undefined,
            boveda: []
        };

        $scope.addCaja = function(){
            if($scope.form.$valid){
                $scope.view.caja.bovedas = $scope.combo.selected.boveda;
                Agencia.$new($scope.combo.selected.agencia.id).$addCaja($scope.view.caja).then(
                    function(response){
                        Notifications.success("Caja creada");
                        $state.go('^.^.editarCaja.resumen', {id: response.id});
                    },
                    function error(error){
                        Notifications.error(error.data.message+".");
                    }
                );
            } else {
                $scope.form.$setSubmitted();
            }
        };

    };

    module.controller('CrearCajaCtrl_Admin', function($injector, $scope, Sucursal, Agencia){
        $injector.invoke(crearCajaCtrl, this, {$scope: $scope});

        $scope.loadCombo = function(){
            $scope.combo.sucursal = Sucursal.$search().$object;
        };
        $scope.loadCombo();

        $scope.$watch('combo.selected.sucursal', function(){
            if(angular.isDefined($scope.combo.selected.sucursal)){
                $scope.combo.agencia = $scope.combo.selected.sucursal.$getAgencias().$object;
            }
        }, true);
        $scope.$watch('combo.selected.agencia', function(){
            if(angular.isDefined($scope.combo.selected.agencia)){
                $scope.combo.boveda = Agencia.$new($scope.combo.selected.agencia.id).$getBovedas().$object;
            }
        }, true);
    }).controller('CrearCajaCtrl_Gerentegeneral', function($injector, $scope, Sucursal, Agencia){
        $injector.invoke(crearCajaCtrl, this, {$scope: $scope});

        $scope.loadCombo = function(){
            $scope.combo.sucursal = Sucursal.$search().$object;
        };
        $scope.loadCombo();

        $scope.$watch('combo.selected.sucursal', function(){
            if(angular.isDefined($scope.combo.selected.sucursal)){
                $scope.combo.agencia = $scope.combo.selected.sucursal.$getAgencias().$object;
            }
        }, true);
        $scope.$watch('combo.selected.agencia', function(){
            if(angular.isDefined($scope.combo.selected.agencia)){
                $scope.combo.boveda = Agencia.$new($scope.combo.selected.agencia.id).$getBovedas().$object;
            }
        }, true);
    }).controller('CrearCajaCtrl_Administradorgeneral', function($injector, $rootScope, $scope, Sucursal, Agencia, sucursal){
        $injector.invoke(crearCajaCtrl, this, {$scope: $scope});

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
        $scope.$watch('combo.selected.agencia', function(){
            if(angular.isDefined($scope.combo.selected.agencia)){
                $scope.combo.boveda = Agencia.$new($scope.combo.selected.agencia.id).$getBovedas().$object;
            }
        }, true);
    }).controller('CrearCajaCtrl_Administrador', function($injector, $rootScope, $scope, Sucursal, Agencia, sucursal, agencia){
        $injector.invoke(crearCajaCtrl, this, {$scope: $scope});

        $scope.loadCombo = function(){
            $scope.combo.sucursal = [];
            $scope.combo.sucursal[0] = angular.extend(sucursal, Sucursal.$new(sucursal.id));
            $scope.combo.selected.sucursal = $scope.combo.sucursal[0];

            $scope.combo.agencia = [];
            $scope.combo.agencia[0] = angular.extend(agencia, Agencia.$new(agencia.id));
            $scope.combo.selected.agencia = $scope.combo.sucursal[0];
        };
        $scope.loadCombo();

        $scope.$watch('combo.selected.agencia', function(){
            if(angular.isDefined($scope.combo.selected.agencia)){
                $scope.combo.boveda = Agencia.$new($scope.combo.selected.agencia.id).$getBovedas().$object;
            }
        }, true);
    }).controller('CrearCajaCtrl_Jefecaja', function($injector, $rootScope, $scope, Sucursal, Agencia, sucursal, agencia){
        $injector.invoke(crearCajaCtrl, this, {$scope: $scope});

        $scope.loadCombo = function(){
            $scope.combo.sucursal = [];
            $scope.combo.sucursal[0] = angular.extend(sucursal, Sucursal.$new(sucursal.id));
            $scope.combo.selected.sucursal = $scope.combo.sucursal[0];

            $scope.combo.agencia = [];
            $scope.combo.agencia[0] = angular.extend(agencia, Agencia.$new(agencia.id));
            $scope.combo.selected.agencia = $scope.combo.sucursal[0];
        };
        $scope.loadCombo();

        $scope.$watch('combo.selected.agencia', function(){
            if(angular.isDefined($scope.combo.selected.agencia)){
                $scope.combo.boveda = Agencia.$new($scope.combo.selected.agencia.id).$getBovedas().$object;
            }
        }, true);
    });

    module.controller('CrearCajaFromAgenciaCtrl', function($scope, $state, Currency, Sucursal, Notifications){

        $scope.view = {
            agencia: $scope.$parent.view.agenciaDB,
            caja: undefined
        };

        $scope.combo = {
            boveda: undefined
        };
        $scope.combo.selected = {
            boveda: undefined
        };
        $scope.loadCombo = function(){
            $scope.combo.boveda = $scope.view.agencia.$getBovedas().$object;
        };
        $scope.loadCombo();

        $scope.addCaja = function(){
            if($scope.form.$valid){

                if($scope.view.agencia.estado == false){
                    Notifications.info("Agencia inactiva, no se puede actualizar.");
                    return;
                }

                $scope.view.caja.bovedas = $scope.combo.selected.boveda;
                $scope.view.agencia.$addCaja($scope.view.caja).then(
                    function(response){
                        Notifications.success("Caja creada");
                        $state.go('^.^.resumen');
                    },
                    function error(error){
                        Notifications.error(error.data.messaage+".");
                    }
                );
            }
        };
    });

});*/
