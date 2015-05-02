'use strict';

angular.module('mean.cooperativa').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
        .state('cooperativa example page', {
      url: '/cooperativa/example',
      templateUrl: 'cooperativa/views/index.html'
    })

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
          controller: 'Cooperativa.BuscarCooperativaController'
        })

    ;
  }
]);
