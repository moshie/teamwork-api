## Task-reminder

### Get all reminders on a task

[**GET /tasks/{task_id}/reminders.json**](https://developer.teamwork.com/projects/task-reminders/get-all-reminders-on-a-task)

```js
tw.taskReminders.get(task_id)
```

### Create Reminder for a task

[**POST /tasks/{task_id}/reminders.json**](https://developer.teamwork.com/projects/task-reminders/create-a-reminder-on-a-task)

```js
tw.taskReminders.create(task_id, body)
```

### Update a Reminder for a task

[**PUT /taskreminders/{reminder_id}.json**](https://developer.teamwork.com/projects/task-reminders/update-an-existing-reminder-on-a-task)

```js
tw.taskReminders.update(body, reminder_id, task_id)
```

### Delete a Reminder on a task

[**DELETE /taskreminders/{reminder_id}.json**](https://developer.teamwork.com/projects/task-reminders/delete-an-existing-reminder-on-a-task)

```js
tw.taskReminders.delete(reminder_id)
```
