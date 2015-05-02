'use strict';

/* jshint -W098 */

angular.module('mean.cooperativa').controller('CooperativaSidebarController', ['$scope', '$menuItemsCooperativa',
    function($scope, $menuItemsCooperativa) {

        $scope.menuItems = $menuItemsCooperativa.prepareSidebarMenu().getAll();

    }
]);
