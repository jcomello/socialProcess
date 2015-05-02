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
      console.log($scope.questions)
      $scope.ruleQuestionsSettingsModal.show();
    })

    .error(function (error) {
      $scope.hide();
      console.log(error);
  });

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.close = function() {
    $scope.ruleQuestionsSettingsModal.hide();
  };
}]);
