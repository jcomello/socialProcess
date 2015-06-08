angular.module('starter.controllers')

.controller('QuestionRepliesCtrl', ['$scope', '$stateParams', 'Processes', 'Users', function($scope, $stateParams, Processes, Users) {

  Processes.getQuestion($stateParams.processId, $stateParams.ruleId, $stateParams.questionId)
    .success(function (response) {
      console.log(response)
      $scope.replies = response;
    })

    .error(function (error) {
      console.log(error);
    });

  $scope.addReply = function (reply) {
    $scope.replies.push({from: Users.getUser()['name'], text: reply})
  };
}]);
