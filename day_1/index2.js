// var app = angular.module("myApp", []);
// app.controller("myCtrl", function($scope) {
//   $scope.firstName = "John"
//   $scope.lastName = "Doe";
// });
// app.directive("w3TestDirective", function() {
//   return {
//     template : "I was made in a directive constructor!"
//   };
// });


var app2 = angular.module("myApp2", []);
app2.controller("myCtrl2", function($scope) {
  $scope.quantity = 1;
  $scope.price = 100;
  $scope.names = [{name:'JIM'}, {name:'JOHN'}, {name:'JACK'}]
});