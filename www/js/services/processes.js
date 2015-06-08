angular.module('starter.services', [])

.factory('Processes', ['$http', '$filter', function ($http, $filter) {
  var factory = {};
  var endpoint = "http://regra-clara-service.herokuapp.com/"

  factory.all = function () {
    return $http.get(endpoint + "procedures");
  };

  factory.get = function (processId) {
    return $http.get(endpoint + "procedures/"+ processId);
  };

  factory.getRule = function (processId, ruleId) {
    return $http.get(endpoint + "procedures/"+ processId + '/rules/' + ruleId + '/questions');
  };

  factory.getQuestion = function (processId, ruleId, questionId) {
    return $http.get(endpoint + "procedures/"+ processId + '/rules/' + ruleId + "/questions/" + questionId + '/replies');
  };

  factory.setComment = function(processId, data) {
    return $http.post(endpoint + "procedures/" + processId + "/comments", { comment: data })
  };

  factory.setRuleQuestion = function(processId, ruleId, data) {
    return $http.post(endpoint + "procedures/"+ processId +"/rules/"+ ruleId +"/questions", { question: data })
  };

  factory.setRuleQuestionReply = function(processId, ruleId, questionId, data) {
    return $http.post(endpoint + "procedures/"+processId+"/rules/"+ ruleId +"/questions/"+ questionId +"/replies", {reply: data})
  };

  return factory;
}]);
