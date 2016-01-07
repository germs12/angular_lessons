var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $rootScope) {
$scope.names = ["Emil", "Tobias", "Linus"];
$rootScope.lastname = "Refsnes";
});