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
            })
            .state('cooperativa.app.estructura.editarBoveda.cerrar', {
                url: '/cerrar',
                templateUrl: 'cooperativa/views/boveda/form-editar-boveda-cerrar.html',
                controller: 'Cooperativa.EditarBoveda.CerrarController'
            })

            .state('cooperativa.app.estructura.buscarCajas', {
                url: '/buscarCajas',
                templateUrl: 'cooperativa/views/caja/form-buscar-caja.html',
                controller: 'Cooperativa.BuscarCajaController'
            })
            .state('cooperativa.app.estructura.crearCaja', {
                url: '/crearCaja',
                templateUrl: 'cooperativa/views/caja/form-crear-caja.html',
                controller: 'Cooperativa.CrearCajaController'
            })
            .state('cooperativa.app.estructura.editarCaja', {
                url: '/caja/:id',
                templateUrl: 'cooperativa/views/caja/form-editar-caja.html',
                controller: 'Cooperativa.EditarCajaController',
                resolve: {
                    caja: function($state, $stateParams, SGCaja) {
                        return SGCaja.$find($stateParams.id);
                    }
                }
            })
            .state('cooperativa.app.estructura.editarCaja.resumen', {
                url: '/resumen',
                templateUrl: 'cooperativa/views/caja/form-editar-caja-resumen.html',
                controller: 'Cooperativa.EditarCaja.ResumenController'
            })
            .state('cooperativa.app.estructura.editarCaja.datosPrincipales', {
                url: '/datosPrincipales',
                templateUrl: 'cooperativa/views/caja/form-editar-caja-datosPrincipales.html',
                controller: 'Cooperativa.EditarCaja.DatosPrincipalesController'
            })
            .state('cooperativa.app.estructura.editarCaja.abrir', {
                url: '/abrir',
                templateUrl: 'cooperativa/views/caja/form-editar-caja-abrir.html',
                controller: 'Cooperativa.EditarCaja.AbrirController'
            })
            .state('cooperativa.app.estructura.editarCaja.cerrar', {
                url: '/cerrar',
                templateUrl: 'cooperativa/views/caja/form-editar-caja-cerrar.html',
                controller: 'Cooperativa.EditarCaja.CerrarController'
            })
            .state('cooperativa.app.estructura.editarCaja.bovedas', {
                url: '/bovedas',
                templateUrl: 'cooperativa/views/caja/form-editar-caja-bovedas.html',
                controller: 'Cooperativa.EditarCaja.BovedasController'
            });

    }
]);
