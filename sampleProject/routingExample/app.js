	// create the module and name it scotchApp
	var myapp = angular.module('myApp', ['ngRoute']);

	// configure our routes
	myapp.config(function($routeProvider, $locationProvider) {
		
		//$locationProvider.html5Mode({
		 // enabled: true,
		  //requireBase: true
		//});
		//$locationProvider.hashPrefix('');
		$routeProvider

			// route for the about page
			.when('/home', {
				templateUrl : 'home.html',
				controller  : 'mainController'
			})

			// route for the contact page
			.when('/home/:search', {
				templateUrl : 'home.html',
				controller  : 'mainController'
			});
	});

	// create the controller and inject Angular's $scope
	myapp.controller('mainController', function($scope, $routeParams, $window) {
		// create a message to display in our view
		debugger;
		$window;
		$scope.name = "Shivalingam Narsanolla"
		$scope.params = $routeParams.search;
		if($scope.params === "name") {
			$scope.message = "shiva";
		} else if($scope.params === "empId") {
			$scope.message = "74125_IN";
		} else if($scope.params === "position") {
			$scope.message = "Associate";
		}
	});
	
	myapp.controller('FirstController', function($scope, $routeParams, $window) {
		// create a message to display in our view
		debugger;
		$scope.protypeMessage = 'This message you are seeing is written in First Controller';
		$scope.name = "SHivalingam"
		
	});
	
	myapp.controller('SecondController', function($scope, $routeParams, $window) {
		// create a message to display in our view
		debugger;
		$scope.fullName = $scope.$parent.name;
		
	});
	
	myapp.controller('parseController', function($scope, $parse) {
		// create a message to display in our view
		$scope.inputData = '';
		
		$scope.$watch('inputData', function(newValue, oldValue, scope){
			debugger;
			if (newValue !== oldValue) {
				// Let's set up our parseFun with the expression
				var parseFun = $parse(newValue);
				// Get the value of the parsed expression
				$scope.parsedData = parseFun(scope);
			}
		})
		
	});
