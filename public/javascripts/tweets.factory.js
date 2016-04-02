angular.module('tweets').factory('TweetsFactory', 
  function ($resource) {

      var url = '/tweets/:action/:user';
      
      return $resource(url, { action: '@action',  user: '@user'}, {
      });
  }
);