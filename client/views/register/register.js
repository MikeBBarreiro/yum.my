
(function(){
  'use strict';

  angular.module('yummy')
  .controller('RegisterCtrl', ['$scope', '$location', 'User', function($scope, $location, User){
    $scope.user = {};

    function success(response){
      toastr.success('Wonderful, You have registered!');
      $location.path('/login');
    }
    function failure(response){
      toastr.error('ERROR, regrestration, please fix, or try again!');
      $scope.user = {};
    }

    $scope.register = function(){
      User.register($scope.user).then(success, failure);
    };
  }]);
})();

