angular.module('ionic.utils', [])

.factory('Users', ['$window', function($window) {
  return {
    setUser: function(value) {
      var setValue = { name: value };
      $window.localStorage["user"] = JSON.stringify(setValue);
    },

    getUser: function(defaultValue) {
      var value = $window.localStorage["user"] || JSON.stringify({ name: defaultValue });
      return JSON.parse(value);
    },

    hasUser: function() {
      return $window.localStorage["user"] == undefined;
    }
  }
}]);
