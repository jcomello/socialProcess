angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('ProcessesCtrl', function($scope, Processes) {
  $scope.processes = Processes.all();
})

.controller('ProcessDetailCtrl', function($scope, $stateParams, Processes) {
  $scope.process = Processes.get($stateParams.processId);
  $scope.steps = $scope.process.steps;
})

.controller('AccountCtrl', function($scope) {
});
