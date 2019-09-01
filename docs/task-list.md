## Task-list

### Get a Task list

[**GET /tasklists.json | /tasklists/${tasklist_id}.json**](https://developer.teamwork.com/projects/task-lists/get-all-task-lists)

```js
tw.tasklists.get(query_string, tasklist_id)
```

### Create a Task list

[**POST /projects/{project_id}/tasklists.json**](https://developer.teamwork.com/projects/task-lists/create-task-list)

```js
tw.tasklists.create(project_id, body)
```

### Update a Task list

[**PUT /tasklists/{tasklist_id}.json**](https://developer.teamwork.com/projects/task-lists/update-task-list)

```js
tw.tasklists.update(tasklist_id, body)
```

### Delete a Task list

[**DELETE /tasklists/{tasklist_id}.json**](https://developer.teamwork.com/projects/task-lists/delete-a-task-list)

```js
tw.tasklists.delete(tasklist_id)
```

### Copy Task List

[**PUT /tasklists/{tasklist_id}/copy.json**](https://developer.teamwork.com/projects/task-lists/copy-a-task-list-or-copy-a-task-list-to-another-project)

```js
tw.tasklists.copy(tasklist_id, body)
```

### Move Task List

[**PUT /tasklists/{tasklist_id}/move.json**](https://developer.teamwork.com/projects/task-lists/move-a-task-list-to-another-project)

```js
tw.tasklists.move(tasklist_id, body)
```

### Reorder lists

[**PUT /projects/{project_id}/tasklists/reorder.json**](https://developer.teamwork.com/projects/task-lists/reorder-lists)

```js
tw.tasklists.reorder(project_id, body)
```

### Get tasklist templates

[**GET /tasklists/templates.json**](https://developer.teamwork.com/projects/task-lists/template-task-lists-get-all-template-task-lists)

```js
tw.tasklists.templates()
```

### Get Tasks from a task list

[**GET /tasklists/${tasklist_id}/tasks.json**](https://developer.teamwork.com/projects/tasks/get-all-tasks-on-a-given-task-list)

```js
tw.tasklists.getTasks(tasklist_id, query_string)
```

### Get Time Totals from a task list

[**GET /tasklists/${tasklist_id}/time/total.json**](https://developer.teamwork.com/projects/tasks/get-all-tasks-on-a-given-task-list)

```js
tw.tasklists.totalTime(tasklist_id, query_string)
```

### Get Tags from a Task List

[**GET /tasklists/{tasklist_id}/tags.json**](https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource)

```js
tw.tasklists.getTags(tasklist_id, query_string)
```

### Update a Tag on a Task List

[**PUT /tasklists/{tasklist_id}/tags.json**](https://developer.teamwork.com/projects/tags/update-tags-on-a-resource)

```js
tw.tasklists.updateTag(tasklist_id, body)
```
