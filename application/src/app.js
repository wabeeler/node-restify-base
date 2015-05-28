var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(['$routeProvider', function($route) {

	$route
		.when('/products', {
			templateUrl: 'src/templates/products.html'
		})
		.when('/cart', {
			templateUrl: 'src/templates/cart.html'
		})
		.otherwise({
			redirectTo: '/products'
		});
}]);