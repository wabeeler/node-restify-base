angular.module('myApp')
	.factory('productFac', ['$http', 
		function($http){
			var returnObj = {};

			returnObj.getProducts = function() {
				return $http.get('/product-list');

			};

			return returnObj;
		}
	]);