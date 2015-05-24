angular.module('starter.controllers')

.controller('RuleQuestionsCtrl',['$scope', 'Processes', '$stateParams', '$ionicLoading', '$ionicModal', function($scope, Processes, $stateParams, $ionicLoading, $ionicModal) {
  Processes.getRule($stateParams.processId, $stateParams.ruleId)
    .success(function (response) {
      $ionicModal.fromTemplateUrl('modal-question-replies.html', { scope: $scope }).then(function(modal) {
        $scope.questionRepliesSettingsModal = modal;
      });

      $scope.rule = response;
      $scope.questions = $scope.rule.questions;
    })

    .error(function (error) {
      console.log(error);
  });

  $scope.openQuestionReplies = function() {
    // abre modal de comentários
    $scope.questionRepliesSettingsModal.show();
  };

  $scope.addQuestion = function(title) {
    var lastQuestion = $scope.questions[$scope.questions.length-1]

    $scope.questions.push({id: lastQuestion.id+1, title: title, from: "João", replies: []});
  };
}]);
