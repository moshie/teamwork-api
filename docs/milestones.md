## Milestones

[**GET /milestones.json**](https://developer.teamwork.com/milestones#list_all_mileston)

```js
tw.milestones.get({
	page: 1,
	pageSize: 200
})
```

[**GET /projects/{project_id}/milestones.json**](https://developer.teamwork.com/milestones#list_milestones_o)

```js
tw.projects.getMilestones(project_id, {
	getProgress: true
})
```

[**GET /milestones/{milestone_id}.json**](https://developer.teamwork.com/milestones#get_a_single_mile)

```js
tw.milestones.get({
	getProgress: true
}, milestone_id)
```

[**PUT /milestones/{id}/complete.json**](https://developer.teamwork.com/milestones#complete)

```js
tw.milestone.complete(milestone_id)
```

[**PUT /milestones/{id}/uncomplete.json**](https://developer.teamwork.com/milestones#uncomplete)

```js
tw.milestone.incomplete(milestone_id)
```

[**POST /projects/{project_id}/milestones.json**](https://developer.teamwork.com/milestones#create_a_single_m)

```js
tw.projects.createMilestone({
	"milestone": {
		// --
	}
})
```

[**PUT /milestones/{milestone_id}.json**](https://developer.teamwork.com/milestones#update)

```js
tw.milestone.update(milestone_id, {
	"milestone": {
		// --
	}
})
```

[**DELETE /milestones/{id}.json**](https://developer.teamwork.com/milestones#delete)

```js
tw.milestone.delete(milestone_id)
```
