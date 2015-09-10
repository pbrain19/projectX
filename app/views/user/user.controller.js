
angular.module("app")
    .controller("userController", function ($scope) {

  $scope.companyTypes = [
    'Agency',
    'Brand',
    'Media Group',
    'Other'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

 });