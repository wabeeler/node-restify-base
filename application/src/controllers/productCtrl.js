angular.module('myApp')
	.controller('productCtrl', ['$scope', 'productFac',
		function($scope, productFac) {
			productFac.getProducts()
			.success( function(products) {
				$scope.products = products;
			});
		}
	]);