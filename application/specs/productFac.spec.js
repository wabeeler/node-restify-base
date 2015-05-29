describe("productFactory Tests", function() {
	beforeEach(function() {
		module('myApp');

		inject(function($injector){
			factory = $injector.get('productFac');
		});
	});

	afterEach(function() {
		factory = null;
	});

	it("should be defined", function () {
		expect(factory).toBeDefined();
	});
});