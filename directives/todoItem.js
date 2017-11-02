app.directive('todoItem', function() {
	return {
		restrict: 'E',
		scope: {
			item: '=',
			index: '=',
			onDelete: '&',
		},
		link: function(scope, $element) {
			console.log('todoItem', scope);
			
			scope.deleteItem = function(index) {
				console.log('deleteItem dir', index);
				scope.onDelete({ index: index });
			}
		},
		templateUrl: './directives/todoItem.html',
	}
});
