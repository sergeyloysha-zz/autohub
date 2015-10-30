angular.module('ah.services', [])

  .factory('Auto', ['$resource',
  function($resource){
    return $resource('data/:autoId.json', {}, {
      query: {
        method:'GET',
        params: {
          autoId:'autos'
        },
          isArray:true
      }
    });
  }]);