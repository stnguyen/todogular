var app = angular.module("app", []);

app.controller("TodoCtrl", [function() {
	var vm = this;

	vm.newTodo = "";
	vm.todos = [];

	vm.addNewTodo = function() {
		vm.todos.push({ title: vm.newTodo, done: false });
		vm.newTodo = "";
	};

	vm.clearDoneItems = function() {
		vm.todos = vm.todos.filter(function(item) {
			return !item.done
		});
	}
}]);