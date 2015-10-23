/*
 * Autohub project v1.0
 * Copyright (C) 2015 Sergey Loysha <sergeyloysha@gmail.com>
 */

'use strict';

angular.module('ah', [
  'ngRoute',
  'ngStorage',
  'ah.filters',
  'ah.services',
  'ah.directives',
  'ah.controllers',
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'InitCtrl',
      templateUrl: 'assets/views/autohub.html'
    })
    .otherwise({
      redirectTo: '/404'
    })
}])

.constant('constants', {

})
angular.module('ah.controllers', [])

  .controller('InitCtrl', ['$scope', function($scope) {
    $scope.items = [
      {"id": 1, "auto": "Mercedes CLS350", "image": "assets/images/thumbs/img_1.png", "year": 2013, "milage": "47 000", "engine": "Бензин 3.5 A", "price": "39 500"},
      {"id": 2, "auto": "Alfa Romeo MiTo", "image": "assets/images/thumbs/img_2.png", "year": 2010, "milage": "139 087", "engine": "Бензин 1.4 M", "price": "9 450"},
      {"id": 3, "auto": "Volkswagen Passat CC", "image": "assets/images/thumbs/img_3.png", "year": 2011, "milage": "53 000", "engine": "Бензин 2.0 А", "price": "16 000"},
      {"id": 4, "auto": "Volvo XC60", "image": "assets/images/thumbs/img_4.png", "year": 2010, "milage": "88 000", "engine": "Бензин 2.0 А", "price": "18 100"},
      {"id": 5, "auto": "Ford Fusion SE15", "image": "assets/images/thumbs/img_5.png", "year": 2013, "milage": "13 000", "engine": "Бензин 1.6 А", "price": "16 300"},
      {"id": 6, "auto": "Audi A8", "image": "assets/images/thumbs/img_6.png", "year": 2011, "milage": "89 000", "engine": "Дизель 4.0 А", "price": "32 900"},
      {"id": 7, "auto": "Mercedes GL500 4MATIC", "image": "assets/images/thumbs/img_7.png", "year": 2007, "milage": "125 000", "engine": "Бензин 5.5 А", "price": "21 900"},
      {"id": 8, "auto": "Porsche Macan S", "image": "assets/images/thumbs/img_8.png", "year": 2014, "milage": "9 700", "engine": "Бензин 3.0 А", "price": "65 500"},
      {"id": 9, "auto": "Fiat 500", "image": "assets/images/thumbs/img_9.png", "year": 2008, "milage": "86 280", "engine": "Бензин 1.2 М", "price": "6 000"}
    ]
  }])
angular.module('ah.directives', [])
angular.module('ah.services', [])
angular.module('ah.filters', [])