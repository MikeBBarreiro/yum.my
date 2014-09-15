
(function(){
  'use strict';

  angular.module('yummy')
  .controller('RegisterCtrl', ['$scope', 'User', function($scope, User){
    $scope.user = {};

    function success(response){
      toastr.success('Wonderful, You have registered!');
    }
    function failure(response){
      toastr.error('ERROR, regrestration, please fix, or try again!');
    }

    $scope.register = function(){
      User.register($scope.user).then(success, failure);
    };
  }]);
})();

