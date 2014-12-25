'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Todogular app', function() {
	var newTodoTextBox, todos;
	beforeEach(function() {
		browser.get('app/index.html');
		newTodoTextBox = element(by.model("vm.newTodo"));
		todos = element.all(by.repeater("todo in vm.todos"));

		newTodoTextBox.clear();
	});

	it("should not create new todo item when user hit enter on empty textbox in todo form", function() {
		newTodoTextBox.sendKeys(protractor.Key.ENTER);

		expect(todos.count()).toBe(0);
	});

	it("should add new todo item when user hit enter ", function() {
		newTodoTextBox.sendKeys('abc');
		newTodoTextBox.sendKeys(protractor.Key.ENTER);

		expect(todos.count()).toBe(1);

		newTodoTextBox.sendKeys('def');
		newTodoTextBox.sendKeys(protractor.Key.ENTER);

		expect(todos.count()).toBe(2);
	});

	it("should clear new todo textbox on submiting", function() {
		newTodoTextBox.sendKeys('abc');
		newTodoTextBox.sendKeys(protractor.Key.ENTER);

		expect(newTodoTextBox.getAttribute('value')).toBe('');
	});
});
