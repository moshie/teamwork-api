## Task

### Get task or tasks

[**GET /tasks.json | /tasks/${task_id}.json**](https://developer.teamwork.com/projects/tasks/get-all-tasks-across-all-projects)

```js
tw.tasks.get(query_string, task_id)
```

### Create a Task

[**POST /tasklists/{tasklist_id}/tasks.json**](https://developer.teamwork.com/projects/tasks/create-a-task)

```js
tw.tasks.create(tasklist_id, body, query_string)
```

### Update a Task list

[**PUT /tasks/${task_id}.json**](https://developer.teamwork.com/projects/tasks/update-a-task)

```js
tw.tasks.update(task_id, body)
```

### Delete a Task

[**DELETE /tasks/${task_id}.json**](https://developer.teamwork.com/projects/tasks/delete-a-task)

```js
tw.tasks.delete(task_id)
```

### Create a Sub Task

[**POST /tasks/${task_id}.json**](https://developer.teamwork.com/projects/tasks/create-a-sub-task)

```js
tw.tasks.subtask(task_id, body, query_string)
```

### Mark task as complete

[**PUT /tasks/{task_id}/complete.json**](https://developer.teamwork.com/projects/tasks/mark-a-task-complete)

```js
tw.tasks.complete(task_id)
```

### Mark task as incomplete

[**PUT /tasks/{task_id}/uncomplete.json**](https://developer.teamwork.com/projects/tasks/mark-a-task-uncomplete)

```js
tw.tasks.incomplete(task_id)
```

### Get all completed tasks

[**GET /completedtasks.json**](https://developer.teamwork.com/projects/tasks/get-completed-tasks)

```js
tw.tasks.completed(query_string)
```

### Change the completed date on close tasks

[**PUT /tasks/${task_id}.json**](https://developer.teamwork.com/projects/tasks/change-the-completed-date-on-closed-tasks)

```js
tw.tasks.completedDate(task_id, body)
```

### Get task dependencies

[**GET /tasks/${task_id}/dependencies.json**](https://developer.teamwork.com/projects/tasks/retrieve-task-dependencies)

```js
tw.tasks.dependencies(task_id)
```

### Reorder tasks

[**PUT /tasklists/${tasklist_id}/tasks/reorder.json**](https://developer.teamwork.com/projects/tasks/reorder-the-tasks)

```js
tw.tasks.reorder(tasklist_id, body)
```

### Get task followers

[**GET /tasks/${task_id}/followers.json**](https://developer.teamwork.com/projects/tasks/get-task-followers)

```js
tw.tasks.getFollowers(task_id)
```

### Set Followers to a task

[**PUT /tasks/${task_id}.json**](https://developer.teamwork.com/projects/tasks/set-task-followers)

```js
tw.tasks.setFollowers(task_id, body)
```

### Remove all Followers from a task

[**PUT /tasks/${task_id}.json**](https://developer.teamwork.com/projects/tasks/remove-task-followers)

```js
tw.tasks.removeFollowers(task_id, body)
```

### Quickly add tasks to a tasklist

[**PUT /tasklists/${tasklist_id}/quickadd.json**](https://developer.teamwork.com/projects/tasks/quickly-add-multiple-tasks)

```js
tw.tasks.quickadd(tasklist_id, body)
```

### Create a Time-Entry (for a task/todo item)

[**POST /tasks/${task_id}/time_entries.json**](https://developer.teamwork.com/projects/time-tracking/create-a-time-entry-for-a-task)

```js
tw.tasks.createTime(task_id, body)
```

### Get Time Totals from a task

[**GET /tasks/${task_id}/time/total.json**](https://developer.teamwork.com/projects/time-tracking/total-time-on-a-task)

```js
tw.tasks.totalTime(task_id, query_string)
```

### Add a Time estimate to a Task

[**PUT /tasks/{task_id}/estimatedtime.json**](https://developer.teamwork.com/projects/time-tracking/total-time-on-a-task)

```js
tw.tasks.estimatedTime(task_id, body)
```

### Get Time Entries for a Task

[**GET /tasks/${task_id}/time_entries.json**](https://developer.teamwork.com/projects/time-tracking/retrieve-all-task-times)

```js
tw.tasks.getTimeEntries(task_id)
```

### Get Comments for a Task

[**GET /tasks/${task_id}/comments.json**](https://developer.teamwork.com/projects/comments/retrieving-comments-across-all-types)

```js
tw.tasks.getComments(task_id, query_string)
```

### Create a Comment for a Task

[**POST /tasks/${task_id}/comments.json**](https://developer.teamwork.com/projects/comments/creating-a-comment)

```js
tw.tasks.createComment(task_id, body)
```

### Get Files for a Task

[**GET /tasks/${task_id}/files.json**](https://developer.teamwork.com/projects/files/list-files-on-a-task)

```js
tw.tasks.getFiles(task_id)
```

### Create a File for a Task

[**POST /tasks/${task_id}/files.json**](https://developer.teamwork.com/projects/files/add-a-file-to-a-task)

```js
tw.tasks.createFile(task_id, body)
```

### Get Tags from a Task

[**GET /tasks/${task_id}/tags.json**](https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource)

```js
tw.tasks.getTags(task_id, query_string)
```

### Update a Tag on a Task

[**PUT /tasks/${task_id}/tags.json**](https://developer.teamwork.com/projects/tags/update-a-single-tag)

```js
tw.tasks.updateTag(task_id, body)
```

### Get a Task's Audit History

[**GET /tasks/${task_id}/audit.json**](https://developer.teamwork.com/projects/activity/get-a-task-s-audit-history-premium-and-enterprise-plans-only)

```js
tw.tasks.audit(task_id)
```
