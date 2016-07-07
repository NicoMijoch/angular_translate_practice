 angular
      .module('translationApp', ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider) {
		  //
		  // For any unmatched url, redirect to /state1
		  $urlRouterProvider.otherwise("/state1");
		  //
		  // Now set up the states
		  $stateProvider
			.state('state1', {
			  url: "/state1/:param1",
			  templateUrl: "partials/state1.html"
			})
			.state('state1.list', {
			  url: "/list",
			  templateUrl: "partials/state1.list.html",
			  controller: "simpleCtrl"
			})
			.state('state2', {
			  url: "/state2",
			  templateUrl: "partials/state2.html"
			})
			.state('state2.list', {
			  url: "/list",
			  templateUrl: "partials/state2.list.html",
			  controller: function($scope) {
				$scope.things = ["A", "Set", "Of", "Things"];
			  }
			})
			.state('state3', {
			  url: "/state3",
			  templateUrl: "partials/state3.html",
			  controller: function($state){
				  $state.go("state1", {param1: true});
			  }
			});
		})
		.controller("simpleCtrl", function($scope,$stateParams){
			console.log($stateParams)
			debugger;
			$scope.demo="Simple Controller";
		})
		.filter('sacaras', function(){
			return function(input) {
				console.log(input);
				return input.replace(/A/g,"");
			}
		})
		.run(function($rootScope){
          $rootScope.mensaje = "ANGULAR.JS";
        });