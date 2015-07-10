//"iffy" - IIFE
(function() {

	angular.module("CalculationForm", [])
				 .controller("MainController", ["$scope", "$http", MainController]);

		function MainController($scope, $http) {

			function error(){
				console.log("Error: Could not find the items");
			}

			var promise = $http.get('data.json');
			var gatherDataComplete = function(response){
				$scope.retrievedData = response.data;

				console.log($scope.retrievedData);
			};

			promise.then(gatherDataComplete, error);

			$scope.Math = window.Math;
		}





			window.onload = function(){


			};

}());
