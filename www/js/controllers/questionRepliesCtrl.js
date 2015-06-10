angular.module('starter.controllers')

.controller('QuestionRepliesCtrl', ['$scope', '$stateParams', 'Processes', 'Users', function($scope, $stateParams, Processes, Users) {

  Processes.getQuestion($stateParams.processId, $stateParams.ruleId, $stateParams.questionId)
    .success(function (response) {
      $scope.replies = response;
    })

    .error(function (error) {
      console.log(error);
    });

  $scope.addReply = function (reply) {
    var data = {from: Users.getUser()['name'], text: reply}

    Processes.setRuleQuestionReply($stateParams.processId, $stateParams.ruleId, $stateParams.questionId, data)
      .success(function (response) {
        $scope.replies.push(response)
      })
      .error(function(error) {
        console.log(error)
      });
  };

  $scope.like = function (replyId) {
    Processes.setRuleQuestionReplyLikes($stateParams.processId, $stateParams.ruleId, $stateParams.questionId, replyId)
      .success(function (response) {
        console.log(response)
        $scope.replies = response
      })
      .error(function(error) {
        console.log(error)
      });
  };
}]);
