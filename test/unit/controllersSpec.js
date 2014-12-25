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

	describe("addNewTodo()", function() {
		it("should add newTodo to todo list", function() {
			scope.vm.todos = [];
			scope.vm.newTodo = "new item";

			scope.vm.addNewTodo();

			var item = { title: scope.vm.newTodo , done: false };
			expect(scope.vm.todos).toEqualData([item]);
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
