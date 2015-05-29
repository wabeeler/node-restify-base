angular.module('myApp')
	.directive('cartSnap', function(){
		return {
			restricts: 'E',
			templateUrl: 'src/directives/templates/cartSnapshot.html'
		};
	});