angular.module('myApp')
	.controller('cartCtrl', ['$scope', 'cartFac',
		function($scope, cart) {
			// Initialize scope param when controller loads
			updateCartDisplay();

			$scope.addItem = function(item) {
				cart.addItem(item);
				updateCartDisplay();
			};

			$scope.removeItem = function(item) {
				cart.removeItem(item);
				updateCartDisplay();
			}

			function updateCartDisplay() {
				$scope.itemCount = cart.getItemCount();
				$scope.cartTotal = cart.getTotal();
			}
		}
	]);