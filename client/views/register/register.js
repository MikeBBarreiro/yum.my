(function(){
  'use strict';

  angular.module('yummy')
  .controller('RegisterCtrl', ['$scope', 'Register', function($scope, Register){
    $scope.user = {};

    $scope.register = function(){
      $scope.user = {};
    };
  }]);
})();

