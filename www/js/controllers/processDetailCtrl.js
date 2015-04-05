angular.module('starter.controllers', [])

.controller('ProcessDetailCtrl', function($scope, $stateParams, $ionicModal, Processes, $ionicLoading, $timeout) {
  $scope.show = function () {
    $ionicLoading.show({
      duration: 30000,
      noBackdrop: true,
      template: '<p class="item-icon-left">carregando...<ion-spinner icon="lines"/></p>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.show();
  // método faz request http para a API pedindo um processo dado o ID
  Processes.get($stateParams.processId)
    .success(function (response) {
      $scope.hide();
      // Cria a modal de regras
      $ionicModal.fromTemplateUrl('modal-rules.html', { scope: $scope }).then(function(modal) {
        $scope.rulesSettingsModal = modal;
      });

      // Cria a modal de Comentarios
      $ionicModal.fromTemplateUrl('modal-comments.html', { scope: $scope }).then(function(modal) {
        $scope.commentsSettingsModal = modal;
      });

      $scope.process = response;
    })

    .error(function (error) {
      console.log(error);
  });

  $scope.openRules = function() {
    // abre modal de regras
    $scope.rulesSettingsModal.show();
  };

  $scope.openComments = function() {
    // abre modal de comentários
    $scope.commentsSettingsModal.show();
  };
})

.controller('RulesCtrl', function($scope) {
  $scope.rules = $scope.process.rules

  $scope.close = function() {
    $scope.rulesSettingsModal.hide();
  };
})

.controller('CommentsCtrl', function($scope) {
  $scope.comments = $scope.process.comments;

  $scope.close = function() {
    $scope.commentsSettingsModal.hide();
  };

  // adiciona comentário à lista de comentários já existente
  $scope.addCommentary = function (comment) {
    $scope.comments.push(comment);
  };
});
