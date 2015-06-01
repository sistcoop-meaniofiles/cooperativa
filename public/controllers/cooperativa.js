'use strict';

/* jshint -W098 */
angular.module('mean.cooperativa').controller('CooperativaController', ['$scope', 'Global', 'Cooperativa', 'Auth',
    function ($scope, Global, Cooperativa, Auth) {
        $scope.global = Global;
        $scope.package = {
            name: 'cooperativa'
        };

        function getAccess(role) {
            if (!Auth) {
                return false;
            }

            var rolesSession = Auth.authz.resourceAccess.cooperativa.roles;
            if (rolesSession.indexOf(role) != -1) {
                return true;
            }

            return false;
        }

        $scope.access = {

            get verBovedas() {
                return getAccess('ver-bovedas');
            },
            get verCajas() {
                return getAccess('ver-cajas')
            },


            get administrarBovedas() {
                return getAccess('administrar-bovedas');
            },
            get administrarCajas() {
                return getAccess('administrar-cajas');
            }

        };
    }
]);
