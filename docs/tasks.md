## Tasks

[**GET /tasks.json**](https://developer.teamwork.com/todolistitems#retrieve_all_task)

```
tw.tasks.get({
	filter: 'anytime',
	page: 1,
	pageSize: 250,
	startdate: '',
	enddate: '',
	updatedAfterDate: '',
	completedAfterDate: '',
	completedBeforeDate: '',
	showDeleted: 'no',
	includeCompletedTasks: false,
	includeCompletedSubtasks: false,
	'creator-ids': 0,
	include: '',
	'responsible-party-ids': '',
	sort: 'duedate',
	getSubTasks: 'yes',
	nestSubTasks: 'no',
	getFiles: false,
	includeToday: true,
	'ignore-start-dates': false,
	'tag-ids': ''
}, task_id)
```

[**GET /tasks/{id}.json**](https://developer.teamwork.com/todolistitems#retrieve_a_task)

```
tw.tasks.get({}, task_id)
```

[**PUT /tasks/{id}.json**](https://developer.teamwork.com/todolistitems#edit_a_task)

```
tw.tasks.update(task_id, {
	"todo-item": {
		// --
	}
})
```

[**DELETE /tasks/{id}.json**](https://developer.teamwork.com/todolistitems#destroy_a_task)

```
tw.tasks.delete(task_id)
```

[**POST /tasklists/{id}/tasks.json**](https://developer.teamwork.com/todolistitems#add_a_task)

```
tw.tasks.create(tasklist_id, {
	"todo-item": {
		// --
	}
}, options)
```

[**POST /tasks/{id}.json**](https://developer.teamwork.com/todolistitems#add_a_task)

```
tw.tasks.subtask(task_id, {
	"todo-item": {
		// --
	}
}, options)
```

[**PUT /tasks/{id}/complete.json**](https://developer.teamwork.com/todolistitems#mark_a_task_compl)

```
tw.tasks.complete(task_id)
```

[**PUT /tasks/{id}/uncomplete.json**](https://developer.teamwork.com/todolistitems#mark_a_task_uncom)

```
tw.tasks.incomplete(task_id)
```

[**GET /tasks/{id}/dependencies.json**](https://developer.teamwork.com/todolistitems#retrieve_task_dep)

```
tw.tasks.dependencies(task_id)
```

[**PUT /tasklists/{id}/tasks/reorder.json**](https://developer.teamwork.com/todolistitems#reorder_the_tasks)

```
tw.tasks.reorder(tasklist_id, {
	"todo-items": [
		// --
	]
})
```

[**GET /completedtasks.json**](https://developer.teamwork.com/todolistitems#completed_tasks)

```
tw.tasks.completed({
	page: 1,
	pageSize: 250,
	startdate: '',
	enddate: '',
	includeArchivedProjects: false
})
```

[**PUT /tasks/{task_id}.json**](https://developer.teamwork.com/todolistitems#edit_a_task)

```
tw.tasks.completedDate(task_id, {
	"todo-item": {
		// --
	}
})
```

[**GET /tasks/{task_id}/followers.json**](https://developer.teamwork.com/todolistitems#get_task_follower)

```
tw.tasks.getFollowers(task_id)
```

[**PUT /tasks/{task_id}.json**](https://developer.teamwork.com/todolistitems#set_task_follower)

```
tw.tasks.setFollowers(task_id, {
	"todo-item": {
		// --
	}
})
```

[**PUT /tasks/{task_id}.json**](https://developer.teamwork.com/todolistitems#remove_task_follo)

```
tw.tasks.removeFollowers(task_id, {
	"todo-item": {
		// --
	}
})
```

[**POST /tasklists/{task_list_id}/quickadd.json**](https://developer.teamwork.com/todolistitems#quickly_add_multi)

```
tw.tasks.quickadd(task_list_id, {
	// --
})
```

[**GET /projects/{id}/tasks.json**](https://developer.teamwork.com/todolistitems#retrieve_all_task)

```
tw.projects.getTasks(project_id, options)
```

[**GET /tasklists/{id}/tasks.json**](https://developer.teamwork.com/todolistitems#retrieve_all_task)

```
tw.tasklist.getTasks(tasklist_id, options)
```
