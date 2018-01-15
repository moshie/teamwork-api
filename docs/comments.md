## Comments

### Retreiving Recent Comments

[**GET /{resource}/{resource_id}/comments.json**](https://developer.teamwork.com/comments#retreiving_recent)

```js
resources = [links, milestones, files, notebooks, tasks]

tw.{resource}.getComments(resource_id, options)
```

### Creating a Comment

[**POST /{resource}/{resource_id}/comments.json**](https://developer.teamwork.com/comments#creating_a_commen)

```js
resources = [links, milestones, files, notebooks, tasks]

tw.{resource}.createComment(resource_id, comment_object)
```

### Retrieving a Specific Comment

[**GET /comments/{comment_id}.json**](https://developer.teamwork.com/comments#retrieving_a_spec)

```js
tw.comments.get(comment_id)
```

### Updating a comment

[**PUT /comments/{id}.json**](https://developer.teamwork.com/comments#updating_a_commen)

```js
tw.comments.update(comment_id, {
	"comment": {
		// --
	}
})
```

### Destroying a comment

[**DELETE /comments/{id}.json**](https://developer.teamwork.com/comments#destroying_a_comm)

```js
tw.comments.delete(comment_id)
```

### Mark a comment as read

[**PUT /comments/{id}/markread.json**](https://developer.teamwork.com/comments#mark_a_comment_as)

```js
tw.comments.read(comment_id)
```
