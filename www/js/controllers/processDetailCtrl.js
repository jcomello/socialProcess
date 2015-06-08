angular.module('starter.controllers')

.controller('ProcessDetailCtrl', ['$scope', '$stateParams', '$ionicModal', 'Processes', '$ionicLoading', '$timeout', function($scope, $stateParams, $ionicModal, Processes, $ionicLoading, $timeout) {
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
      $scope.process = response;
      $scope.rules = $scope.process.rules;

      // Cria a modal de Comentarios
      $ionicModal.fromTemplateUrl('modal-comments.html', { scope: $scope }).then(function(modal) {
        $scope.commentsSettingsModal = modal;
      });
    })

    .error(function (error) {
      $scope.hide();
      console.log(error);
  });

  $scope.openComments = function() {
    // abre modal de comentários
    $scope.commentsSettingsModal.show();
  };
}])

