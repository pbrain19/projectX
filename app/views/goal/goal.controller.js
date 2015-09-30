angular.module('app').controller('goalController', function ($scope) {

$scope.options = [
  "traffic to site",
  "product purchase",
  "subscriber sign-up",
  "brand awareness",
  "other (redirected to SDR team)",
  "seasonal campaign push (i.e., holiday)"
];

$scope.fakeModel = {
  goal: $scope.options[2]
}

});