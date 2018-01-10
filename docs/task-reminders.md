## Task reminders

[**GET /tasks/:id/reminders.json**](https://developer.teamwork.com/taskreminders#get_all_reminders)

```
tw.taskReminder.get(task_id)
```

[**POST /tasks/:id/reminders.json**](https://developer.teamwork.com/taskreminders#create_a_reminder)

```
tw.taskReminder.create(task_id, {
	"reminder": {
		// --
	}
})
```

[**PUT /tasks/:id/reminders/:id.json**](https://developer.teamwork.com/taskreminders#update_an_existin)

```
tw.taskReminders.update({
	"reminder": {
		// --
	}
}, reminder_id, task_id)
```

[**DELETE /tasks/:id/reminders/:id.json**](https://developer.teamwork.com/taskreminders#delete_an_existin)

```
tw.tasks.deleteReminder(reminder_id, task_id)
```
