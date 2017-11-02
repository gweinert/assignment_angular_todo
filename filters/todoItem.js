//hide completed show completed

app.filter('filterCompleted', function() {
	return function(collection, activeFilter) {
		if (!activeFilter) {
			return collection;
		}

		return collection.filter(function(item) {
			return !item.completed;
		});
	}
})