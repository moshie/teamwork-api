## Task lists

[**GET /projects/{project_id}/tasklists.json**](https://developer.teamwork.com/tasklists#get_all_task_list)

```js
tw.projects.getTasklists(project_id, options)
```

[**PUT /projects/{project_id}/tasklists/reorder.json**](https://developer.teamwork.com/tasklists#reorder_lists)

```js
tw.tasklist.reorder(project_id, {
	"todo-lists": [
		// --
	]
})
```

[**POST /projects/{project_id}/tasklists.json**](https://developer.teamwork.com/tasklists#create_list)

```js
tw.tasklist.create(project_id, {
	"todo-list": {
		// --
	}
})
```

[**GET /tasklists/{id}.json**](https://developer.teamwork.com/tasklists#retrieve_single_t)

```js
tw.tasklist.get(tasklist_id)
```

[**PUT /tasklists/{id}.json**](https://developer.teamwork.com/tasklists#update_list)

```js
tw.tasklist.update(tasklist_id, {
	"todo-list": {
		// --
	}
})
```

[**DELETE /tasklists/{id}.json**](https://developer.teamwork.com/tasklists#delete_a_task_lis)

```js
tw.tasklist.delete(tasklist_id)
```

[**PUT /tasklist/{tasklist_id}/copy.json**](https://developer.teamwork.com/tasklists#copy_a_task_list,)

```js
tw.tasklist.copy(tasklist_id, {
	// --
})
```

[**PUT to /tasklist/{tasklist_id}/move.json**](https://developer.teamwork.com/tasklists#move_a_task_list_)

```js
tw.tasklist.move(tasklist_id, {
	// --
})
```

[**GET /tasklists/templates.json**](https://developer.teamwork.com/tasklists#template_task_lis)

```js
tw.tasklist.templates()
```
