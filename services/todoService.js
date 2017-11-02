app.factory('todoService', function() {
	var obj = {};

	var _todos = [
		{
			text: 'Get groceries from the store.',
			dueDate: new Date(),
			completed: false,
		},
		{
			text: 'Relearn angular.',
			dueDate: new Date(),
			completed: false,
		},
		{
			text: 'Go Skateboarding',
			dueDate: new Date(),
			completed: false,
		}
	];

	obj.getAll = function() {
		return _todos;
	}

	obj.createTodo = function(formData) {
		var newItem = {
			text: formData.text,
			dueDate: formData.date,
			completed: false,
		};
	
		_todos.push(newItem);
	}

	obj.removeTodo = function(index) {
		_todos.splice(index, 1);
	}

	obj.clearCompleted = function() {
		var updatedTodos = _todos.filter(function(item) {
			return !item.completed;
		});
		angular.copy(updatedTodos, _todos);
	}

	return obj;

});