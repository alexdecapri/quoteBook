var app = angular.module("quoteBook");

app.controller("mainCtrl", function($scope, dataService) {

	$scope.quotes = dataService.quotes;

	$scope.getData = function() {
		dataService.getData();
	};

	$scope.addData = function(data) {
		dataService.addData(data);
	};

	$scope.removeData = function(text) {
		dataService.removeData(text);
	};

});