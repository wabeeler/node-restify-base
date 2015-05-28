/*
 *
 *	Cookie data store for cart data:
 *
 *	[
 *		{
 *			"id",
 			"name",
 *			"quantity",
 *			"price"
 * 		}
 *	]
 */

angular.module('myApp')
	.factory('cartFac', ['$cookies',
		function($cookies){
			var returnObj = {};

			returnObj.addItem = function(item) {
				var cartData = $cookies.myNgCart || [];

				if( typeof cartData === 'string' ) {
					cartData = angular.fromJson(cartData);
				}

				var found = false;
				angular.forEach(cartData, function(value, key){
					if( value.id == item.id ) {
						cartData[key].quantity += 1;
						found = true;
					}

				});

				if( !found ) {
					item.quantity = 1;
					cartData.push(item);
				}

				$cookies.myNgCart = angular.toJson(cartData);
			};

			returnObj.removeItem = function(item) {
				var cartData = $cookies.myNgCart || [];

				if( typeof cartData === 'string' ) {
					cartData = angular.fromJson(cartData);
				}

				angular.forEach(carData, function(value, key) {
					if( value.id == item.id ) {
						if( value.quantity > 1 ) {
							cartData[key].quantity = cartData[key].quantity - 1;
						}
						else {
							cartData.splice(key, 1);
						}
					}
				});

				$cookies.myNgCart = cartData;

			};

			returnObj.getTotal = function() {
				var cartData = $cookies.myNgCart,
					cartTotal = 0;

				if( typeof cartData === 'string' ) {
					cartData = angular.fromJson(cartData);
				}

				angular.forEach(cartData, function(value, key) {
					cartTotal += value.price * value.quantity;
				});

				return cartTotal || 0.00;

			};

			returnObj.getItemCount = function() {
				var cartData = $cookies.myNgCart;

				if( typeof cartData === 'string' ) {
					cartData = angular.fromJson(cartData);

					var cartItems = 0;
					angular.forEach(cartData, function(value, key) {
						cartItems += value.quantity;
					});

					return cartItems;
				}

				return 0;

			}

			return returnObj;
		}
	]);