angular.module('starter.controllers')

.controller('AccountCtrl', ['$scope', '$location', 'Users', function($scope, $location, Users) {
  $scope.user = Users.getUser("Anonimo");

  $scope.setAccount = function (name) {
    Users.setUser(name);
    $location.path("/sds");
  };
}]);
