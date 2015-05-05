'use strict';

angular.module('mean.cooperativa').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('cooperativa', {
                abstract: true,
                url: '/cooperativa',
                templateUrl: 'cooperativa/views/_body.html'
            })
            .state('cooperativa.home', {
                url: '/home',
                templateUrl: 'cooperativa/views/index.html'
            })
            .state('cooperativa.app', {
                url: '/app',
                templateUrl: 'cooperativa/views/app.html'
            })

            .state('cooperativa.app.estructura', {
                url: '/estructura',
                template: '<div ui-view></div>'
            })
            .state('cooperativa.app.transaccionInterna', {
                url: '/transaccionInterna',
                template: '<div ui-view></div>'
            })
            .state('cooperativa.app.transaccionCliente', {
                url: '/transaccionCliente',
                template: '<div ui-view></div>'
            })

            //estructura
            .state('cooperativa.app.estructura.buscarBovedas', {
                url: '/buscarBovedas',
                templateUrl: 'cooperativa/views/boveda/form-buscar-boveda.html',
                controller: 'Cooperativa.BuscarBovedaController'
            })
            .state('cooperativa.app.estructura.crearBoveda', {
                url: '/crearBoveda',
                templateUrl: 'cooperativa/views/boveda/form-crear-boveda.html',
                controller: 'Cooperativa.CrearBovedaController'
            })
            .state('cooperativa.app.estructura.editarBoveda', {
                url: '/boveda/:id',
                templateUrl: 'cooperativa/views/boveda/form-editar-boveda.html',
                controller: 'Cooperativa.EditarBovedaController',
                resolve: {
                    boveda: function($state, $stateParams, SGBoveda) {
                        return SGBoveda.$find($stateParams.id);
                    }
                }
            })
            .state('cooperativa.app.estructura.editarBoveda.resumen', {
                url: '/resumen',
                templateUrl: 'cooperativa/views/boveda/form-editar-boveda-resumen.html',
                controller: 'Cooperativa.EditarBoveda.ResumenController'
            })
            .state('cooperativa.app.estructura.editarBoveda.datosPrincipales', {
                url: '/datosPrincipales',
                templateUrl: 'cooperativa/views/boveda/form-editar-boveda-datosPrincipales.html',
                controller: 'Cooperativa.EditarBoveda.DatosPrincipalesController'
            })
            .state('cooperativa.app.estructura.editarBoveda.abrir', {
                url: '/abrir',
                templateUrl: 'cooperativa/views/boveda/form-editar-boveda-abrir.html',
                controller: 'Cooperativa.EditarBoveda.AbrirController'
            });

    }
]);
