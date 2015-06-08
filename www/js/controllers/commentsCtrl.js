angular.module('starter.controllers')

.controller('CommentsCtrl', ['$scope', 'Users','Processes', function($scope, Users, Processes) {
  $scope.comments = $scope.process.comments;

  $scope.close = function() {
    $scope.commentsSettingsModal.hide();
  };

  // adiciona comentário à lista de comentários já existente
  $scope.addCommentary = function (comment) {
    var data = {from: Users.getUser()['name'], text: comment}

    Processes.setComment($scope.process.id, data)
      .success(function (response) {
        $scope.comments.push(response);
      })
      .error(function (error) {
        console.log(error)
      });
  };
}]);
