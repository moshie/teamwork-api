## Milestone

### Get Milestones or Milestone

[**GET /milestones.json | /milestones/{milestone_id}.json**](https://developer.teamwork.com/projects/milestones/list-all-milestones)

```js
tw.milestones.get(query_string, milestone_id)
```

### Mark a Milestone as complete

[**PUT /milestones/{milestone_id}/complete.json**](https://developer.teamwork.com/projects/milestones/complete-a-milestone)

```js
tw.milestones.complete(milestone_id)
```

### Mark a Milestone as Incomplete

[**PUT /milestones/{milestone_id}/uncomplete.json**](https://developer.teamwork.com/projects/milestones/un-complete-a-milestone)

```js
tw.milestones.incomplete(milestone_id)
```

### Update a Milestone

[**PUT /milestones/{milestone_id}.json**](https://developer.teamwork.com/projects/milestones/update-a-single-milestone)

```js
tw.milestones.update(milestone_id, body)
```

### Delete a Milestone

[**DELETE /milestones/{milestone_id}.json**](https://developer.teamwork.com/projects/milestones/delete-a-milestone)

```js
tw.milestones.delete(milestone_id)
```

### Get Comments for a Milestone

[**GET /milestones/{milestone_id}/comments.json**](https://developer.teamwork.com/projects/comments/retrieving-comments-across-all-types)

```js
tw.milestones.getComments(milestone_id, query_string)
```

### Create a Comment for a Milestone

[**POST /milestones/{milestone_id}/comments.json**](https://developer.teamwork.com/projects/comments/creating-a-comment)

```js
tw.milestones.createComment(milestone_id, body)
```

### Get Tags from a Milestone

[**GET /milestones/{milestone_id}/tags.json**](https://developer.teamwork.com/projects/tags/list-all-tags-for-a-resource)

```js
tw.milestones.getTags(milestone_id, query_string)
```

### Update a Tag on a Milestone

[**PUT /milestones/{milestone_id}/tags.json**](https://developer.teamwork.com/projects/tags/update-tags-on-a-resource)

```js
tw.milestones.updateTag(milestone_id, body)
```
