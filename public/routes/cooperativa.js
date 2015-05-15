'use strict';

angular.module('mean.cooperativa').config(['$stateProvider',
    function ($stateProvider) {

        // Check if user has role
        var checkUserRole = function (role, $q, $timeout, $http, $location, Auth) {

            // Initialize a new promise
            var deferred = $q.defer();

            // Authenticated
            if (Auth.authz.hasResourceRole(role, 'cooperativa')) {
                $timeout(deferred.resolve);
            }

            // Not Authenticated
            else {
                $timeout(deferred.reject);
                //$location.url('/auth/login');
                alert('No tiene los permisos para poder acceder a esta pagina');
            }

            return deferred.promise;
        };


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
                controller: 'Cooperativa.BuscarBovedaController',
                resolve: {
                    loggedin: function ($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('PUBLIC', $q, $timeout, $http, $location, Auth)
                    },
                    sucursalSession: function(SGSession){
                        return SGSession.getSucursal();
                    },
                    agenciaSession: function(SGSession){
                        return SGSession.getAgencia();
                    }
                }
            })
            .state('cooperativa.app.estructura.crearBoveda', {
                url: '/crearBoveda',
                templateUrl: 'cooperativa/views/boveda/form-crear-boveda.html',
                controller: 'Cooperativa.CrearBovedaController',
                resolve: {
                    loggedin: function ($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('JEFE_CAJA', $q, $timeout, $http, $location, Auth)
                    },
                    sucursalSession: function(SGSession){
                        return SGSession.getSucursal();
                    },
                    agenciaSession: function(SGSession){
                        return SGSession.getAgencia();
                    }
                }
            })
            .state('cooperativa.app.estructura.editarBoveda', {
                url: '/boveda/:id',
                templateUrl: 'cooperativa/views/boveda/form-editar-boveda.html',
                controller: 'Cooperativa.EditarBovedaController',
                resolve: {
                    loggedin: function ($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('PUBLIC', $q, $timeout, $http, $location, Auth)
                    },
                    boveda: function ($state, $stateParams, SGBoveda) {
                        return SGBoveda.$find($stateParams.id);
                    }
                }
            })
            .state('cooperativa.app.estructura.editarBoveda.resumen', {
                url: '/resumen',
                templateUrl: 'cooperativa/views/boveda/form-editar-boveda-resumen.html',
                controller: 'Cooperativa.EditarBoveda.ResumenController',
                resolve: {
                    loggedin: function ($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('PUBLIC', $q, $timeout, $http, $location, Auth)
                    }
                }
            })
            .state('cooperativa.app.estructura.editarBoveda.datosPrincipales', {
                url: '/datosPrincipales',
                templateUrl: 'cooperativa/views/boveda/form-editar-boveda-datosPrincipales.html',
                controller: 'Cooperativa.EditarBoveda.DatosPrincipalesController',
                resolve: {
                    loggedin: function ($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('ADMIN', $q, $timeout, $http, $location, Auth)
                    }
                }
            })
            .state('cooperativa.app.estructura.editarBoveda.abrir', {
                url: '/abrir',
                templateUrl: 'cooperativa/views/boveda/form-editar-boveda-abrir.html',
                controller: 'Cooperativa.EditarBoveda.AbrirController',
                resolve: {
                    loggedin: function ($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('JEFE_CAJA', $q, $timeout, $http, $location, Auth)
                    }
                }
            })
            .state('cooperativa.app.estructura.editarBoveda.cerrar', {
                url: '/cerrar',
                templateUrl: 'cooperativa/views/boveda/form-editar-boveda-cerrar.html',
                controller: 'Cooperativa.EditarBoveda.CerrarController',
                resolve: {
                    loggedin: function ($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('JEFE_CAJA', $q, $timeout, $http, $location, Auth)
                    }
                }
            })

            .state('cooperativa.app.estructura.buscarCajas', {
                url: '/buscarCajas',
                templateUrl: 'cooperativa/views/caja/form-buscar-caja.html',
                controller: 'Cooperativa.BuscarCajaController',
                resolve: {
                    loggedin: function ($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('PUBLIC', $q, $timeout, $http, $location, Auth)
                    }
                }
            })
            .state('cooperativa.app.estructura.crearCaja', {
                url: '/crearCaja',
                templateUrl: 'cooperativa/views/caja/form-crear-caja.html',
                controller: 'Cooperativa.CrearCajaController',
                resolve: {
                    loggedin: function ($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('ADMIN', $q, $timeout, $http, $location, Auth)
                    }
                }
            })
            .state('cooperativa.app.estructura.editarCaja', {
                url: '/caja/:id',
                templateUrl: 'cooperativa/views/caja/form-editar-caja.html',
                controller: 'Cooperativa.EditarCajaController',
                resolve: {
                    loggedin: function ($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('PUBLIC', $q, $timeout, $http, $location, Auth)
                    },
                    caja: function ($state, $stateParams, SGCaja) {
                        return SGCaja.$find($stateParams.id);
                    }
                }
            })
            .state('cooperativa.app.estructura.editarCaja.resumen', {
                url: '/resumen',
                templateUrl: 'cooperativa/views/caja/form-editar-caja-resumen.html',
                controller: 'Cooperativa.EditarCaja.ResumenController',
                resolve: {
                    loggedin: function ($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('PUBLIC', $q, $timeout, $http, $location, Auth)
                    }
                }
            })
            .state('cooperativa.app.estructura.editarCaja.datosPrincipales', {
                url: '/datosPrincipales',
                templateUrl: 'cooperativa/views/caja/form-editar-caja-datosPrincipales.html',
                controller: 'Cooperativa.EditarCaja.DatosPrincipalesController',
                resolve: {
                    loggedin: function ($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('ADMIN', $q, $timeout, $http, $location, Auth)
                    }
                }
            })
            .state('cooperativa.app.estructura.editarCaja.abrir', {
                url: '/abrir',
                templateUrl: 'cooperativa/views/caja/form-editar-caja-abrir.html',
                controller: 'Cooperativa.EditarCaja.AbrirController',
                resolve: {
                    loggedin: function ($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('JEFE_CAJA', $q, $timeout, $http, $location, Auth)
                    }
                }
            })
            .state('cooperativa.app.estructura.editarCaja.cerrar', {
                url: '/cerrar',
                templateUrl: 'cooperativa/views/caja/form-editar-caja-cerrar.html',
                controller: 'Cooperativa.EditarCaja.CerrarController',
                resolve: {
                    loggedin: function ($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('CAJERO', $q, $timeout, $http, $location, Auth)
                    }
                }
            })
            .state('cooperativa.app.estructura.editarCaja.bovedas', {
                url: '/bovedas',
                templateUrl: 'cooperativa/views/caja/form-editar-caja-bovedas.html',
                controller: 'Cooperativa.EditarCaja.BovedasController',
                resolve: {
                    loggedin: function ($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('ADMIN', $q, $timeout, $http, $location, Auth)
                    }
                }
            })

            .state('cooperativa.app.transaccionInterna.buscarTransaccionesBovedaCaja', {
                url: '/buscarTransaccionesBovedaCaja',
                templateUrl: 'cooperativa/views/transaccionInterna/form-buscar-transaccionBovedaCaja.html',
                controller: 'Cooperativa.BuscarTransaccionBovedaCajaController',
                resolve: {
                    loggedin: function ($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('PUBLIC', $q, $timeout, $http, $location, Auth)
                    }
                }
            })

            .state('cooperativa.app.transaccionInterna.buscarTransaccionesCajaCaja', {
                url: '/buscarTransaccionesCajaCaja',
                templateUrl: 'cooperativa/views/transaccionInterna/form-buscar-transaccionCajaCaja.html',
                controller: 'Cooperativa.BuscarTransaccionCajaCajaController',
                resolve: {
                    loggedin: function ($q, $timeout, $http, $location, Auth) {
                        return checkUserRole('PUBLIC', $q, $timeout, $http, $location, Auth)
                    }
                }
            })
        ;

    }
]);

