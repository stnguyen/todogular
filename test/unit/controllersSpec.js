describe("TodoCtrl", function() {
	var scope;

	beforeEach(function() {
		this.addMatchers({
			toEqualData: function(expected) {
				return angular.equals(this.actual, expected);
			}
		});
	});

	beforeEach(module("app"));

	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope.$new();
		$controller("TodoCtrl as vm", { $scope: scope });
	}));

	it("should create todos model with zero item", function() {
		expect(scope.vm.todos.length).toBe(0);
	});

	describe("add(item)", function() {
		it("should add the item to todo list", function() {
			scope.vm.todos = [];

			var item = { title: "new item", done: false };
			scope.vm.add(item);
			expect(scope.vm.todos).toEqualData([item]);
		});
	});

	describe("updateStatus(id, done)", function() {
		it("should mark the item with given id as done", function() {
			scope.vm.todos = [{ title: "a", done: false}, { title: "b", done: false}];

			scope.vm.updateStatus(1, true);

			expect(scope.vm.todos[0].done).toBe(false);
			expect(scope.vm.todos[1].done).toBe(true);

			scope.vm.updateStatus(1, false);
			expect(scope.vm.todos[0].done).toBe(false);
			expect(scope.vm.todos[1].done).toBe(false);
		});
	});

	describe("clearDoneItems()", function() {
		it("should delete items marked as done", function() {
			scope.vm.todos = [{ title: "a", done: true}, { title: "b", done: false}, { title: "c", done: true}];

			scope.vm.clearDoneItems();

			expect(scope.vm.todos).toEqualData([{ title: "b", done: false}]);
		});
	});
});
