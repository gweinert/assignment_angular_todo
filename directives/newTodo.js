app.directive('newTodo', ['$window', function($window) {
	return {
		restrict: 'E',
		
		scope: {
			onCreate: '&',
		},
		
		link: function(scope, $element) {

			scope.formData = {
				text: '',
				date: null,
			};

			scope.create = function() {
				scope.onCreate({ item: scope.formData });
				scope.formData.text = '';
				scope.formData.date = null;
			};
		},
		
		templateUrl: './directives/newTodoForm.html',
	}
}]);