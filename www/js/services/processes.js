angular.module('starter.services', [])

.factory('Processes', ['$http', '$filter', function ($http, $filter) {
  var factory = {};

  factory.all = function () {
    return $http.get("http://private-506c1-socialprocess.apiary-mock.com/processes");
  };

  factory.get = function (processId) {
    return $http.get("http://private-506c1-socialprocess.apiary-mock.com/processes/"+ processId);
  };

  factory.getRule = function (processId, ruleId) {
    return $http.get("http://private-506c1-socialprocess.apiary-mock.com/processes/"+ processId + '/rules/' + ruleId);
  };

  factory.getQuestion = function (processId, ruleId, questionId) {
    return $http.get("http://private-506c1-socialprocess.apiary-mock.com/processes/"+ processId + '/rules/' + ruleId + "/questions/" + questionId);
  };

  return factory;
}]);
