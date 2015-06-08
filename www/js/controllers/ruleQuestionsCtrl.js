angular.module('starter.controllers')

.controller('RuleQuestionsCtrl',['$scope', 'Processes', '$stateParams', '$ionicLoading', '$ionicModal', 'Processes', 'Users', function($scope, Processes, $stateParams, $ionicLoading, $ionicModal, Processes, Users) {
  $scope.params = $stateParams;

  Processes.getRule($scope.params.processId, $scope.params.ruleId)
    .success(function (response) {
      $scope.questions = response;
    })

    .error(function (error) {
      console.log(error);
  });

  $scope.addQuestion = function(title) {
    var data = {from: Users.getUser()['name'], title: title}

    Processes.setRuleQuestion($scope.params.processId, $scope.params.ruleId, data)
      .success(function (response) {
        $scope.questions.push(response);
      })
      .error(function (error) {
        console.log(error);
      });
  };
}])
