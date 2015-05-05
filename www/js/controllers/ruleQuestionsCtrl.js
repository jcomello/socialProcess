angular.module('starter.controllers')

.controller('RuleQuestionsCtrl',['$scope', 'Processes', '$ionicLoading', function($scope, Processes, $ionicLoading) {
  $scope.show = function () {
    $ionicLoading.show({
      duration: 30000,
      noBackdrop: true,
      template: '<p class="item-icon-left">carregando...<ion-spinner icon="lines"/></p>'
    });
  };

  $scope.show();

  Processes.getRule($scope.process.id, $scope.currentRule.id)
    .success(function (response) {
      $scope.hide();

      $scope.rule = response;
      $scope.questions = $scope.rule.questions;

      $scope.ruleQuestionsSettingsModal.show();
    })

    .error(function (error) {
      $scope.hide();
      console.log(error);
  });

  $scope.addQuestion = function(title) {
    var lastQuestion = $scope.questions[$scope.questions.length-1]

    $scope.questions.push({id: lastQuestion.id+1, title: title, from: "João", replies: []});
  };

  $scope.addQuestionReply = function(question, reply) {
    var currentQuestion = $scope.questions.filter(function (elem) {
      return elem.id === question.id;
    })[0];

    currentQuestion.replies.push(reply)
  }

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.close = function() {
    $scope.ruleQuestionsSettingsModal.hide();
  };
}]);
