angular.module('starter.controllers', [])

.controller('ProcessesCtrl', function($scope, Processes) {
  Processes.all()
    .success(function (response) {
      $scope.processes = response;
    })

    .error(function (error) {
      console.log(error);
    });
})

.controller('ProcessDetailCtrl', function($scope, $stateParams, $ionicModal, Processes) {
  Processes.get($stateParams.processId)
    .success(function (response) {
      $ionicModal.fromTemplateUrl('modal-rules.html', { scope: $scope }).then(function(modal) {
        $scope.settingsModal = modal;
      });

      $scope.process = response;
    })

    .error(function (error) {
      console.log(error);
  });

  $scope.openRules = function() {
    $scope.settingsModal.show();
  };
})

.controller('RulesCtrl', function($scope) {
  $scope.rules = $scope.process.rules

  $scope.close = function() {
    $scope.settingsModal.hide();
  }
});
