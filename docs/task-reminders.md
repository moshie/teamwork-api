## Task reminders

[**GET /tasks/:id/reminders.json**](https://developer.teamwork.com/taskreminders#get_all_reminders)

```js
tw.taskReminder.get(task_id)
```

[**POST /tasks/:id/reminders.json**](https://developer.teamwork.com/taskreminders#create_a_reminder)

```js
tw.taskReminder.create(task_id, {
	"reminder": {
		// --
	}
})
```

[**PUT /tasks/:id/reminders/:id.json**](https://developer.teamwork.com/taskreminders#update_an_existin)

```js
tw.taskReminders.update({
	"reminder": {
		// --
	}
}, reminder_id, task_id)
```

[**DELETE /tasks/:id/reminders/:id.json**](https://developer.teamwork.com/taskreminders#delete_an_existin)

```js
tw.tasks.deleteReminder(reminder_id, task_id)
```
