## Activity

### Latest Activity across all projects

[**GET /latestActivity.json**](https://developer.teamwork.com/activity#latest_activity_a)                   

```
tw.activity.latest({
	maxItems: 60,
	onlyStarred: false
})
```

### List Latest Activity (for a project)

[**GET /projects/{project_id}/latestActivity.json**](https://developer.teamwork.com/activity#list_latest_activ)

```
tw.project.getActivity(project_id, {
	maxItems: 60
})
```

### Delete an activity entry

[**DELETE /activity/{id}.json**](https://developer.teamwork.com/activity#delete_an_activit)

```
tw.activity.delete(activity_id)
```