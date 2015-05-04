/*define(['../../../module'], function (module) {
    'use strict';

    module.controller('BovedaDatosPrincipalesCtrl', function($scope){

        $scope.refresh = function(){
            if(angular.isDefined($scope.view.bovedaDB))
                $scope.view.boveda = angular.copy($scope.view.bovedaDB);
        };
        $scope.refresh();

    });
});*/