## Task lists

[**GET /projects/{project_id}/tasklists.json**](https://developer.teamwork.com/tasklists#get_all_task_list)

```
tw.projects.getTasklists(project_id, {

})
```

[**PUT /projects/{project_id}/tasklists/reorder.json**](https://developer.teamwork.com/tasklists#reorder_lists)

```
tw.tasklist.reorder(project_id, {
	"todo-lists": [
		// --
	]
})
```

[**POST /projects/{project_id}/tasklists.json**](https://developer.teamwork.com/tasklists#create_list)

```
tw.tasklist.create(project_id, {
	"todo-list": {
		// --
	}
})
```

[**GET /tasklists/{id}.json**](https://developer.teamwork.com/tasklists#retrieve_single_t)

```
tw.tasklist.get(tasklist_id)
```

[**PUT /tasklists/{id}.json**](https://developer.teamwork.com/tasklists#update_list)

```
tw.tasklist.update(tasklist_id, {
	"todo-list": {
		// --
	}
})
```

[**DELETE /tasklists/{id}.json**](https://developer.teamwork.com/tasklists#delete_a_task_lis)

```
tw.tasklist.delete(tasklist_id)
```

[**PUT /tasklist/{tasklist_id}/copy.json**](https://developer.teamwork.com/tasklists#copy_a_task_list,)

```
tw.tasklist.copy(tasklist_id, {
	// --
})
```

[**PUT to /tasklist/{tasklist_id}/move.json**](https://developer.teamwork.com/tasklists#move_a_task_list_)

```
tw.tasklist.move(tasklist_id, {
	// --
})
```

[**GET /tasklists/templates.json**](https://developer.teamwork.com/tasklists#template_task_lis)

```
tw.tasklist.templates()
```
