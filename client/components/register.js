(function(){
  'use strict';

  angular.module('yummy')
  .factory('User', ['$http', function($http){

    function register(user){
      return $http.post('/register', user);
    }

    return {register:register};
  }]);
})();

