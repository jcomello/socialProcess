angular.module('starter.controllers')

.controller('CommentsCtrl', ['$scope', 'Users', function($scope, Users) {
  $scope.comments = $scope.process.comments;

  $scope.close = function() {
    $scope.commentsSettingsModal.hide();
  };

  // adiciona comentário à lista de comentários já existente
  $scope.addCommentary = function (comment) {
    $scope.comments.push({from: Users.getUser()['name'], text: comment});
  };
}]);
