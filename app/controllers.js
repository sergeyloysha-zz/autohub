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