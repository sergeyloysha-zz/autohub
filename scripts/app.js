/*
 * Autohub project v1.0
 * Copyright (C) 2015 Sergey Loysha <sergeyloysha@gmail.com>
 */

'use strict';

angular.module('ah', [
  'ngRoute',
  'ngResource',
  'ah.filters',
  'ah.services',
  'ah.directives',
  'ah.controllers'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'InitCtrl',
      templateUrl: 'assets/views/autohub.html'
    })
    .when('/404', {
      template: '<div>Not Found</div>'
    })
    .otherwise({
      redirectTo: '/404'
    })
}])

.constant('constants', {

})
angular.module('ah.controllers', [])

  .controller('InitCtrl', ['$scope', 'Auto', function($scope, Auto) {

    $scope.model = {
      page: 1
    }

    $scope.items = Auto.query();

    $scope.pages = [
      {"id": 1},
      {"id": 2},
      {"id": 3},
      {"id": 4},
      {"id": 5}
    ]
  }])
angular.module('ah.directives', [])

  .directive('header', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "/assets/views/header.html",
        controller: function($scope, Auto) {
          $scope.items = Auto.query();
        }
    }
  })

  .directive('footer', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "/assets/views/footer.html",
    }
  })
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
angular.module('ah.filters', [])