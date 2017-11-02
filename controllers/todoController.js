app.controller('TodoCtrl',
	['$scope', 'todoService',
	function($scope, todoService) {

		$scope.items = todoService.getAll();
		
		$scope.activeFilter = false;

		$scope.createTodo = todoService.createTodo;

		$scope.deleteItem = todoService.removeTodo;

		$scope.clearCompleted = todoService.clearCompleted;

		$scope.toggleFilter = function() {
			$scope.activeFilter = !$scope.activeFilter;
		}
	}]
);
