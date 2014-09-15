
(function(){
  'use strict';

  angular.module('yummy')
  .controller('LoginCtrl', ['$scope', '$location', 'User', function($scope, $location, User){
    $scope.user = {};

    function success(response){
      toastr.success('Wonderful');
      $location.path('/');
    }

    function failure(response){
      toastr.error('Try again');
      $scope.user = {};
    }

    $scope.login = function(){
      User.login($scope.user).then(success, failure);
    };
  }]);
})();

