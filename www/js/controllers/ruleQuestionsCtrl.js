angular.module('starter.controllers')

.controller('RuleQuestionsCtrl',['$scope', 'Processes', '$stateParams', '$ionicLoading', '$ionicModal', function($scope, Processes, $stateParams, $ionicLoading, $ionicModal) {
  $scope.params = $stateParams;

  Processes.getRule($scope.params.processId, $scope.params.ruleId)
    .success(function (response) {
      $scope.rule = response;
      $scope.questions = $scope.rule.questions;
    })

    .error(function (error) {
      console.log(error);
  });

  $scope.addQuestion = function(title) {
    var lastQuestion = $scope.questions[$scope.questions.length-1]

    $scope.questions.push({id: lastQuestion.id+1, title: title, from: "João", replies: []});
  };
}])
