var app = angular.module("quoteBook");

app.controller("mainCtrl", function($scope, dataService) {

	$scope.quotes = dataService.getData();

//unneccesary
	// $scope.getter = function() {
	// 	dataService.getData();
	// };
	//
	// $scope.adder = function(data) {
	// 	dataService.addData(data);
	// };
	//
	// $scope.remover = function(text) {
	// 	dataService.removeData(text);
	// };

});
