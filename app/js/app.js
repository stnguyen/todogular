var app = angular.module("app", []);

app.controller("TodoCtrl", [function() {
	var vm = this;

	vm.todos = [];

	vm.add = function(item) {
		vm.todos.push(item);
	};

	vm.updateStatus = function(id, done) {
		vm.todos[id].done = done;
	}

	vm.clearDoneItems = function() {
		vm.todos = vm.todos.filter(function(item) {
			return !item.done
		});
	}
}]);