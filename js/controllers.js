'use strict';

    var myApp = angular.module('myApp', ['ui.router']);
    // For Component users, it should look like this:
    // var myApp = angular.module('myApp', [require('angular-ui-router')]);
	myApp.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/");

		$stateProvider
		    .state('home', {
			    url: "/",
			    templateUrl: "index.html",
			    controller: function($scope) {
			    	$scope.items = ["includes", "Drives"];
		    	}
		    })
		    .state('contact', {
			    url: "/contact",
			    templateUrl: "template/contact.html",
			    controller: function($scope) {
			    	$scope.things = ["includes", "Drives"];
		    	}
    	});
	});