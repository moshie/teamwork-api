## Task reminders

### Get all reminders on a task

[**GET /tasks/:id/reminders.json**](https://developer.teamwork.com/taskreminders#get_all_reminders)

```js
tw.taskReminders.get(task_id)
```

### Create a reminder on a task

[**POST /tasks/:id/reminders.json**](https://developer.teamwork.com/taskreminders#create_a_reminder)

```js
tw.taskReminders.create(task_id, {
	"reminder": {
		// --
	}
})
```

### Update an existing reminder on a task

[**PUT /tasks/:id/reminders/:id.json**](https://developer.teamwork.com/taskreminders#update_an_existin)

```js
tw.taskReminders.update({
	"reminder": {
		// --
	}
}, reminder_id, task_id)
```

### Update an existing reminder on a task

[**DELETE /tasks/:id/reminders/:id.json**](https://developer.teamwork.com/taskreminders#delete_an_existin)

```js
tw.tasks.deleteReminder(reminder_id, task_id)
```
