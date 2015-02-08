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
        $scope.rulesSettingsModal = modal;
      });

      $ionicModal.fromTemplateUrl('modal-comments.html', { scope: $scope }).then(function(modal) {
        $scope.commentsSettingsModal = modal;
      });

      $scope.process = response;
    })

    .error(function (error) {
      console.log(error);
  });

  $scope.openRules = function() {
    $scope.rulesSettingsModal.show();
  };

  $scope.openComments = function() {
    $scope.commentsSettingsModal.show();
  };
})

.controller('RulesCtrl', function($scope) {
  $scope.rules = $scope.process.rules

  $scope.close = function() {
    $scope.rulesSettingsModal.hide();
  }
})

.controller('CommentsCtrl', function($scope) {
  $scope.comments = $scope.process.comments

  $scope.close = function() {
    $scope.commentsSettingsModal.hide();
  }
});
