## Milestones

[**GET /milestones.json**](https://developer.teamwork.com/milestones#list_all_mileston)

```
tw.milestones.get({
	page: 1,
	pageSize: 200
})
```

[**GET /projects/{project_id}/milestones.json**](https://developer.teamwork.com/milestones#list_milestones_o)

```
tw.projects.getMilestones(project_id, {
	getProgress: true
})
```

[**GET /milestones/{milestone_id}.json**](https://developer.teamwork.com/milestones#get_a_single_mile)

```
tw.milestones.get({
	getProgress: true
}, milestone_id)
```

[**PUT /milestones/{id}/complete.json**](https://developer.teamwork.com/milestones#complete)

```
tw.milestone.complete(milestone_id)
```

[**PUT /milestones/{id}/uncomplete.json**](https://developer.teamwork.com/milestones#uncomplete)

```
tw.milestone.incomplete(milestone_id)
```

[**POST /projects/{project_id}/milestones.json**](https://developer.teamwork.com/milestones#create_a_single_m)

```
tw.projects.createMilestone({
	"milestone": {
		// --
	}
})
```

[**PUT /milestones/{milestone_id}.json**](https://developer.teamwork.com/milestones#update)

```
tw.milestone.update(milestone_id, {
	"milestone": {
		// --
	}
})
```

[**DELETE /milestones/{id}.json**](https://developer.teamwork.com/milestones#delete)

```
tw.milestone.delete(milestone_id)
```