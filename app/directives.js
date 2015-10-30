angular.module('ah.directives', [])

  .directive('header', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "assets/views/header.html",
        controller: function($scope, Auto) {
          $scope.items = Auto.query();
        }
    }
  })

  .directive('footer', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "assets/views/footer.html",
    }
  })