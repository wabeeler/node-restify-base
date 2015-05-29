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
				var cartData = getCartData();

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
				var cartData = getCartData();

				angular.forEach(cartData, function(value, key) {
					if( value.id == item.id ) {
						if( value.quantity > 1 ) {
							cartData[key].quantity = cartData[key].quantity - 1;
						}
						else {
							cartData.splice(key, 1);
						}
					}
				});

				$cookies.myNgCart = angular.toJson(cartData);

			};

			returnObj.getTotal = function() {
				var cartData = getCartData(),
					cartTotal = 0;

				angular.forEach(cartData, function(value, key) {
					cartTotal += value.price * value.quantity;
				});

				return cartTotal || 0.00;

			};

			returnObj.getItemCount = function() {
				var cartData = getCartData();

				var cartItems = 0;
				angular.forEach(cartData, function(value, key) {
					cartItems += value.quantity;
				});

				return cartItems;
			};

			returnObj.getItems = function() {
				return getCartData();
			};

			function getCartData() {
				var cartData = $cookies.myNgCart || [];

				if( typeof cartData === 'string' ) {
					cartData = angular.fromJson(cartData);
				}

				return cartData;
			}

			return returnObj;
		}
	]);