var app = angular.module("quoteBook");

app.controller("mainCtrl", function($scope, dataService) {

	$scope.quotes = dataService.getData();

	// $scope.testModel = function(newQuote) {
	// 	console.log(newQuote);
	// 	console.log($scope.newQuote);
	// }
	$scope.adder = function() {
		dataService.addData($scope.quote);
	};

	//this funciton is on remove button, if you have full quote in there, it removes that quote from the list
	$scope.remover = function() {
		dataService.removeData($scope.quoteAuthor);
	};

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
