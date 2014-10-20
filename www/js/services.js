angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Processes', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var processes = [
    { id: 0, name: 'Receber paciente', steps: ['Receber paciente', 'Cadastrar dados do paciente', 'Indicar médico ao paciente', 'Liberar paciente'] },
    { id: 1, name: 'Indicar médico',   steps: ['Pesquisar dados do médico', 'Passar cartão com os dados do médico'] }
  ];

  return {
    all: function() {
      return processes;
    },
    get: function(processId) {
      // Simple index lookup
      return processes[processId];
    }
  }
});
